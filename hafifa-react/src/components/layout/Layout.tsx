import { Outlet } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import NavButton from './components/nav-button/NavButton.tsx';
import { routes } from '@config';

const Layout = () => {
  return (
    <>
      <AppBar position="static" color="secondary" elevation={12}>
        <Toolbar sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="h5" color="primary" marginInlineStart={1} fontWeight="bold">
            סימולטור אופל
          </Typography>
          <Box sx={{ display: 'flex', gap: 4, height: '100%', alignItems: 'center', marginInlineEnd: 6 }}>
            {routes.map(({ path, title }) => (
              <NavButton path={path} title={title} key={title} />
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>

  );
};

export default Layout;
