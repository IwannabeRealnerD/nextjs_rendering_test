import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";

const SSG: NextPage = () => {
  const { isLoading, data } = useQuery(["SSR"], () =>
    fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.json())
  );
  return (
    <>
      <Head>
        <title>SSG | nextjs rendering test site</title>
      </Head>
      {/* {data} */}
      <h1>SSG</h1>
    </>
  );
};

export default Home;
