import { Box, Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { notFoundContainerStyle } from './styles.ts';

const NotFound = () => {
  return (
    <Box sx={notFoundContainerStyle}>
      <ErrorOutlineOutlinedIcon sx={{ color: 'red', fontSize: '8rem' }} />
      <Typography variant="h2">Error 404</Typography>
      <Typography variant="h4">
        The page you were looking for doesn't exist
      </Typography>
    </Box>
  );
};

export default NotFound;
