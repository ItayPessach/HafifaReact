import { TargetType } from '@types';
import { isNotEmpty, isPositiveNumber } from '@utils';
import { FormFieldConfig } from '@components/form-field/types.ts';
import { isValidTargetName } from './utils.ts';

export const formFields: Array<FormFieldConfig> = [
  {
    name: 'name',
    label: 'שם המטרה',
    validate: isValidTargetName,
    errorMessage: 'שם המטרה חייב להכיל בין 4 ל10 אותיות בעברית',
    isSelect: false,
  },
  {
    name: 'lat',
    label: 'קו אורך',
    validate: isPositiveNumber,
    errorMessage: 'קו אורך חייב להיות מספר חיובי',
    isSelect: false,
  },
  {
    name: 'lng',
    label: 'קו רוחב',
    validate: isPositiveNumber,
    errorMessage: 'קו רוחב חייב להיות מספר חיובי',
    isSelect: false,
  },
  {
    name: 'targetType',
    label: 'סוג',
    validate: isNotEmpty,
    errorMessage: 'סוג מטרה שדה חובה',
    isSelect: true,
    items: Object.values(TargetType),
  },
];
