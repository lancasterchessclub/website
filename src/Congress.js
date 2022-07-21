import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {
      width: '100%',
      textAlign: 'center',
      paddingTop: '20px',
    },
    list: {
      listStyle: 'none',
    }
  });

export default function Congress() {
    const classes = useStyles();

    return (
      <section className={classes.main}>
        <header>
          <h2>Congress</h2>
          Lancaster Chess Club hosts a number of Congresses throughout the year.
        </header>

        <section>
          <h3>Upcoming</h3>
          <ul className={classes.list}>
            <li>TBD 2022</li>
          </ul>
        </section>

        <section>
          <h3>Previous</h3>
          <ul className={classes.list}>
            <li><a href="http://lancasterchesscongress.co.uk/" target="_blank">18th June 2022</a></li>
          </ul>
        </section>

      </section>
    );
  }
