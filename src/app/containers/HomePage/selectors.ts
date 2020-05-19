import { RootState } from 'types';
import { initialState } from './slice';
import { createSelector } from '@reduxjs/toolkit';

// // First select the relevant part from the state
const selectDomain = (state: RootState) => state.movie || initialState;

export const selectNumber = createSelector(
  [selectDomain],
  homepageState => homepageState.numberLst,
);

export const selectString = createSelector(
  [selectDomain],
  homepageState => homepageState.numberStr,
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
