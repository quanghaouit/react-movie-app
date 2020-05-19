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
import { IMovieFormState, RepoErrorType } from './types';
import { Repo } from 'types/Repo';

// The initial state of the GithubRepoForm container
export const initialState: IMovieFormState = {
  loading: false,
  error: null,
  numberLst: [],
  numberStr: [],
};

const movieRepoFormSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addArrayAndStr(
      state,
      action: PayloadAction<{ a: number; b: string; c?: string }>,
    ) {
      const a = action.payload.a;
      const b = action.payload.b;
      state.numberLst.push(a);
      state.numberStr.push(b);
    },
    loadRepos(state) {
      state.loading = true;
      state.error = null;
      state.numberLst = [];
    },
    reposLoaded(state, action: PayloadAction<any>) {
      const repos = action.payload;
      state.numberLst = repos;
      state.loading = false;
    },
    repoError(state, action: PayloadAction<RepoErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = movieRepoFormSlice;
