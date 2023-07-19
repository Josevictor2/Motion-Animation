import * as React from "react";
import type { NextPage } from "next";

import { HeadTitle } from "../src/components/Head";
import { Layout } from "../src/components/Layout";
import { ModalDropIn } from "../src/animation/ModalDropIn";
import { ContainerModal } from "../src/components/ContainerModal";
import { Login } from "../src/components/Login";
import { ModalDefault } from "../src/animation/Modal/ModalDefault";
import { SearchInput } from "../src/animation/searchInput";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <HeadTitle description="Home" />
      <Layout>
        <SearchInput />
      </Layout>
    </>
  );
};

export default Home;
