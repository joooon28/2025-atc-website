import LogoBrown from "../../assets/LogoBrown.svg";
import { useNavigate } from "react-router-dom";

export default function MenuPanel() {
  const navigate = useNavigate();
  return (
    <div className="w-full max-h-[80vh] overflow-y-auto border border-label bg-mint-4/80 p-[12px]">
      <img
        src={LogoBrown}
        alt="LogoBrown"
        className="w-[30.158px] h-[21px]"
        onClick={() => navigate("/main")}
      />
      <nav>
        <ul className="italic flex flex-col items-center gap-[16px]">
          <li className="cursor-pointer" onClick={() => navigate("/about")}>
            About
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/work")}>
            Work
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/program")}>
            Program
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/program")}>
            Made
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/archive")}>
            Archive
          </li>
          <li
            className="cursor-pointer"
            onClick={() => navigate("/playground")}
          >
            Playground
          </li>
        </ul>
      </nav>
    </div>
  );
}
