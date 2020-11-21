import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Iframe from 'react-iframe'

const useStyles = makeStyles({
    container: {
      maxWidth: '700px',
      display: 'inline-block',
      paddingLeft: '2%',
      paddingRight: '2%',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
    article: {
      paddingTop: '20px',
      textAlign: 'left',
    },
    image: {
      width: '100%',
      textAlign: 'center',
    }
  });
 
export default function ArticleFive() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.article} variant="h4">March Update & Season Finish</Typography>
      <Typography className={classes.article}>
          18th March 2020<br/>
            Regrettably the decision was taken yesterday by Barry to suspend the remainder
            of the season due to government recommendation around social distancing. While
            this comes as a disappointment as we will miss out on a number of meets as well
            as the standard end of season lightning tournament, it's out of our hands. We look
            forward to the start of next season eagerly!<br/><br/>

            One small comfort is that the timing of this only occurred after the
            Dragons had the chance to finish what was a very successful season. A cracking
            2 1/2-1 1/2 victory over Kendal followed by University 'A' withdrawing from the
            final fixture has left us placed second only on individual points to Morecambe
            'A'.<br/><br/>

            The full standings can be found on the league page -
            https://ecflms.org.uk/lms/node/31113/tables . Below you can find a closely fought
            draw in the match vs Kendal.<br/><br/>
      </Typography>
      <Iframe url="https://lichess.org/study/embed/XkJ9Opfh/12jYn6rH"
        width="600"
        height="371"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  );
}
