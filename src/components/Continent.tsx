import { Flex, Image } from '@chakra-ui/react'

type ContinentProps = {
  image: string
  primaryText: string
  description: string
}

export function Continent({image, primaryText, description}: ContinentProps) {
  return (
    <Flex as="div" width="100%" zIndex="1" color="white" justifyContent="center" mt="20">
      <Image src={image} alt="Europa" maxH="450"/>
      <Flex
        as="div"
        pos="absolute"
        flexDirection="column"
        height="450"
        width="100%"
        zIndex="1"
        color="white"
        justifyContent="center"
        alignItems="center"
        gridGap="1rem"
      >
        <Flex as="h1" fontSize="48" fontWeight="700">{primaryText}</Flex>
        <Flex as="p" fontSize="24" fontWeight="700">{description}</Flex>
      </Flex>
    </Flex>
  )
}