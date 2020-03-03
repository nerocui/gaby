import React, { useState } from 'react';
import { Record, State } from '../../models';
import { connect } from 'react-redux';
import Dropzone from './Dropzone';
import xlsx, { WorkSheet, WorkBook } from "xlsx";
import { ParseRaw } from '../../utils/ParserUtil';

const RecordList = (props: any) => {

    const [completed, setCompleted] = useState(false);

    const loadData = (e: any) => {
        const rawData = e.target.result;
        const parsedData: WorkBook = xlsx.read(rawData, { type: "binary" });
        // If we have data from the imported excel sheet
        if (parsedData.SheetNames && parsedData.SheetNames.length > 0) {
            let parsedRecords: Array<Record> = [];
            // if we have sheets then go through each sheet..
            parsedData.SheetNames.forEach((sheetName: string) => {
                const sheet: WorkSheet = parsedData.Sheets[sheetName];
                parsedRecords.push(...ParseRaw(sheet, props.roles));
            });
        }
        setCompleted(true);
        // this.props.importRecords(records);
        // this.props.history.push("/preview");
    };

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
            <div>
                <Dropzone
                    wrapperStyle="component--admin__import"
                    inActiveText="Click or drop file(s) here to import..."
                    activeText="Drop here to start the import..."
                    handleChange={handleChange}
                />
            </div>
        </div>
    );
};

function MapStateToProps(State: State) {
    return {
        items: State.RecordState.items,
        roles: State.RecordState.roles,
    };
}

export default connect(MapStateToProps)(RecordList);
