import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddTargetForm from './components/add-target-form/AddTargetForm.tsx';
import { dialogStyle, dialogTitleStyle } from './styles.ts';
import { AddTargetDialogProps } from './types.ts';

const AddTargetDialog = ({ showAddTargetDialog, handleClose }: AddTargetDialogProps) => {
  return (
    <Dialog sx={dialogStyle} onClose={handleClose} open={showAddTargetDialog}>
      <DialogTitle sx={dialogTitleStyle}>
        <Typography sx={{ color: '#6b7280', fontSize: 40 }}>הוספת מטרה</Typography>
        <IconButton sx={{ position: 'absolute', top: 16, left: 20, color: '#6b7280' }}
                    children={<CloseIcon fontSize="large" />} onClick={handleClose} />
      </DialogTitle>
      <DialogContent>
        <AddTargetForm closeAddTargetForm={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default AddTargetDialog;
