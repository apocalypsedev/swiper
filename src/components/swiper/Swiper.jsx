import React from "react";
import "./Swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Swipercontainer() {
  let swiperData = [
    "https://images2.alphacoders.com/129/1291619.png",
    "https://w.wallhaven.cc/full/v9/wallhaven-v96yk8.jpg",
    "https://i.pinimg.com/originals/05/82/e3/0582e343005dd7a849ca6649837958f0.jpg",
    "https://c4.wallpaperflare.com/wallpaper/157/786/337/china-neon-blue-pink-pickaxes-hd-wallpaper-thumb.jpg",
  ];
  return (
    <div className="swipercontainer">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {swiperData.map((url, index) => (
          <SwiperSlide key={index}>
            <img className="img__swip" src={url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Swipercontainer;
