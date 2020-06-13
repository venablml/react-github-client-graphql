import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import Repos from './Repos';
import { loader } from 'graphql.macro';
import Button from './shared/Button';
import ButtonGroup from './shared/ButtonGroup';

const githubOrg = process.env.REACT_APP_GITHUB_ORG;
const REPOS_QUERY = loader('../graphql/repos.gql');
const PAGE_SIZE = 10;

const sortRepos = (repos) => {
  return repos.slice().sort(function (a, b) {
    return (
      b.repo.vulnerabilityAlerts.totalCount -
      a.repo.vulnerabilityAlerts.totalCount
    );
  });
};
const RepoContainer = ({ language }) => {
  let query = `user:${githubOrg} language:${language}`;

  let [currentPage, setCurrentPage] = useState(0);
  useEffect(() => setCurrentPage(0), [language]);

  const { loading, error, data } = useQuery(REPOS_QUERY, {
    variables: { login: githubOrg, first: 100, query: query },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const sortedRepos = sortRepos(data.search.repos);

  const slicedRepos = sortedRepos.slice(
    currentPage * PAGE_SIZE,
    PAGE_SIZE * currentPage + PAGE_SIZE
  );
  const PAGE_COUNT = Math.round(data.search.repoCount / PAGE_SIZE);
  return (
    <>
      <Repos data={slicedRepos} />
      <ButtonGroup>
        <Button disabled={currentPage === 0} onClick={onPreviousPage}>
          Back
        </Button>
        <Button
          marginLeft="20px"
          disabled={currentPage >= PAGE_COUNT - 1}
          onClick={onNextPage}
        >
          Next
        </Button>
      </ButtonGroup>
    </>
  );
};

export default RepoContainer;
