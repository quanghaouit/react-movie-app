import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { selectLoadingPage } from './selectors';
import { actions } from './slice';
import { IMoviePageResponse, IGenres, ResErrorType } from './types';

/**
 * api request key
 */
const apikey: string = 'a7b3c9975791294647265c71224a88ad'; 
/**
 * movies request/response handler
 */
export function* getPageMovies() {
  yield delay(500);
  // Select username from store
  const requestURL = `https://api.themoviedb.org/4/list/1?api_key=${apikey}`;
  try {
    // Call our request helper (see 'utils/request')
    const repos: IMoviePageResponse = yield call(request, requestURL);
    if (repos?.results.length > 0) {
      yield put(actions.moviesLoaded(repos.results));
    } else {
      yield put(actions.resError(ResErrorType.REQUEST_HAS_NO_REPO));
    }
  } catch (err) {
    if (err.response?.status === 404) {
      yield put(actions.resError(ResErrorType.REQUEST_NOT_FOUND));
    } else if (err.response?.status === 401) {
      yield put(actions.resError(ResErrorType.INVALID_API_KEY));
    } else {
      yield put(actions.resError(ResErrorType.RESPONSE_ERROR));
    }
  }
}

/**
 * movies genre request/response handler
 */
export function* getGenres() {
  yield delay(500);
  // Select movie genres 
  const requestURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`;

  try {
    // Call our request helper (see 'utils/request')
    const repos: IGenres = yield call(request, requestURL);
    if (repos?.genres.length > 0) {
      yield put(actions.genresLoaded(repos.genres));
    } else {
      yield put(actions.resError(ResErrorType.REQUEST_HAS_NO_REPO));
    }
  } catch (err) {
    if (err.response?.status === 404) {
      yield put(actions.resError(ResErrorType.REQUEST_NOT_FOUND));
    } else if (err.response?.status === 401) {
      yield put(actions.resError(ResErrorType.INVALID_API_KEY));
    } else {
      yield put(actions.resError(ResErrorType.RESPONSE_ERROR));
    }
  }
}

/**
 * movies popular request/response handler
 */
export function* getPopular() {
  yield delay(500);
  const page: number = yield select(selectLoadingPage);
  // Select movie popular 
  const requestURL = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${apikey}`;

  try {
    // Call our request helper (see 'utils/request')
    const repos: IMoviePageResponse = yield call(request, requestURL);
    if (repos?.results.length > 0) {
      yield put(actions.moviesLoaded(repos.results));
    } else {
      yield put(actions.resError(ResErrorType.REQUEST_HAS_NO_REPO));
    }
  } catch (err) {
    if (err.response?.status === 404) {
      yield put(actions.resError(ResErrorType.REQUEST_NOT_FOUND));
    } else if (err.response?.status === 401) {
      yield put(actions.resError(ResErrorType.INVALID_API_KEY));
    } else {
      yield put(actions.resError(ResErrorType.RESPONSE_ERROR));
    }
  }
}

/**
 * movies up comming request/response handler
 */
export function* getUpcomming() {
  yield delay(500);
  const page: number = yield select(selectLoadingPage);
  // Select movie popular 
  const requestURL = `https://api.themoviedb.org/3/movie/upcoming?page=${page}&api_key=${apikey}`;

  try {
    // Call our request helper (see 'utils/request')
    const repos: IMoviePageResponse = yield call(request, requestURL);
    if (repos?.results.length > 0) {
      yield put(actions.moviesLoaded(repos.results));
    } else {
      yield put(actions.resError(ResErrorType.REQUEST_HAS_NO_REPO));
    }
  } catch (err) {
    if (err.response?.status === 404) {
      yield put(actions.resError(ResErrorType.REQUEST_NOT_FOUND));
    } else if (err.response?.status === 401) {
      yield put(actions.resError(ResErrorType.INVALID_API_KEY));
    } else {
      yield put(actions.resError(ResErrorType.RESPONSE_ERROR));
    }
  }
}

/**
 * movies top rated request/response handler
 */
export function* getTopRated() {
  yield delay(500);
  const page: number = yield select(selectLoadingPage);
  // Select movie popular 
  const requestURL = `https://api.themoviedb.org/3/movie/top_rated?page=${page}&api_key=${apikey}`;

  try {
    // Call our request helper (see 'utils/request')
    const repos: IMoviePageResponse = yield call(request, requestURL);
    if (repos?.results.length > 0) {
      yield put(actions.moviesLoaded(repos.results));
    } else {
      yield put(actions.resError(ResErrorType.REQUEST_HAS_NO_REPO));
    }
  } catch (err) {
    if (err.response?.status === 404) {
      yield put(actions.resError(ResErrorType.REQUEST_NOT_FOUND));
    } else if (err.response?.status === 401) {
      yield put(actions.resError(ResErrorType.INVALID_API_KEY));
    } else {
      yield put(actions.resError(ResErrorType.RESPONSE_ERROR));
    }
  }
}

// /**
//  * Root saga manages watcher lifecycle
//  */
export function* homeFormSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadApi.type, getGenres);
  yield takeLatest(actions.loadApi.type, getPopular);
}