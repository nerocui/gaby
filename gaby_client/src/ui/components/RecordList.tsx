import React from 'react';
import { Record, State } from '../../models';
import { connect } from 'react-redux';

const RecordList = (props: any) => {
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
