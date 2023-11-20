export function getRexExpString(regex: RegExp) {
  return regex.toString().split("/")[1];
}

export function escapeStringForRegex(string: string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

function haveIntersection<T>(array: T[], other: T[]) {
  return array.some((item) => other.includes(item));
}

function findValidation(
  validations: Array<Record<string, unknown>>,
  validation: Record<string, unknown>,
  keysToSkip?: string[]
) {
  const keys = Object.keys(validation);
  if (keysToSkip && haveIntersection(keys, keysToSkip)) return undefined;
  return validations.find((v) =>
    Object.keys(validation).every((key) => !(key in v))
  );
}

export function mergeValidations(
  validations?: Array<Record<string, unknown> | undefined>,
  keysToNotMerge?: string[]
) {
  if (validations) {
    const mergedValidations: Array<Record<string, unknown>> = [];
    for (const validation of validations) {
      if (!validation) continue;
      const availableMerge = findValidation(
        mergedValidations,
        validation,
        keysToNotMerge
      );
      if (availableMerge) {
        Object.assign(availableMerge, validation);
      } else {
        mergedValidations.push(validation);
      }
    }
    return mergedValidations;
  }
  return undefined;
}
