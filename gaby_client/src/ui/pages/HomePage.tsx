import React from 'react';
import AppBarHome from '../components/AppBarHome';
import RecordListContainer from '../components/RecordListContainer';
import { GetAllDate } from '../../action';
import { connect } from 'react-redux';

const HomePage = (props: any) => {
    props.GetAllDate();
    return (
        <div>
            <AppBarHome />
            <RecordListContainer />
        </div>
    );
};

export default connect(null, { GetAllDate })(HomePage);
