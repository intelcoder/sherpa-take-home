import { createSelector } from "@ngrx/store";
import { selectEntryRequirements } from '../index';

export const selectEntryRequirementList = createSelector(
  selectEntryRequirements,
  state => state.entryRequirements,
)

