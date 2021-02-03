const fs = require("fs");
const frontmatter = require("@github-docs/frontmatter");
const { fetchGithubRepo: fetchGithubRepoData } = require("./requests.ts");

console.info("Fetching GitHub repository data...");

const githubData = {
  timestamp: new Date(),
  repos: {},
};

fs.readdir("./src/projects", (error, filenames) => {
  if (error) {
    throw new Error(
      `Unable to scan directory. Error message: ${error.message}`
    );
  }

  const projectFiles = filenames.filter((filename) => {
    return filename !== "index.liquid";
  });

  projectFiles.forEach((filename) => {
    fs.readFile(`./src/projects/${filename}`, (error, fileContents) => {
      if (error) {
        throw new Error(`Unable to read file. Error message: ${error.message}`);
      }

      const { data: frontMatter } = frontmatter(fileContents);

      if (
        frontMatter.repository &&
        frontMatter.repository.startsWith("https://github.com/")
      ) {
        const API_URL = frontMatter.repository.replace(
          "https://github.com/",
          "https://api.github.com/repos/"
        );

        fetchGithubRepoData(API_URL).then(
          ({
            language,
            archived,
            license,
            open_issues_count,
            updated_at,
            html_url,
          }) => {
            const extractedData = {
              language: language,
              is_archived: archived,
              license: license ? license.spdx_id : null,
              open_issues_count: open_issues_count,
              updated_at: updated_at,
              html_url: html_url,
            };
            githubData.repos[extractedData["html_url"]] = extractedData;
            let stringifiedData = JSON.stringify(githubData);
            fs.writeFileSync("./src/_data/githubData.json", stringifiedData);
            console.info(`Successfully fetched data for: ${API_URL}`);
          }
        );
      }
    });
  });
});
