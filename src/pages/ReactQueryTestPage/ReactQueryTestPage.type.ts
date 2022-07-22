import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

export interface ReactQueryTestPageProps {
  username: string;
}

export interface getGithubUserInfoResponse {
  config: AxiosRequestConfig;
  data: getGithubUserInfoResponseData;
  headers: AxiosRequestHeaders;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}
export interface getGithubUserInfoResponseData {
  avatar_url: string;
  bio: null;
  blog: string;
  company: null;
  created_at: string;
  email: null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null;
  html_url: string;
  id: number;
  location: null;
  login: string;
  name: null;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null;
  type: string;
  updated_at: string;
  url: string;
}
