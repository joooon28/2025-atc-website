// src/components/menu/MenuButton.jsx
import Lottie from "react-lottie";
import MenuIcon from "../../assets/lottie/MenuIcon.json";
import MenuPanel from "./MenuPanel";
import { useState, useRef, useEffect } from "react";

export default function MenuButton() {
  const lottieRef = useRef(null);
  const [direction, setDirection] = useState(1); // 1: 처음→끝, -1: 끝→처음
  const [open, setOpen] = useState(false); // 패널 열림 상태

  const options = {
    loop: false,
    autoplay: false,
    animationData: MenuIcon,
    rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
  };

  // 첫 프레임 고정
  useEffect(() => {
    const anim = lottieRef.current?.anim;
    if (anim) anim.goToAndStop(0, true);
  }, []);

  const handleClick = () => {
    const anim = lottieRef.current?.anim;
    if (anim) {
      const end = anim.getDuration(true);
      if (direction === 1) {
        // 열기: 정방향 재생
        anim.setDirection(1);
        anim.goToAndPlay(0, true);
      } else {
        // 닫기: 역방향 재생
        anim.setDirection(-1);
        anim.goToAndPlay(end, true);
      }
      setDirection((d) => -d); // 다음 클릭은 반대 방향
    }
    setOpen((v) => !v); // 패널 토글
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleClick}
        className="absolute right-0 w-[45px] h-[45px] border border-line-brown bg-mint-4 inline-flex items-center justify-center"
        aria-pressed={open}
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
      >
        <Lottie ref={lottieRef} options={options} height={24} width={24} />
      </button>

      {open && (
        <div className="absolute right-0 ">
          <MenuPanel />
        </div>
      )}
    </div>
  );
}
