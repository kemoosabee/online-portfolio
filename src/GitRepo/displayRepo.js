import React from 'react';
import styles from './gitRepo.css';

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

export function DisplayRepo({ repoData, numOfRepos, repoLanguage }) {
  const sortedRepo = sortByDate(repoData);
  const sortedAndReduced = arrayToLen(sortedRepo, numOfRepos);
  return (
    <div className={styles.repoContainer}>
      {sortedAndReduced
        ? sortedAndReduced.map((repo) => (
            <ul key={repo.id}>
              <li>
                <a
                  id='title'
                  className={styles.title}
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
              </li>
              <li id='description' className={styles.description}>
                {repo.description}
              </li>
              <div id='options' className={styles.options}>
                {repoLanguage ? (
                  <li id='language' className={styles.languages}>
                    {repo.language}
                  </li>
                ) : null}
              </div>
            </ul>
          ))
        : null}
    </div>
  );
}
