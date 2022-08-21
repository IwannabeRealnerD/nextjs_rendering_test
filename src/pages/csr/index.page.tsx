import type { NextPage } from "next";
import Head from "next/head";
import {
  dehydrate,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";

const CSR: NextPage = () => {
  const { data } = useQuery(["CSR"], () =>
    fetch("https://swapi.dev/api/people/4").then((res) => res.json())
  );

  return (
    <>
      <Head>
        <title>CSR | nextjs rendering test site</title>
      </Head>
      <main>
        <section>
          <h1>CSR</h1>
          {JSON.stringify(data)}
        </section>
      </main>
    </>
  );
};

export default CSR;
