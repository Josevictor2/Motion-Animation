import { FC } from 'react';
import Head from 'next/head';

type TitleProps =  {
    description: string;
}

export const HeadTitle: FC<TitleProps> = ({ description }) => {
  return (
    <Head>
      <title>{`${description} - Animations Motion`}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
  );
};