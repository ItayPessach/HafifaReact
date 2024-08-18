import {Box, Typography} from "@mui/material";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

function NotFound() {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 4,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <ErrorOutlineOutlinedIcon sx={{color: 'red', fontSize: '8rem'}} />
            <Typography variant="h2">Error 404</Typography>
            <Typography variant="h4">
                The page you were looking for doesn't exist
            </Typography>
        </Box>
    );
}

export default NotFound;