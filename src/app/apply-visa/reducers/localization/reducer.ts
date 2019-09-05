import { Action, createReducer, on } from '@ngrx/store';
import { loadLocalization, loadLocalizationSuccess } from './actions';
import { LocalizationType } from '../localization/types';


const initalState = {
  countries: [],
  localization: {},
  countriesMap: {},
};

export const localizationReducer = createReducer(
  initalState,
  on(loadLocalization, state => state),
  on(loadLocalizationSuccess, (state, action) => {
    return {
      ...state,
      countriesMap: action.countriesMap,
      localization: action.localization,
    };
  })
);


export function reducer(state: LocalizationType | undefined, action: Action) {
  return localizationReducer(state, action);
}
