import { createReducer, Action, on } from '@ngrx/store';
import { setTheme } from './actions';

export interface AppApplyVisaType {
  themeName: string,
}

const initialState : AppApplyVisaType = {
  themeName: 'default'
};

export const appApplyVisaReducer = createReducer(
  initialState,
  on(setTheme, (state, action) => {
    return {
      ...state,
      themeName: action.themeName,
    };
  }),
);


export function reducer(state: AppApplyVisaType | undefined, action: Action) {
  return appApplyVisaReducer(state, action);
}
