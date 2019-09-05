import { selectAppApplyVisaConfig } from './../index';
import { createSelector } from '@ngrx/store';
import { selectEntryRequirements } from '../index';

export const selectTheme = createSelector(
  selectAppApplyVisaConfig,
  state => state.themeName,
);

