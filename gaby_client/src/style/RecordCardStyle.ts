import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
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
		height: '5rem',
		border: '1px solid black',
		marginBottom: '1rem',
	},
	gap: {
		marginTop: '1rem'
	},
});

export default useStyles;
