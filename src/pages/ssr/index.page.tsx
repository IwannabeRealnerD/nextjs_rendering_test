import type { NextPage } from "next";
import Head from "next/head";
import {
  dehydrate,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["SSR"], () =>
    fetch("https://swapi.dev/api/people/4").then((res) => res.json())
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const SSR: NextPage = () => {
  const { data } = useQuery(
    ["SSR"],
    () =>
      fetch("https://swapi.dev/api/people/4").then((res) =>
        res.json()
      ),
    { staleTime: Infinity }
  );

  return (
    <>
      <Head>
        <title>SSR | nextjs rendering test site</title>
      </Head>
      <main>
        <section>
          <h1>SSR</h1>
          {JSON.stringify(data)}
        </section>
      </main>
    </>
  );
};

export default SSR;
