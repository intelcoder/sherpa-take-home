export interface LocalizationType {
  countries: {
    name: string,
    alpha_2: string,
    alpha_3: string,
  }[],
  localization: any,
  countriesMap: string[],
}