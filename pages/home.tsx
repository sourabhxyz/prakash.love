import { NextPage } from 'next';

import { Stack, Box, Text, HStack, Image } from '@chakra-ui/react';

import { motion, Variants } from 'framer-motion';
// import GraphemeSplitter from 'grapheme-splitter';

const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionStack = motion(Stack);

const sentence: Variants = {
  hidden: {},
  visible: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.3,
      // staggerChildren: 0.1, // for other way
    },
  },
};

const letter: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    // transition: {
    //   duration: 0, // for other way
    // },
  },
};

const headingStyle = {
  lineHeight: 1.1,
  fontWeight: 600,
  fontSize: { base: '3xl', sm: '4xl', lg: '6xl' },
  color: 'white',
};

const Home: NextPage = () => {
  // const splitter = new GraphemeSplitter();
  return (
    <MotionStack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: 'column', md: 'row' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Image
        width={{ base: '200px', md: '250px', lg: '300px' }}
        height={{ base: '200px', md: '250px', lg: '300px' }}
        src="/maharjji.png"
      ></Image>
      <MotionBox variants={sentence} initial="hidden" animate="visible">
        <MotionText
          as={'span'}
          sx={headingStyle}
          variants={letter}
          position={'relative'}
          zIndex={0}
          _after={{
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'red.400',
            zIndex: -1,
          }}
        >
          प्रिय!
        </MotionText>
        <MotionText sx={headingStyle} as={'span'}>
          {/* // the following could be one way
              ['प्रि']
              .concat(
                splitter.splitGraphemes('य! आशा है की यहाँ पे आपको '),
                ['ब्रह्म'],
                splitter.splitGraphemes(
                  'चारी श्री राम प्रकाश जी महाराज के बारे सारि जानकारी मिले'
                )
              )*/}
          {' आशा है की यहाँ पे आपको '.split(' ').map((char, index) => (
            <MotionBox as={'span'} key={index} variants={letter}>
              {char}{' '}
            </MotionBox>
          ))}
        </MotionText>
        <MotionText as={'span'} sx={headingStyle}>
          {'श्री ब्रहमचारी राम प्रकाश जी महाराज'
            .split(' ')
            .map((char, index) => (
              <MotionBox
                as={'span'}
                key={index}
                variants={letter}
                position={'relative'}
                zIndex={0}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}
              >
                {char}{' '}
              </MotionBox>
            ))}
        </MotionText>
        <MotionText sx={headingStyle} as={'span'}>
          {' के बारे सारि जानकारी मिले।'.split(' ').map((char, index) => (
            <MotionBox as={'span'} key={index} variants={letter}>
              {char}{' '}
            </MotionBox>
          ))}
        </MotionText>
      </MotionBox>
    </MotionStack>
  );
};

export default Home;
