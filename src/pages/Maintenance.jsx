import { useState, useEffect } from "react";

const Maintenance = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 페이지 마운트 시 fadein
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  return (
    <div
      className={`max-tablet:py-40 max-[450px]:px-10 max-mobile:py-20 flex flex-col items-center bg-brown min-h-svh py-[160px] transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="max-mobile:text-[14px] font-[400] text-sm text-label-invert text-center">
        더 나은 서비스 제공을 위해
        <br />
        사이트 임시 점검 중입니다.
      </p>

      <p className="max-mobile:text-[14px] font-[400] text-sm text-label-invert text-center">
        The site is temporarily unavailable
        <br />
        due to maintenance.
      </p>
    </div>
  );
};

export default Maintenance;
