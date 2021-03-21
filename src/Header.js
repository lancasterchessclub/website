import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';
import './Header.css';

const useStyles = makeStyles({
    container: {
      background: theme.background,
      fontSize: '20px',
      justifyContent: 'center',
      display: 'flex',
      height: '200px',
      //width: '100%'
    },
    image: {
      height: '100%'
    }
  });

export default function Header() {
    const classes = useStyles();
    return (
        <div id="chessClubLogo" className={classes.container}>
          <img className={classes.image} src="/header_bg_transparent.png" alt="logo" />
        </div>
    );
  }