import { LocalizationType } from './localization/types';
import { TravelInfoType } from './travel-info/types';
import { EntryRequirementListType } from './entry-requirements/types';
import * as entryRequirementReducer from './entry-requirements/reducer';
import * as travelInfoReducer from './travel-info/reducer';
import * as localizationReducer from './localization/reducer';
import * as appApplyVisaReducer from './app-apply-visa/reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppApplyVisaType } from './app-apply-visa/reducer';

export interface ApplyVisaModuleType {
  entryRequirements: EntryRequirementListType,
  travelInfo: TravelInfoType,
  localization: LocalizationType,
  appApplyVisaConfig: AppApplyVisaType,
}

export const reducers = {
  entryRequirements: entryRequirementReducer.reducer,
  travelInfo: travelInfoReducer.reducer,
  localization: localizationReducer.reducer,
  appApplyVisaConfig: appApplyVisaReducer.reducer
}

export const selectApplyVisaModule = createFeatureSelector<ApplyVisaModuleType>('applyVisaModule')
export const selectEntryRequirements = createSelector(
  selectApplyVisaModule,
  (state: ApplyVisaModuleType) => state.entryRequirements
)
export const selectTravelInfo = createSelector(
  selectApplyVisaModule,
  (state: ApplyVisaModuleType) => state.travelInfo,
)

export const selectLocalization = createSelector(
  selectApplyVisaModule,
  (state: ApplyVisaModuleType) => state.localization,
)
export const selectAppApplyVisaConfig = createSelector(
  selectApplyVisaModule,
  (state: ApplyVisaModuleType) => state.appApplyVisaConfig,
)
