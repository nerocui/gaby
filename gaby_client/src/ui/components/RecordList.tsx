import React from 'react';
import { connect } from 'react-redux';
import { Record, State } from '../../models';
import { useStyles } from '../../style/RecordCardStyle';
import { RecordListProps } from '../../models/props';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router-dom';
import RecordItem from './RecordItem';


const RecordList = (props: RecordListProps) => {
    const classes = useStyles();

    if (props.items.length === 0) {
        return (
            <Box className={classes.emptyContainer}>
                <h4 className={classes.gapHorizontal}>
                    Don't have any record yet.
                </h4>
                <Button variant="contained" color="primary" onClick={() => props.history.push('/import')}>
                    Import
                </Button>
            </Box>
        );
    }
    return (
        <Box className={classes.root}>
            {props.items.map((item: Record) => {
                return (
                    <RecordItem key={item.id} roles={props.roles} item={item} history={props.history}/>
                );
            })}
        </Box>
    );
};

function MapStateToProps(State: State) {
    return {
        items: State.RecordState.items,
        roles: State.RecordState.roles,
    };
}

export default withRouter(connect(MapStateToProps)(RecordList));
