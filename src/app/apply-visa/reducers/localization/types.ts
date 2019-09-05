

export interface CountryType {
  name: string,
  alpha_2: string,
  alpha_3: string,
};

export interface LocalizationType {
  countries: CountryType[],
  localization: any,
  countriesMap: string[],
};