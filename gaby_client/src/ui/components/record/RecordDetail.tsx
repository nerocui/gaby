import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../models';


const RecordDetail = (props: any) => {
    if (props.loading) {
        return (
            <div>
                loading...
            </div>
        );
    }
    return (
        <div>
            {props.record.id}
        </div>
    );
};

function MapStateToProps(state: State) {
    return {
        record: state.RecordState.selectedItem,
        loading: state.RecordState.selectedItemLoading,
    };
}

export default connect(MapStateToProps)(RecordDetail);
