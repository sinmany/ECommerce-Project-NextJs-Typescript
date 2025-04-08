"use client";

import { ReactNode } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Kantumruy_Pro } from "next/font/google";

const KantumruyPro = Kantumruy_Pro({ subsets: ["khmer", "latin"] });

let theme = createTheme({
  typography: {
    fontFamily: KantumruyPro.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 874,
      lg: 1512,
      xl: 2217,
    },
  },
});

theme = responsiveFontSizes(theme); // Optional but useful!

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
