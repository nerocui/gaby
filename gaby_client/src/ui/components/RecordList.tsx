import React from 'react';
import { connect } from 'react-redux';
import { Record, State } from '../../models';
import useStyle from '../../style/RecordCardStyle';

const RecordList = (props: any) => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
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
