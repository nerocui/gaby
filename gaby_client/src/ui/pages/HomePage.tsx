import React from 'react';
import AppBarHome from '../components/AppBarHome';
import RecordList from '../components/RecordList';
import { GetAllDate } from '../../action';
import { connect } from 'react-redux';
import useStyle from '../../style/PageStyle';

const HomePage = (props: any) => {
    props.GetAllDate();
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <AppBarHome />
            <RecordList />
        </div>
    );
};

export default connect(null, { GetAllDate })(HomePage);
