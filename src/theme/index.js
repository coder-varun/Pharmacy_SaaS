import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";

const theme = createTheme({
    palette: {
        mode: "light",
        ...palette,
    },

    typography,

    shape: {
        borderRadius: 10,
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: "8px 18px",
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },
    },
});

export default theme;