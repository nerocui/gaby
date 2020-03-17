import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    loadingContainer: {
        display: 'flex',
		justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }
  }),
);

