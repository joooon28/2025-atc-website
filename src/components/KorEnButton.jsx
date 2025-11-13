import React from 'react';

const fontMap = {
  italic: "italic font-normal",
};

const KorEnButton = ({ currentLanguage, setCurrentLanguage }) => {
  return (
    <div className="Lang-Switch float-right flex rounded-[60px] overflow-hidden h-12 w-[123px]">
      <button
        onClick={() => setCurrentLanguage("kr")}
        id="Lang-Switch-Kr-Btn"
        className={`${
          fontMap.italic
        } Lang-Switch-Kr flex-1 py-3 px-0 border-none bg-label text-fill-invert text-base cursor-pointer transition-colors duration-200 flex justify-center items-center ${
          currentLanguage === "kr"
            ? "underline decoration-1 underline-offset-[5px]"
            : ""
        }`}
      >
        KR
      </button>
      <button
        onClick={() => setCurrentLanguage("en")}
        id="Lang-Switch-En-Btn"
        className={`${
          fontMap.italic
        } Lang-Switch-En flex-1 py-3 px-0 border-none bg-label text-fill-invert text-base cursor-pointer transition-colors duration-200 flex justify-center items-center ${
          currentLanguage === "en"
            ? "underline decoration-1 underline-offset-[5px]"
            : ""
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default React.memo(KorEnButton);