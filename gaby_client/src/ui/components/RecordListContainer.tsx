import React, { useState } from 'react';
import { Record, State } from '../../models';
import { connect } from 'react-redux';
import Dropzone from './Dropzone';
import xlsx, { WorkSheet, WorkBook } from "xlsx";
import { ParseRaw } from '../../utils/ParserUtil';
import { SetRecords, PostRecords } from '../../action';
import RecordList from './RecordList';

const RecordListContainer = (props: any) => {

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
            props.SetRecords(parsedRecords);
            props.PostRecords(parsedRecords);
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
    };
    return (
        <div>
            <RecordList />
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
        roles: State.RecordState.roles,
    };
}

export default connect(MapStateToProps, { SetRecords, PostRecords })(RecordListContainer);
