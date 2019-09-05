
export interface EntryRequirementType {
  visa: {
    country2: string,
    allowedStay: string,
    allowed_stay: string,
    allowedStayInDays: number,
    requirement: string,
    notes: string[],
    type: string,
    portRestriction: boolean,
    textual: {
      class: string,
      text: string[],
    },
    available: boolean,
    availableVisas: {
      applicationCode: string,
      name: string,
      productRedirectUrl: string,
    }[],
  }[],
  passport: {
    passport_validity: string,
    blank_pages: string,
    textual: {
      passport_validity: {
        class: string,
        text: string[],
      },
      blank_pages:  {
        class: string,
        text: string[],
      },
    }
  },
  currency: {
    exit: string,
  },
  vaccination: {
    risk: {
      type: string,
    }[],
    recommended: {
      type: string,
    }[],
  }
 }
export interface EntryRequirementListType {
  isFetching: boolean,
  entryRequirements: EntryRequirementType[],
};