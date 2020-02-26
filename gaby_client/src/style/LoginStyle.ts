import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
	root: {
		position: 'relative',
		width: '100%',
		height: '100%',
	},
	formBox: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		boxSizing: 'border-box',
		width: '20rem',
		padding: '2rem',
		border: '.1rem solid black',
		borderRadius: '.2rem',
	},
	gap: {
		marginTop: '1rem'
	},
});

export default useStyles;
