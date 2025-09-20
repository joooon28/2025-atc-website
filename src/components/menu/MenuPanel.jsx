import { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import MenuIcon from "../../assets/lottie/MenuIcon.json";

export default function MenuPanel() {
  const lottieRef = useRef(null);

  useEffect(() => {
    const anim = lottieRef.current?.anim;
    if (!anim) return;
    const last = anim.getDuration(true);
    anim.goToAndStop(last, true);
  }, []);

  const options = {
    loop: false,
    autoplay: false,
    animationData: MenuIcon,
    rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
  };

  return (
    <div className="absolute right-0 z-10 w-80 max-h-[80vh] overflow-y-auto border border-label bg-mint-4 py-[12px] px-[24px]">
      <span className="absolute right-2 top-2 w-6 h-6 pointer-events-none select-none">
        <Lottie ref={lottieRef} options={options} height={24} width={24} />
      </span>

      <nav>
        <ul className="italic flex flex-col items-center gap-[16px]">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Program</li>
          <li className="cursor-pointer">Archive</li>
          <li className="cursor-pointer">Map</li>
          <li className="cursor-pointer">Playground</li>
        </ul>
      </nav>
    </div>
  );
}
