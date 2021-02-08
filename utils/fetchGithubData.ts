import {
  GithubDataType,
  RepoDataType,
  GithubLicenseType,
  GithubResponseType,
} from "./types";

const fs = require("fs");
const frontmatter = require("@github-docs/frontmatter");
const { fetchGithubRepo: fetchGithubRepoData } = require("./requests.ts");

console.info("Fetching GitHub repository data...");

const githubData: GithubDataType = {
  timestamp: new Date(),
  repos: {},
};

fs.readdir("./src/projects", (error: Error, filenames: string[]) => {
  if (error) {
    throw new Error(
      `Unable to scan directory. Error message: ${error.message}`
    );
  }

  const projectFiles = filenames.filter((filename) => {
    return !filename.startsWith("index");
  });

  projectFiles.forEach((filename) => {
    fs.readFile(
      `./src/projects/${filename}`,
      // TODO: type fileContents
      (error: Error, fileContents) => {
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

          fetchGithubRepoData(API_URL)
            .then(
              ({
                language,
                archived,
                license,
                open_issues_count,
                updated_at,
                html_url,
              }: GithubResponseType) => {
                const extractedData: RepoDataType = {
                  language: language,
                  is_archived: archived,
                  license: license ? license.spdx_id : null,
                  open_issues_count: open_issues_count,
                  updated_at: updated_at,
                  html_url: html_url,
                };
                githubData.repos[extractedData["html_url"]] = extractedData;
                let stringifiedData = JSON.stringify(githubData);
                fs.writeFileSync(
                  "./src/_data/githubData.json",
                  stringifiedData
                );
                console.info(`Successfully fetched data for: ${API_URL}`);
              }
            )
            .catch((error: Error) => {
              throw new Error(
                `Unable to process fetch script: ${error.message}`
              );
            });
        }
      }
    );
  });
});
