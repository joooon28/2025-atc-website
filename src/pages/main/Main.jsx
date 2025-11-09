import Header from "../../components/Header";
import MinusButton from "../../components/main/MinusButton";
import PlusButton from "../../components/main/PlusButton";
import VolumeButton from "../../components/main/VolumeButton";
import MenuToggle from "../../components/menu/MenuToggle";
import Popup from "../../components/main/Popup";
import MainVisual from "../../components/main/MainVisual";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const routesByKey = {
  Word_Ul: "/made",
  Word_Toong: "/about",
  Word_Bul: "/program",
  Word_Toong2: "/work",
  Word_Ha: "/program",
  Word_Ge: "/about",
  Word_Mal: "/archive/gallery",
  Word_A: "/archive/documentary",
  Word_Ri: "/archive/memo",
};

const workIds = [
  "art001",
  "art002",
  "art003",
  "art004",
  "art005",
  "art006",
  "art007",
  "art008",
  "art009",
  "art010",
  "art011",
  "art012",
];
const pickRandomWorkId = () =>
  workIds[Math.floor(Math.random() * workIds.length)];

export default function Main() {
  const [popup, setPopup] = useState(null);
  const onOpen = (key) => setPopup(key);
  const onClose = () => setPopup(null);

  const navigate = useNavigate();

  const popupContent = useMemo(() => {
    if (popup === "Word_Ul") {
      return {
        animationSrc: "/lottie/MainInteraction/Word_Ul.lottie",
        title: "흩어진 언어의 입자",
        size: 150,
        description:
          "말아리 조각, 몽당 연필, 명함, 노트... 언어의 입자들이 손에 잡히는 물건으로 바뀌었어요.",
        onGo: () => {
          navigate(routesByKey.Word_Ul);
        },
      };
    }
    if (popup === "Word_Toong") {
      return {
        animationSrc: "/lottie/MainInteraction/Word_Toong.lottie",
        title: "생각이 번뜩",
        size: 150,
        description:
          "무작위로 선택된 프로젝트 페이지로 이동해요. ‘생각이 번뜩!’ 떠오를 계기가 될 수도?",
        onGo: () => {
          const id = pickRandomWorkId();
          navigate(`/work/${id}?from=gallery`);
        },
      };
    }
    if (popup === "Word_Bul") {
      return {
        animationSrc: "/lottie/MainInteraction/Word_Bul.lottie",
        title: "아 이건가? 아니 이건가?",
        size: 150,
        description:
          "ATC의 사운드가 어떻게 만들어졌는지 알아보세요. 예측할 수 없는 망설임이 음악이 되는 순간을 목격해볼까요?",
        onGo: () => {
          navigate(routesByKey.Word_Bul, {
            state: {
              openPreviousId: "program5",
            },
          });
        },
      };
    }
    if (popup === "Word_Toong2") {
      return {
        animationSrc: "/lottie/MainInteraction/Word_Toong2.lottie",
        title: "횡설수설",
        size: 150,
        description:
          "5초마다 새로운 프로젝트를 탐험해볼까요? 이곳저곳 돌아다니다 보면 운명의 무언가를 만날지도?",
        onGo: () => {
          const id = pickRandomWorkId();
          navigate(`/work/${id}?from=gallery&autoplay=1`);
        },
      };
    }
    if (popup === "Word_Ha") {
      return {
        animationSrc: "/lottie/MainInteraction/Word_Ha.lottie",
        title: "날카로운 지적",
        size: 150,
        description:
          "프로그램 하나하나에 담긴 예리한 질문들. 작업자들과 기획단이 나눈 날카로운 고민을 만나보세요.",
        onGo: () => {
          navigate(routesByKey.Word_Ha, {
            state: {
              scrollTo: {
                mode: "px",
                y: 1100,
              },
            },
          });
        },
      };
    }
    if (popup === "Word_Ge") {
      return {
        animationSrc: "/lottie/MainInteraction/Word_Ge.lottie",
        title: "바로 말하기",
        size: 140,
        description:
          "ATC를 소개하는 페이지로 이동해요. 이곳에서는 틀려도 괜찮아요. 당신의 솔직한 말로 시작하면 된답니다.",
        onGo: () => {
          navigate(routesByKey.Word_Ge);
        },
      };
    }
    if (popup === "Word_Mal") {
      return {
        animationSrc: "/lottie/MainInteraction/Word_Mal.lottie",
        title: "모르겠어!!",
        rotate: -44,
        description:
          "‘모르겠어!!’라고 외치는 와중에도 회의하고 만들고 답사하며 남긴 기획단의 순간들을 따라가 보세요.",
        onGo: () => navigate("/archive", { state: { sheet: "gallery" } }),
      };
    }
    if (popup === "Word_A") {
      return {
        animationSrc: "/lottie/MainInteraction/Word_A.lottie",
        title: "망설임 끝의 확신",
        size: 140,
        description:
          "다큐멘터리 페이지로 이동해요. 망설임은 확신의 시작일지도 몰라요. 그 흔들림의 시간들을 따라가 볼까요?",
        onGo: () => navigate("/archive", { state: { sheet: "documentary" } }),
      };
    }
    if (popup === "Word_Ri") {
      return {
        animationSrc: "/lottie/MainInteraction/Word_Ri.lottie",
        title: "헛소리 하기",
        size: 140,
        description:
          "기획 과정에서 나온 울퉁불퉁한 말들과 대화들을 탐색해요. 과연 무슨 맥락에서 나온 말들일까요?",
        onGo: () => navigate("/archive", { state: { sheet: "memo" } }),
      };
    }
    return null;
  }, [popup, navigate]);

  return (
    <main className="min-h-svh bg-mint-3">
      <div className="relative z-10 max-tablet:hidden py-[40px]">
        <Header />
      </div>
      <div className="p-5">
        <div className="min-tablet:hidden relative">
          <MenuToggle />
        </div>
      </div>
      <MainVisual onOpen={onOpen} />
      <div className="fixed inset-x-0 bottom-0 flex justify-center gap-3 pb-[40px]">
        <div className="flex justify-center items-center gap-3 ">
          <PlusButton />
          <MinusButton />
          <VolumeButton />
        </div>
      </div>
      <div className="text-label opacity-30 text-[15px] font-regular leading-[1.45] max-[800px]:hidden fixed inset-x-0 bottom-0 flex justify-between items-end px-10 pb-[40px] pointer-events-none">
        <p>
          울퉁불퉁하게 말아리 <br />
          2025 Art & Technology Conference
        </p>
        <p>
          11.24 - 11.30 <br />
          서강대학교 하비에르관(X관)
        </p>
      </div>
      <p className="text-[14px] font-heavy fixed min-[800px]:hidden max-mobile:hidden left-0 right-0 top-[165px] opacity-70 text-center leading-[1.45] text-label/30 ">
        2025 <br />
        Art & Technology Conference <br />
        울퉁불퉁하게 말아리
      </p>
      <p className="text-[12px] font-heavy fixed min-mobile:hidden left-0 right-0 top-[165px] opacity-70 text-center leading-[1.45] text-label/30 ">
        2025 <br />
        Art & Technology Conference <br />
        울퉁불퉁하게 말아리
      </p>

      {popupContent && (
        <div className="z-40 fixed bottom-10 right-10">
          <Popup
            animationSrc={popupContent.animationSrc}
            title={popupContent.title}
            description={popupContent.description}
            onClose={onClose}
            rotate={popupContent.rotate ?? 0}
            size={popupContent.size ?? 140}
            onGo={popupContent.onGo}
          />
        </div>
      )}
    </main>
  );
}
