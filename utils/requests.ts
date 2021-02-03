const nodeFetch = require("node-fetch");

require("dotenv").config();

const fetchGithubRepo = async (url) => {
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

    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  fetchGithubRepo: fetchGithubRepo,
};
