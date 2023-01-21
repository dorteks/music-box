import "@/styles/globals.css";
import { NextPage } from "next";
import AppProvider from "@/app/provider";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppProvider pageProps={pageProps}>
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  );
};

export default App;
