import type { NextPage } from 'next';
import { Text, Link, Icon, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

const MotionText = motion(Text);
const MotionHStack = motion(HStack);

const Footer: NextPage = () => {
  return (
    <MotionHStack
      alignItems={'center'}
      justifyContent={'center'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Text color={'white'} fontWeight={'600'}>
        Handcrafted with
      </Text>
      <MotionText
        color={'red'}
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{
          repeat: 'Infinity',
          repeatType: 'reverse',
          duration: 1.5,
        }}
      >
        ♥
      </MotionText>
      <Text color={'white'} fontWeight={'600'}>
        by
      </Text>
      <NextLink href={'https://sourabh.xyz'} passHref>
        <Link
          isExternal={true}
          color="white"
          fontWeight={'600'}
          position={'relative'}
          _after={{
            content: "''",
            width: '0px',
            height: '2px',
            position: 'absolute',
            bottom: 0.5,
            left: 0,
            bg: 'red',
            // zIndex: 1,
            transition: '0.3s',
          }}
          _hover={{
            _after: {
              width: '110px',
            },
          }}
        >
          sourabh.xyz <Icon as={FiExternalLink} boxSize={'0.85em'}></Icon>
        </Link>
      </NextLink>
    </MotionHStack>
  );
};

export default Footer;
