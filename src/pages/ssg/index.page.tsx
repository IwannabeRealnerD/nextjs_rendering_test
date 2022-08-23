import type { NextPage } from "next";
import Head from "next/head";
import {
  dehydrate,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import Link from "next/link";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["SSG"], () =>
    fetch("https://swapi.dev/api/people/4").then((res) => res.json())
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const SSG: NextPage = () => {
  const { data } = useQuery(["SSG"], () =>
    fetch("https://swapi.dev/api/people/4").then((res) => res.json())
  );

  return (
    <>
      <Head>
        <title>SSG | nextjs rendering test site</title>
      </Head>
      <main>
        <div style={{ height: "30rem", backgroundColor: "blue" }}>
            <Link href="/ssr">SSR page</Link>
          </div>
        <section>
          <h1>SSG</h1>
          {JSON.stringify(data)}
        </section>
      </main>
    </>
  );
};

export default SSG;
