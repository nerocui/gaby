import React from 'react';
import { AddressProps } from '../../../models/props';
import { Box, IconButton } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MapIcon from '@material-ui/icons/Map';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
	flexContainer: {
        height: '1.5rem',
        padding: '.2rem',
		display: 'flex',
		justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        height: '1rem',
        width: '1rem',
    }
  }),
);

const Address = (props: AddressProps) => {
    const classes = useStyles();
    if (!props.isHover) {
        return (
            <Box className={classes.flexContainer}>
                <h4>
                    {props.streetAddress + ', ' + props.city + ', ' + props.postalCode}
                </h4>
            </Box>
        );
    }
    return (
        <Box className={classes.flexContainer}>
            <IconButton>
                <MapIcon className={classes.icon}/>
            </IconButton>
            <IconButton>
                <FileCopyIcon className={classes.icon}/>
            </IconButton>
            <h4>
                {props.streetAddress + ', ' + props.city + ', ' + props.postalCode}
            </h4>
        </Box>
        
    );
};

export default Address;
