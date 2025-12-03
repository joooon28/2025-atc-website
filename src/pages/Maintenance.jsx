import { useState, useEffect } from "react";

// 사용 가능한 색상 목록 (CSS 변수명)
const colors = [
  { name: "mint", value: "var(--color-mint)" },
  { name: "mint-2", value: "var(--color-mint-2)" },
  { name: "mint-3", value: "var(--color-mint-3)" },
  { name: "mint-4", value: "var(--color-mint-4)" },
  { name: "mint-5", value: "var(--color-mint-5)" },
  { name: "mint-6", value: "var(--color-mint-6)" },
  { name: "brown", value: "var(--color-brown)" },
  { name: "orange", value: "var(--color-orange)" },
];

const Maintenance = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [bgColor, setBgColor] = useState(
    colors.find((c) => c.name === "brown")
  );
  const [textColor, setTextColor] = useState(
    colors.find((c) => c.name === "mint-4")
  );

  const getRandomColor = (excludeColor) => {
    const availableColors = colors.filter(
      (color) => color.name !== excludeColor.name
    );
    const randomIndex = Math.floor(Math.random() * availableColors.length);
    return availableColors[randomIndex];
  };

  const changeColors = () => {
    setBgColor((currentBgColor) => {
      const newBgColor = getRandomColor(currentBgColor);
      setTextColor(getRandomColor(newBgColor));
      return newBgColor;
    });
  };

  const handleClick = () => {
    changeColors();
  };

  useEffect(() => {
    // 페이지 마운트 시 fadein
    setTimeout(() => setIsVisible(true), 50);

    // 3초마다 자동으로 색상 변경
    const interval = setInterval(() => {
      changeColors();
    }, 5000);

    // cleanup: 컴포넌트 unmount 시 interval 제거
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: bgColor.value,
        color: textColor.value,
      }}
      className={`max-tablet:py-40 max-[450px]:px-10 max-mobile:py-20 flex flex-col items-center min-h-svh py-[160px] transition-all duration-500 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="max-mobile:text-[14px] font-[400] text-sm text-center transition-colors duration-500">
        더 나은 서비스 제공을 위해
        <br />
        사이트 임시 점검 중입니다.
      </p>

      <p className="max-mobile:text-[14px] font-[400] text-sm text-center transition-colors duration-500">
        The site is temporarily unavailable
        <br />
        due to maintenance.
      </p>
      <div className="flex-grow" />

      <p className="max-mobile:text-[14px] font-[400] text-sm text-center transition-colors duration-500">
        2025 Art & Technology Conference
        <br />
        울퉁불퉁하게 말아리
      </p>
    </div>
  );
};

export default Maintenance;
