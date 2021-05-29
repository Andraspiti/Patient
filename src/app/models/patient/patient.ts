export interface Patient {
  id?: string,
  name: string,
  telecom?: string,
  gender: Gender,
  birthDate?: string,
  address?: Address
}

export interface Address {
  line: string,
  city: string,
  postalCode?: number,
  country?: string,
}

export enum Gender {
  male = "male",
  female = "female",
  other = "other",
  unknown = "unknown"
}
