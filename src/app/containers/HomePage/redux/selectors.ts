import { RootState } from 'types';
import { initialState } from './slice';
import { createSelector } from '@reduxjs/toolkit';

// // First select the relevant part from the state
const selectDomain = (state: RootState) => state.homepage || initialState;

export const selectNumber = createSelector(
  [selectDomain],
  homepageState => homepageState.gender,
);

export const selectString = createSelector(
  [selectDomain],
  homepageState => homepageState.movies,
);

// export const selectError = createSelector(
//   [selectDomain],
//   githubRepoFormState => githubRepoFormState.error,
// );

// export const selectRepos = createSelector(
//   [selectDomain],
//   githubRepoFormState => githubRepoFormState.repositories,
// );

// export {}
