
import { createAction, props  } from '@ngrx/store';

const SET_THEME = 'SET_THEME';

export const setTheme = createAction(
  SET_THEME,
  props<{ themeName: string }>()
);