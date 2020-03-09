import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
	},
	recordContainer: {
		marginBottom: theme.spacing(1),
		padding: theme.spacing(1),
		boxSizing: 'border-box',
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
	},
	centerFlexContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyContainer: {
		height: '20rem',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	click: {
		cursor: 'pointer',
	},
	smallIcon: {
		minWidth: '2rem !important',
	}
  }),
);
