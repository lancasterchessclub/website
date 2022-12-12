import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  main: {
    width: "100%",
    textAlign: "center",
    paddingTop: "20px",
  },
  list: {
    listStyle: "none",
    lineHeight: "45px",
  },
});

export default function Congress() {
  const classes = useStyles();

  return (
    <section className={classes.main}>
      <header>
        <h1>Congress</h1>
        Lancaster Chess Club hosts a number of Congresses throughout the year.
      </header>

      <section>
        <h3>Upcoming</h3>

        <ul className={classes.list}>
          <li>
            <Link to="/congress/20230121">Second Lancaster Rapidplay 21st January 2023</Link>
          </li>
        </ul>
 
      </section>

      <section>
        <h3>Previous</h3>
        <ul className={classes.list}>
          <li>
            <Link to="/congress/20221211">Lancaster, Morecambe and District One Day Rapid Play 11th December 2022</Link>
          </li>
          <li>
            <a href="/congress-20220618.html">18th June 2022</a>
          </li>
        </ul>
      </section>
    </section>
  );
}
