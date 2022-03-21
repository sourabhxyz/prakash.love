import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Ramtype from '../components/ramType';
import { startAnimationDuration } from '../globalVars';
import { Page } from './_app';

const Index: Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/home');
    }, startAnimationDuration * 1000);
  }, []);
  return <Box>{loading ? <Ramtype /> : ''}</Box>;
};

Index.getLayout = (page: ReactNode) => page;

export default Index;
