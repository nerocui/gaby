import React from 'react';
import { Record, State } from '../../models';
import { connect } from 'react-redux';
import Dropzone from './Dropzone';
import xlsx from "xlsx";
import { parseSheet } from '../../utils/ParserUtil';

const RecordList = (props: any) => {
    const loadData = (e: any) => {
        const rawData = e.target.result;
        const parsedData = xlsx.read(rawData, { type: "binary" });
        // If we have data from the imported excel sheet
        if (parsedData.SheetNames && parsedData.SheetNames.length > 0) {
          let records = [];
          // if we have sheets then go through each sheet..
          parsedData.SheetNames.forEach((sheetName: string) => {
            const sheet = parsedData.Sheets[sheetName];
            records = parseSheet(xlsx.utils.sheet_to_json(sheet));
          });
        }
        // this.setState({
        //   completed: true
        // });
        // this.props.importRecords(records);
        // this.props.history.push("/preview");
      }
    const handleChange = (files: any) => {
        files.forEach((file: any) => {
          try {
            // Create A File Reader HTML5
            const reader = new FileReader();
            reader.onload = loadData;
            reader.readAsBinaryString(file);
          } catch (e) {
            console.log(e);
          }
        });
      }
    if (props.items.length === 0) {
        return (
            <div>
                <Dropzone
                    wrapperStyle="component--admin__import"
                    inActiveText="Click or drop file(s) here to import..."
                    activeText="Drop here to start the import..."
                    handleChange={handleChange}
                />
            </div>
        )
    }
    return (
        <div>
            {props.items.map((item: Record) => {
                return (
                    <div key={item.id}>
                        {item.fileNumber}
                    </div>
                )
            })}
        </div>
    );
};

function MapStateToProps(State: State) {
    return {
        items: State.RecordState.items,
    };
}

export default connect(MapStateToProps)(RecordList);
