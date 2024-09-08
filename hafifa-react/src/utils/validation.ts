export const isPositiveNumber = (value: string) => !isNaN(parseFloat(value)) && value >= 0;

export const isNotEmpty = (value: string) => value !== '';
