import type { AppProps } from "next/app";
import { FC } from "react";

import "../styles/globals.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
