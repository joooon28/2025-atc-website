import React, { useState, useEffect, useRef } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuToggle from "../components/menu/MenuToggle";

const HEADER_HEIGHT = 85;
const HEADER_TOP_OFFSET = 40;
const SLIDE_INTERVAL = 1000;

const MadeBox = ({
  images,
  title,
  titleEn,
  kr,
  en,
  location,
  priceKr,
  priceEn,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timeoutRef = useRef(null);
  const startTimeRef = useRef(null);
  const remainingTimeRef = useRef(SLIDE_INTERVAL);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    startTimer(SLIDE_INTERVAL);
  };

  const startTimer = (duration) => {
    clearTimer();
    startTimeRef.current = Date.now();
    remainingTimeRef.current = duration;
    timeoutRef.current = setTimeout(goToNextSlide, duration);
  };

  useEffect(() => {
    if (images.length > 1) {
      startTimer(SLIDE_INTERVAL);
    }
    return clearTimer;
  }, [images.length]);

  const handleMouseEnter = () => {
    if (images.length > 1) {
      const elapsedTime = Date.now() - startTimeRef.current;
      const timeRemaining = remainingTimeRef.current - elapsedTime;
      remainingTimeRef.current = Math.max(0, timeRemaining);
      clearTimer();
    }
  };

  const handleMouseLeave = () => {
    if (images.length > 1) {
      startTimer(remainingTimeRef.current);
    }
  };

  return (
    <div className="Made-Detail-Box w-full min-mobile:w-[calc(50%-10px)] min-tablet:w-[calc(50%-20px)] flex flex-col gap-[20px] h-full box-border">
      <div
        className="relative w-full overflow-hidden rounded-sm aspect-video flex justify-center items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={images[currentImageIndex]}
          alt={`${title} 이미지 ${currentImageIndex + 1}`}
          className="w-full h-full object-contain transition-opacity duration-1000 bg-[#E9F1E9]"
        />
      </div>

      <div className="Made-Detail-Text flex flex-col gap-[12px]">
        <p
          id="Made-Detail-Title-En"
          className="font-[500] text-[15px] leading-[145%] tracking-[-0.5%] whitespace-normal min-tablet:whitespace-nowrap"
        >
          <span className="font-[500] not-italic">{title} </span>

          <br className="hidden min-mobile:inline min-tablet:hidden" />

          <span className="inline-block min-mobile:ml-0 min-tablet:ml-[0px] italic">
            {titleEn}
          </span>
        </p>

        <p
          id="Made-Detail-Kr"
          className="font-normal text-[15px] leading-[180%] tracking-[-10%]"
        >
          {kr}
        </p>

        <p
          id="Made-Detail-En"
          className="font-normal text-[15px] leading-[145%] tracking-[-0.5%] mt-[5px]"
        >
          {en}
        </p>

        <div className="flex justify-between items-center mt-[5px]">
          <p
            id="Made-Location"
            className="font-normal text-[15px] leading-[180%] tracking-[-10%]"
          >
            {location}
          </p>
          <p
            id="Made-Price-En"
            className="font-normal text-[15px] leading-[145%] tracking-[-0.5%]"
          >
            {priceEn}
          </p>
        </div>
      </div>
    </div>
  );
};

