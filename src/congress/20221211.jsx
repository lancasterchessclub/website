import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    width: "100%",
    textAlign: "center",
    paddingTop: "20px",
  },
  list: {
    listStyle: "none",
  },
});

export default function Congress20221211() {
  const classes = useStyles();

  return (
    <section className={classes.main}>
      <header>
          <h2>
            Lancaster Morecambe and District Chess League Rapidplay <br />
            Sunday 11 December 2022. <br /> Venue - Lancaster Chess Club
          </h2>
      </header>

      <section>
        <article
          style={{ textAlign: "left", maxWidth: "600px", margin: "auto" }}
        >
         <p>Welcome to our 5 round ECF rated rapidplay event.</p>
          <p>
            Prize fund subject to entries. All entry fees will be returned in
            prize money.
          </p>
          <p>
            Entry cost £5 per person. Please pay in cash on the day. All entries
            must be registered at a club in the Lancaster, Morecambe and
            District Chess League and must be EFC members. As this is an
            internal league rapid play bronze ECF membership will be accepted
            without the need for the EFC surcharge.
          </p>
          <p>Time 10.30 am – 5.30 pm</p>
          <p>
            Location – The Lancaster Chess Club, The Bridge Club, 3-5 Chapel St,
            Lancaster, LA1 1NZ – only 5 minutes walk from Lancaster bus station
            and about 15 minutes from Lancaster rail station. As always car
            parking is tricky in Lancaster. There is a pay car park close by –
            opposite Sainsburys. If you want free parking you would need to park
            outside the city centre and walk or bus into town.
          </p>
          <p>
            <b>
              There is only one section – First prize will be total entry fees
              minus £40. Grading prize under 1800 £20, Grading prize under 1300
              £20
            </b>
          </p>
          <p>Opening of congress – 10.15 am</p>
          <p>All games 30 minutes per player – no time increments</p>
          <ul>
            <li>Round 1 – 10.30 am</li>
            <li>Round 2 – 12 noon</li>
            <li>Round 3 – 1.30 pm</li>
            <li>Round 4 – 3 pm</li>
            <li>Round 5 – 4.30 pm</li>
          </ul>
          <h3>How to enter. </h3>
          <p>
            Although it is cash on the day please enter in advance by email so
            we can set up sets clocks and boards and also the software we will
            use for pairings and submission of results for gradings to the ECF
            database in advance.
          </p>
          <p>
            Please e mail the organiser Richard Walsh, richardsami@hotmail.co.uk
          </p>
          <p>
            In your e mail please give your name, club, grade and ECF grading
            database code.
          </p>
          <h3>Refreshments</h3>
          There is a coffee machine but best bring your own sandwiches. The
          Bobbin pub is almost opposite the venue, but it does not do food. We
          are about 5 mins walk from city centre where there are plenty of shops
          which are open on Sundays.
          <h3>CONDITIONS OF ENTRY:</h3>
          The following priority is used for section allocation and seeding.
          <ul>
            <li>ECF RapidPlay Grade</li>
            <li>Latest FIDE RapidPlay Rating</li>
            <li>ECF Standard Play Grade</li>
          </ul>
          <p>
            Players without a current grade should use any grading previously
            held from the on-line ECF database and provide reference number from
            the site. This will be accepted as their grading subject to approval
            by the organisers.
          </p>
          <p></p>
          <p>Ungraded players are not eligible for a grading prize.</p>
          <p>
            A player qualifying for two prizes receives only the higher of the
            two prizes.
          </p>
          <p>
            In the event of a tie for a grading prize, the prize is awarded to
            the lowest graded player Swiss manager dictates the pairings in all
            rounds and they are not changed to suit individual preferences.
          </p>
          <h3>Arbitration</h3>
          <p>
            In the event of a dispute we would expect players to sort it out
            between themselves. However is this is not possible the game will
            paused until two officials are available from two clubs. They will
            then act in arbiter role and their decision will be final. In
            entering players are deemed to agree with this.
          </p>
        </article>
      </section>
    </section>
  );
}
