export interface Patient{
  resourceType?: string,
  id: string,
  text: StandardText,
  identifier?: Identifier[],
  active?: boolean,
  name?: HumanName[],
  telecom?: ContactPoint[],
  gender?: "male" | "female" | "other" | "unknown",
  birthDate?: string,
  deceasedBoolean?: boolean,
  deceasedDateTime?: string,
  address?: Address[]
  maritalStatus?: CodeableConcept,
  multipleBirthBoolean?: boolean,
  multipleBirthInteger?: number,
  photo?: Attatchment,
  generalPractitioner?: Reference,
  managingOrganization?: Reference

}

export interface Identifier{
  use?: "usual" | "official" | "temp" | "secondary" | "old",
  type?: CodeableConcept,
  system?: string,
  value?: string,
  period?: Period,
  assigner?: Reference
}

export interface CodeableConcept {
  text?: string,
  coding?: Coding[],
  system?: string,
  value?: string,
  period?: Period
  assigner?: Reference
}
export interface Coding{
  system?: string,
  version?: string,
  code?: string,
  display?: string,
  userSelected?: boolean
}

export interface Period{
  start?: string,
  end?: string
}
export interface HumanName{
  use?: "usual" | "official" | "temp" | "nickname" | "anonymous" | "old" | "maiden",
  text?: string,
  family?: string,
  given?: string[],
  prefix?: string[],
  suffix?: string[],
  period?: Period
}
export interface Reference{
  reference?: string,
  type?: string,
  identifier?: Identifier,
  display?: string

}
export interface ContactPoint{
  system?: "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other",
  value?: string,
  use?: 	"home" | "work" | "temp" | "old" | "mobile",
  rank?: number, // only positive
  period?: Period
}
export interface StandardText{
  status: string,
  div: string
}
export interface Address{
  use?: "home" | "work" | "temp" | "old" | "billing",
  type?: "postal" | "physical" | "both",
  text?: string,
  line?: string[],
  city?: string,
  district?: string,
  state?: string,
  postalCode?: string,
  country?: string,
  period?: Period
}
export interface Attatchment{
  contentType?: string,
  language?: string,
  data?: string,
  url?: string,
  size?: number,
  hash?: string,
  title?: string,
  creation?: string
}
