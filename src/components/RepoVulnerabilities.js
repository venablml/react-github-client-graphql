import React from 'react';
import { useParams } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import StyledTable from './shared/Table';
import ExternalLink from './shared/ExternalLink';

const REPO_VULNERABILITIES_QUERY = loader('../graphql/repoVulnerabilities.gql');

const RepoVulnerabilities = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(REPO_VULNERABILITIES_QUERY, {
    pollInterval: 100000,
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const repoVulnerabilityList = data.node.vulnerabilityAlerts.edges.map(
    (data) => {
      return (
        <tr key={data.node.id}>
          <td>{data.node.securityAdvisory.summary}</td>
          <td>{data.node.securityAdvisory.severity} </td>
          <td>
            <ExternalLink
              url={data.node.securityAdvisory.permalink}
              label={data.node.securityAdvisory.permalink}
            />
          </td>
        </tr>
      );
    }
  );
  return (
    <>
      <h2>Vulnerabilities: {data.node.name}</h2>

      <StyledTable>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Severity</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{repoVulnerabilityList}</tbody>
      </StyledTable>
    </>
  );
};

export default RepoVulnerabilities;
