import { FormEvent } from 'react';
import dayjs from 'dayjs';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { config } from '@config';
import { useSessionStorage, useToast } from '@hooks';
import { useScheduleApi, useTargetApi } from '@api/hooks';
import FormField from '@components/form-field/FormField.tsx';
import BaseScheduleCard from '../base-schedule-card/BaseScheduleCard.tsx';

const AddScheduleForm = () => {
  const [formData, setFormData] = useSessionStorage('add-schedule-form-data', {
    targetName: '',
    date: dayjs(),
    comments: '',
  });

  const { showErrorToast, showSuccessToast } = useToast();
  const { useGetTargetsNames } = useTargetApi();
  const { useCreateSchedule } = useScheduleApi();

  const { data } = useGetTargetsNames();
  const { mutateAsync } = useCreateSchedule();

  const handleInputChange = ({ name, value }: { name: string, value: string }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {

    e.preventDefault();
    try {
      await mutateAsync({
        method: 'POST',
        url: `${config.backendBaseUrl}/scheduler`,
        data: { ...formData, date: formData.date.toString() },
      });
      showSuccessToast('תזמון השיגור נוסף בהצלחה');
    } catch (err) {
      showErrorToast('הייתה שגיאה בהוספת תזמון שיגור');
      console.log(err);
    }
  };


  return (
    <BaseScheduleCard title="הוספת תזמון שיגור">
      <Stack gap={4} mt={2} width="100%" height="60%">
        <FormField
          style={{ height: '20%' }}
          name="targetName"
          label="שם המטרה"
          value={formData['targetName']}
          handleInput={handleInputChange}
          isSelect
          items={data ?? []}
        />
        <Box sx={{
          display: 'flex',
          width: '60% !important',
          justifyContent: 'space-between',
          margin: 'auto !important',
          height: '20%',
        }}
        >
          <Typography variant="h5" textAlign="center" sx={{ color: '#164e63' }} mt={1}>שעת שיגור:</Typography>
          <DateTimePicker value={dayjs(formData.date)}
                          onChange={(newValue) => setFormData({ ...formData, date: newValue })} />
        </Box>
        <FormField
          style={{ height: '20% !important' }}
          name="comments"
          label="הערות"
          value={formData['comments']}
          handleInput={handleInputChange}
        />
        <Button
          style={{ height: '20%' }}
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          disableElevation
          sx={{
            borderRadius: 8,
            width: '20%',
            m: 'auto',
            bgcolor: '#0891b2',
          }}
        >
          <Typography variant="h5" sx={{ color: 'white' }}>תזמון</Typography>
        </Button>
      </Stack>
    </BaseScheduleCard>
  );
};

export default AddScheduleForm;
