import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>nextjs rendering test site</title>
      </Head>
      <main>
        <section>
          <h1>Main</h1>
          메인페이지
          <div>
            <Link href="/csr">CSR page</Link>
          </div>
          <div>
            <Link href="/ssg">SSG page</Link>
          </div>
          <div>
            <Link href="/ssr">SSR page</Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
