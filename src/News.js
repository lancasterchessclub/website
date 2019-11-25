import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArticleOne from './newsArticles/ArticleOne';

const useStyles = makeStyles({
    container: {
      width: '100%',
      alignItems: 'center',
      textAlign: 'center',
    },
    title: {
      paddingTop: '20px',
    }
  });
 
export default function News() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h4">News</Typography>
      <ArticleOne/>
    </div>
  );
}