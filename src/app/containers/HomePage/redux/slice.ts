/*
 * GithubRepoForm Slice
 *
 * Here we define:
 * - The shape of our container's slice of Redux store,
 * - All the actions which can be triggered for this slice, including their effects on the store.
 *
 * Note that, while we are using dot notation in our reducer, we are not actually mutating the state
 * manually. Under the hood, we use immer to apply these updates to a new copy of the state.
 * Please see https://immerjs.github.io/immer/docs/introduction for more information.
 *
 */

import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { IHomePageFormState, RepoErrorType } from './types';
// import { Repo } from 'types/Repo';

// The initial state of the GithubRepoForm container
export const initialState: IHomePageFormState = {
  loading: false,
  error: null,
  gender: [],
  movies: [],
};

const homepageFormSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    addArrayAndStr(state, action: PayloadAction<{ a: number; b: string; c?: string }>) {
      const a = action.payload.a;
      const b = action.payload.b;
      state.gender.push(a);
      state.movies.push(b);
    },
    loadRepos(state) {
      state.loading = true;
      state.error = null;
      state.gender = [];
    },
    reposLoaded(state, action: PayloadAction<any>) {
      const repos = action.payload;
      state.movies = repos;
      state.loading = false;
    },
    repoError(state, action: PayloadAction<RepoErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homepageFormSlice;
