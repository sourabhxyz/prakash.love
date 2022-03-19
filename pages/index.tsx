import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Ramtype from '../components/ramType';

const Index: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/home');
    }, 1000);
  }, []);
  return <Box>{loading ? <Ramtype /> : ''}</Box>;
};

export default Index;
