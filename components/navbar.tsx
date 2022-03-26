import Logo from './logo';

import { useState } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@chakra-ui/icons';

import { FaGithub, FaTwitter, FaYoutube, FaTelegram } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
const MotionFlex = motion(Flex);

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/home',
  },
  {
    label: 'Videos',
    href: '/home#videos',
  },
  {
    label: 'Texts',
    href: '/home#books',
  },
  {
    label: 'How to Contribute?',
    href: '/home#how-to-contribute',
  },
  {
    label: "Swamiji' corner",
    href: '/swamiji',
  },
  {
    label: 'Contact',
    href: 'none',
    children: [
      {
        label: 'Mail',
        icon: MdMail,
        iconColor: 'white',
        subLabel: 'Mail',
        href: 'mailto:swasti@sourabh.xyz',
      },
      {
        label: 'Telegram',
        icon: FaTelegram,
        iconColor: '#0088cc',
        subLabel: 'Telegram',
        href: 'https://telegram.me/xyzsourabh',
      },
    ],
  },
];

const baseStyle = {
  p: 2,
  color: '#897A83',
  position: 'relative',
  fontWeight: '600',
  _after: {
    content: "''",
    width: '0px',
    height: '1',
    position: 'absolute',
    bottom: 0.5,
    left: 0,
    bg: 'red',
    transition: '0.3s',
  },
};

const activeStyle = {
  color: '#EBE8E8',
  _after: {
    width: 'full',
  },
};

const activatedStyle = {
  p: 2,
  color: '#EBE8E8',
  position: 'relative',
  fontWeight: '600',
  _after: {
    content: "''",
    width: 'full',
    height: '1',
    position: 'absolute',
    bottom: 0.5,
    left: 0,
    bg: 'red',
    transition: '0.3s',
  },
};

const popoverContentBgColor = 'gray.900';

export default function Navbar() {
  const [logoHover, setLogoHover] = useState(false);
  return (
    <MotionFlex
      position="sticky"
      top="0"
      zIndex={'docked'}
      bg="black"
      // backdropFilter={'auto'}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor="gray.200"
      h="60px"
      px="4"
      align={'center'}
      justify={{ base: 'space-between', sm: 'none' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Logo */}
      <NextLink href="/" passHref>
        <Link
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
        >
          <Logo logoHover={logoHover} />
        </Link>
      </NextLink>
      <Flex display={{ base: 'none', md: 'flex' }}>
        <DesktopNav />
      </Flex>
      <Box display={{ md: 'none' }}>
        <MobileNav />
      </Box>
    </MotionFlex>
  );
}

const DesktopNav = () => {
  const router = useRouter();
  return (
    <HStack spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover
            trigger={'hover' /* either click or hover */}
            placement={'bottom-start'}
          >
            <PopoverTrigger>
              {navItem.href === 'none' ? (
                <Text sx={baseStyle} _hover={activeStyle}>
                  {navItem.label}
                </Text>
              ) : (
                <NextLink href={navItem.href} passHref>
                  <Link
                    sx={
                      router.asPath === navItem.href
                        ? activatedStyle
                        : baseStyle
                    }
                    _hover={activeStyle}
                  >
                    {navItem.label}
                  </Link>
                </NextLink>
              )}
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                borderRadius={'xl'}
                width={'148px'}
              >
                {navItem.children.map((child) => SubNav(child))}
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </HStack>
  );
};

function SubNav(child: any) {
  const [subNavHover, setSubNavHover] = useState(false);
  return (
    <NextLink href={child.href} passHref key={child.label}>
      <Link
        isExternal={true}
        onMouseEnter={() => setSubNavHover(true)}
        onMouseLeave={() => setSubNavHover(false)}
        _hover={{ textDecoration: 'none' }} // don't want that underline on links.
      >
        <Flex direction={'column'} alignItems={'center'} p={2}>
          <Icon as={child.icon} boxSize={'1.5em'} color={child.iconColor} />
          <Text fontSize={'sm'} sx={subNavHover ? activatedStyle : baseStyle}>
            {child.subLabel}
          </Text>
        </Flex>
      </Link>
    </NextLink>
  );
}
function MobileSubNav(navItem: any) {
  const router = useRouter();
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [navHover, setNavHover] = useState(false);
  return (
    <Box key={navItem.label}>
      {navItem.children ? (
        <Flex
          onClick={() =>
            collapseOpen ? setCollapseOpen(false) : setCollapseOpen(true)
          }
          onMouseEnter={() => setNavHover(true)}
          onMouseLeave={() => setNavHover(false)}
          justifyContent={'space-between'}
          alignItems="center"
        >
          <Text sx={navHover ? activatedStyle : baseStyle}>
            {navItem.label}
          </Text>
          <Icon
            as={collapseOpen ? ChevronUpIcon : ChevronDownIcon}
            color="white"
          />
        </Flex>
      ) : (
        <NextLink href={navItem.href} passHref>
          <Link
            sx={router.asPath === navItem.href ? activatedStyle : baseStyle}
            _hover={activeStyle}
          >
            {navItem.label}
          </Link>
        </NextLink>
      )}
      {navItem.children && (
        // documentation here: https://chakra-ui.com/docs/components/other/transitions
        <Collapse in={collapseOpen} animateOpacity>
          <VStack
            ml={2}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={'gray.200'}
            align={'start'}
            pl={3}
            spacing={0}
          >
            {navItem.children.map((child: any) => SubNav(child))}
          </VStack>
        </Collapse>
      )}
    </Box>
  );
}

function MobileNav() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Popover
      trigger={'click'}
      placement={'bottom-start'}
      onOpen={onToggle}
      onClose={onToggle}
    >
      <PopoverTrigger>
        {/* For mobile screen, shrink nav button */}
        <IconButton
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'} // https://chakra-ui.com/docs/form/icon-button
          aria-label="menu"
          color="gray.300"
          colorScheme="blackAlpha"
          _hover={{
            color: 'white',
          }}
        />
      </PopoverTrigger>
      <PopoverContent
        border={0}
        boxShadow={'xl'}
        borderRadius={'xl'}
        w={'185px'}
        p={2}
        bg={popoverContentBgColor}
        experimental_spaceY="3"
      >
        {NAV_ITEMS.map((navItem) => MobileSubNav(navItem))}
      </PopoverContent>
    </Popover>
  );
}
