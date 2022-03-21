import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Home: NextPage = () => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      color={'white'}
      textAlign={'center'}
    >
      home
    </MotionBox>
  );
};

export default Home;
