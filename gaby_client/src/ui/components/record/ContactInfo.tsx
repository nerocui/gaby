import React from 'react';
import { Box, Link } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { ContactInfoProps } from '../../../models/props';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
	flexContainer: {
		display: 'flex',
		justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '1rem',
    },
    click: {
        cursor: 'pointer',
    }
  }),
);

const ContactInfo = (props: ContactInfoProps) => {
    const classes = useStyles();
    let { cellPhone, phoneNumber } = props;
    if (cellPhone.length >= 7) {
        cellPhone = cellPhone.substr(0, 3) + '-' + cellPhone.substr(3, 3) + '-' + cellPhone.substr(6, cellPhone.length-6);
    }
    if (phoneNumber.length >= 7) {
        phoneNumber = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6, phoneNumber.length-6);
    }
    return (
        <Box className={classes.flexContainer}>
            <Box className={classes.iconContainer}>
                <EmailIcon />
                <Link href={'mailto:' + props.email} className={classes.click}>
                    {props.email}
                </Link>
            </Box>
            <Box className={classes.iconContainer}>
                <PhoneIphoneIcon />
                {cellPhone}
            </Box>
            <Box className={classes.iconContainer}>
                <PhoneIcon />
                {phoneNumber}
            </Box>
        </Box>
    );
};

export default ContactInfo;
