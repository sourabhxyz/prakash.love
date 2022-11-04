import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Ramtype from '../components/ramType';
import { startAnimationDuration } from '../globalVars';
import { Page } from './_app';

const Index: Page = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, startAnimationDuration * 1000);
    router.prefetch('/home');  // we want loading this page to be faster.
    return () => clearTimeout(timer)
  }, []);
  return <Ramtype />
};

Index.getLayout = (page: ReactNode) => page;

export default Index;
