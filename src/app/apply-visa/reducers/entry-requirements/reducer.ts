import { Action, createReducer, on } from '@ngrx/store'
import { EntryRequirementType, EntryRequirementListType } from './types';
import * as entryRequirementsActions from './actions'


export const initialState: EntryRequirementListType = {
  entryRequirements: [],
  isFetching: false,
};

export const entryRequirementReducer = createReducer(
  initialState,
  on(entryRequirementsActions.checkEntryRequirements, (state) => {
    return {
      ...state,
      isFetching: true,
    };
  }),
  on(entryRequirementsActions.checkEntryRequirementsSuccess, (state, action) => {
    const { requirements } = action;
    return {
      ...state,
      isFetching: false,
      entryRequirements: requirements,
    };
  })
);

export function reducer(state: EntryRequirementListType | undefined, action: Action) {
  return entryRequirementReducer(state, action);
}
