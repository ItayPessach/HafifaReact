import { Grid } from '@mui/material';
import Legend from './components/legend/Legend.tsx';
import Map from './components/map/Map.tsx';
import ScheduleLaunches from './components/schedule-launches/ScheduleLaunches.tsx';

const Schedule = () => {
  return (

    <Grid container columnSpacing={6} rowSpacing={2} sx={{ margin: 'auto', width: '80%', px: 0 }}>
      <Grid height="fit-content" item xs={12}>
        <Legend />
      </Grid>
      <Grid item xs={6}>
        <ScheduleLaunches />
      </Grid>
      <Grid item xs={6}>
        <Map />
      </Grid>
    </Grid>
  );
};

export default Schedule;
