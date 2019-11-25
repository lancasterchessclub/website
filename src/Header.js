import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    image: {
      background: '#ff4848',
      fontSize: '20px',
      justifyContent: 'center',
      display: 'flex'
    },
  });

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.image}>
          <img src="/header_bg_new_smallest.png" />
        </div>
    );
  }