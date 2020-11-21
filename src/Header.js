import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
      background: '#ff1b2e',
      fontSize: '20px',
      justifyContent: 'center',
      display: 'flex',
      height: '200px'
    },
    image: {
      height: '100%'
    }
  });

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
          <img className={classes.image} src="/header_bg_new_smallest.png" alt="logo" />
        </div>
    );
  }