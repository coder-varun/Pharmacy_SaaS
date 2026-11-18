import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    Tooltip,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

const SIDEBAR_WIDTH = 260;
const COLLAPSED_WIDTH = 76;

const AppSidebar = ({
    navigation,
    portalName,
    mobileOpen,
    onMobileClose,
    collapsed,
    onToggleCollapse,
}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const width = collapsed ? COLLAPSED_WIDTH : SIDEBAR_WIDTH;

    const sidebarContent = (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.paper",
            }}
        >
            {/* Brand */}
            <Box
                sx={{
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    px: 2.5,
                    gap: 1.5,
                }}
            >
                <Box
                    sx={{
                        width: 36,
                        height: 36,
                        borderRadius: 2,
                        bgcolor: "primary.main",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: 18,
                    }}
                >
                    P
                </Box>

                {!collapsed && (
                    <Box>
                        <Typography fontWeight={800} fontSize={17}>
                            PharmaSuite
                        </Typography>

                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            {portalName}
                        </Typography>
                    </Box>
                )}
            </Box>

            <Divider />

            {/* Navigation */}
            <Box sx={{ flex: 1, overflowY: "auto", px: 1.5, py: 2 }}>
                {navigation.map((section) => (
                    <Box key={section.title} sx={{ mb: 2.5 }}>
                        {!collapsed && (
                            <Typography
                                variant="caption"
                                sx={{
                                    px: 1.5,
                                    mb: 1,
                                    display: "block",
                                    fontWeight: 700,
                                    color: "text.secondary",
                                    textTransform: "uppercase",
                                    letterSpacing: 0.8,
                                }}
                            >
                                {section.title}
                            </Typography>
                        )}

                        <List disablePadding>
                            {section.items.map((item) => {
                                const Icon = item.icon;

                                const active =
                                    location.pathname === item.path ||
                                    location.pathname.startsWith(
                                        `${item.path}/`
                                    );

                                return (
                                    <Tooltip
                                        key={item.path}
                                        title={collapsed ? item.label : ""}
                                        placement="right"
                                    >
                                        <ListItemButton
                                            selected={active}
                                            onClick={() => {
                                                navigate(item.path);
                                                onMobileClose?.();
                                            }}
                                            sx={{
                                                minHeight: 44,
                                                mb: 0.5,
                                                borderRadius: 2,
                                                px: 1.5,

                                                justifyContent: collapsed
                                                    ? "center"
                                                    : "initial",

                                                "&.Mui-selected": {
                                                    bgcolor: "primary.light",
                                                    color: "primary.dark",
                                                },

                                                "&.Mui-selected:hover": {
                                                    bgcolor: "primary.light",
                                                },
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: collapsed ? 0 : 38,
                                                    color: active
                                                        ? "primary.main"
                                                        : "text.secondary",
                                                }}
                                            >
                                                <Icon fontSize="small" />
                                            </ListItemIcon>

                                            {!collapsed && (
                                                <ListItemText
                                                    primary={item.label}
                                                    primaryTypographyProps={{
                                                        fontSize: 13.5,
                                                        fontWeight: active
                                                            ? 700
                                                            : 500,
                                                    }}
                                                />
                                            )}
                                        </ListItemButton>
                                    </Tooltip>
                                );
                            })}
                        </List>
                    </Box>
                ))}
            </Box>

            <Divider />

            {!collapsed && (
                <Box sx={{ p: 2 }}>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        PharmaSuite v1.0.0
                    </Typography>
                </Box>
            )}
        </Box>
    );

    return (
        <>
            {/* Desktop */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", md: "block" },
                    width,
                    flexShrink: 0,

                    "& .MuiDrawer-paper": {
                        width,
                        boxSizing: "border-box",
                        borderRight: "1px solid",
                        borderColor: "divider",
                        transition: "width 0.2s ease",
                    },
                }}
            >
                {sidebarContent}
            </Drawer>

            {/* Mobile */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={onMobileClose}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: "block", md: "none" },

                    "& .MuiDrawer-paper": {
                        width: SIDEBAR_WIDTH,
                        boxSizing: "border-box",
                    },
                }}
            >
                {sidebarContent}
            </Drawer>
        </>
    );
};

export { SIDEBAR_WIDTH, COLLAPSED_WIDTH };

export default AppSidebar;