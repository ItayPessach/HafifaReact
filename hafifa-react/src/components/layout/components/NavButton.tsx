import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {LinkItem as NavButtonProps} from "../types.ts";
import '../styles.css';

const NavButton = ({path, title}: NavButtonProps) => {
    return (
        <NavLink to={path} className={({ isActive }) => (isActive ? 'nav-item active-link' : 'nav-item')}>
            <Button sx={{paddingBottom: "0", '&:hover .MuiTypography-root': { fontWeight: 'bold' }, marginTop: 1}}>
                <Typography variant="h5" sx={{color: "#1e3a8a"}}>{title}</Typography>
            </Button>
        </NavLink>
    );
}

export default NavButton;