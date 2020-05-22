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
  type:'popular',
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
      state.page = 1;
    },
    pageIncrease(state, action: PayloadAction<number>) {
      state.loading = true;
      state.error = null;
      const repos = action.payload;
      state.page = repos;
    },
    loadingPage(state, action: PayloadAction<any>){
      state.loading = false;
      state.error = null;
      const repos = action.payload;
      state.movies = state.movies.concat(repos);
      state.page = 1;
    },
    loadGenres(state) {
      state.loading = true;
      state.error = null;
    },
    loadPopular(state) {
      state.loading = true;
      state.error = null;
      state.type = 'popular';
    },
    loadUpComming(state) {
      state.loading = true;
      state.error = null;
      state.type = 'upcoming';
    },
    loadTopRated(state) {
      state.loading = true;
      state.error = null;
      state.type = 'top_rated';
    },
    resError(state, action: PayloadAction<ResErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homepageFormSlice;
