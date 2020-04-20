import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    padding: "10px 30px",
    color: '#f8f8f8',
    textTransform: 'none',
    minWidth: '130px'
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#606060",
    },
  },
});

export default function CustomizedButtons({ children, ...other }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" className={classes.root} {...other}>
        {children}
      </Button>
    </ThemeProvider>
  );
}