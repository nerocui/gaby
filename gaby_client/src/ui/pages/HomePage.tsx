import React from 'react';
import AppBarHome from '../components/AppBarHome';
import RecordList from '../components/RecordList';
import { GetAllDate } from '../../action';
import { connect } from 'react-redux';

const HomePage = (props: any) => {
    props.GetAllDate();
    return (
        <div>
            <AppBarHome />
            <RecordList />
        </div>
    );
};

export default connect(null, { GetAllDate })(HomePage);
