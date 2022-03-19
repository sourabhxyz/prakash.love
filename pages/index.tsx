import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>prakash.love</title>
        <meta
          name="description"
          content="About Brahmchari Ram Prakash Ji Maharaj"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Box>
  );
};

export default Home;
