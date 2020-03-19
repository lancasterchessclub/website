import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
      background: '#ff4848',
      fontSize: '20px',
      justifyContent: 'center',
      display: 'flex',
      height: '200px',
      width: '100%'
    },
    image: {
      height: '100%'
    }
  });

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
          <img className={classes.image} src="/header_bg_transparent.png" alt="logo" />
        </div>
    );
  }