import ArtechLogo from "../assets/ArtechLogo.svg";
import LogoBrown from "../assets/LogoBrown.svg";
import { InstagramLogoIcon } from "@phosphor-icons/react";
import { YoutubeLogoIcon } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="pt-60 pb-10 px-10">
      <div className="flex items-end justify-between w-full gap-10">
        <div className="flex gap-5 items-center">
          <img
            src={ArtechLogo}
            alt="Artech Logo"
            className="h-10 w-auto shrink-0"
          />
          <img
            src={LogoBrown}
            alt="Logo Brown"
            className="h-10 w-auto shrink-0"
            fill="blue"
          />
        </div>
        <div className="flex items-end gap-10 ">
          <p className="font-[400] md:max-w-[570px] text-[16px] text-label">
            Dept. of Art & Technology, Sogang University
            <br />
            X417, Xavier Bldg., 35 Baekbeom-Ro, Mapo-gu, Seoul 04107,
            <br /> South Korea <br />
            Tel +82-2-705-8031 | Fax +82-2-3274-4826 <br />
            <a
              href="https://creative.sogang.ac.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70"
            >
              creative.sogang.ac.kr
            </a>
          </p>
          <div className="flex gap-5 items-end text-label">
            <a href="https://www.instagram.com/artech.sogang/">
              <InstagramLogoIcon className="w-8 h-8" weight="thin" />
            </a>
            <a href="https://www.youtube.com/@ArtTechnologySogang">
              <YoutubeLogoIcon className="w-8 h-8" weight="thin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
