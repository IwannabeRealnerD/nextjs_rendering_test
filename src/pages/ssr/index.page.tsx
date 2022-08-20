import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";

const SSR: NextPage = () => {
 
  return (
    <>
      <Head>
        <title>SSR | nextjs rendering test site</title>
      </Head>
      {JSON.stringify(data)}
      <h1>SSR</h1>
    </>
  );
};

export default Home;
