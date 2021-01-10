import React, { Component } from 'react';
import { GetRepoData } from '../GitRepo/getRepoData';
import Grid from '@material-ui/core/Grid';

class Projects extends Component {
  render() {
    return (
      <div className='projects-back'>
        <Grid xs={2} />
        <GetRepoData
          userName='kemoosabee'
          numOfRepos={10}
          repoLanguage='true'
        />
        <Grid xs={2} />
      </div>
    );
  }
}

export default Projects;
