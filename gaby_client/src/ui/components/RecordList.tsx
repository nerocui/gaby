import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { Record, State, Person, Role } from '../../models';
import { useStyles, useMaterialStyles} from '../../style/RecordCardStyle';
import { RecordListProps } from '../../models/props';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Chip } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const RecordList = (props: RecordListProps) => {
    const classes = useStyles();
    const materialClasses = useMaterialStyles();
    return (
        <div className={classes.root}>
            {props.items.map((item: Record) => {
                const address: string = item.streetAddress + ', ' + item.city + ', ' + item.postalCode;
                const child: Person | undefined = item.people.find((p: Person) => p.roleId === props.roles.find((r: Role) => r.name.trim().toLowerCase() === 'child')?.id);
                return (
                    <Paper key={item.id} elevation={2}  className={classes.recordContainer}>
                        <Box className={classes.flexContainer}>
                            <Box>
                                <Box className={classes.flexContainer}>
                                    <h3 className={classes.gapHorizontal}>{child && child.displayName}</h3>
                                    <p>{item.fileNumber}</p>
                                </Box>
                            </Box>
                            <h4>
                                {address}
                            </h4>
                        </Box>
                        <Box>
                            <p>{item.cancerType}</p>
                        </Box>
                        <Box className={classes.gap}></Box>
                        <Box>
                            {item.people.map((p: Person) => {
                                return (
                                    <Chip
                                        className={classes.gapHorizontal}
                                        label={p.displayName}
                                        color="primary"
                                    />
                                );
                            })}
                        </Box>
                    </Paper>
                );
            })}
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
