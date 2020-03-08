import {createUseStyles} from 'react-jss';
import { BACKGROUND_COLOR } from '../data/constants';

const useStyle = createUseStyles({
    root: {
        height: '5rem',
        width: '100vw',
        backgroundColor: BACKGROUND_COLOR,
        display: 'flex',
		justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem',
    },
    hamburgerContainer: {
        height: '3rem',
        width: '3rem',
        borderRadius: '1rem',
        border: '1px solid black',
    }
});

export default useStyle;
