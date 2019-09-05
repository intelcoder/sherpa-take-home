import { Action, createReducer, on } from '@ngrx/store';
import * as travelInfoActions from './actions';
import { TravelInfoType } from './types';

export const initialState: TravelInfoType = {
  affiliateId: 'icelandair',
  defaultNationalityCountry: 'CA',
  finalAirportName: 'JFK - John F. Kennedy International Airport',
  language: 'en',
  currency: 'CAN',
  itinerary: [
    {
      destinationCountry: 'US',
      arrivalAirportCode: '',
      arrivalDate: '2019-09-02T00:00:00.000Z',
      arrivalTime: '15:22'
    }
  ],
  travellers: [
    {
      givenNames: 'Jon',
      surname: 'Doe',
      dateOfBirth: '1985-07-11',
      nationality: 'AUS',
      countryOfBirth: 'AUS',
      placeOfBirth: 'Perth',
      passportIssuingCountry: 'AUS',
      passportNumber: 'N1231234',
      passportIssueDate: '2015-07-11',
      passportExpiryDate: '2025-07-11',
      passportIssuingAuthority: 'Australia',
      sex: 'M',
      email: 'jdoe@example.com',
      phoneType: 'MOBILE',
      phoneCountryCode: 'AU',
      phoneNumber: '1231231234',
      residence: {
        streetNumber: '11',
        street: 'Yonge Street',
        streetLine2: 'building2',
        unit: '1800',
        city: 'Perth',
        state: 'WA',
        postalCode: '9999',
        country: 'AUS'
      }
    }
  ]
}

export const visaCheckerReducer = createReducer(
  initialState,
  on(travelInfoActions.checkVisa, (state, action) => {
    return ({...state});
  }),
  on(travelInfoActions.updateCitizenShip, (state, action) => {
    return ({...state, defaultNationalityCountry: action.citizenship});
  }),
  on(travelInfoActions.updateLanguage, (state, action) => ({...state, language: action.langauge})),
  on(travelInfoActions.updateItineraries, (state, action) => ({...state, itinerary: action.newItineraries })),
)

export function reducer(state: TravelInfoType | undefined, action: Action) {
  return visaCheckerReducer(state, action);
}

