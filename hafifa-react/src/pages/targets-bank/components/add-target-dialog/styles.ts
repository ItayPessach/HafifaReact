import { SxProps } from '@mui/material';

export const dialogStyle: SxProps = {
  '& .MuiDialog-paper': {
    borderRadius: 10, // Rounded corners for the dialog
    bgcolor: '#f0f0f0', // Background color of the dialog
    height: '70%',
    width: '50%',
    overflow: 'hidden',
  },
};

export const dialogTitleStyle: SxProps = {
  width: '100%',
  height: '15%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  p: 0,
  bgcolor: '#7dd3fc',
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
};
