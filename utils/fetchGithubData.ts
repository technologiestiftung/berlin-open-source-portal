import { readdir, readFile, writeFileSync } from "fs";
const frontmatter = require("@github-docs/frontmatter"); // import syntax can't be used here currently
import { fetchGithubRepo as fetchGithubRepoData } from "./requests";

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
          const API_URL: string = frontMatter.repository.replace(
            "https://github.com/",
            "https://api.github.com/repos/"
          );

          const {
            language,
            archived,
            license,
            open_issues_count,
            updated_at,
            html_url,
          }: GithubResponseType = await fetchGithubRepoData(API_URL);

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
          console.info(`Successfully fetched data for: ${API_URL}`);
        }
      }
    );
  });
});
