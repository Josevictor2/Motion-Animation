import * as React from 'react';
import type { NextPage } from 'next';

import { HeadTitle } from '../src/components/Head';
import { Layout } from '../src/components/Layout';
import { DivComponent } from '../src/components/DivComponent';
import { ScaleInHover } from '../src/animation/ScaleInHover';
import { SliderLeftCenter } from '../src/animation/Slider/SliderLeftCenter';
import { AccordionDefault } from '../src/animation/Accordion/AccordionDefault';
import { AccordionRotate } from '../src/animation/Accordion/AccordionRotation';
import { ModalDefault } from '../src/animation/Modal/ModalDefault';
import { ContainerModal } from '../src/components/ContainerModal';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <>
      <HeadTitle description='Home' />
      <Layout>
        <button onClick={openModal}>Open Modal</button>
        <ModalDefault isOpen={isOpen} closeModal={closeModal}>
          <ContainerModal closeModal={closeModal}/>
        </ModalDefault>
      </Layout>
    </>
  );
};

export default Home;
