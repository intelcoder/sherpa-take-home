
export interface ItineraryType {
  destinationCountry: string,
  arrivalAirportCode: string,
  arrivalDate: string,
  arrivalTime: string,
}

export interface TravelInfoType {
  affiliateId: string,
  defaultNationalityCountry: string,
  finalAirportName: string,
  language: string,
  currency: string,
  itinerary: ItineraryType[],
  travellers: {
    givenNames: string,
    surname: string,
    dateOfBirth: string,
    nationality: string,
    countryOfBirth: string,
    placeOfBirth: string,
    passportIssuingCountry: string,
    passportNumber: string,
    passportIssueDate: string,
    passportExpiryDate: string,
    passportIssuingAuthority: string,
    sex: string,
    email: string,
    phoneType: string,
    phoneCountryCode: string,
    phoneNumber: string,
    residence: {
      streetNumber: string,
      street: string,
      streetLine2: string,
      unit: string,
      city: string,
      state: string,
      postalCode: string,
      country: string
    }
  }[]
}