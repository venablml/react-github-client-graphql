import React from 'react';
import StyledTable from './shared/Table';
import StyledLink from './shared/StyledLink';

const Repos = ({ data }) => {
  const repoList = data.map((i) => {
    let repo = i.repo;
    return (
      <tr key={repo.id}>
        <td>
          <StyledLink to={`/repos/${repo.id}`}>{repo.name}</StyledLink>
        </td>
        <td>
          <StyledLink to={`/repos/${repo.id}/vulnerabilities`}>
            {repo.vulnerabilityAlerts.totalCount}
          </StyledLink>
        </td>
        <td>
          <StyledLink to={`/repos/${repo.id}/pullrequests`}>
            {repo.pullRequests.totalCount}
          </StyledLink>
        </td>
      </tr>
    );
  });
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Repo</th>
          <th>Vulnerabilities</th>
          <th>Open PRs</th>
        </tr>
      </thead>
      <tbody>{repoList}</tbody>
    </StyledTable>
  );
};

export default Repos;
