"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2", // Customize as needed
        },
        secondary: {
            main: "#dc004e",
        },
        background: {
            default: "#f4f6f8",
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
        h5: {
            fontWeight: 600,
        },
    },
});

export default function ThemeProviderWrapper({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
