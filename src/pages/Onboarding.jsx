import GoButton from "../components/GoButton";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-brown min-h-svh py-[160px]">
      <p className="font-[400] text-[40px] text-label-invert text-center">
        2025
        <br />
        Art & Technology Conference
        <br />
        울퉁불퉁하게 말아리
      </p>
      <div className="flex-grow" />

      <p className="font-[400] text-sm text-label-invert text-center">
        11.20 — 11.23
        <br />
        서울특별시 마포구 백범로 35 서강대학교 하비에르관(X관){" "}
      </p>
      <div className="flex-grow" />
      <GoButton text="Explore" onClick={() => navigate("/main")} />
    </div>
  );
}
