import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Box,
    Badge,
    Avatar,
    Menu,
    MenuItem,
    Typography,
    Divider,
    Tooltip,
} from "@mui/material";

import {
    MenuRounded,
    SearchRounded,
    NotificationsNoneRounded,
    KeyboardArrowDownRounded,
    LogoutRounded,
    SettingsRounded,
} from "@mui/icons-material";

const AppHeader = ({
    onMenuClick,
    sidebarWidth,
    portalType,
}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate();

    const open = Boolean(anchorEl);

    const isPlatform = portalType === "platform";

    const handleLogout = () => {
        // Authentication integration will be added later.
        setAnchorEl(null);
        navigate(isPlatform ? "/platform/login" : "/login");
    };

    return (
        <AppBar
            position="fixed"
            color="inherit"
            elevation={0}
            sx={{
                width: {
                    md: `calc(100% - ${sidebarWidth}px)`,
                },

                ml: {
                    md: `${sidebarWidth}px`,
                },

                borderBottom: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
                color: "text.primary",
                transition: "all 0.2s ease",
            }}
        >
            <Toolbar sx={{ minHeight: "64px !important", gap: 2 }}>
                <IconButton
                    onClick={onMenuClick}
                    sx={{ display: { md: "none" } }}
                >
                    <MenuRounded />
                </IconButton>

                {/* Search */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 1.5,
                        py: 0.7,
                        borderRadius: 2,
                        bgcolor: "background.default",
                        width: { xs: "100%", sm: 320 },
                        border: "1px solid",
                        borderColor: "divider",
                    }}
                >
                    <SearchRounded
                        sx={{ color: "text.secondary", mr: 1 }}
                    />

                    <InputBase
                        placeholder="Search..."
                        fullWidth
                        sx={{ fontSize: 13 }}
                    />
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                {/* Notifications */}
                <Tooltip title="Notifications">
                    <IconButton>
                        <Badge badgeContent={3} color="error">
                            <NotificationsNoneRounded />
                        </Badge>
                    </IconButton>
                </Tooltip>

                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ mx: 1, my: 1.5 }}
                />

                {/* Profile */}
                <Box
                    onClick={(event) => setAnchorEl(event.currentTarget)}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                    }}
                >
                    <Avatar
                        sx={{
                            width: 36,
                            height: 36,
                            bgcolor: "primary.main",
                            fontSize: 14,
                        }}
                    >
                        {isPlatform ? "SA" : "PO"}
                    </Avatar>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Typography fontSize={13} fontWeight={700}>
                            {isPlatform ? "Platform Admin" : "Pharmacy Owner"}
                        </Typography>

                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            {isPlatform ? "Administrator" : "Owner"}
                        </Typography>
                    </Box>

                    <KeyboardArrowDownRounded />
                </Box>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    <MenuItem onClick={() => setAnchorEl(null)}>
                        <Avatar sx={{ width: 28, height: 28, mr: 1 }}>
                            {isPlatform ? "SA" : "PO"}
                        </Avatar>
                        My Profile
                    </MenuItem>

                    <MenuItem onClick={() => setAnchorEl(null)}>
                        <SettingsRounded sx={{ mr: 1 }} fontSize="small" />
                        Settings
                    </MenuItem>

                    <Divider />

                    <MenuItem onClick={handleLogout}>
                        <LogoutRounded sx={{ mr: 1 }} fontSize="small" />
                        Logout
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;