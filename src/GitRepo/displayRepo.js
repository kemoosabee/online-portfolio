import { makeStyles } from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

function sortByDate(repos) {
  if (repos !== undefined) {
    return repos.sort(
      (a, b) => +new Date(b.updated_at) - +new Date(a.updated_at)
    );
  }
}

function arrayToLen(array, length) {
  if (array) return array.splice(0, length);
}

const useStyles = makeStyles({
  root: {
    width: 345,
    height: 200,
    background: 'pink',
  },
});

export function DisplayRepo({ repoData, numOfRepos, repoLanguage }) {
  const sortedRepo = sortByDate(repoData);
  const sortedAndReduced = arrayToLen(sortedRepo, numOfRepos);
  const classes = useStyles();
  return (
    <Grid container spacing={2} direction='row' className='grid-pad'>
      {sortedAndReduced
        ? sortedAndReduced.map((repo) => (
            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {repo.name}
                    </Typography>
                    <Typography varaint='body2' color='textSecondary'>
                      {repo.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActionArea>
                  <IconButton aria-label='GitHub Link' href={repo.html_url}>
                    <GitHubIcon />
                    <Typography varaint='body2' color='textSecondary'>
                      Link to GitHub
                    </Typography>
                  </IconButton>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        : null}
    </Grid>
  );
}
