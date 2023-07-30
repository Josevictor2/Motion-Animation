import * as React from "react";
import type { NextPage } from "next";

import { HeadTitle } from "../src/components/Head";
import { Layout } from "../src/components/Layout";

import { ActiveLink } from "../src/components/LinkActiveNavBar";
import clsx from "clsx";

const Home: NextPage = () => {
  return (
    <>
      <HeadTitle description="Home" />
      <Layout>
        <ActiveLink href="/" className="text-red-800">
          Home
        </ActiveLink>
      </Layout>
    </>
  );
};

export default Home;
