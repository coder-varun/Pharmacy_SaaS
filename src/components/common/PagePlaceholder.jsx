import { Paper, Typography } from "@mui/material";

import PageHeader from "./PageHeader/PageHeader";

const PagePlaceholder = ({ title, description }) => {
    return (
        <>
            <PageHeader
                title={title}
                subtitle={description}
            />

            <Paper
                sx={{
                    p: 4,
                    minHeight: 300,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    border: "1px solid",
                    borderColor: "divider",
                    boxShadow: "none",
                }}
            >
                <Typography variant="h6">
                    {title}
                </Typography>

                <Typography color="text.secondary" mt={1}>
                    This module is under development.
                </Typography>
            </Paper>
        </>
    );
};

export default PagePlaceholder;