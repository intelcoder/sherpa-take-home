import { selectTravelInfo } from '../index';
import { createSelector } from '@ngrx/store';
import { itineraries } from '../../components/apply-visa/inputData';


export const selectLanaugage = createSelector(
  selectTravelInfo,
  state => state.language,
)

export const selectDefaultNationality = createSelector(
  selectTravelInfo,
  state => state.defaultNationalityCountry,
)

export const selectFieldForEntryRequirements = createSelector(
  selectTravelInfo,
  state => {
    const { defaultNationalityCountry, language, itinerary, affiliateId } = state
    return {
      citizenship: defaultNationalityCountry,
      language,
      itinerary,
      affiliateId,
    }
  }
)