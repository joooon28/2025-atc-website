import LogoBrown from "../../assets/LogoBrown.svg";
import { useNavigate } from "react-router-dom";

const createSplashPath = (targetPath) => `/splash?redirect=${targetPath}`;

export default function MenuPanel({ onClose }) {
  const navigate = useNavigate();

  const handleMenuClick = (targetPath) => {
    navigate(createSplashPath(targetPath));
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="w-full max-h-[80vh] overflow-y-auto border border-label bg-mint-5/80 p-[12px]">
      <img
        src={LogoBrown}
        alt="LogoBrown"
        className="w-[30.158px] h-[21px] cursor-pointer"
        onClick={() => handleMenuClick("/main")}
      />
      <nav>
        <ul className="italic flex flex-col items-center gap-[16px]">
          <li
            className="cursor-pointer"
            onClick={() => handleMenuClick("/about")}
          >
            About
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleMenuClick("/work")}
          >
            Work
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleMenuClick("/program")}
          >
            Program
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleMenuClick("/made")}
          >
            Made
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleMenuClick("/archive")}
          >
            Archive
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleMenuClick("/playground")}
          >
            Playground
          </li>
        </ul>
      </nav>
    </div>
  );
}
