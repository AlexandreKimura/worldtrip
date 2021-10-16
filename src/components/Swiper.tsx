import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Image } from '@chakra-ui/react'
import SwiperCore, { Navigation } from 'swiper';

import "swiper/css";
import "swiper/css/navigation"
import { Continent } from "./Continent";

SwiperCore.use([Navigation]);

export function SwiperSlider() {
  return(
    <Flex w="100%" justifyContent="center" mb="10">
      <Swiper pagination={true} className="mySwiper">
        <SwiperSlide>
          <Continent image="/continents/Europe.jpg" primaryText="América do Norte" description="O continente norte americano"/>
        </SwiperSlide>
        <SwiperSlide>
          <Continent image="/continents/Europe.jpg" primaryText="América do Sul" description="O continente sul americano"/>
        </SwiperSlide>
        <SwiperSlide>
          <Continent image="/continents/Europe.jpg" primaryText="Ásia" description="O continente asiático"/>
        </SwiperSlide>
        <SwiperSlide>
          <Continent image="/continents/Europe.jpg" primaryText="África" description="O continente africano"/>
        </SwiperSlide>
        <SwiperSlide >
          <Continent image="/continents/Europe.jpg" primaryText="Europa" description="O continente europeu"/>
        </SwiperSlide>
        <SwiperSlide>
          <Continent image="/continents/Europe.jpg" primaryText="Oceania" description="O continente oceania"/>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}