import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";

import "../styles/globals.css";
import { ReactScan } from "./_components/ReactScan";
import { theme } from "./theme";

import type { FC, PropsWithChildren } from "react";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="ja">
    {process.env.NODE_ENV !== "production" && process.env.REACT_SCAN === "true" && <ReactScan />}
    <body className={roboto.variable}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <main>{children}</main>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
