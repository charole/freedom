import React from 'react';
import { useQuery } from 'react-query';
import { service } from '@/api';
import {
  getGithubUserInfoResponseData,
  ReactQueryTestPageProps,
} from './ReactQueryTestPage.type';
import { Container } from './ReactQueryTestPage.styles';

function ReactQueryTestPage({ username }: ReactQueryTestPageProps) {
  const fetchUserInfo = async () => {
    try {
      const { data } = await service.github.get<
        Partial<getGithubUserInfoResponseData>
      >(`/users/${username}`);
      return data;
    } catch (err) {
      return { login: undefined, name: undefined };
    }
  };
  const { isLoading, data } = useQuery(['test', username], fetchUserInfo);

  return (
    <Container className={isLoading ? 'loading' : ''}>
      <div>
        <span>login:&nbsp;&nbsp;</span>
        <span>{(data?.login && data.login) || '없음'}</span>
      </div>
      <div>
        <span>name:&nbsp;&nbsp;</span>
        <span>{(data?.name && data.name) || '없음'}</span>
      </div>
    </Container>
  );
}

export default React.memo(ReactQueryTestPage);
