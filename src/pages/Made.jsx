import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuToggle from "../components/menu/MenuToggle";

const HEADER_HEIGHT = 85;
const HEADER_TOP_OFFSET = 40;

const MadeBox = ({ images, title, kr, en, location }) => {
  return (
    <div className="Made-Detail-Box w-full min-[376px]:w-[calc(50%-10px)] min-[701px]:w-[calc(50%-20px)] flex flex-col gap-[20px] h-full box-border">
      <div className="relative w-full overflow-hidden rounded-sm aspect-video">
        <Swiper modules={[Navigation]} navigation className="absolute inset-0 w-full h-full">
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`${title} 이미지 ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="Made-Detail-Text flex flex-col gap-[12px]">
        <p
          id="Made-Detail-Title"
          className="font-[var(--font-mono)] text-[15px] leading-[1.45] tracking-[-0.005em] font-semibold"
        >
          {title}
        </p>
        <p
          id="Made-Detail-Kr"
          className="font-[var(--font-mono)] text-[15px] leading-[1.8] tracking-[-0.1em]"
        >
          {kr}
        </p>
        <p
          id="Made-Detail-En"
          className="font-[var(--font-mono)] text-[15px] leading-[1.8] tracking-[-0.1em]"
        >
          {en}
        </p>
        <p
          id="Made-Location"
          className="font-[var(--font-mono)] text-[15px] leading-[1.8] tracking-[-0.1em]"
        >
          {location}
        </p>
      </div>
    </div>
  );
};

const Made = () => {
  return (
    <div
      className="relative min-h-screen font-[var(--font-mono)] text-[#362C11] bg-[#E9F1E9]"
    >
      <div
        className="max-[701px]:hidden fixed left-0 w-full z-[50]"
        style={{
          top: `${HEADER_TOP_OFFSET}px`,
          backgroundColor: "transparent",
        }}
      >
        <Header />
      </div>
      <div className="p-5 fixed top-0 left-0 right-0 z-50">
        <div className="min-[701px]:hidden relative">
          <MenuToggle />
        </div>
      </div>

      <div
        style={{
          paddingTop: `${HEADER_HEIGHT + HEADER_TOP_OFFSET}px`,
        }}
        className="max-[700px]:pt-0"
      >
        <section className="w-full py-10 px-5 min-[701px]:px-10 flex flex-col gap-5 min-[701px]:gap-[40px] box-border
            max-[700px]:pt-[10px]
        ">
          
          <div className="w-full flex justify-between items-start flex-wrap gap-5 min-[701px]:gap-10">
            <MadeBox
              images={[
                "https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Product+1-1",
                "https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Product+1-2",
                "https://via.placeholder.com/600x400/0000FF/FFFFFF?text=Product+1-3",
              ]}
              title="말-(메)아리 조각"
              kr="굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다."
              en="We draw maps both alone and together, then share stories about them. The maps we create are not merely about marking roads and places; they become tools that reveal—and even generate—our perspectives on the world."
              location="굿즈 위치가 들어가야 합니다."
            />

            <MadeBox
              images={[
                "https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Product+1-1",
                "https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Product+1-2",
                "https://via.placeholder.com/600x400/0000FF/FFFFFF?text=Product+1-3",
              ]}
              title="말-(메)아리 조각"
              kr="굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다."
              en="We draw maps both alone and together, then share stories about them. The maps we create are not merely about marking roads and places; they become tools that reveal—and even generate—our perspectives on the world."
              location="굿즈 위치가 들어가야 합니다."
            />
          </div>

          <div className="w-full flex justify-between items-start flex-wrap gap-5 min-[701px]:gap-10 pt-[20px]">
            <MadeBox
              images={[
                "https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Product+1-1",
                "https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Product+1-2",
                "https://via.placeholder.com/600x400/0000FF/FFFFFF?text=Product+1-3",
              ]}
              title="말-(메)아리 조각"
              kr="굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다."
              en="We draw maps both alone and together, then share stories about them. The maps we create are not merely about marking roads and places; they become tools that reveal—and even generate—our perspectives on the world."
              location="굿즈 위치가 들어가야 합니다."
            />

            <MadeBox
              images={[
                "https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Product+1-1",
                "https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Product+1-2",
              ]}
              title="말-(메)아리 조각"
              kr="굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다. 굿즈 설명이 들어가야 합니다."
              en="We draw maps both alone and together, then share stories about them. The maps we create are not merely about marking roads and places; they become tools that reveal—and even generate—our perspectives on the world."
              location="굿즈 위치가 들어가야 합니다."
            />
          </div>
        </section>
      </div>

      <Footer />

      <style>{`
        .Made-Detail-Box .swiper-button-prev,
        .Made-Detail-Box .swiper-button-next {
          width: 25px;
          height: 25px;
          background-color: transparent;
          color: #362C11;
          opacity: 0;
          transition-duration: 0.2s;
          cursor: pointer;;
        }

        .Made-Detail-Box .swiper-button-prev::after,
        .Made-Detail-Box .swiper-button-next::after {
          font-size: 14px;
        }

        .Made-Detail-Box > div:first-child:hover .swiper-button-prev.swiper-button-disabled,
        .Made-Detail-Box > div:first-child:hover .swiper-button-next.swiper-button-disabled {
          opacity: 0.3;
          pointer-events: none;
          cursor: default;
        }

        .Made-Detail-Box > div:first-child:hover .swiper-button-prev,
        .Made-Detail-Box > div:first-child:hover .swiper-button-next {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Made;