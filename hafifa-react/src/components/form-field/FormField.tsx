import { ChangeEvent } from 'react';
import { Box, MenuItem, SxProps, TextField, Typography } from '@mui/material';
import { FormFieldProps } from './types.ts';
import { formFieldStyle } from './styles.ts';

const FormField = ({
                     name,
                     label,
                     validate,
                     errorMessage,
                     isSelect,
                     value,
                     handleInput,
                     items,
                     style,
                   }: FormFieldProps & { style: SxProps }) => {
  return (
    <Box sx={{ ...formFieldStyle, ...style }}>
      <Typography variant="h5" textAlign="center" sx={{ color: '#164e63' }} mt={1}>{label}:</Typography>
      {isSelect ?
        <TextField
          sx={{ width: '60%' }}
          value={value}
          select
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput({ name, value: e.target.value })}
          variant="outlined"
          error={validate ? !validate(value) : false}
          helperText={validate ? (!validate(value) ? errorMessage : '') : ''}
        >
          {items!.map((type: string) => <MenuItem key={type} value={type}>{type}</MenuItem>)}
        </TextField>
        :
        <TextField
          sx={{ width: '60%' }}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput({ name, value: e.target.value })}
          variant="outlined"
          error={validate ? !validate(value) : false}
          helperText={validate ? (!validate(value) ? errorMessage : '') : ''}
        />
      }
    </Box>
  );
};

export default FormField;
