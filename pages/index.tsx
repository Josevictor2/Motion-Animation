import * as React from 'react';
import type { NextPage } from 'next';

import { HeadTitle } from '../src/components/Head';
import { Layout } from '../src/components/Layout';
import { DivComponent } from '../src/components/DivComponent';
import { ScaleInHover } from '../src/animation/ScaleInHover';
import { SliderLeftCenter } from '../src/animation/Slider/SliderLeftCenter';
import { AccordionDefault } from '../src/animation/Accordion/AccordionDefault';
import { AccordionRotate } from '../src/animation/Accordion/AccordionRotation';

const Home: NextPage = () => {
  return (
    <>
      <HeadTitle description='Home' />
      <Layout>
        <AccordionRotate />
        <AccordionRotate />
        <AccordionRotate />
        <AccordionRotate />
      </Layout>
    </>
  );
};

export default Home;
