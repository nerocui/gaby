import UniqueId from "uniqid";
import changeCase from "change-case";
import settings from '../data/settings.json';
import { Person, Role } from "../models/index.js";

function parseRole(role: string): Role {
    let description: string = '';
    switch (role.toLowerCase()) {
        case 'child':
            description = 'A child of the family.';
            break;
        case 'parent':
            description = 'Parent of the family.';
        case 'sibling':
            description = 'Subling of the main child.';
        default:
            break;
    }
    return {
        id: 0,
        name: role,
        description,
    };
}

function parseName(name: string, role: string): Person {
  const [firstName, lastName] = name.split(" ");
  return {
      id: 0,
      firstName,
      lastName,
      role: parseRole(role),
      displayName: firstName + ' ' + lastName
    };
}

export function parseChild(name: string) {
  return parseName(name, "child");
}

export function parseParents(name: string) {
  const parents = name.split(" and ");
  let parentObjects: Array<any> = [];
  parents.forEach(parent => {
    if (!parent) {
      return;
    }
    if (/(?<=[a-z]) (?=[a-z])/i.test(parent)) {
      parentObjects.push(parseName(parent, "parent"));
      return;
    }
    parentObjects.push({
      first_name: parent,
      last_name: null,
      role: "parent",
      _id: UniqueId()
    });
  });
  return parentObjects;
}

function parseSibling(value: string) {
  const [name, age] = value.split("age");
  //console.log(name);
  return parseName(name.trim(), "sibling");
}

export function parseSiblings(name: string) {
  const siblings = name.split(",");
  //console.log(siblings);
  return siblings.map(element => parseSibling(element));
}

// assumes that the user enters in a number in the first value of the string and a unit of length
export function parseLengthOfTreatment(stringValue: string) {
  const number = parseInt(stringValue);
  if (Number.isInteger(number) && number > 0) {
    stringValue = stringValue.toLowerCase();
    if (stringValue.includes("years")) {
      return number * 365;
    } else if (stringValue.includes("months")) {
      return number * 30;
    } else {
      return 0;
    }
  }
  return 0;
}

function getRecommendations(header: string) {
  const relatedWords = header.split(" ");
  const headerValues = settings.RECORD_TEMPLATE;
  let recommendations: Array<any> = [];
  relatedWords.forEach(word => {
    const re = new RegExp(word, "i");
    const result = headerValues.filter(value => {
      return value.display_name.match(re);
    });
    recommendations = recommendations.concat(result);
  });

  return recommendations;
}

/**
 *
 * @param {string} header
 * @returns {id: string, value(parsed value): string, valid: boolean, recommended: string[]} ParsedHeader
 */
function parseHeader(header: string) {
  //set an uniqid so we can find the cells using the old header in case of updating header.
  //read into the settings column.
  //if no match, try to break header into
  //array of words and find the column that
  //include all the words.toLower().
  //if still no match,
  //return the header converted to snake case, then set valid to false
  //then find the column that include the most of the words,
  //ranked from most likely to least.
  const id = UniqueId();
  const headerValues = settings.RECORD_TEMPLATE;
  const re = new RegExp(header, "i");
  const filteredHeaders = headerValues.filter(headerValue => {
    if (headerValue.display_name === "Birthday" && header === "Birthday") {
      console.log(headerValue, header);
    }

    return headerValue.display_name.match(re);
  });
  let valid = null;
  let parsedHeader = null;
  let recommended = [];
  // console.log(filteredHeaders);
  const snakedCaseHeader = changeCase.snakeCase(header);
  if (filteredHeaders.length === 0) {
    valid = false;
    parsedHeader = snakedCaseHeader;
    recommended = getRecommendations(header);
  } else {
    valid = true;
    parsedHeader = filteredHeaders[0].display_name;
  }

  // console.log({ id, value: parsedHeader, valid, recommended });
  return {
    id,
    value: parsedHeader,
    valid,
    recommended,
    updatedValue: snakedCaseHeader
  };
}

/**
 *
 * @param {string} value
 * @param {ParsedHeader} parsedHeader
 * @returns {value: string, valid: boolean, parser: function}
 */
function parseCell(value: string, parsedHeader: any) {
  const valid = value ? true : false;

  return {
    id: parsedHeader.id,
    value,
    valid,
    parsedHeader,
    parser: null
  };
}

//@return record[]
/*record: {
  [header_id]: string,
  valid: boolean,
  parsedHeader: ParsedHeader,
  originalValue: string,
  parser: function,
}
*/
/**
 *
 * @param {CSV} csv
 * @returns {Records} [...{ id: string, value: string, valid: boolean, parsedHeader: ParsedHeader, originalValue: string, parser: function,}]
 */
export const parseSheet = (json: any) => {
  console.log(json);
  const headers = Object.keys(json[0]);
  const parsedHeaders = headers.map(header => parseHeader(header));
  const res: Array<any> = [];

  json.forEach((row: any) => {
    parsedHeaders.forEach(header => {
      const cellObj = parseCell(row[header.value], header);
      const record = {
        ...cellObj,
        valid: cellObj.valid && header.valid,
        originalValue: row[header.value]
      };

      res.push(record);
    });
  });
  console.log(res);
  return res;
};
