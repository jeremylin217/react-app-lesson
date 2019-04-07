const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  welcome: {
    paddingBottom: 20,
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      [theme.breakpoints.down('xs')]: {
        left: 'calc(50% - 25px)',
      },
      bottom: 0,
      width: 50,
      height: 4,
      backgroundColor: '#00c3e1',
    },
  },
})

export default styles
