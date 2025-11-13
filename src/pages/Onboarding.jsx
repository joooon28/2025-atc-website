import GoButton from "../components/GoButton";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="max-tablet:py-40 max-[450px]:px-10 max-mobile:py-20 flex flex-col items-center bg-brown min-h-svh py-[160px]">
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
      <div className="flex-grow cursor-pointer" />
      <GoButton text="Explore" onClick={() => navigate("/main")} />
    </div>
  );
}
