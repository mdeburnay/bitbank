import { useState, useEffect } from "react";
import Router from "next/router";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Loading } from "../components/Loading/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout title="BitBank">
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
