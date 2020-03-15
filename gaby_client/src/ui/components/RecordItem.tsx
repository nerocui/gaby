import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Chip, IconButton, Link } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { useStyles } from '../../style/RecordCardStyle';
import { Person, Role } from '../../models';
import { RecordItemProps } from '../../models/props';
import useHover from '@react-hook/hover'
import Address from './record/Address';
import ContactInfo from './record/ContactInfo';
import PlaceIcon from '@material-ui/icons/Place';
import LocalHospitalIcon from '@material-ui/icons/LocalHospitalOutlined';
import ViewListIcon from '@material-ui/icons/ViewList';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const RecordItem = (props: RecordItemProps) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [isHovering, ref] = useHover(0, 0);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const child: Person | undefined = props.item.people.find((p: Person) => p.roleId === props.roles.find((r: Role) => r.name.trim().toLowerCase() === 'child')?.id);
    return (
        <Paper
            elevation={2}
            ref={ref}
            className={classes.recordContainer}
            >
            <Box className={classes.flexContainer}>
                <Box>
                    <Box className={classes.flexContainer}>
                        <Link
                            onClick={() => props.history.push(`/details/${props.item.id}`)}
                            className={classes.gapHorizontal}
                            >
                            <h2 className={classes.click}>{child && child.displayName}</h2>
                        </Link>
                        <p>{props.item.fileNumber}</p>
                    </Box>
                </Box>
                <Address
                    streetAddress={props.item.streetAddress}
                    city={props.item.city}
                    postalCode={props.item.postalCode}
                    isHover={isHovering}
                />
            </Box>
            <Box className={classes.flexContainer}>
                <Box>
                    <Box className={classes.centerFlexContainer}>
                        <LocalHospitalIcon />
                        <p>{props.item.cancerType}</p>
                    </Box>
                </Box>
               
                <Box>
                    <Box className={classes.centerFlexContainer}>
                        <PlaceIcon />
                        <h4>{props.item.locationOfVisit}</h4>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.flexContainer}>
                <Box>
                    {'Helped by: ' + props.item.socialWorker}
                </Box>
                <ContactInfo
                    email={props.item.email}
                    cellPhone={props.item.cellPhone}
                    phoneNumber={props.item.phoneNumber}
                />
            </Box>
            <Box className={classes.gap}></Box>
            <Box className={classes.flexContainer}>
                <Box>
                    {props.item.people.map((p: Person) => {
                        return (
                            <Chip
                                className={classes.gapHorizontal}
                                label={p.displayName}
                                color="primary"
                            />
                        );
                    })}
                </Box>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleClick}>
                    <MoreHorizIcon/>
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon className={classes.smallIcon}>
                            <ViewListIcon/>
                        </ListItemIcon>
                        <ListItemText primary="View Detail"/>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon className={classes.smallIcon}>
                            <CheckBoxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Select"/>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon className={classes.smallIcon}>
                            <NoteAddIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Add Note"/>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon className={classes.smallIcon}>
                            <DeleteIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Delete"/>
                    </MenuItem>
                </Menu>
            </Box>
        </Paper>
    );
};

export default RecordItem;
