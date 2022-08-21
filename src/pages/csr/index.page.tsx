import type { NextPage } from "next";
import Head from "next/head";
import { usePeopleData } from "../../RQQuery/People";

const CSR: NextPage = () => {
  const { data } = usePeopleData();
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
