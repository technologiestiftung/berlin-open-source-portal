import { readdir, readFile, writeFileSync } from "fs";
const frontmatter = require("@github-docs/frontmatter"); // import syntax can't be used here currently
import {
  fetchGithubRepo as fetchGithubRepoData,
  fetchOpenIssues,
} from "./requests";

import { GithubDataType, RepoDataType, GithubResponseType } from "./types";

console.info("Fetching GitHub repository data...");

const githubData: GithubDataType = {
  timestamp: new Date(),
  repos: {},
};

readdir("./src/projects", (error: Error, filenames: string[]) => {
  if (error) {
    throw new Error(
      `Unable to scan directory. Error message: ${error.message}`
    );
  }

  const projectFiles = filenames.filter((filename) => {
    return !filename.startsWith("index");
  });

  projectFiles.forEach((filename) => {
    readFile(
      `./src/projects/${filename}`,
      async (error: Error, fileContents) => {
        if (error) {
          throw new Error(
            `Unable to read file. Error message: ${error.message}`
          );
        }

        const { data: frontMatter } = frontmatter(fileContents);

        if (
          frontMatter.repository &&
          frontMatter.repository.startsWith("https://github.com/")
        ) {
          const ORG_AND_REPO: string = frontMatter.repository.replace(
            "https://github.com/",
            ""
          );

          const GITHUB_API_URL: string = `https://api.github.com/repos/${ORG_AND_REPO}`;

          const OPEN_ISSUES_API_URL = `https://api.github.com/search/issues?q=repo:${ORG_AND_REPO}%20is:issue%20is:open`;

          const {
            language,
            archived,
            license,
            updated_at,
            html_url,
          }: GithubResponseType = await fetchGithubRepoData(GITHUB_API_URL);

          const { total_count: open_issues_count } = await fetchOpenIssues(
            OPEN_ISSUES_API_URL
          );

          const extractedData: RepoDataType = {
            language: language,
            is_archived: archived,
            license: license ? license.spdx_id : "",
            open_issues_count: open_issues_count,
            updated_at: updated_at,
            html_url: html_url,
          };

          githubData.repos[extractedData["html_url"]] = extractedData;
          let stringifiedData = JSON.stringify(githubData);
          writeFileSync("./src/_data/githubData.json", stringifiedData);
          console.info(`Successfully fetched data for: ${ORG_AND_REPO}`);
        }
      }
    );
  });
});
