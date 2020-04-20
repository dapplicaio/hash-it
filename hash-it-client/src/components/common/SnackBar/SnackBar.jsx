import React from 'react';
import { Snackbar } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { hideSnackBar } from 'api/snackbar'

function SnackBar({hideSnackBar, snackbarReducer}) {
  const { open, message, type, vertical, horizontal } = snackbarReducer
  const onClose = () => hideSnackBar()
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={{ vertical, horizontal }}>
      <Alert onClose={onClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  )
}

const mapStateToProps = state => {
  return {
    snackbarReducer: state.snackbarReducer
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    hideSnackBar
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SnackBar));
