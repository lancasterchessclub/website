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
 
export default function ArticleFour() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.article} variant="h4">Blackpool Congress</Typography>
      <Typography className={classes.article}>
          18th March 2020<br/>
          Four members took part in the recent Blackpool Congress - probably the last major
          chess event nationally for some time. Jack McQueen took part in his first tournament
          and performed very creditably in the Standard Section, as did Jonathan Verden. After
          a slow start (resigning in an arguably won position in round 1), Danny McMenamin 
          stormed through on the Sunday to finish on 50% in a very strong Major section - a 
          fine result. <br/><br/>
          
          Barry Hymer's best game in the Open was a round 1 loss to eventual 
          tournament winner, Martin Mitchell. He missed several winning chances in this game
          as can be seen below (click on match in the bottom right for full annotations), 
          and his play then got progressively weaker as the tournament progressed. <br/><br/>
      </Typography>
      <Iframe url="https://lichess.org/study/embed/iD9MHcqE/125NW5O4"
        width="600"
        height="371"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  );
}
