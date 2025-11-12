import { useNavigate } from "react-router-dom";
import MainLogo from "./main/MainLogo";

const createSplashPath = (targetPath) => `/splash?redirect=${targetPath}`;

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="text-label font-regular flex justify-center items-center gap-[12px]">
      <MainLogo onClick={() => navigate(createSplashPath("/main"))} />
      <header className="border border-label bg-mint-5 py-[12px] px-[24px]">
        <nav>
          <ul className="italic flex gap-[32px]">
            <li
              className="cursor-pointer"
              onClick={() => navigate(createSplashPath("/about"))}
            >
              About
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navigate(createSplashPath("/work"))}
            >
              Work
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navigate(createSplashPath("/program"))}
            >
              Program
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navigate(createSplashPath("/made"))}
            >
              Made
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navigate(createSplashPath("/archive"))}
            >
              Archive
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
