import React from 'react';
import SecondaryAppBar from '../components/SecondaryAppBar';
import { State } from '../../models';
import { connect } from 'react-redux';
import { GetRecord } from '../../action';
import RecordDetail from '../components/record/RecordDetail';
import { useParams } from 'react-router-dom';

const DetailPage = (props: any) => {
    let { id } = useParams();
    props.GetRecord(id);
    return (
        <div>
            <SecondaryAppBar />
            <RecordDetail />
        </div>
    );
};

export default connect(null, { GetRecord })(DetailPage);
