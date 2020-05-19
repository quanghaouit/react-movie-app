// Copied from '@octokit/rest'
interface ReposListForksResponseItem {
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
}

export interface Repo extends ReposListForksResponseItem {
  forks: number;
  open_issues: number;
  watchers: number;
}
