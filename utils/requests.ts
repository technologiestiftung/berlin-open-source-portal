import nodeFetch from "node-fetch";
import { GithubResponseType, GithubSearchApiResponseType } from "./types";

require("dotenv").config();

export const fetchGithubRepo: (
  url: string
) => Promise<GithubResponseType> = async (url) => {
  const isAuthorized = process.env.API_TOKEN_GITHUB;
  const options = isAuthorized
    ? {
        headers: {
          Authorization: `token ${process.env.API_TOKEN_GITHUB}`,
        },
      }
    : {};

  try {
    const response = await nodeFetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch. Status: ${response.status}`);
    }

    console.log(
      `Remaining GitHub API calls within this hour: ${await response.headers.get(
        "x-ratelimit-remaining"
      )}`
    );

    return (await response.json()) as GithubResponseType;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchOpenIssues: (
  url: string
) => Promise<GithubSearchApiResponseType> = async (url) => {
  const isAuthorized = process.env.API_TOKEN_GITHUB;
  const options = isAuthorized
    ? {
        headers: {
          Authorization: `token ${process.env.API_TOKEN_GITHUB}`,
        },
      }
    : {};

  try {
    const response = await nodeFetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch. Status: ${response.status}`);
    }

    return (await response.json()) as GithubSearchApiResponseType;
  } catch (error) {
    throw new Error(error);
  }
};
