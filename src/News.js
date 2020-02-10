import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArticleOne from './newsArticles/ArticleOne';
import theme from './theme';
import ArticleTwo from './newsArticles/ArticleTwo';
import ArticleThree from './newsArticles/ArticleThree';

const useStyles = makeStyles({
    container: {
      width: '100%',
      alignItems: 'center',
      textAlign: 'center',
    },
    title: {
      paddingTop: '20px',
      fontSize: theme.typography.title.fontSize,
    }
  });
 
export default function News() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h1">News</Typography>
      <ArticleThree/>
      <ArticleTwo/>
      <ArticleOne/>
    </div>
  );
}