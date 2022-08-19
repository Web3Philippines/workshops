import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import marketplaceAddress from "../config.json";

const activeChainId = marketplaceAddress.networkID;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>OpenSee Marketpalce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Build your own NFT marketplace with Web3 Philippines"
        />
        <meta
          name="keywords"
          content="opensee, marketplace, web3, philippines, thirdweb"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
