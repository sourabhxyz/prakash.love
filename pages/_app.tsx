import type { AppProps } from 'next/app';
import { ChakraProvider, Box, Container, extendTheme } from '@chakra-ui/react';
import Head from 'next/head';
import { NextPage } from 'next';
import { ReactNode } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
});

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
    <ChakraProvider theme={theme}>
      <Head>
        <title>prakash.love</title>
        <meta
          name="description"
          content="About Brahmchari Ram Prakash Ji Maharaj"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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
