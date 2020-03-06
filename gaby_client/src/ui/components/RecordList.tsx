import React from 'react';
import { connect } from 'react-redux';
import { Record, State, Person, Role } from '../../models';
import useStyle from '../../style/RecordCardStyle';
import { RecordListProps } from '../../models/props';

const RecordList = (props: RecordListProps) => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            {props.items.map((item: Record) => {
                const address: string = item.streetAddress + ' ' + item.city + ', ' + item.postalCode;
                const child: Person | undefined = item.people.find((p: Person) => p.roleId === props.roles.find((r: Role) => r.name.trim().toLowerCase() === 'child')?.id);
                return (
                    <div key={item.id} className={classes.recordContainer}>
                        {child && child.displayName}
                        <div>
                            {address}
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
