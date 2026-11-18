import { Box, Typography } from "@mui/material";

const PageHeader = ({
    title,
    subtitle,
    actions,
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 3,
            }}
        >
            <Box>
                <Typography variant="h5" fontWeight={700}>
                    {title}
                </Typography>

                {subtitle && (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                    >
                        {subtitle}
                    </Typography>
                )}
            </Box>

            {actions && (
                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                    }}
                >
                    {actions}
                </Box>
            )}
        </Box>
    );
};

export default PageHeader;