const Made = () => {
  return (
    <div className="relative min-h-screen font-[var(--font-mono)] text-[#362C11] bg-[#F8F8F7]">
      <div
        className="max-tablet:hidden fixed left-0 w-full z-[50]"
        style={{
          top: `${HEADER_TOP_OFFSET}px`,
          backgroundColor: "transparent",
        }}
      >
        <Header />
      </div>
      <div className="p-5 fixed top-0 left-0 right-0 z-50">
        <div className="min-tablet:hidden relative">
          <MenuToggle />
        </div>
      </div>

      <div
        style={{
          paddingTop: `${HEADER_HEIGHT + HEADER_TOP_OFFSET}px`,
        }}
        className="max-tablet:pt-0"
      >
        <section
          className="w-full py-10 px-5 min-tablet:px-10 flex flex-col gap-5 min-tablet:gap-[40px] box-border
            max-tablet:pt-[10px]
        "
        >
          <div className="w-full flex justify-between items-start flex-wrap gap-5 min-tablet:gap-10 pt-[20px]">
            <MadeBox
              images={[
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762961700/EC_95_84_ED_8A_B8_EB_B3_B4_EB_93_9C_20412341234_eq6nlb.png",
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762961702/EC_95_84_ED_8A_B8_EB_B3_B4_EB_93_9C_204_E3_84_B4_E3_84_B9234_nnkdot.png",
              ]}
              title="「ATC와춤을」연필"
              titleEn="Dancing with ATC Pencil"
              kr="2025 ATC에 방문한 모든 이에게 「ATC와춤을」연필을 선물합니다. 우리의 말아리를 기록하고 물음표를 휘날리며 ATC와 춤을!"
              en="Every visitor to 2025 ATC will receive an ATC Dance Pencil. Record your words, let those questions marks flutter, and dance with ATC! Let’s dance!"
              location="MD 부스"
              priceEn="(free)"
            />

            <MadeBox
              images={[
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762961738/E1_84_86_E1_85_A1_E1_86_AF1_mpxv1z.png",
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762961740/E1_84_86_E1_85_A1_E1_86_AF2_e3tx5z.png",
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762961743/E1_84_86_E1_85_A1_E1_86_AF3_exeqir.png",
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762961746/E1_84_86_E1_85_A1_E1_86_AF4_ardjfa.png",
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762961749/E1_84_86_E1_85_A1_E1_86_AF5_fbnhiq.png",
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762961752/E1_84_86_E1_85_A1_E1_86_AF6_xyepyl.png",
              ]}
              title="말아리조각"
              titleEn="Piece of UtterEcho"
              kr="2025 ATC를 준비하며 기획단이 나누었던 말아리가 담긴 말아리조각입니다. 조각내서 박제한 우리의 울퉁불퉁하게말아리를 간직하세요."
              en="These are Pieces of UtterEcho shared by 2025 ATC staffs while preparing. Do keep our UtterEcho, broken into pieces and immortalized."
              location="기획단 아카이브"
              priceEn="(free)"
            />
          </div>

          <div className="w-full flex justify-between items-start flex-wrap gap-5 min-tablet:gap-10">
            <MadeBox
              images={[
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762961666/EC_95_84_ED_8A_B8_EB_B3_B4_EB_93_9C_20212341234_pjarl7.png",
              ]}
              title="쫑알쫑알스티커"
              titleEn="BabbleBabble Sticker"
              kr="당신의 숨겨왔던 쫑알쫑알을 세상에 부착하세요. 왱알왱알손바닥수첩을 구입하면 쫑알쫑알스티커를 함께 선물합니다."
              en="Let your secret Babbles out to the world! Get a MumbleMumble Note, then you can get a tiny little BabbleBabble Sticker for free!"
              location="MD 부스"
              priceEn="(free)"
            />

            <MadeBox
              images={[
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762961681/EC_95_84_ED_8A_B8_EB_B3_B4_EB_93_9C_20312341234_achxh5.png",
              ]}
              title="왱알왱알손바닥수첩"
              titleEn="MumbleMumble Note"
              kr="우리의 말아리가 가득 담길 A6 크기의 수첩. 머릿속의 작은 생각들로 채워나가 보세요. 왱알왱알손바닥노트를 구입하면 쫑알쫑알스티커를 함께 선물합니다."
              en="An A6-sized notebookーwaiting to be filled with our words and stories. Fill it little by little with the small thoughts in your mind. With every MumbleMumble Note, you’ll receive a BabbleBabble Sticker."
              location="MD 부스"
              priceEn="(3000 won)"
            />
          </div>

          <div className="w-full flex justify-between items-start flex-wrap gap-5 min-tablet:gap-10">
            <MadeBox
              images={[
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762961770/E1_84_86_E1_85_A7_E1_86_BC_E1_84_92_E1_85_A1_E1_86_B7_E1_84_86_E1_85_A9_E1_86_A8_E1_84_8B_E1_85_A5_E1_86_B8_gw5qyb.png",
              ]}
              title="아마추어의명함"
              titleEn="Amateur’s Namecard"
              kr="오늘이 남은 날 중 가장 아마추어일 때, 지금의 나를 소개하는 명함을 만들어봅시다."
              en="Today may be the last day we remain amateurs. Let’s create a name card that introduces who we are now."
              location="MD 부스"
              priceEn="(free)"
            />

            <MadeBox
              images={[
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1763017947/25E1_2584_258C_25E1_2585_25A2_25E1_2586_25B72_fgulo3.png",
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1763017948/E1_84_8C_E1_85_A2_E1_86_B71_lbeccd.png",
              ]}
              title="울퉁불퉁한맛잼 (35g)"
              titleEn="LumpyBumpy Jam (35g)"
              kr="2025 ATC의 울퉁불퉁함은 과연 어떤 맛이 날까요? 잼팟과 함께 만든 잼을 통해 직접 맛보고 느껴보세요!"
              en="What flavor would 2025 ATC have? Taste and feel it through the jam crafted with JAMPOT!"
              location="대회협력 부스"
              priceEn="(3000 won)"
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Made;
