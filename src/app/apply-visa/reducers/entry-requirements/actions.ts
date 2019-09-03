import { createAction, props  } from '@ngrx/store'
import { EntryRequirementType } from './types'
import { citizenships, itineraries } from '../../components/apply-visa/inputData';
import { ItineraryType } from '../travel-info/types';

interface CheckEntryRequirementPayload {
  citizenship: string,
  language: string,
  affiliateId: string,
  itinerary: ItineraryType[],
}
export const CHECK_ENTRY_REQUIREMENTS = 'CHECK_ENTRY_REQUIREMENTS'
export const checkEntryRequirements = createAction(
  CHECK_ENTRY_REQUIREMENTS,
  props<CheckEntryRequirementPayload>()
)

export const CHECK_ENTRY_REQUIREMENTS_SUCCESS = 'CHECK_ENTRY_REQUIREMENTS_SUCCESS'

export const checkEntryRequirementsSuccess = createAction(
  CHECK_ENTRY_REQUIREMENTS_SUCCESS,
  props<{ requirements: any }>()
)
export const CHECK_ENTRY_REQUIREMENTS_FAILURE = 'CHECK_ENTRY_REQUIREMENTS_FAILURE'

export const checkEntryRequirementsFailure = createAction(
  CHECK_ENTRY_REQUIREMENTS_FAILURE,
  props<{ error: any }>()
)