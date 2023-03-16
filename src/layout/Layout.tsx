import Head from "next/head";
import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";

import { Footer } from "../components/Footer";
import { ThemeContextProvider } from "~/context/theme.context";
import { Header } from "../components/Header";

const Layout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [sidebarMobile, setSidebarMobile] = React.useState(false);

  const dispatch = useDispatch();

  return (
    <ThemeContextProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`Bitmex - ${title && title}`}</title>
        <link rel="icon" href="" />
      </Head>
      <div className="nk-main">
        <Header />
        <div className="nk-wrap">
          <div className="nk-content" style={{padding:"25px 50px"}}>{children}</div>
          <Footer />
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default Layout;
