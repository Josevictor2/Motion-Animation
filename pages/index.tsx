import * as React from 'react';
import type { NextPage } from 'next';

import { HeadTitle } from '../src/components/Head';
import { Layout } from '../src/components/Layout';
import { ModalDropIn } from '../src/animation/ModalDropIn';
import { ContainerModal } from '../src/components/ContainerModal';
import { Login } from '../src/components/Login';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <>
      <HeadTitle description='Home' />
      <Layout>
          {/* <button onClick={openModal}>Open Modal</button> 
          <ModalDropIn closeModal={closeModal} isOpen={isOpen}>
            <ContainerModal closeModal={closeModal} isOpen={isOpen} />
          </ModalDropIn> */}
        <Login />
      </Layout>
    </>
  );
};

export default Home;
