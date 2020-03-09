import React from 'react';
import SecondaryAppBar from '../components/SecondaryAppBar';
import { DetailPageProps } from '../../models/props';
import { Box } from '@material-ui/core';

const DetailPage = (props: DetailPageProps) => {
    return (
        <div>
            <SecondaryAppBar />
            <Box>
                <h2>
                    {props.item.childId}
                </h2>
            </Box>
        </div>
    );
};

export default DetailPage;
