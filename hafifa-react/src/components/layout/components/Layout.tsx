import {Outlet} from "react-router-dom";
import {AppBar, Box, Toolbar, Typography,} from "@mui/material";
import NavButton from "./NavButton";
import {LinkItem} from "../types.ts";

const Layout = () => {
    const pages: Array<LinkItem> = [
        {
            path: "/schedules",
            title: "תזמון שיגורים",
        },
        {
            path: "/targets-bank",
            title: "בנק מטרות",
        },
    ];


    return (
        <>
            <AppBar position="static" color='secondary' elevation={12}>
                <Toolbar sx={{display: 'flex', flexGrow: 1, justifyContent: 'space-between', width: '100%'}}>
                    <Typography variant="h5" color="primary" marginInlineStart={1} fontWeight="bold">
                        סימולטור אופל
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 4, height: '5vh', alignItems: 'center' }} marginInlineEnd={6}>
                        {pages.map((page) => (
                            <NavButton path={page.path} title={page.title} key={page.title}/>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>

    )
}

export default Layout;