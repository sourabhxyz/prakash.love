import { NextPage } from 'next';
import maharajjiImage from '../public/maharjji.png'
import {
  Stack,
  Box,
  Text,
  HStack,
  Heading,
  Icon,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
  chakra,
} from '@chakra-ui/react';

import { motion, Variants } from 'framer-motion';
// import GraphemeSplitter from 'grapheme-splitter';
import { FaAsterisk, FaYoutube } from 'react-icons/fa';
import { MdAudiotrack } from 'react-icons/md';
import { RiVideoLine } from 'react-icons/ri';
import { AiOutlineRight, AiOutlineDoubleRight } from 'react-icons/ai';
import Image from 'next/image'

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

const videos = [
  {
    heading: "Maharaj's 12 video's @ ram sharnam",
    children: [
      // {
      //   youtubeLink:
      //     'https://www.youtube.com/watch?v=nkW2LW1YbbM&list=PLhZ1VBbrK-eRm3USpYe_cnV82p-s1St5a&index=1',
      //   linkText: 'Volume 1',
      //   videoDownloadLink:
      //     'https://www.odrive.com/s/3808f47c-9ff2-4b08-b0bc-2cb820a6d62a-623f3525',
      //   audioDownloadLink: '',
      // },
      // {
      //   youtubeLink:
      //     'https://www.youtube.com/watch?v=MD9VrON8sH4&list=PLhZ1VBbrK-eRm3USpYe_cnV82p-s1St5a&index=2',
      //   linkText: 'Volume 2',
      //   downloadLink:
      //     'https://www.odrive.com/s/473ceae8-fa4b-437a-a10e-7aa0bbdb09ca-623f3539',
      //   audioDownloadLink: '',
      // },
      {
        youtubeLink: 'https://youtu.be/wSuOKhA9yik',
        linkText: 'Volume 6',
        downloadLink:
          'https://www.odrive.com/s/848d357e-8170-44c6-b906-df9b9b87a322-6249c8b8',
        audioDownloadLink:
          'https://www.odrive.com/s/21b7392f-13dc-46ad-8c00-4c186b3af68e-6249c999',
      },
      {
        youtubeLink: 'https://youtu.be/cm9eGemMXFQ',
        linkText: 'Volume 7',
        downloadLink:
          'https://www.odrive.com/s/731c1c8d-2496-460d-b48b-cc653f47bc8c-6249c87e',
        audioDownloadLink:
          'https://www.odrive.com/s/a44ad95c-ab47-4720-847e-7bae5ab8a1cc-6249c883',
      },
      {
        youtubeLink: 'https://youtu.be/soBK6mr0rUg',
        linkText: 'Volume 8',
        downloadLink:
          'https://www.odrive.com/s/e0f4a450-8440-4f7f-9682-6948ca6a6868-6249c86f',
        audioDownloadLink:
          'https://www.odrive.com/s/d9d75d9d-282f-4f14-9e7d-f3b87848b887-6249c875',
      },
      {
        youtubeLink: 'https://youtu.be/l35lAE6BDzQ',
        linkText: 'Volume 9',
        downloadLink:
          'https://www.odrive.com/s/821dd953-8608-4954-b970-a93cd13fbf58-6249c24f',
        audioDownloadLink:
          'https://www.odrive.com/s/1d9c0287-b436-4e05-b0d9-5b2feb73ba54-6249c865',
      },
      {
        youtubeLink: 'https://youtu.be/VAHW7HXPpAk',
        linkText: 'Volume 10',
        downloadLink:
          'https://www.odrive.com/s/810653bb-71bf-42f1-9558-1e9993cb0203-6249c1f7',
        audioDownloadLink:
          'https://www.odrive.com/s/9e782694-19cb-4f8b-96d7-ca332640fc74-6249c1f2',
      },
      {
        youtubeLink: 'https://youtu.be/8nOe4-kHIHE',
        linkText: 'Volume 12',
        downloadLink:
          'https://www.odrive.com/s/62cfba62-a9ca-4d4e-ae3f-73fc691e6b6d-6249c1bb',
        audioDownloadLink:
          'https://www.odrive.com/s/07c760da-e491-4509-96ab-ff4e300db512-6249c1e7',
      },
    ],
  },
];

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

const linkStyle = {
  position: 'relative',
  _after: {
    content: "''",
    width: '0px',
    height: '2px',
    position: 'absolute',
    bottom: 0.5,
    left: 0,
    bg: 'red',
    // zIndex: 1,
    transition: '0.3s',
  },
  _hover: {
    _after: {
      width: 'full',
    },
  },
};

const Home: NextPage = () => {
  // const splitter = new GraphemeSplitter();
  const OurImage = chakra(Image, {
    shouldForwardProp: (prop) => ["src", "placeholder", "alt", "blurDataURL"].includes(prop)
  })
  return (
    <Box>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Image
          // width={{ base: '634px', md: '792px', lg: '950px' }}
          // height={{ base: '634px', md: '792px', lg: '950px' }}
          width='950px'
          height='950px'
          placeholder='blur'
          alt='photo of maharajji'
          src={maharajjiImage}
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
            {' के बारे सारी जानकारी मिले।'.split(' ').map((char, index) => (
              <MotionBox as={'span'} key={index} variants={letter}>
                {char}{' '}
              </MotionBox>
            ))}
          </MotionText>
        </MotionBox>
      </Stack>
      <Box id="videos">
        <HStack paddingBottom={'10px'}>
          <Icon as={FaAsterisk} boxSize={'1.5em'} color={'red'}></Icon>
          <Heading color="white">Videos</Heading>
        </HStack>
        <List>
          {videos.map((video) => (
            <ListItem color="white" key={video.heading} pl={'15px'}>
              <ListIcon as={AiOutlineRight} />
              <Text
                as={'span'}
                fontFamily={"'Dancing Script', cursive"}
                fontWeight={'600'}
                fontSize={'xl'}
              >
                {video.heading}
              </Text>
              <List paddingLeft={'20px'}>
                {video.children.map((videoChildren, index) => (
                  <ListItem key={index}>
                    {/* <ListIcon as={AiOutlineDoubleRight} /> */}
                    <HStack spacing={'10px'}>
                      <Icon as={AiOutlineDoubleRight}></Icon>
                      <Text
                        as={'span'}
                        fontFamily={"'Dancing Script', cursive"}
                        fontWeight={'400'}
                        fontSize={'lg'}
                      >
                        {videoChildren.linkText}:
                      </Text>
                      <Link
                        href={videoChildren.youtubeLink}
                        isExternal={true}
                        sx={linkStyle}
                      >
                        {' '}
                        <Icon as={FaYoutube}></Icon> Youtube
                      </Link>
                      <Link
                        href={videoChildren.downloadLink}
                        isExternal={true}
                        sx={linkStyle}
                      >
                        {' '}
                        <Icon as={RiVideoLine}></Icon> Download Video
                      </Link>
                      <Link
                        href={videoChildren.audioDownloadLink}
                        isExternal={true}
                        sx={linkStyle}
                      >
                        {' '}
                        <Icon as={MdAudiotrack}></Icon> Download Audio
                      </Link>
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Home;
