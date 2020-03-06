import { Person, Role, Record, Note } from "../models/index.js";
import { WorkSheet } from "xlsx";

const getRoleId = (roles: Array<Role>, value: string): number => {
  let roleToReturn = 1;
  roles.map((role: Role) => {
    if (role.name.toLowerCase() === value)
      roleToReturn = role.id;
  });
  return roleToReturn;
}

export const ParseRaw = (sheet: WorkSheet, roles: Array<Role>): Array<Record> => {
  const column = 23;
  let i = 0;
  let records: Array<Record> = [];
  let record: any = {};
  record.id = 0;
  for (let key in sheet) {
    if (key === '!ref')
      continue;
    if (key === '!margins')
      break;
    if (i < column) {
      i++;
      continue;
    }
    const value = sheet[key];
    console.log(sheet[key]);
    let noValue = false;
    let familyName = '';
    try {
      if (value.v.trim() === 'N/A' || value.v.trim() === '')
        noValue = true;
    } catch (e) {
      if (value.w.trim() === 'N/A' || value.w.trim() === '')
        noValue = true;
    }
    switch (i % column) {
      case 0://file number
        record.fileNumber = value.v;
        break;
      case 1://date of application //date need to display as UTC
        if (noValue) {
          record.dateOfApplication = null;
        } else {
          record.dateOfApplication = new Date(Date.parse(value.w));
        }
        break;
      case 2://date helped
        if (noValue) {
          record.dateOfVisit = null;
        } else {
          record.dateOfVisit = new Date(Date.parse(value.w));
        }
        break;
      case 3://child
        const fullName = value.v.split(' ');
        let firstName = '',
            lastName = '';
        if (fullName.length > 0) {
          firstName = fullName[0];
          if (fullName.length > 1) {
            lastName = fullName[1];
            familyName = lastName;
          }
        }
        const displayName = (firstName + ' ' + lastName).trim();
        const child: Person = {
          id: 0,
          firstName,
          lastName,
          displayName,
          role: null,
          roleId: getRoleId(roles, 'child'),
        };
        if (!record.people) {
          record.people = [];
        }
        record.people.push(child);
        break;
      case 4://date of birthday
        if (noValue) {
          record.dateOfBirth = null;
        } else {
          record.dateOfBirth = new Date(Date.parse(value.w));
        }
        break;
      case 5://parents
        const parents: Array<string> = value.v.split(' and ');
        const parentsList: Array<Person> = [];
        let parentFirstName1 = '',
            parentFirstName2 = '';

        if (parents.length > 0) {
          const parentAName: Array<string> = parents[0].split(' ');
          if (parentAName.length > 1) {
            familyName = parentAName[parentAName.length - 1];
          }
          parentFirstName1 = parentAName[0];
          if (parents.length > 1) {
            const parentBName: Array<string> = parents[1].split(' ');
            if (parentBName.length > 1) {
              familyName = parentBName[parentBName.length - 1];
            }
            parentFirstName2 = parentBName[0];
          }
        }
        if (!record.people) {
          record.people = [];
        }
        if (parentFirstName1 !== '') {
          const parent1: Person = {
            id: 0,
            firstName: parentFirstName1,
            lastName: familyName,
            displayName: (parentFirstName1 + ' ' + familyName).trim(),
            role: null,
            roleId: getRoleId(roles, 'parent'),
          };
          record.people.push(parent1);
        }
        if (parentFirstName2 !== '') {
          const parent2: Person = {
            id: 0,
            firstName: parentFirstName2,
            lastName: familyName,
            displayName: (parentFirstName2 + ' ' + familyName).trim(),
            role: null,
            roleId: getRoleId(roles, 'parent'),
          };
          record.people.push(parent2);
        }
        break;
      case 6://cancen type
        record.cancerType = value.v;
        break;
      case 7://diagnosis date
        if (noValue) {
          record.diagnosisDate = null;
        } else {
          record.diagnosisDate = new Date(Date.parse(value.w));
        }
        break;
      case 8://length of treatment
        if (noValue) {
          record.lengthOfTreatment = null;
        } else {
          let scalar = 1;
          const lengthOfTreatment: string = value.v;
          if (lengthOfTreatment.includes('month'))
            scalar = 30;
          if (lengthOfTreatment.includes('week'))
            scalar = 7;
          if (lengthOfTreatment.includes('year'))
            scalar = 365;
          const numberInLOT: number = parseInt(lengthOfTreatment.split(' ')[0]);
          record.lengthOfTreatment = numberInLOT * scalar;
        }
        break;
      case 9://treatment notes
        if (!record.notes) {
          record.notes = [];
        }
        const treatmentNotes: Note = {
          id: 0,
          title: 'Treatment Notes',
          content: value.v
        };
        record.notes.push(treatmentNotes);
        break;
      case 10://heaven date
        record.heavenDate = noValue?null:new Date(Date.parse(value.w));
        break;
      case 11://relapse
        record.relapse = value.v.toLowerCase().trim() === 'y';
        break;
      case 12://date of relapse
        record.dateOfRelapse = noValue?null:new Date(Date.parse(value.w));
        break;
      case 13://street address
        record.streetAddress = value.v;
        break;
      case 14://city
        record.city = value.v;
        break;
      case 15://postal code
        record.postalCode = value.v;
        break;
      case 16://phone number
        record.phoneNumber = value.v.replace(/\D/g,'');
        break;
      case 17://cell phone number
        record.cellPhone = value.v.replace(/\D/g,'');
        break;
      case 18://email
        record.email = value.v;
        break;
      case 19://sibling
        const siblings: Array<Person> = value.v.split(',').map((sibling: string) => {
          const siblingString = sibling.trim();
          const siblingFirstName = siblingString.split(' ')[0];
          const siblingObj: Person = {
            id: 0,
            firstName: siblingFirstName,
            lastName: record.people[0].lastName,
            displayName: (siblingFirstName + ' ' + record.people[0].lastName).trim(),
            role: null,
            roleId: getRoleId(roles, 'sibling'),
          };
          return siblingObj;
        });
        if (!record.people)
          record.people = [];
        record.people.push(...siblings);
        if (value.v.includes('age')) {
          if (!record.notes)
            record.notes = [];
          const ageNote: Note = {
            id: 0,
            title: 'Sibling info',
            content: value.v,
          };
          record.notes.push(ageNote);
        }
        break;
      case 20://location of visit
        record.locationOfVisit = value.v;
        break;
      case 21://social worker
        record.socialWorker = value.v;
        break;
      case 22://other notes
        const otherNotes: Note = {
          id: 0,
          title: 'Other Notes',
          content: value.v,
        };
        if (!record.notes)
          record.notes = [];
        record.notes.push(otherNotes);
        records.push(record);
        record = {};
        record.id = 0;
        break;
      default:
        break;
    }
    i++;
  }
  return records;
}
