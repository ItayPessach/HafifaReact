import { useState } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddTargetDialog from '../add-target-dialog/AddTargetDialog.tsx';
import { addTargetBtnStyle, headerContainerStyle } from './styles.ts';

const Header = () => {
  const [showAddTargetDialog, setShowAddTargetDialog] = useState(false);

  const handleClose = () => setShowAddTargetDialog(false);

  return (
    <>
      <Paper sx={headerContainerStyle} elevation={12}>
        <Typography variant="h4" color="#155e75" sx={{ fontWeight: 600 }}>סקירת בנק המטרות</Typography>
        <Button sx={addTargetBtnStyle} variant="contained" disableElevation
                onClick={() => setShowAddTargetDialog(true)}>
          <AddOutlinedIcon sx={{ fontSize: 30 }} />
          <Typography variant="h5">הוספת מטרה</Typography>
        </Button>
      </Paper>
      <AddTargetDialog showAddTargetDialog={showAddTargetDialog} handleClose={handleClose} />
    </>
  );
};

export default Header;
