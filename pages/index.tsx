import * as React from 'react';
import type { NextPage } from 'next';

import { HeadTitle } from '../src/components/Head';
import { Layout } from '../src/components/Layout';
import { DivComponent } from '../src/components/DivComponent';
import { ScaleInHover } from '../src/animation/ScaleInHover';
import { SliderLeftCenter } from '../src/animation/Slider/SliderLeftCenter';

const Home: NextPage = () => {
  return (
    <>
      <HeadTitle description='Home' />
      <Layout>
        <SliderLeftCenter>
          <DivComponent />
        </SliderLeftCenter>
      </Layout>
    </>
  );
};

export default Home;
