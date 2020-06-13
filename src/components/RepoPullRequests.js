import React from 'react';
import { useParams } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import StyledTable from './shared/Table';
import ExternalLink from './shared/ExternalLink';

const REPO_PR_QUERY = loader('../graphql/repoPullRequests.gql');

const RepoPullRequests = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(REPO_PR_QUERY, {
    pollInterval: 100000,
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log('data', data);
  const repoPrList = data.node.pullRequests.edges.map((data) => {
    return (
      <tr key={data.node.id}>
        <td>{data.node.title}</td>
        <td>{data.node.author.login} </td>
        <td>
          <ExternalLink
            url={data.node.url}
            label={data.node.url}
          ></ExternalLink>
        </td>
        <td>{data.node.createdAt}</td>
      </tr>
    );
  });
  return (
    <>
      <h2>Open Pull Requests: {data.node.name}</h2>
      <StyledTable>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>URL</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>{repoPrList}</tbody>
      </StyledTable>
    </>
  );
};

export default RepoPullRequests;
