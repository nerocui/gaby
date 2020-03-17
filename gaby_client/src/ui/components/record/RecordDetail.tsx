import React from 'react';
import { connect } from 'react-redux';
import { State, Person, Role } from '../../../models';
import { Box } from '@material-ui/core';
import { useStyles } from '../../../style/record/RecordDetailPageStyle';

const RecordDetail = (props: any) => {
    const classes = useStyles();
    if (props.loading) {
        return (
            <Box className={classes.loadingContainer}>
                <h3>
                    loading...
                </h3>
            </Box>
        );
    }
    const child: Person | undefined = props.record.people.find((p: Person) => p.roleId === props.roles.find((r: Role) => r.name.trim().toLowerCase() === 'child')?.id);

    return (
        <Box className={classes.root}>
            {props.record.id}
        </Box>
    );
};

function MapStateToProps(state: State) {
    return {
        record: state.RecordState.selectedItem,
        roles: state.RecordState.roles,
        loading: state.RecordState.selectedItemLoading,
    };
}

export default connect(MapStateToProps)(RecordDetail);
