import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    image: {
      fontSize: '20px',
      justifyContent: 'center',
      display: 'flex',
      minHeight: '600px'
    },
    title: {
      paddingTop: '10px',
      paddingBottom: '20px',
      color: 'white',
      textAlign: 'center'
    },
    contentContainer: {
      background: '#ff4848',
      margin: 'auto',
      padding: '100',
      width: '100%',
      justifyContent: 'center',
      paddingBottom: '30px',
      paddingTop: '30px',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      maxWidth: '400',
    },
    cardTitle: {
      color: 'white',
      maxWidth: '400',
    },
    cardText: {
      color: 'white',
      maxWidth: '400',
    },
    cardBox: {
      background: '#ff4848',
      maxWidth: '400px',
      textAlign: 'center',
    }
  });

const cards = [
    {
        title: 'WHERE',
        text: 'The club meets at the Reform Club, on the top floor. Lancaster, LA1 1NQ, UK. Telephone: 01524 63541',
        icon: <CalendarTodayIcon color='white'/>
    },
    {
        title: 'WHEN',
        text: 'The Club meets Tuesdays (7 pm onwards) from late September until the end of April.',
        icon: <LocationOnIcon />
    },
    {
        title: 'WHAT',
        text: 'Fun and casual games (with the exception of match nights), all ages are welcome.',
        icon: <EmojiPeopleIcon />
    }
];

export default function Footer() {
    const classes = useStyles();
    
    return (
        <div className={classes.contentContainer}>
        <div className={classes.cardContainer}>
          {cards.map(card => (
            <div className={classes.cardBox}>
              <Card className={classes.cardBox}>
                <CardContent>
                  <Typography className={classes.cardTitle}>{card.title}</Typography>
                    {card.icon}
                  <Typography className={classes.cardText}>{card.text}</Typography>
                </CardContent> 
              </Card>
            </div>
          ))}
        </div>
        </div>
    );
  }
