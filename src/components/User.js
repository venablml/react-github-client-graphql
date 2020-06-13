import { useQuery } from '@apollo/client';
import React from 'react';
import { loader } from 'graphql.macro';

const githubUser = process.env.REACT_APP_GITHUB_USER;

const USER_QUERY = loader('../graphql/user.gql');

const User = () => {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { login: githubUser },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <label style={{ paddingRight: '50px' }}>User:{data.user.name}</label>

      <label style={{ paddingRight: '50px' }}>
        Location:{data.user.location}
      </label>
      <label style={{ paddingRight: '50px' }}>
        Company:{data.user.company}
      </label>
    </>
  );
};

export default User;
