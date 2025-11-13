import CloseButton from "../../components/archive/CloseButton";
import Footer from "../../components/Footer";
import 말아리모음집_투명배경_PC from "../../assets/memo/말아리모음집_투명배경_PC.svg";
import 말아리모음집_투명배경_모바일 from "../../assets/memo/말아리모음집_투명배경_모바일.svg";

export default function Memo({ onClose }) {
  return (
    <div className="flex flex-col min-h-dvh">
      <div className="top-0 inset-x-0 z-10 flex justify-center px-4">
        <button onClick={onClose}>
          <CloseButton />
        </button>
      </div>

      <div className="flex-1 py-[40px] px-[120px] max-tablet:px-[20px]">
        <div className="bg-[#E9F1E9]">
          <picture>
            <source
              media="(max-width: 700px)"
              srcSet={말아리모음집_투명배경_모바일}
            />
            <img
              src={말아리모음집_투명배경_PC}
              alt="말아리 모음집"
              className="w-full h-auto"
            />
          </picture>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
