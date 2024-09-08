import Stack from '@mui/material/Stack';
import AddScheduleForm from './components/add-schedule-form/AddScheduleForm.tsx';
import ScheduleLaunchesList from './components/schedule-launches-list/ScheduleLaunchesList.tsx';

const ScheduleLaunches = () => {
  return (
    <Stack spacing={2} height="100%">
      <AddScheduleForm />
      <ScheduleLaunchesList />
    </Stack>
  );
};

export default ScheduleLaunches;
