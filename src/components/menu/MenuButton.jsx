import { useNavigate } from "react-router-dom";
import MainLogo from "../main/MainLogo";

export default function MenuButton() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <MainLogo onClick={() => navigate("/main")} />
      <div className="p-3 w-[45px] h-[45px] border border-line-brown bg-mint-5 inline-flex items-center justify-center"></div>
    </div>
  );
}
