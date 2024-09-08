import { Box, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { legendContainerStyle } from './styles.ts';

const Legend = () => {
  const legendOptions: Array<{ title: string; icon: any }> = [
    {
      title: 'מטרה אפשרית',
      icon: <RocketLaunchIcon />,
    },
    {
      title: 'שיגור עתידי',
      icon: <RocketLaunchIcon />,
    },
    {
      title: 'שיגור בדקה הקרובה',
      icon: <RocketLaunchIcon />,
    },
  ];

  return (
    <Box sx={legendContainerStyle}>
      {legendOptions.map(({ title, icon }) => (
        <Box key={title} sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
          {icon}
          <Typography variant="h5">{title}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Legend;
