import {createUseStyles} from 'react-jss';
import { makeStyles } from '@material-ui/core/styles';

export const useMaterialStyles = makeStyles({
	buttonIcon: {
		height: '100%',
		width: '100%',
	}
});

export const useStyles = createUseStyles({
	root: {
		position: 'relative',
		width: '100%',
        height: '100%',
		backgroundColor: '#d1d1d1',
		padding: '1rem',
	},
	recordContainer: {
		width: '100%',
		borderRadius: '1rem',
		padding: '.5rem',
		height: 'auto',
		//borderBottom: '1px solid black',
		// marginBottom: '1rem',
		// '&:hover': {
		// 	boxShadow:  '6px 6px 12px #c2c2c2,-6px -6px 12px #e0e0e0',
		// },
		boxShadow:  '6px 6px 12px #c2c2c2,-6px -6px 12px #e0e0e0',
		transition: 'all 400ms',
		marginBottom: '1rem'
	},
	flexContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	personContainer: {
		padding: '.2rem .5rem',
		borderRadius: '1rem',
		background: '#d1d1d1',
		marginRight: '.5rem',
		color: '#636363',
		boxShadow:  '4px 4px 8px #bababa,-4px -4px 8px #e8e8e8',
	},
	gap: {
		marginTop: '.7rem',
	},
	horizontalGap: {
		marginRight: '.7rem',
	},
	button: {
		height: '2.5rem',
		width: '2.5rem',
		borderRadius: '50%',
		boxShadow:  '5px 5px 10px #9b9b9b,-5px -5px 10px #ffffff',
		display: 'relative',
		background: 'linear-gradient(145deg, #bcbcbc, #e0e0e0)',
		marginRight: '.5rem',
		transition: 'all 200ms',
		cursor: 'pointer',
		'&:active': {
			boxShadow:  '5px 5px 10px #bcbcbc,-5px -5px 10px #e6e6e6'
		}
	},
});
