import GoButton from "../components/GoButton";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-brown min-h-svh py-[160px] max-mobile:px-10 max-mobile:py-20">
      <p className="font-regular text-[40px] max-tablet:text-[24px] max-mobile:text-[16px] text-label-invert text-center">
        404
      </p>
      <div className="flex-grow" />

      <p className="font-small text-[14px] text-label-invert text-center">
        This Page Could Not Be Found
      </p>
      <div className="flex-grow" />
      <GoButton text="Go Home" onClick={() => navigate("/main")} />
    </div>
  );
}
