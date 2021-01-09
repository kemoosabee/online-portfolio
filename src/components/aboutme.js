import React, { Component, Fragment } from 'react';
import { GetRepoData } from '../GitRepo/getRepoData';
import CustomizedSnackbars from './alert';

class About extends Component {
  render() {
    return (
      <div>
        <GetRepoData userName='kemoosabee' numOfRepos={5} />
        <CustomizedSnackbars />
      </div>
    );
  }
}

export default About;
