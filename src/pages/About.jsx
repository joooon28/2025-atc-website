import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuToggle from "../components/menu/MenuToggle";
import StaffSheetContainer from "../components/AboutStaff";

import ScrollDownIcon from "/lottie/AboutIcon/Scroll_down.svg";

const FirstSection = () => {
  return (
    <div
      className="relative w-full min-h-screen box-border flex flex-col 
      
      /* Desktop (>= 1000px) */
      min-tablet:pb-0 min-tablet:gap-10
      
      /* Intermediate & Mobile (max 999px) - justify-evenly를 통해 제목, 이미지, 하단 정보의 세로 간격을 확보 */
      max-[999px]:justify-evenly max-[999px]:pt-[100px] max-[999px]:pb-[20px] max-[999px]:gap-0 
    "
    >
      <div
        className="
          min-tablet:hidden 
          
          max-[999px]:static max-[999px]:w-full max-[999px]:px-4 max-[999px]:z-10
          max-[999px]:flex max-[999px]:flex-col max-[999px]:items-center max-[999px]:gap-[20px] 
      "
      >
        <h2
          className="font-[500] text-[24px] leading-[120%] tracking-normal z-10 
          text-[#362C11] 
          max-[999px]:text-center max-[999px]:flex-shrink-0 
        "
        >
          울퉁불퉁하게 <br /> 말아리
        </h2>

        <h2
          className="font-[500] text-[24px] leading-[120%] tracking-normal z-10 
          text-[#362C11] 
          max-[999px]:text-center max-[999px]:flex-shrink-0 
        "
        >
          Art & Technology <br /> Conference
        </h2>
      </div>

      <div
        className="
        max-[999px]:hidden 
        min-tablet:absolute min-tablet:top-0 min-tablet:left-0 min-tablet:w-full min-tablet:h-full
      "
      >
        <h2
          className="font-[500] text-[#B3C5D8] text-[16px] leading-[120%] tracking-normal z-10 
          min-tablet:mix-blend-difference min-tablet:text-[24px]
          min-tablet:absolute min-tablet:top-1/2 min-tablet:-translate-y-1/2 
          min-tablet:left-[40px]"
        >
          울퉁불퉁하게 <br /> 말아리
        </h2>

        <h2
          className="font-[500] text-[16px] leading-[120%] tracking-normal text-[#B3C5D8] z-10 
          min-tablet:mix-blend-difference min-tablet:text-[24px]
          min-tablet:absolute min-tablet:top-1/2 min-tablet:-translate-y-1/2 min-tablet:text-right
          min-tablet:right-[40px]"
        >
          Art & Technology <br /> Conference
        </h2>
      </div>

      <div
        className="z-0 
        min-tablet:absolute min-tablet:top-1/2 min-tablet:left-1/2 min-tablet:-translate-x-1/2 min-tablet:-translate-y-1/2 
        min-tablet:w-[90%] 
        min-tablet:max-w-[800px] 
        
        min-[701px]:max-[999px]:static min-[701px]:max-[999px]:mx-auto
        min-[701px]:max-[999px]:w-[80vw]
        min-[701px]:max-[999px]:max-w-[800px]
        min-[701px]:max-[999px]:min-w-[400px]

        max-[700px]:static max-[700px]:w-[100%] max-[700px]:px-0 
        max-[700px]:mt-8 max-[700px]:mb-0 max-[700px]:box-border max-[700px]:mx-auto      "
      >
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762964729/AtcFinalPoster_ntiidz.png"
            alt="포스터"
            className="w-full h-auto max-h-[40vh] min-tablet:max-h-[60vh] object-contain mx-auto"
            onClick={() =>
              openModal(
                "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762964729/AtcFinalPoster_ntiidz.png"
              )
            }
          />
        </div>
      </div>

      <div
        className="z-10 flex flex-col items-center 
        
        min-tablet:absolute min-tablet:left-1/2 min-tablet:-translate-x-1/2 min-tablet:bottom-0 min-tablet:pb-[40px]
        
        max-[999px]:static max-[999px]:w-full max-[999px]:px-4 max-[999px]:pb-0 max-[999px]:mt-[20px] 
      "
      >
        <p className="text-center font-['Monoplex KR'] font-normal text-sm leading-[100%] tracking-normal text-[#362C11] mb-[6px] min-tablet:mb-[6px]">
          11.20 - 11.23
        </p>

        <p className="text-center font-normal text-sm leading-[120%] tracking-normal text-[#362C11] mb-[6px]">
          2025 Art & Technology Conference{" "}
          <span className="underline hover:opacity-70">
            <a
              href="https://www.instagram.com/atc.sogang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              @atc.sogang
            </a>
          </span>
        </p>

        <p className="text-center font-normal text-sm leading-[140%] tracking-normal text-[#362C11]">
          서울특별시 마포구 백범로 35{" "}
          <br className="max-[501px]:block hidden" />
          서강대학교 하비에르관(X관) 4-5층
        </p>

        <img
          src={ScrollDownIcon}
          alt="Scroll Down"
          className="mx-auto mt-3 w-6 h-6 max-tablet:w-5 max-tablet:h-5"
        />
      </div>
    </div>
  );
};

const SecondSection = () => {
  return (
    <div
      className="w-full box-border flex justify-between gap-[40px] 
      max-tablet:flex-col max-tablet:gap-0

      px-[20px] 
      min-tablet:px-[40px]"
    >
      <div
        className="w-[calc(50%-20px)] pt-40
          max-tablet:w-full max-tablet:pb-10 max-tablet:pt-20
      "
      >
        <h2 className="font-['Monoplex KR'] font-semibold text-2xl leading-none text-center mb-10 text-[#362C11]">
          전시 개요
        </h2>
        <div className="font-normal text-[15px] leading-large tracking-tight text-[#362C11]">
          <p className="mb-3">
            《울퉁불퉁하게 말아리》는 각자가 가진 고유한 말들의 방식에 주목한다.
          </p>
          <p className="mb-3">
            우리는 종종 말에 앞서 자격을 생각한다. 유의미한 말을 하기 위해선
            그에 걸맞은 경험과 지식, 전문성이나 지위를 갖추어야 한다고 여긴다.
            피드백 역시 어느새 기성의 언어를 재생산하는 일이 되었고, 우리는
            ‘내가 뭐라고’, ‘난 저 분야를 잘 모르니까’라며 말을 삼킨다. 말은
            어느새 자신의 것이 아닌 외부의 권위를 빌려 기능한다. 우리는 얼만큼
            스스로의 감각으로 말하고 있는가? 창작에 있어서 스스로의 언어와
            체계보다, 다른 누군가의 기준과 평가에 먼저 기대고 있지는 않은가?
            누구나 자유롭게 말하고 피드백할 수 있는 공동의 장은 여전히 이곳에서
            가능한가? 익숙한 기준과 평가에서 벗어나 서로를 그 자체로 보기 위해
            무엇이 필요한가?
          </p>
          <p className="mb-3">
            2025 ATC는 이러한 질문에 아마추어적 태도로 답하고자 한다. 아마추어는
            자주 엉성하고 산만하지만, 그 덕분에 어디에도 완전히 속박되지 않은 채
            자신만의 말과 태도를 만들어간다. 이곳에서 우리는 기성의 규칙이나
            논리에서 벗어나 각자의 고유한 말-하기를 시도해보고자 한다.
          </p>
          <p className="mb-3">
            그것의 문법이 때론 정확하지 않을지라도, 우리가 건네는 말들은 서로의
            영역을 자유로이 넘나들며 어긋나고, 충돌하고, 되돌아와 낯선
            •¨•.¸말-(메)아리¸.o◦｡를 만들어낸다. 마치 울퉁불퉁한 지형에 부딪혀
            만들어내는 예측 불가능한 파동과 같은 움직임 속에서. 이는 각자의
            고유한 굴곡을 오롯이 마주하는 일이며, 다름의 불완전함 속에서 의미는
            타인에게 닿아 더 멀리, 더 크게 증식할 것이다.
          </p>
        </div>
      </div>
      <div
        className="w-[calc(50%-20px)] pt-40
          max-tablet:w-full max-tablet:pt-0 max-tablet:pb-10
      "
      >
        <h2 className="font-['Monoplex KR'] font-semibold italic text-2xl leading-none text-center mb-10 text-[#362C11]">
          Overview
        </h2>
        <div className="font-normal text-[15px] leading-regular tracking-regular text-[#362C11]">
          <p className="mb-3">
            《울퉁불퉁하게 말아리》 focuses on the diverse and uneven ways in
            which we speak.
          </p>
          <p className="mb-3">
            Too often, before speaking, we question our own qualifications. We
            assume that to speak meaningfully, one must possess the appropriate
            experience, knowledge, or authority. In doing so, speaking itself
            becomes the reproduction of established languages. We silence
            ourselves—saying, “Who am I to speak?” or “I’m not an expert.” Words
            begin to function not as our own, but as borrowed expressions of
            external authorities and power. How much of what we say truly
            belongs to our own sensibility? In creative practice, do we rely
            first on others’ standards and evaluations rather than our own
            structures of meaning? Is it still possible to sustain a shared
            space where anyone can speak and respond freely? What does it take
            to see one another beyond familiar criteria and hierarchies?
          </p>
          <p className="mb-3">
            Art Technology Conference 2025 approaches these questions with an
            amateur’s attitude. The amateur may be awkward or inconsistent, yet
            remains unbound by institutional logic— free to form their own
            language, rhythm, and sensibility.
          </p>
          <p className="mb-3">
            Within this space, we seek to practice our own modes of speaking,
            departing from prescribed rules and systems of judgment.
          </p>
          <p className="mb-3">
            Even when our grammar falters, our words may cross, collide, and
            return—creating unfamiliar echoes, or 말-(메)아리, that resonate
            across uneven terrains. Through these unpredictable reverberations,
            we encounter the distinct contours of each voice. Meaning expands
            not through perfection, but through the friction and difference that
            connect us— growing wider, louder, and more intricate in its shared
            resonance.
          </p>
        </div>
      </div>
    </div>
  );
};

const ThirdSection = ({ openModal }) => {
  return (
    <div
      className="w-full box-border flex justify-between gap-[40px] min-h-[1200px] 
      max-tablet:flex-col max-tablet:gap-0 max-tablet:min-h-0
      
      px-[20px] 
      min-tablet:px-[40px]"
    >
      <div
        className="min-[1000px]:[width:calc(50%-20px)] h-[585px] pt-40 box-border flex-shrink-0 
        min-tablet:sticky top-0 min-tablet:[width:calc(50%-20px)]
        max-tablet:w-full max-tablet:h-auto max-tablet:pt-20 max-tablet:pb-10 max-tablet:relative
      "
      >
        <img
          src="https://res.cloudinary.com/dbw1ckgzr/image/upload/v1763109769/%EC%95%BC%EC%98%B9_%EC%97%84%EB%A7%88%EC%9D%B4%EA%B1%B0%EC%95%BC_r8rswo.png"
          alt="포스터"
          className="absolute bottom-0 right-0 cursor-pointer block max-tablet:static max-tablet:mx-auto
          min-[1000px]:w-[300px] min-[1000px]:h-[425px] 
          max-tablet:w-[250px] max-tablet:h-[354px]"
          onClick={() =>
            openModal(
              "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1763109769/%EC%95%BC%EC%98%B9_%EC%97%84%EB%A7%88%EC%9D%B4%EA%B1%B0%EC%95%BC_r8rswo.png"
            )
          }
        />
      </div>
      <div
        className="min-[1000px]:[width:calc(50%-20px)] pt-40 
          min-tablet:[width:calc(50%-20px)]
          max-tablet:w-full max-tablet:pt-10 max-tablet:pb-20
      "
      >
        <h2 className="font-['Monoplex KR'] font-semibold text-2xl leading-none mb-10 text-[#362C11]">
          축사{" "}
          <span className="font-['Monoplex KR'] font-semibold italic text-[#362C11]">
            Congratulatory Speech
          </span>
        </h2>

        <div className="mb-[40px] text-[#362C11]">
          <div className="font-regular text-[15px] leading-large tracking-tight mb-[40px]">
            <p className="mb-3">
              서강대학교 Art & Technology 학과에서 《울퉁불퉁하게 말아리》를
              주제로 제14회 Art & Technology Conference (ATC) 2025를 개최합니다.
            </p>
            <p className="mb-3">
              2012년부터 매해 학생들이 직접 기획·제작·운영해 온 ATC는 차세대
              크리에이터들이 초학제적 융합과 경계 없는 실험을 통해 서로 자극받고
              즐기는 놀이이자 축제, 그리고 창의성과 협력의 의미를 되새기는
              교육의 장입니다.
            </p>
            <p className="mb-3">
              올해 ATC 2025는 30명의 스태프와 76명의 아티스트가 6개월 넘게
              준비한 결과물로, 11월 20일(목)부터 23일(일)까지 4일간 서강대학교
              하비에르관 (X관) 1·4·5층 전역에서 전시, 프로그램, 라운드 테이블,
              콜라보 부스, 인터랙션 작품, 즉흥 협연, 아카이브 섹션 등 다채로운
              형식으로 펼쳐집니다.
            </p>
            <p className="mb-3">
              우리가 건네는 말들은 서로의 영역을 자유로이 넘나들며 어긋나고,
              충돌하고, 되돌아와 낯선 말-(메)아리를 만들어냅니다. 마치
              울퉁불퉁한 지형에 부딪혀 생겨나는 예측 불가능한 파동처럼, 각자의
              고유한 굴곡을 마주하며 불완전함 속에서 새로운 의미는 더 멀리, 더
              크게 증식합니다.
            </p>
            <p className="mb-3">
              이번 ATC 2025 《울퉁불퉁하게 말아리》를 통해 정형화되지 않은
              시도들, 서로 다른 리듬 속에서 피어나는 새로운 언어와 사고의
              실험들, 미래 크리에이터들의 도발적이고 진솔한 이야기들을
              만나보시기 바랍니다.
            </p>
            <p className="mb-3">여러분을 ATC 2025에 정중히 초대합니다.</p>
            <p className="font-medium">
              서강대학교 아트&테크놀로지학과 학과장 <br /> 최용순
            </p>
          </div>
          <div className="relative [padding-bottom:34px] mb-8 font-regular text-[15px] leading-regular tracking-regular border-b border-[#362C11] congratulatory-text-divider">
            <p className="mb-3">
              Sogang University's Department of Art & Technology is pleased to
              host the 14th Art & Technology Conference (ATC) 2025, under the
              theme 《울퉁불퉁하게 말아리》.
            </p>
            <p className="mb-3">
              Since 2012, the ATC—which is entirely planned, produced, and
              managed by the students each year—has served as a space for
              education where the next generation of creators can stimulate each
              other and enjoy a festive play of trans-disciplinary convergence
              and boundaryless experimentation, while also reflecting on the
              meaning of creativity and collaboration.
            </p>
            <p className="mb-3">
              This year's ATC 2025 is the result of over six months of
              preparation by 30 staff members and 76 artists. It will unfold
              over four days, from Thursday, November 20th to Sunday, November
              23rd, across the 1st, 4th, and 5th floors of the Sogang University
              Xavier Hall, featuring diverse formats including exhibitions,
              programs, roundtables, collaboration booths, interactive works,
              impromptu collaborations, and an archive section.
            </p>
            <p className="mb-3">
              The words we exchange freely traverse each other’s domains, going
              astray, colliding, and returning to create unfamiliar
              words—an (M)echo. Like unpredictable waves generated by crashing
              into an uneven terrain, new meaning multiplies farther and louder
              within this imperfection as we confront each one's unique curve
              and unevenness.
            </p>
            <p className="mb-3">
              Through this ATC 2025, 《울퉁불퉁하게 말아리》, we invite you to
              encounter unstandardized attempts, experiments with new languages
              and thoughts blossoming within different rhythms, and the
              provocative yet sincere stories of our future creators.
            </p>
            <p className="mb-3">
              We cordially invite you to join us at ATC 2025.
            </p>
            <p className="font-medium">
              Sogang Univ. Art&Technology Head of Department <br /> Yongsoon
              Choi
            </p>
          </div>
        </div>

        {/* <div className="mb-[40px] text-[#362C11]">
          <div className="font-regular text-[15px] leading-large tracking-tight mb-[40px]">
            <p className="mb-3">
              2025 ATC &lt;울퉁불퉁하게 말아리&gt;는 각자가 가진 고유한 말들의
              방식에 주목한다.
            </p>
            <p className="mb-3">
              우리는 종종 말에 앞서 자격을 생각한다. 유의미한 말을 위해선 그에
              걸맞은 경험과 지식, 전문성이나 지위를 갖추어야 한다고 여긴다.
              피드백 역시 어느새 권위자의 언어를 재생산하는 일이 되었고, 우리는
              ‘내가 뭐라고’, ‘난 저 분야를 잘 모르니까’ 라며 스스로 말을 삼킨다.
              우리의 말은 어느새 우리의 것이 아닌 다른 누군가의 언어를 빌려
              기능하게 된다. 우리는 얼만큼 우리 자신의 감각으로 말하고 있는가?
              창작에 있어서 스스로의 언어와 체계보다, 다른 누군가의 기준과
              평가에 먼저 기대고 있지는 않은가? 누구나 자유롭게 말하고 피드백할
              수 있는 공동의 장은 여전히 이곳에서 가능한가?
            </p>
            <p className="font-medium">
              서강대학교 아트&테크놀로지학과 학과장 <br /> 최용순
            </p>
          </div>
          <div className="relative [padding-bottom:34px] mb-8 font-regular text-[15px] leading-regular tracking-regular border-b border-[#362C11] congratulatory-text-divider">
            <p className="mb-3">
              2025 ATC &lt;울퉁불퉁하게 말아리&gt; draws attention to the unique
              ways in which each of us speaks.
            </p>
            <p className="mb-3">
              We often think of qualifications before words. We assume that to
              say something meaningful, one must possess the right experiences,
              knowledge, expertise, or status. Feedback, too, has become the
              reproduction of an authority’s language, and we swallow our own
              words with thoughts like, “Who am I to say this?” or “I don’t
              really know that field.” Our words, then, no longer belong to us
              but function by borrowing someone else’s language. How much are we
              truly speaking from our own senses? In creation, do we lean first
              on the standards and evaluations of others, rather than our own
              language and system? Is a common space where anyone can speak and
              give feedback freely still possible here?
            </p>
            <p className="font-medium">
              Sogang Univ. Art&Technology Head of Department <br /> Yongsoon
              Choi
            </p>
          </div>
        </div> */}

        {/* <div className="text-[#362C11]">
          <div className="font-regular text-[15px] leading-large tracking-tight mb-[40px]">
            <p className="mb-3">
              2025 ATC &lt;울퉁불퉁하게 말아리&gt;는 각자가 가진 고유한 말들의
              방식에 주목한다.
            </p>
            <p className="mb-3">
              우리는 종종 말에 앞서 자격을 생각한다. 유의미한 말을 위해선 그에
              걸맞은 경험과 지식, 전문성이나 지위를 갖추어야 한다고 여긴다.
              피드백 역시 어느새 권위자의 언어를 재생산하는 일이 되었고, 우리는
              ‘내가 뭐라고’, ‘난 저 분야를 잘 모르니까’ 라며 스스로 말을 삼킨다.
              우리의 말은 어느새 우리의 것이 아닌 다른 누군가의 언어를 빌려
              기능하게 된다. 우리는 얼만큼 우리 자신의 감각으로 말하고 있는가?
              창작에 있어서 스스로의 언어와 체계보다, 다른 누군가의 기준과
              평가에 먼저 기대고 있지는 않은가? 누구나 자유롭게 말하고 피드백할
              수 있는 공동의 장은 여전히 이곳에서 가능한가?
            </p>
            <p className="font-medium">
              서강대학교 아트&테크놀로지학과 학과장 <br /> 최용순
            </p>
          </div>
          <div className="relative font-regular text-[15px] leading-regular tracking-regular">
            <p className="mb-3">
              2025 ATC &lt;울퉁불퉁하게 말아리&gt; draws attention to the unique
              ways in which each of us speaks.
            </p>
            <p className="mb-3">
              We often think of qualifications before words. We assume that to
              say something meaningful, one must possess the right experiences,
              knowledge, expertise, or status. Feedback, too, has become the
              reproduction of an authority’s language, and we swallow our own
              words with thoughts like, “Who am I to say this?” or “I don’t
              really know that field.” Our words, then, no longer belong to us
              but function by borrowing someone else’s language. How much are we
              truly speaking from our own senses? In creation, do we lean first
              on the standards and evaluations of others, rather than our own
              language and system? Is a common space where anyone can speak and
              give feedback freely still possible here?
            </p>
            <p className="font-medium">
              Sogang Univ. Art&Technology Head of Department <br /> Yongsoon
              Choi
            </p>
          </div>
        </div> */}

        <style>{`
          .congratulatory-text-divider::before,
          .congratulatory-text-divider::after {
              content: "";
              position: absolute;
              bottom: -3.5px; 
              width: 6px;
              height: 6px;
              background-color: #362C11;
              border-radius: 50%;
          }

          .congratulatory-text-divider::before {
              left: 0;
          }

          .congratulatory-text-divider::after {
              right: 0;
          }

          .mix-blend-difference {
              mix-blend-mode: difference;
          }
        `}</style>
      </div>
    </div>
  );
};

const FourthSection = ({ openStaffSheet }) => {
  const navigate = useNavigate();

  const CreditList = ({ titleKr, titleEn, members }) => (
    <div className="mb-10 text-[#362C11]">
      <div className="font-medium text-[15px] max-[360px]:text-[13px] leading-regular mb-3 tracking-regular text-right">
        {titleKr} <span className="font-medium italic">{titleEn}</span>
      </div>
      <div
        className={`${
          titleKr === "웹 개발팀"
            ? "mb-[85px] min-[1000px]:mb-[85px] max-[999px]:mb-[40px]"
            : ""
        }`}
      >
        {members.map((member, index) => (
          <p
            key={index}
            className="font-regular text-[15px] leading-regular mb-3 tracking-regular whitespace-nowrap text-right max-[360px]:text-[13px]"
          >
            {member}
          </p>
        ))}
      </div>
    </div>
  );

  const handleCreditMoreClick = () => {
    openStaffSheet();
  };

  return (
    <div
      className="w-full box-border flex justify-between gap-[40px] items-start 
      max-tablet:flex-col max-tablet:gap-0 

      px-[20px] 
      min-tablet:px-[40px]"
    >
      <div
        className="pt-40 relative flex-shrink-0
        w-[calc(50%-20px)]
        max-tablet:w-full
        max-tablet:pt-10 max-tablet:pb-20
        max-tablet:order-2
        "
      >
        <h2 className="font-semibold text-[24px] leading-[100%] mb-10 text-[#362C11] text-right">
          크레딧{" "}
          <span className="font-semibold italic leading-[100%] text-[#362C11]">
            Credits
          </span>
        </h2>
        <CreditList
          titleKr="크리에이티브 디렉터"
          titleEn="Creative Director"
          members={["김현지 Hyunji Kim"]}
        />
        <CreditList
          titleKr="전시팀"
          titleEn="Exhibition Team"
          members={[
            "김현진 Hyeonjin Kim \u00A0 신서윤 Seoyun Shin",
            "윤세은 Seeun Yoon \u00A0 이윤선 Yoonseon Lee",
            "황나금 Naguem Hwang",
          ]}
        />
        <CreditList
          titleKr="프로그램팀"
          titleEn="Program Team"
          members={[
            "오제우 Jewoo Oh \u00A0 김예찬 Yechan Kim",
            "우서진 Seojin Woo",
          ]}
        />
        <CreditList
          titleKr="대외협력팀"
          titleEn="Business Team"
          members={[
            "김서영 Seoyoung Kim \u00A0 문금미 Geummi Moon",
            "유가형 Kahyung Yoo \u00A0 장채원 Chaewon Jang",
          ]}
        />
        <CreditList
          titleKr="비주얼 디자인팀"
          titleEn="Visual Design Team"
          members={[
            "심유림 Yurim Sim \u00A0 김민서 Minseo Kim",
            "김성은 Seongeun Kim \u00A0 김혜림 Hyerim Kim",
            "이선명 Sunmyeong Lee",
          ]}
        />
        <CreditList
          titleKr="인터랙션팀"
          titleEn="Interaction Team"
          members={[
            "김인규 Ingyu Kim \u00A0 설희윤 Heeyun Sul",
            "신채원 Chaewon Shin \u00A0 윤기완 Giwan Yoon",
            "이다은 Daeun Lee",
          ]}
        />
        <CreditList
          titleKr="아카이브팀"
          titleEn="Archieve Team"
          members={[
            "강정모 Jeongmo Kang \u00A0 김태희 Taehee Kim",
            "문예담 Yedam Moon \u00A0 박민준 Minjoon Park",
          ]}
        />
        <CreditList
          titleKr="사운드 디자이너"
          titleEn="Sound Designer"
          members={["송창환 Changwhan Song"]}
        />
        <CreditList
          titleKr="웹 개발팀"
          titleEn="Web Develop Team"
          members={["김준수 Junsu Kim \u00A0 김서영 Seoyoung Kim"]}
        />

        <div className="min-[1000px]:absolute min-[1000px]:bottom-0 min-[1000px]:right-0 max-[999px]:static max-[999px]:mt-8 text-right">
          <button
            className="border border-[#362C11] px-6 py-3 bg-[#F3F3EC] font-['Monoplex KR'] font-normal text-base leading-none hover:cursor-pointer text-[#362C11]"
            onClick={handleCreditMoreClick}
          >
            See More
          </button>
        </div>
      </div>

      <div
        className="pt-40 box-border flex-shrink-0
        w-[calc(50%-20px)] 
        
        min-tablet:sticky min-tablet:top-0 

        max-tablet:w-full
        max-tablet:pt-10 max-tablet:pb-10
        max-tablet:order-1
        "
      >
        <div className="w-full mb-3 relative h-0 pb-[56.25%] overflow-hidden">
          <div className="bg-[#362C11] w-full absolute top-0 left-0 h-full flex items-center justify-center italic text-label-invert">
            Coming Soon
          </div>
        </div>

        <p className="italic font-regular min-[1000px]:text-sm text-sm leading-none tracking-none text-[#362C11]">
          Interaction Teaser Film
        </p>
      </div>
    </div>
  );
};

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isStaffSheetOpen, setIsStaffSheetOpen] = useState(false);

  const openModal = (url) => {
    setSelectedImage(url);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const openStaffSheet = () => {
    setIsStaffSheetOpen(true);
  };

  const closeStaffSheet = () => {
    setIsStaffSheetOpen(false);
  };

  const FullScreenModal = () => {
    if (!selectedImage) return null;

    return (
      <div
        className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center cursor-zoom-out"
        onClick={closeModal}
      >
        <div
          className="relative max-w-full max-h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={selectedImage}
            alt="전체 화면 이미지"
            className="max-w-full max-h-screen object-contain"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen text-[#362C11] bg-[#E9F1E9] font-['Monoplex KR']">
      <div className="max-tablet:hidden py-[40px] fixed top-0 left-0 right-0 z-50 pt-10">
        <Header />
      </div>
      <div className="p-5 fixed top-0 left-0 right-0 z-50 min-tablet:hidden">
        <div className="relative ">
          <MenuToggle />
        </div>
      </div>

      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection openModal={openModal} />
        <FourthSection openStaffSheet={openStaffSheet} />
      </main>
      <Footer showSponsorship="true" />

      <FullScreenModal />

      <StaffSheetContainer
        isVisible={isStaffSheetOpen}
        onClose={closeStaffSheet}
      />
    </div>
  );
}
