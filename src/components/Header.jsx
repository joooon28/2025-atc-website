import { useNavigate } from "react-router-dom";
import MainLogo from "./main/MainLogo";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="text-label font-regular flex justify-center items-center gap-[12px]">
      <MainLogo onClick={() => navigate("/main")} />
      <header className="border border-label bg-mint-4 py-[12px] px-[24px]">
        <nav>
          <ul className="italic flex gap-[32px]">
            <li className="cursor-pointer" onClick={() => navigate("/about")}>
              About
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/work")}>
              Work
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/program")}>
              Program
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/made")}>
              Made
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/archive")}>
              Archive
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
