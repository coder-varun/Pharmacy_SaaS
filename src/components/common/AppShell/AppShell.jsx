import { useState } from "react";

import { Box, Toolbar } from "@mui/material";

import AppSidebar, {
    SIDEBAR_WIDTH,
    COLLAPSED_WIDTH,
} from "./AppSidebar";

import AppHeader from "./AppHeader";

const AppShell = ({
    children,
    navigation,
    portalName,
    portalType,
}) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const [collapsed, setCollapsed] = useState(false);

    const sidebarWidth = collapsed
        ? COLLAPSED_WIDTH
        : SIDEBAR_WIDTH;

    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <AppSidebar
                navigation={navigation}
                portalName={portalName}
                mobileOpen={mobileOpen}
                onMobileClose={() => setMobileOpen(false)}
                collapsed={collapsed}
                onToggleCollapse={() => setCollapsed(!collapsed)}
            />

            <AppHeader
                onMenuClick={() => setMobileOpen(true)}
                sidebarWidth={sidebarWidth}
                portalType={portalType}
            />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    minWidth: 0,
                    bgcolor: "background.default",
                    minHeight: "100vh",
                }}
            >
                <Toolbar />

                <Box sx={{ p: { xs: 2, sm: 3, lg: 3.5 } }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default AppShell;