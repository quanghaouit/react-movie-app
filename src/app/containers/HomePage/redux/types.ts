
interface IPageResponse {
  page: number;
  total_results: number;
  total_pages: number;
}

interface IMovie {
  popularity : number;
  vote_count : number;
  video : Boolean;
  poster_path : String;
  id : number;
  adult : Boolean;
  backdrop_path: String;
  original_language : String;
  original_title : String;
  genre_ids : number[];
  title : String;
  vote_average: number;
  overview : String;
  release_date: String;
}

export interface IMoviePageResponse extends IPageResponse {
  results: IMovie[];
}

interface IGenre {
  id: number;
  name: String;
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