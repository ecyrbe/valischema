import {
  // any validation
  CustomValidation,
  CustomValidationAsync,
  // string validation
  ImeiValidation,
  EmailValidation,
  UrlValidation,
  RegexValidation,
  IpValidation,
  Ipv4Validation,
  Ipv6Validation,
  UuidValidation,
  UlidValidation,
  Cuid2Validation,
  EmojiValidation,
  BytesValidation,
  MinBytesValidation,
  MaxBytesValidation,
  IsoDateValidation,
  IsoTimeValidation,
  IsoWeekValidation,
  StartsWithValidation,
  EndsWithValidation,
  NotBytesValidation,
  IsoDateTimeValidation,
  IsoTimestampValidation,
  IsoTimeSecondValidation,
  // string or array validation
  LengthValidation,
  MinLengthValidation,
  MaxLengthValidation,
  NotLengthValidation,
  IncludesValidation,
  ExcludesValidation,
  // string, number, boolean, bigint  validation
  EqualValidation,
  //  string, number, boolean, bigint, Date validation
  ValueValidation,
  MinValueValidation,
  MaxValueValidation,
  NotValueValidation,
  // number validation
  IntegerValidation,
  SafeIntegerValidation,
  FiniteValidation,
  MultipleOfValidation,
  // blob validation
  MimeTypeValidation,
  // blob, map, set validation
  SizeValidation,
  NotSizeValidation,
  MaxSizeValidation,
  MinSizeValidation,
} from "valibot";

export type GenericStringValidation =
  | ImeiValidation<string>
  | EmailValidation<string>
  | UrlValidation<string>
  | RegexValidation<string>
  | IpValidation<string>
  | Ipv4Validation<string>
  | Ipv6Validation<string>
  | UuidValidation<string>
  | UlidValidation<string>
  | Cuid2Validation<string>
  | EmojiValidation<string>
  | BytesValidation<string, number>
  | MinBytesValidation<string, number>
  | MaxBytesValidation<string, number>
  | IsoDateValidation<string>
  | IsoTimeValidation<string>
  | IsoWeekValidation<string>
  | StartsWithValidation<string, string>
  | EndsWithValidation<string, string>
  | NotBytesValidation<string, number>
  | IsoDateTimeValidation<string>
  | IsoTimestampValidation<string>
  | IsoTimeSecondValidation<string>
  | LengthValidation<string, number>
  | MinLengthValidation<string, number>
  | MaxLengthValidation<string, number>
  | NotLengthValidation<string, number>
  | IncludesValidation<string, string>
  | ExcludesValidation<string, string>
  | EqualValidation<string, string>
  | ValueValidation<string, string>
  | MinValueValidation<string, string>
  | MaxValueValidation<string, string>
  | NotValueValidation<string, string>;

export type GenericNumberValidation =
  | IntegerValidation<number>
  | SafeIntegerValidation<number>
  | FiniteValidation<number>
  | MultipleOfValidation<number, number>
  | ValueValidation<number, number>
  | MinValueValidation<number, number>
  | MaxValueValidation<number, number>
  | NotValueValidation<number, number>
  | EqualValidation<number, number>;

export type GenericArrayValidation =
  | LengthValidation<any[], number>
  | MinLengthValidation<any[], number>
  | MaxLengthValidation<any[], number>
  | NotLengthValidation<any[], number>
  | IncludesValidation<any[], any>
  | ExcludesValidation<any[], any>;

export type GenericBooleanValidation =
  | ValueValidation<boolean, boolean>
  | EqualValidation<boolean, boolean>
  | ValueValidation<boolean, boolean>
  | MinValueValidation<boolean, boolean>
  | MaxValueValidation<boolean, boolean>;
