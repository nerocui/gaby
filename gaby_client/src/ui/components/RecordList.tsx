import React from 'react';
import { connect } from 'react-redux';
import { Record, State, Person, Role } from '../../models';
import { useStyles, useMaterialStyles} from '../../style/RecordCardStyle';
import { RecordListProps } from '../../models/props';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const RecordList = (props: RecordListProps) => {
    const classes = useStyles();
    const materialClasses = useMaterialStyles();
    return (
        <div className={classes.root}>
            {props.items.map((item: Record) => {
                const address: string = item.streetAddress + ', ' + item.city + ', ' + item.postalCode;
                const child: Person | undefined = item.people.find((p: Person) => p.roleId === props.roles.find((r: Role) => r.name.trim().toLowerCase() === 'child')?.id);
                return (
                    <div key={item.id} className={classes.recordContainer}>
                        <div className={classes.flexContainer}>
                            <div>
                                <div className={classes.flexContainer}>
                                    <h3 className={classes.horizontalGap}>{child && child.displayName}</h3>
                                    <p>{item.fileNumber}</p>
                                </div>
                            </div>

                            <h4>
                                {address}
                            </h4>
                        </div>
                        <div>
                            <p>{item.cancerType}</p>
                        </div>
                        <div className={classes.gap}></div>
                        <div  className={classes.flexContainer}>
                            <div>
                                <div className={classes.flexContainer}>
                                    {item.people.map((p: Person) => {
                                        return (
                                            <div className={classes.personContainer}>
                                                {p.displayName}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className={classes.button}>
                                <KeyboardArrowRightIcon className={materialClasses.buttonIcon}/>
                            </div>
                        </div>
                    </div>
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
