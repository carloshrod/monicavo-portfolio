export const formatInputPhone = (value: string) => {
  let maskedValue = value.replace(/[^0-9]/g, "");

  if (maskedValue.startsWith("0") && maskedValue.length > 1) {
    maskedValue = maskedValue.slice(1);
  }

  return maskedValue;
};
