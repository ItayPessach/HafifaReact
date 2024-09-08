import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Route } from '@types';
import { activeNavItemStyle, navItemStyle } from './styles.ts';

const NavButton = ({ path, title }: Route) => {
  return (
    <NavLink to={path} style={({ isActive }) => (isActive ? activeNavItemStyle : navItemStyle)}>
      <Button sx={{
        paddingBottom: '0',
        '&:hover .MuiTypography-root': { fontWeight: 'bold' },
        marginTop: 1,
        width: '9vw',
      }}>
        <Typography variant="h5" sx={{ color: '#164e63' }}>{title}</Typography>
      </Button>
    </NavLink>
  );
};

export default NavButton;
