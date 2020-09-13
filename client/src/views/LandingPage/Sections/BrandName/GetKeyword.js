import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getKeyword } from '../../../../actions/nameGenActions';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Button from "components/CustomButtons/Button.js";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
   width:300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function GetKeyword(props) {
  const classes = useStyles();

  const sendKeyword = () => {
    props.getKeyword();
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Keyword"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <Link to='/description'>
        <Button onClick={() => sendKeyword()} variant="contained" size="sm" color="primary" className={classes.margin}>
            Next 
            <NavigateNextIcon />
        </Button>
      </Link>
    </Paper>
  );
}

GetKeyword.propTypes = {
  getKeyword: PropTypes.func.isRequired
}

const mappStateToProps = (state) => ({
  nameGenReducer: state.nameGenReducer
})

export default connect(mappStateToProps, { getKeyword })(GetKeyword)