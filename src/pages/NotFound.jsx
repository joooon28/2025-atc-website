import GoButton from "../components/GoButton";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-brown min-h-svh py-[160px]">
      <p className="font-[450] text-[40px] text-label-invert text-center">
        404
      </p>
      <div className="flex-grow" />

      <p className="font-[400] text-sm text-label-invert text-center">
        This Page Could Not Be Found
      </p>
      <div className="flex-grow" />
      <GoButton text="Go Home" onClick={() => navigate("/main")} />
    </div>
  );
}
