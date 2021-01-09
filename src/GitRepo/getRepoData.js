import React, { useEffect, useState } from 'react';
import { DisplayRepo } from './displayRepo';
import Axios from 'axios';

const getGit = async (username) => {
  const response = await Axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  return response.data;
};

export function GetRepoData({ userName, numOfRepos, repoLanguage }) {
  const [repoData, setRepoData] = useState([]);
  useEffect(() => {
    getGit(userName).then(setRepoData);
  }, [userName]);
  return (
    <DisplayRepo
      repoLanguage={repoLanguage}
      numOfRepos={numOfRepos}
      repoData={repoData}
    />
  );
}
