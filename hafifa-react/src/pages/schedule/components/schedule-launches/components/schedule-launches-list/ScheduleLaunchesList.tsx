import Stack from '@mui/material/Stack';
import { useScheduleApi } from '@api/hooks';
import BaseScheduleCard from '../../components/base-schedule-card/BaseScheduleCard.tsx';
import ScheduleListItem from './components/schedule-list-item/ScheduleListItem.tsx';

const ScheduleLaunchesList = () => {
  const { useGetSchedules } = useScheduleApi();

  const { data, isSuccess } = useGetSchedules();

  return (
    <BaseScheduleCard title="תזמוני שיגורים">
      <Stack sx={{ maxHeight: '30vh', overflowY: 'auto', px: 2, width: '60%', mt: 2, overflowX: 'hidden' }}>
        {isSuccess && data.map(({ targetName, date, comments }) =>
          <ScheduleListItem key={`${targetName}${date}`} targetName={targetName} date={date}
                            comments={comments} />)}
      </Stack>
    </BaseScheduleCard>
  );
};

export default ScheduleLaunchesList;
