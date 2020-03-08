import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
	},
	recordContainer: {
		marginBottom: theme.spacing(1),
		padding: theme.spacing(1),
	},
	gap: {
		marginBottom: theme.spacing(1),
	},
	gapHorizontal: {
		marginRight: theme.spacing(1),
	},
	flexContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end'
	}
  }),
);

export const useMaterialStyles = makeStyles({
	root: {
		marginBottom: '1rem'
	},
	buttonIcon: {
		height: '100%',
		width: '100%',
	}
});
