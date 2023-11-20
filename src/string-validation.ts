import type { GenericStringValidation } from "./string-validation.types";
import {
  escapeStringForRegex,
  getRexExpString as getRegExString,
} from "./utils";

export function valibotStringValidationToJsonSchema<
  T extends GenericStringValidation,
>(
  validation: T,
  Option: {
    useJsonSchemaFormat?: boolean;
  }
) {
  switch (validation.type) {
    case "email":
      if (Option.useJsonSchemaFormat) {
        return { format: "email" };
      }
      return { pattern: getRegExString(validation.requirement) };

    case "url":
      return { format: "uri" };
    case "regex":
      return { pattern: getRegExString(validation.requirement) };
    case "imei":
      return { pattern: getRegExString(validation.requirement[0]) };
    case "ip":
      return {
        pattern: `(${getRegExString(
          validation.requirement[0]
        )})|(${getRegExString(validation.requirement[1])})`,
      };
    case "ipv4":
      if (Option.useJsonSchemaFormat) {
        return { format: "ipv4" };
      }
      return { pattern: getRegExString(validation.requirement) };
    case "ipv6":
      if (Option.useJsonSchemaFormat) {
        return { format: "ipv6" };
      }
      return { pattern: getRegExString(validation.requirement) };
    case "uuid":
      if (Option.useJsonSchemaFormat) {
        return { format: "uuid" };
      }
      return { pattern: getRegExString(validation.requirement) };
    case "ulid":
      return { pattern: getRegExString(validation.requirement) };
    case "cuid2":
      return { pattern: getRegExString(validation.requirement) };
    case "emoji":
      return { pattern: getRegExString(validation.requirement) };
    case "ends_with":
      return { pattern: `${escapeStringForRegex(validation.requirement)}$` };
    case "stars_with":
      return { pattern: `^${escapeStringForRegex(validation.requirement)}` };
    case "iso_date":
      if (Option.useJsonSchemaFormat) {
        return { format: "date" };
      }
      return { pattern: getRegExString(validation.requirement) };
    case "iso_time":
      if (Option.useJsonSchemaFormat) {
        return { format: "time" };
      }
      return { pattern: getRegExString(validation.requirement) };
    case "iso_date_time":
      if (Option.useJsonSchemaFormat) {
        return { format: "date-time" };
      }
      return { pattern: getRegExString(validation.requirement) };
    case "iso_time_second":
      return { pattern: getRegExString(validation.requirement) };
    case "iso_timestamp":
      return { pattern: getRegExString(validation.requirement) };
    case "iso_week":
      return { pattern: getRegExString(validation.requirement) };
    case "equal":
      return { const: validation.requirement };
    case "value":
      return { const: validation.requirement };
    case "not_value":
      return { not: { const: validation.requirement } };
    case "includes":
      return { pattern: escapeStringForRegex(validation.requirement) };
    case "excludes":
      return {
        not: { pattern: escapeStringForRegex(validation.requirement) },
      };
    case "length":
      return {
        minLength: validation.requirement,
        maxLength: validation.requirement,
      };
    case "max_length":
      return { maxLength: validation.requirement };
    case "min_length":
      return { minLength: validation.requirement };
    case "not_length":
      return {
        not: {
          minLength: validation.requirement,
          maxLength: validation.requirement,
        },
      };
    case "bytes":
    case "min_bytes":
    case "max_bytes":
    case "not_bytes":
    case "min_value":
    case "max_value":
      return; // not supported
  }
}
