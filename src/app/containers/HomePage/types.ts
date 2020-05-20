
/* --- STATE --- */
export interface IHomePageFormState {
  loading: boolean;
  error?: RepoErrorType | null;
  gender: Object[],
  movies: Object[]
}

export enum RepoErrorType {
  RESPONSE_ERROR = 1,
  REQUEST_NOT_FOUND = 2,
  INVALID_API_KEY = 3,
  REQUEST_HAS_NO_REPO = 4,
}

// /*
//   If you want to use 'ContainerState' keyword everywhere in your feature folder, 
//   instead of the 'HomePageState' keyword.
// */
// export type ContainerState = GithubRepoFormState;
