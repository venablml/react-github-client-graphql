import React from 'react';
import { useParams } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import StyledTable from './shared/Table';
import ExternalLink from './shared/ExternalLink';

const REPO_DETAILS_QUERY = loader('../graphql/repoDetails.gql');

const RepoDetails = () => {
  let { id } = useParams();

  const { loading, error, data } = useQuery(REPO_DETAILS_QUERY, {
    pollInterval: 100000,
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const repo = data.node;

  return (
    <>
      <h2>Repo Details: {repo.name}</h2>
      <StyledTable>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr key={repo.name}>
            <td>Name</td>
            <td>{repo.name} </td>
          </tr>
          <tr key={repo.primaryLanguage.name}>
            <td>Language</td>
            <td>{repo.name} </td>
          </tr>
          <tr key={repo.pushedAt}>
            <td>Last Push</td>
            <td>{repo.pushedAt} </td>
          </tr>
          <tr key={repo.pullRequests.totalCount}>
            <td>Open PRs</td>
            <td>{repo.pullRequests.totalCount} </td>
          </tr>
          <tr key={repo.homepageUrl}>
            <td>Homepage</td>
            <td>
              <ExternalLink url={repo.homepageUrl} label={repo.homepageUrl} />
            </td>
          </tr>
          <tr key={repo.url}>
            <td>URL</td>
            <td>
              <ExternalLink url={repo.url} label={repo.url} />
            </td>
          </tr>
          <tr key={repo.vulnerabilityAlerts.totalCount}>
            <td>Security Vulnerabilities</td>
            <td>{repo.vulnerabilityAlerts.totalCount} </td>
          </tr>
          <tr key={repo.description}>
            <td>Description</td>
            <td>{repo.description} </td>
          </tr>
        </tbody>
      </StyledTable>
    </>
  );
};

export default RepoDetails;
