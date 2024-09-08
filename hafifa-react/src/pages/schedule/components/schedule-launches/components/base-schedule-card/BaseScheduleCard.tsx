import { Paper, Typography } from '@mui/material';
import { BaseScheduleCardProps } from './types.ts';
import { BaseScheduleCardContainerStyle } from './styles.ts';

const BaseScheduleCard = ({ title, children }: BaseScheduleCardProps) => {
  return (
    <Paper sx={BaseScheduleCardContainerStyle}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3f3f46' }}>{title}</Typography>
      {children}
    </Paper>
  );
};

export default BaseScheduleCard;
