import { IMovie, IGenre } from 'types/movie';
interface IPageResponse {
  page: number;
  total_results: number;
  total_pages: number;
}

export interface IMoviePageResponse extends IPageResponse {
  results: IMovie[];
}

export interface IGenres {
  genres: IGenre[];
}

/* --- STATE --- */
export interface IHomePageState {
  loading: boolean;
  error?: ResErrorType | null;
  page: number;
  genres: IGenre[];
  movies: IMovie[];
}

export enum ResErrorType {
  RESPONSE_ERROR = 1,
  REQUEST_NOT_FOUND = 2,
  INVALID_API_KEY = 3,
  REQUEST_HAS_NO_REPO = 4,
}
