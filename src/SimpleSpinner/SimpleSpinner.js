/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
  wrapper: {
    paddingTop: '6px',
    textAlign: 'center',
    '& > div': {
      margin: 'auto',
      border: '4px solid',
      borderColor: props => props.altColor,
      borderTop: '4px solid',
      borderTopColor: props => props.mainColor,
      borderRight: '4px solid',
      borderRightColor: props => props.mainColor,
      borderRadius: '50%',
      width: props => props.size,
      height: props => props.size,
      animation: '$spin 1s linear infinite'
    }
  }
});

const SimpleSpinner = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.wrapper}>
      <div />
    </div>
  );
};

SimpleSpinner.defaultProps = {
  altColor: '#F3F3F3',
  mainColor: '#3498DB',
  size: 25
};

SimpleSpinner.propTypes = {
  altColor: PropTypes.string,
  mainColor: PropTypes.string,
  size: PropTypes.number
};

export default SimpleSpinner;
