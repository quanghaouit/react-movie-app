import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './slice';
import { Repo } from 'types/Repo';
import { RepoErrorType } from './types';

// getMovies: (category: string) => {
//   const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`
//   return axios.get(url).then(info => info.data)
// }

/**
 * movies request/response handler
 */
export function* getRepos() {
  yield delay(500);
  // Select username from store
  const apikey: string = 'a7b3c9975791294647265c71224a88ad';
  const requestURL = `https://api.themoviedb.org/4/list/1?api_key=${apikey}`;

  try {
    // Call our request helper (see 'utils/request')
    const repos: Repo[] = yield call(request, requestURL);
    if (repos?.length > 0) {
      yield put(actions.reposLoaded(repos));
    } else {
      yield put(actions.repoError(RepoErrorType.REQUEST_HAS_NO_REPO));
    }
  } catch (err) {
    if (err.response?.status === 404) {
      yield put(actions.repoError(RepoErrorType.REQUEST_NOT_FOUND));
    } else if (err.response?.status === 401) {
      yield put(actions.repoError(RepoErrorType.INVALID_API_KEY));
    } else {
      yield put(actions.repoError(RepoErrorType.RESPONSE_ERROR));
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
  yield takeLatest(actions.addArrayAndStr.type, getRepos);
}