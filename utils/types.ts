export interface GithubResponseType {
  language: string | null;
  archived: Boolean;
  license: GithubLicenseType | null;
  open_issues_count: number;
  updated_at: string;
  html_url: string;
  // there is much more data coming:
  [key: string]: unknown;
}

export interface GithubLicenseType {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

type PickedGithubResponseKeys = Pick<
  GithubResponseType,
  "language" | "open_issues_count" | "updated_at" | "html_url"
>;

export interface RepoDataType extends PickedGithubResponseKeys {
  is_archived: Boolean;
  license: string | null;
}

type RepoObjectType = {
  [key: string]: RepoDataType;
};

export interface GithubDataType {
  timestamp: Date;
  repos: RepoObjectType | {};
}
