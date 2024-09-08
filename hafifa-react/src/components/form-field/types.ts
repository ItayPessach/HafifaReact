export interface FormFieldConfig {
  name: string;
  label: string;
  validate?: (str: string) => boolean;
  errorMessage?: string;
  isSelect?: boolean;
  items?: Array<string>;
}

export interface FormFieldProps extends FormFieldConfig {
  value: string;
  handleInput: ({ name, value }: { name: string; value: string }) => void;
}
