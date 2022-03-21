import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

const ramType: Variants = {
  // filter for svg was learned from here: https://stackoverflow.com/a/13624469/11183512
  hidden: {
    filter: 'drop-shadow(0px 0px 1px #FFF',
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
  },
  visible: {
    filter: 'drop-shadow(0px 0px 20px #FFF',
    opacity: 0,
    x: 'calc(-1 * calc(min(50vw, 512px) - 65px))',
    y: 'calc(-1 * calc(50vh - 32px))',
    scale: 0.3,
    transition: {
      when: 'afterChildren',
      duration: '1.5',
      staggerChildren: 1,
      // this was learned via: https://stackoverflow.com/a/70073493/11183512
      x: {
        delay: 1.5,
        duration: 1,
      },
      y: {
        delay: 1.5,
        duration: 1,
      },
      opacity: {
        delay: 1.5,
        duration: 1,
      },
      scale: {
        delay: 1.5,
        duration: 1,
      },
    },
  },
};

const ramLetter: Variants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1,
      ease: 'linear',
    },
  },
};

export default function RamType() {
  return (
    <Flex h={'100vh'} alignItems={'center'} justifyContent={'center'}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={189.732}
        height={67.292}
        variants={ramType}
        initial={'hidden'}
        animate={'visible'}
      >
        <defs>
          <style>
            {
              '.cls-1{fill:none;stroke:#FFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px}'
            }
          </style>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Ram">
            <path id="topLine" className="cls-1" d="M36.187 3h117" />
            <motion.path
              id="R"
              className="cls-1"
              d="M57.203 3s20.984 28.5-12.016 33.5l-4-6s1.185 12.585 22.592 33.792"
              variants={ramLetter}
            />
            <motion.path
              id="A"
              className="cls-1"
              d="M85.34 3v61.292"
              variants={ramLetter}
            />
            <motion.path
              id="M"
              className="cls-1"
              d="M112.87 3v37.57l-7.459-6.924h34.581V3v61.292"
              variants={ramLetter}
            />
            <g id="leftLines">
              <path className="cls-1" d="M13.732 3v61.292M3 3v61.292" />
            </g>
            <g id="rightLines">
              <path className="cls-1" d="M186.732 3v61.292M176 3v61.292" />
            </g>
          </g>
        </g>
      </motion.svg>
    </Flex>
  );
}
