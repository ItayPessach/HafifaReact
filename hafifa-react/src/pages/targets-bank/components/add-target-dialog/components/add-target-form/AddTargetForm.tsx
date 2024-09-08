import { FormEvent, useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { config } from '@config';
import FormField from '@components/form-field/FormField.tsx';
import { useToast } from '@hooks';
import { FormFieldConfig, TargetDto as FormData } from '@types';
import { useTargetApi } from '@api/hooks';
import { isNotEmpty, isPositiveNumber } from '@utils';
import { AddTargetFormProps } from './types.ts';
import { formFields } from './config.ts';
import { isValidTargetName } from './utils.ts';


const AddTargetForm = ({ closeAddTargetForm }: AddTargetFormProps) => {
  const queryClient = useQueryClient();
  const { showErrorToast } = useToast();
  const { useCreateTarget } = useTargetApi();

  const { mutateAsync } = useCreateTarget();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    lat: '',
    lng: '',
    targetType: '',
  });

  const handleRefetchTargets = async () => {
    await queryClient.invalidateQueries({ queryKey: ['targets'] });
  };


  const handleInputChange = ({ name, value }: { name: string, value: string }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync({ method: 'POST', url: `${config.backendBaseUrl}/targets`, data: formData });
      closeAddTargetForm();
      await handleRefetchTargets();
    } catch (err) {
      showErrorToast('שם מטרה כבר קיים, אנא נסה שם אחר');
      console.log(err);
    }
  };


  return (
    <Stack gap={4} mt={6} sx={{ position: 'relative' }}>
      {formFields.map(({ name, label, validate, errorMessage, isSelect, items }: FormFieldConfig) =>
        <FormField
          key={name}
          name={name}
          label={label}
          validate={validate}
          value={formData[name]}
          handleInput={handleInputChange}
          errorMessage={errorMessage}
          isSelect={isSelect}
          items={items}
        />,
      )
      }
      <Button
        type="submit"
        onClick={handleSubmit}
        variant="contained"
        disableElevation
        disabled={!isValidTargetName(formData.name) || !isPositiveNumber(formData.lat) || !isPositiveNumber(formData.lng) || !isNotEmpty(formData.targetType)}
        sx={{
          borderRadius: 8,
          width: '30%',
          m: 'auto',
          mt: 2,
          bgcolor: '#7dd3fc',
        }}
      >
        <Typography variant="h6" sx={{ color: 'black' }}>שמירה</Typography>
      </Button>
    </Stack>
  );
};

export default AddTargetForm;
