import { ScheduleDto as ScheduleListItemProps } from '@types';
import { Box, Divider, Stack, Typography } from '@mui/material';

const ScheduleListItem = ({ targetName, date, comments }: ScheduleListItemProps) => {
  return (
    <Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1 }}>
        <Stack>
          <Typography variant="h6" color="#3f3f46">{targetName}</Typography>
          <Typography variant="h6" color="##3f3f46">{new Date(date).toLocaleDateString('he-IL')}</Typography>
        </Stack>
        <Typography flexWrap width="40%" color="##3f3f46">{comments}</Typography>
      </Box>
      <Divider />
    </Stack>
  );
};

export default ScheduleListItem;
