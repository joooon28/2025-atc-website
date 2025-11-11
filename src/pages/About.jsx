import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuToggle from "../components/menu/MenuToggle";

import ScrollDownIcon from "/lottie/AboutIcon/Scroll_down.svg";

const FirstSection = () => {
  return (
    <div
      className="relative w-full min-h-screen box-border flex flex-col 
      min-[701px]:pb-0 min-[701px]:gap-10
      
      max-[700px]:justify-evenly max-[700px]:pt-[100px] max-[700px]:pb-[20px] max-[700px]:gap-0 
    "
    >
      <div
        className="
        min-[701px]:absolute min-[701px]:top-0 min-[701px]:left-0 min-[701px]:w-full min-[701px]:h-full
        
        max-[700px]:static max-[700px]:w-full max-[700px]:px-4 max-[700px]:z-10
        max-[700px]:flex max-[700px]:flex-col max-[700px]:items-center max-[700px]:gap-[20px] 
      "
      >
        <h2
          className="font-[500] text-[24px] leading-[120%] tracking-normal text-white z-10 
          min-[701px]:mix-blend-difference 
          
          min-[701px]:absolute min-[701px]:top-1/2 min-[701px]:-translate-y-1/2 
          min-[701px]:left-[40px] 

          max-[700px]:static max-[700px]:text-center max-[700px]:text-[#362C11] max-[700px]:flex-shrink-0 
        "
        >
          울퉁불퉁하게 <br /> 말아리
        </h2>

        <h2
          className="font-[500] text-[24px] leading-[120%] tracking-normal text-white z-10 
          min-[701px]:mix-blend-difference 

          min-[701px]:absolute min-[701px]:top-1/2 min-[701px]:-translate-y-1/2 min-[701px]:text-right
          min-[701px]:right-[40px] 

          max-[700px]:static max-[700px]:text-center max-[700px]:text-[#362C11] max-[700px]:flex-shrink-0 
        "
        >
          Art & Technology <br /> Conference
        </h2>
      </div>

      <div
        className="z-0 
        min-[701px]:absolute min-[701px]:top-1/2 min-[701px]:left-1/2 min-[701px]:-translate-x-1/2 min-[701px]:-translate-y-1/2 
        min-[701px]:w-[90%] 
        min-[701px]:max-w-[800px] 
        
        max-[700px]:static max-[700px]:w-full max-[700px]:px-0 
        max-[700px]:my-0 max-[700px]:box-border
      "
      >
        <div className="relative h-0 pb-[56.25%] overflow-hidden">
          <div className="bg-[#362C11] absolute top-0 left-0 w-full h-full"></div>
        </div>
      </div>

      <div
        className="z-10 flex flex-col items-center 
        min-[701px]:absolute min-[701px]:left-1/2 min-[701px]:-translate-x-1/2 min-[701px]:bottom-0 min-[701px]:pb-[40px]
        
        max-[700px]:static max-[700px]:w-full max-[700px]:px-4 max-[700px]:pb-0
      "
      >
        <p className="text-center font-['Monoplex KR'] font-normal text-sm leading-[100%] tracking-normal text-[#362C11] mb-[6px] min-[701px]:mb-[6px]">
          11.20 - 11.23
        </p>

        <p className="text-center font-['Monoplex KR'] font-normal text-sm leading-[100%] tracking-normal text-[#362C11] mb-[6px]">
          2025 Art & Technology Conference{" "}
          <span className="underline"><a href="https://www.instagram.com/atc.sogang/" target="_blank">@atc.sogang</a></span>
        </p>

        <p className="text-center font-['Monoplex KR'] font-normal text-sm leading-[100%] tracking-normal text-[#362C11]">
          서울특별시 마포구 백범로 35 서강대학교 하비에르관(X관) 4-5층
        </p>

        <img
          src={ScrollDownIcon}
          alt="Scroll Down"
          className="mx-auto mt-3 w-6 h-6 max-[700px]:w-5 max-[700px]:h-5"
        />
      </div>
    </div>
  );
};

// SecondSection

const SecondSection = () => {
  return (
    <div
      className="w-full box-border flex justify-between gap-[40px] 
      max-[700px]:flex-col max-[700px]:gap-0

      px-[20px] 
      min-[701px]:px-[40px]"
    >
      <div
        className="w-[calc(50%-20px)] pt-40
          max-[700px]:w-full max-[700px]:pb-10 max-[700px]:pt-20
      "
      >
        <h2 className="font-['Monoplex KR'] font-semibold text-2xl leading-none text-center mb-10 text-[#362C11]">
          전시 개요
        </h2>
        <div className="font-normal text-[15px] leading-[180%] tracking-[-10%] text-[#362C11]">
          <p className="mb-3">
            《울퉁불퉁하게 말아리》는 각자가 가진 고유한 말들의 방식에 주목한다.
          </p>
          <p className="mb-3">
            우리는 종종 말에 앞서 자격을 생각한다.
            유의미한 말을 하기 위해선 그에 걸맞은 경험과 지식, 전문성이나 지위를 갖추어야 한다고 여긴다.
            피드백 역시 어느새 기성의 언어를 재생산하는 일이 되었고, 우리는 ‘내가 뭐라고’,
            ‘난 저 분야를 잘 모르니까’라며 말을 삼킨다. 말은 어느새 자신의 것이 아닌 외부의 권위를 빌려 기능한다.
            우리는 얼만큼 스스로의 감각으로 말하고 있는가? 창작에 있어서 스스로의 언어와 체계보다,
            다른 누군가의 기준과 평가에 먼저 기대고 있지는 않은가?
            누구나 자유롭게 말하고 피드백할 수 있는 공동의 장은 여전히 이곳에서 가능한가?
            익숙한 기준과 평가에서 벗어나 서로를 그 자체로 보기 위해 무엇이 필요한가?
          </p>
          <p className="mb-3">
            2025 ATC는 이러한 질문에 아마추어적 태도로 답하고자 한다.
            아마추어는 자주 엉성하고 산만하지만, 그 덕분에 어디에도 완전히 속박되지 않은 채 자신만의 말과 태도를 만들어간다.
            이곳에서 우리는 기성의 규칙이나 논리에서 벗어나 각자의 고유한 말-하기를 시도해보고자 한다.
          </p>
          <p className="mb-3">
            그것의 문법이 때론 정확하지 않을지라도,
            우리가 건네는 말들은 서로의 영역을 자유로이 넘나들며 어긋나고,
            충돌하고, 되돌아와 낯선 •¨•.¸말-(메)아리¸.o◦｡를 만들어낸다.
            마치 울퉁불퉁한 지형에 부딪혀 만들어내는 예측 불가능한 파동과 같은 움직임 속에서.
            이는 각자의 고유한 굴곡을 오롯이 마주하는 일이며, 다름의 불완전함 속에서 의미는 타인에게 닿아 더 멀리,
            더 크게 증식할 것이다.
          </p>
        </div>
      </div>
      <div
        className="w-[calc(50%-20px)] pt-40
          max-[700px]:w-full max-[700px]:pt-0 max-[700px]:pb-10
      "
      >
        <h2 className="font-['Monoplex KR'] font-semibold italic text-2xl leading-none text-center mb-10 text-[#362C11]">
          Overview
        </h2>
        <div className="font-normal text-[15px] leading-[145%] tracking-[-0.5%] text-[#362C11]">
          <p className="mb-3">
            2025 ATC &lt;울퉁불퉁하게 말아리&gt; draws attention to the unique
            ways in which each of us speaks.
          </p>
          <p className="mb-3">
            We often think of qualifications before words. We assume that to say
            something meaningful, one must possess the right experiences,
            knowledge, expertise, or status. Feedback, too, has become the
            reproduction of an authority’s language, and we swallow our own
            words with thoughts like, “Who am I to say this?” or “I don’t really
            know that field.” Our words, then, no longer belong to us but
            function by borrowing someone else’s language. How much are we truly
            speaking from our own senses? In creation, do we lean first on the
            standards and evaluations of others, rather than our own language
            and system? Is a common space where anyone can speak and give
            feedback freely still possible here?
          </p>
          <p className="mb-3">
            This year’s ATC seeks to respond to these questions with an
            amateur’s attitude. The amateur may be clumsy or scattered at times,
            but precisely because of that, they remain unbound, creating their
            own language and system. Here, we want to look at the traces of
            unique speech acts that step outside the established rules or logic.
          </p>
          <p className="mb-3">
            The words we exchange cross into each other’s domains, colliding,
            missing, and returning, producing unfamiliar echoes. Even when
            unclear, like unpredictable waves striking against uneven terrain,
            our words imagine new possibilities within unregulated movement.
            This is about revealing the contours of each person’s singular
            language, sketching out forms of connection and communication that
            are never uniform—born instead from difference itself.
          </p>
        </div>
      </div>
    </div>
  );
};

// ThirdSection

const ThirdSection = () => {
  return (
    <div
      className="w-full box-border flex justify-between gap-[40px] min-h-[1200px] 
      max-[700px]:flex-col max-[700px]:gap-0 max-[700px]:min-h-0
      
      px-[20px] 
      min-[701px]:px-[40px]"
    >
      <div
        className="min-[1000px]:[width:calc(50%-20px)] h-[585px] pt-40 box-border flex-shrink-0 
        min-[701px]:sticky top-0 min-[701px]:[width:calc(50%-20px)]
        max-[700px]:w-full max-[700px]:h-auto max-[700px]:pt-20 max-[700px]:pb-10 max-[700px]:relative
      "
      >
        <img
          src="https://placehold.co/300x425"
          alt="포스터"
          className="absolute bottom-0 right-0 block max-[700px]:static max-[700px]:mx-auto
          min-[1000px]:w-[300px] min-[1000px]:h-[425px] 
          max-[700px]:w-[250px] max-[700px]:h-[354px]"
        />
      </div>
      <div
        className="min-[1000px]:[width:calc(50%-20px)] pt-40 
          min-[701px]:[width:calc(50%-20px)]
          max-[700px]:w-full max-[700px]:pt-10 max-[700px]:pb-20
      "
      >
        <h2 className="font-['Monoplex KR'] font-semibold text-2xl leading-none mb-10 text-[#362C11]">
          축사{" "}
          <span className="font-['Monoplex KR'] font-semibold italic text-[#362C11]">
            Congratulatory Speech
          </span>
        </h2>

        {/* 1. 첫 번째 축사 블록 */}
        <div className="mb-[40px] text-[#362C11]">
          <div className="font-['Monoplex KR'] font-normal text-[15px] leading-[180%] tracking-[-10%] mb-[40px]">
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
          <div className="relative [padding-bottom:34px] mb-8 font-['Monoplex KR'] font-normal text-[15px] leading-[145%] tracking-[-0.5%] border-b border-[#362C11] congratulatory-text-divider">
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
        </div>

        {/* 2. 두 번째 축사 블록 */}
        <div className="mb-[40px] text-[#362C11]">
          <div className="font-['Monoplex KR'] font-normal text-[15px] leading-[180%] tracking-[-10%] mb-[40px]">
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
          <div className="relative [padding-bottom:34px] mb-8 font-['Monoplex KR'] font-normal text-[15px] leading-[145%] tracking-[-0.5%] border-b border-[#362C11] congratulatory-text-divider">
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
        </div>

        {/* 3. 세 번째 축사 블록 */}
        <div className="mb-[40px] text-[#362C11]">
          <div className="font-['Monoplex KR'] font-normal text-[15px] leading-[180%] tracking-[-10%] mb-[40px]">
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
          <div className="relative [padding-bottom:34px] mb-8 font-['Monoplex KR'] font-normal text-[15px] leading-[145%] tracking-[-0.5%] border-b border-[#362C11] congratulatory-text-divider">
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
        </div>

        {/* 4. 네 번째 축사 블록 */}
        <div className="text-[#362C11]">
          <div className="font-['Monoplex KR'] font-normal text-[15px] leading-[180%] tracking-[-10%] mb-[40px]">
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
          <div className="relative font-['Monoplex KR'] font-normal text-[15px] leading-[145%] tracking-[-0.5%]">
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
        </div>

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

// FourthSection

const FourthSection = () => {
  const navigate = useNavigate();

  const CreditList = ({ titleKr, titleEn, members }) => (
    <div className="mb-10 text-[#362C11]">
      <div className="font-['Monoplex KR'] font-semibold text-[15px] leading-[145%] mb-3 tracking-[-0.5%] text-right">
        {titleKr}{" "}
        <span className="font-['Monoplex KR'] font-semibold italic">
          {titleEn}
        </span>
      </div>
      <div
        className={`${titleKr === "웹 개발팀"
          ? "mb-[85px] min-[1000px]:mb-[85px] max-[999px]:mb-[40px]"
          : ""
          }`}
      >
        {members.map((member, index) => (
          <p
            key={index}
            className="font-['Monoplex KR'] font-normal text-[15px] leading-[145%] mb-3 tracking-[-0.5%] whitespace-nowrap text-right"
          >
            {member}
          </p>
        ))}
      </div>
    </div>
  );

  const handleCreditMoreClick = () => {
    navigate("/archive");
  };

  return (
    <div
      className="w-full box-border flex justify-between gap-[40px] items-start 
      max-[700px]:flex-col max-[700px]:gap-0 

      px-[20px] 
      min-[701px]:px-[40px]"
    >
      <div
        className="pt-40 relative flex-shrink-0
        w-[calc(50%-20px)]
        max-[700px]:w-full
        max-[700px]:pt-10 max-[700px]:pb-20
        max-[700px]:order-2
        "
      >
        <h2 className="font-['Monoplex KR'] font-semibold text-[24px] leading-[100%] mb-10 text-[#362C11] text-right">
          크레딧{" "}
          <span className="font-['Monoplex KR'] font-semibold italic leading-[100%] text-[#362C11]">
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
            "김현진 Hyeonjin Kim \u00A0\u00A0 신서윤 Seoyun Shin",
            "윤세은 Seeun Yoon \u00A0\u00A0 이윤선 Yoonseon Lee",
            "황나금 Naguem Hwang"
          ]}
        />
        <CreditList
          titleKr="프로그램팀"
          titleEn="Program Team"
          members={[
            "오제우 Jewoo Oh \u00A0\u00A0 김예찬 Yechan Kim",
            "우서진 Seojin Woo"
          ]}
        />
        <CreditList
          titleKr="대외협력팀"
          titleEn="Public Relations Team"
          members={[
            "김서영 Seoyoung Kim \u00A0\u00A0 문금미 Geummi Moon",
            "유가형 Kahyung Yoo \u00A0\u00A0 장채원 Chaewon Jang"
          ]}
        />
        <CreditList
          titleKr="비주얼 디자인팀"
          titleEn="Visual Design Team"
          members={[
            "심유린 Yurim Sim \u00A0\u00A0 김민서 Minseo Kim",
            "김성은 Seongeun Kim \u00A0\u00A0 김혜림 Hyerim Kim",
            "이선명 Sunmyeong Lee"
          ]}
        />
        <CreditList
          titleKr="인터랙션팀"
          titleEn="Interaction Team"
          members={[
            "김인규 Ingyu Kim \u00A0\u00A0 설희윤 Heeyun Sul",
            "신채원 Chaewon Shin \u00A0\u00A0 윤기완 Giwan Yoon",
            "이다은 Daeun Lee"
          ]}
        />
        <CreditList
          titleKr="아카이브팀"
          titleEn="Archieve Team"
          members={[
            "강정모 Jeongmo Kang \u00A0\u00A0 김태희 Taehee Kim",
            "문예담 Yedam Moon \u00A0\u00A0 박민준 Minjoon Park"
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
          members={["김준수 Junsu Kim \u00A0\u00A0 김서영 Seoyoung Kim"]}
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
        
        min-[701px]:sticky min-[701px]:top-0 

        max-[700px]:w-full
        max-[700px]:pt-10 max-[700px]:pb-10
        max-[700px]:order-1
        "
      >
        <div className="w-full mb-3 relative h-0 pb-[56.25%] overflow-hidden">
          <div className="bg-[#362C11] w-full absolute top-0 left-0 h-full"></div>
        </div>

        <p className="font-['Monoplex KR'] italic font-normal min-[1000px]:text-sm text-sm leading-none tracking-normal text-[#362C11]">
          Opening Documentary
        </p>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div className="min-h-screen text-[#362C11] bg-[#E9F1E9] font-['Monoplex KR']">
      <div className="max-[701px]:hidden py-[40px] fixed top-0 left-0 right-0 z-50 pt-10">
        <Header />
      </div>
      <div className="p-5 fixed top-0 left-0 right-0 z-50 min-[701px]:hidden">
        <div className="relative ">
          <MenuToggle />
        </div>
      </div>

      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </main>
      <Footer />
    </div>
  );
}
