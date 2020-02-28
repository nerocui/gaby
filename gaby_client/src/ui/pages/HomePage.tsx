import React from 'react';
import AppBarHome from '../components/AppBarHome';
import RecordList from '../components/RecordList';

const HomePage = (props: any) => {
    return (
        <div>
            <AppBarHome />
            <RecordList />
        </div>
    );
};

export default HomePage;
