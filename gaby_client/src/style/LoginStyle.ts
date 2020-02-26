import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
	root: {
		position: 'relative',
		width: '100%',
        height: '100%',
        backgroundColor: '#d1d1d1',
	},
	formBox: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		boxSizing: 'border-box',
		width: '30rem',
		padding: '2rem',
        borderRadius: '30px',
        background: '#d1d1d1',
        boxShadow:  '20px 20px 60px #b2b2b2, -20px -20px 60px #f0f0f0',
    },
    label: {
        fontWeight: '500',
        marginTop: '1rem',
    },
	gap: {
		marginTop: '1rem'
	},
});

export default useStyles;
