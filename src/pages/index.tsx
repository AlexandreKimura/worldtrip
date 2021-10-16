import { Flex, Image } from '@chakra-ui/react'
import { Header } from "../components/Header"
import { SwiperSlider } from '../components/Swiper'

export default function Home() {
  return (
    <>
      <Header />
      <Image w="100%" src="Banner.jpg" alt="Banner Principal"/>
      <Flex w="100%" maxH={145} justifyContent="center" mt="20" gridGap="10rem">
        <Image src="Nightlife.svg" alt="Vida noturna"/>
        <Image src="Beach.svg" alt="Praia"/>
        <Image src="Modern.svg" alt="Moderno"/>
        <Image src="Classic.svg" alt="Clássico"/>
        <Image src="More.svg" alt="E mais"/>
      </Flex>
      <Flex w="100%" justifyContent="center" mt="20" mb="20">
        <Flex bg="gray.500" w={90} h={1} align="center"/>
      </Flex>
      <Flex as="div" w="100%" justifyContent="center">
        <Flex as="p" fontWeight="500" fontSize="36" color="gray.600">Vamos nessa?</Flex>
      </Flex>
      <Flex as="div" w="100%" justifyContent="center">
        <Flex as="p" fontWeight="500" fontSize="36" color="gray.600">Então escolha seu continente</Flex>
      </Flex>
      <Flex>
        <SwiperSlider />
      </Flex>
    </>
  )
}