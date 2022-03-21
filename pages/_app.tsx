import type { AppProps } from 'next/app';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { NextPage } from 'next';
import { ReactNode } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

// on how to use getLayout with typescript, see first comment here: https://dev.to/ofilipowicz/next-js-per-page-layouts-and-typescript-lh5
export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  // const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <ChakraProvider>
      <Head>
        <title>prakash.love</title>
        <meta
          name="description"
          content="About Brahmchari Ram Prakash Ji Maharaj"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w="100vw" bg="black">
        <Container maxW={'container.lg'}>
          {Component.getLayout ? (
            Component.getLayout(<Component {...pageProps} />)
          ) : (
            <>
              <Navbar />
              <Component {...pageProps} />
              <Footer />
            </>
          )}
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
