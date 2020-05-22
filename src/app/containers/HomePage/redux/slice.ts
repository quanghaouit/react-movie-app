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
import { IHomePageState, ResErrorType } from './types';
import _ from 'lodash';
import { IGenre } from 'types/movie';

// The initial state of the GithubRepoForm container
export const initialState: IHomePageState = {
  loading: false,
  error: null,
  page: 1,
  genres: [],
  movies: [],
};

const homepageFormSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    genresLoaded(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.genres = action.payload;
    },
    moviesLoaded(state, action: PayloadAction<any>) {
      const repos = action.payload;
      state.loading = false;
      state.movies = repos;
    },
    pageIncrease(state) {
      state.page = state.page + 1;
    },
    loadApi(state) {
      state.loading = true;
      state.error = null;
    },
    loadgetTopRated() {
      // state.loading = true;
      // state.error = null;
    },
    resError(state, action: PayloadAction<ResErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homepageFormSlice;
