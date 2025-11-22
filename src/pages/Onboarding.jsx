import GoButton from "../components/GoButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NotFound() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // 페이지 마운트 시 fadein
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  const handleExplore = () => {
    // fadeout 후 navigate
    setIsLeaving(true);
    setTimeout(() => navigate("/main"), 500);
  };

  return (
    <div
      className={`max-tablet:py-40 max-[450px]:px-10 max-mobile:py-20 flex flex-col items-center bg-brown min-h-svh py-[160px] transition-opacity duration-500 ${
        isVisible && !isLeaving ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="max-tablet:text-[24px] max-mobile:text-[16px] font-[400] text-[40px] text-label-invert text-center">
        2025
        <br />
        Art & Technology Conference
        <br />
        울퉁불퉁하게 말아리
      </p>
      <div className="flex-grow" />

      <p className="max-mobile:text-[14px] font-[400] text-sm text-label-invert text-center">
        11.20 — 11.23
        <br />
        서울특별시 마포구 백범로 35 서강대학교 하비에르관(X관){" "}
      </p>
      <div className="flex-grow" />
      <div
        className={`transition-all duration-700 delay-300 ${
          isVisible && !isLeaving
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <GoButton text="Explore" onClick={handleExplore} />
      </div>
    </div>
  );
}
