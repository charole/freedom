import React from 'react';
import { useQuery } from 'react-query';
import { client } from '@/api';
import {
  getGithubUserInfoResponseData,
  ReactQueryTestPageProps,
} from './ReactQueryTestPage.type';
import { Container } from './ReactQueryTestPage.styles';

function ReactQueryTestPage({ username }: ReactQueryTestPageProps) {
  const fetchUserInfo = async () => {
    try {
      const { data } = await client.get<getGithubUserInfoResponseData>(
        `/users/${username}`,
      );
      return data;
    } catch (err) {
      return { login: undefined };
    }
  };
  const { isLoading, data } = useQuery(['test', username], fetchUserInfo);
  console.info(data);

  return (
    <Container className={isLoading ? 'loading' : ''}>
      <div>
        <span>username</span>
        <span>{data?.login}</span>
      </div>
    </Container>
  );
}

export default React.memo(ReactQueryTestPage);
