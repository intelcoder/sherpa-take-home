import { createReducer } from '@ngrx/store';
import { createAction, props  } from '@ngrx/store';
import { LocalizationType } from './types';



export const LOAD_LOCALIZATION = '[apply visa]LOAD_LOCALIZATION';
export const loadLocalization = createAction(
  LOAD_LOCALIZATION,
  props<{ language: string }>()
);

export const LOAD_LOCALIZATION_SUCCESS = '[apply visa] LOAD_LOCALIZATION_SUCCESS';
export const loadLocalizationSuccess = createAction(
  LOAD_LOCALIZATION,
  props<LocalizationType>()
);
export const LOAD_LOCALIZATION_FAILURE = '[apply visa] LOAD_LOCALIZATION_FAILURE';