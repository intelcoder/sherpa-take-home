import { createAction, props  } from '@ngrx/store';


export const checkVisa = createAction('[Visa Page] Check Visa');

export const UPDATE_CITIZEN_SHIPE = '[Check Visa] update citizenship';
export const updateCitizenShip = createAction(
  UPDATE_CITIZEN_SHIPE,
  props<{citizenship: string}>()
)

const UPDATE_ITINNERARIES = '[Apply Visa] update itinerary';
export const updateItineraries = createAction(
  UPDATE_ITINNERARIES,
  props<{newItineraries: {
    destinationCountry: string,
    arrivalAirportCode: string,
    arrivalDate: string,
    arrivalTime: string,
  }[]}>()
)

const UPDATE_LANGUAGE =  '[Apply Visa] update default language';
export const updateLanguage = createAction(
  UPDATE_LANGUAGE,
  props<{langauge: string}>()
)

export const UPDATE_VISA_STATUS = '[Apply Visa] UPDATE_VISA_STATUS';
export const updateVisaStatus = createAction(
  UPDATE_VISA_STATUS,
  props<{result: any}>()
)

