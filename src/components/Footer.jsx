import ArtechLogo from "../assets/ArtechLogo.svg";
import LogoBrown from "../assets/LogoBrown.svg";
import { InstagramLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import Smilegate from "../assets/SmilegateLogo.svg";
import Jampot from "../assets/JampotLogo.svg";
import Dotollim from "../assets/DotollimLogo.png";
import FutureLab from "../assets/SogangFutureLabLogo.svg";

// <Footer showSponsorship="true"/> -> sponsorship 섹션 보임
export default function Footer({ showSponsorship = false }) {
  return (
    <footer className="flex flex-col gap-10 pt-60 pb-10 px-10 max-tablet:pb-5 max-tablet:px-5">
      <div className="max-tablet:flex-col flex min-tablet:items-end justify-between w-full gap-10">
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
          />
        </div>

        <div className="max-tablet:flex-col flex tems-end gap-10">
          <p
            className="max-tablet:order-2 font-regular w-full
             max-w-[590px]
              text-[16px]
              leading-relaxed text-label
              [text-wrap:balance] break-words"
          >
            Xavier Hall, Sogang University, 35 Baekbeom-Ro, Mapo-gu, Seoul
            <br />
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

          <div className="max-tablet:order-1 flex gap-[6px] items-end text-label">
            <a href="https://www.instagram.com/artech.sogang/">
              <InstagramLogoIcon className="w-8 h-8" weight="light" />
            </a>
            <a href="https://www.youtube.com/@ArtTechnologySogang">
              <YoutubeLogoIcon className="w-8 h-8" weight="light" />
            </a>
          </div>
        </div>
      </div>

      {showSponsorship && (
        <div className="flex flex-col gap-2">
          <div
            className="flex border-t border-label relative [--dot:6px] [--b:1px]
            before:content-[''] before:absolute before:left-0 before:top-[var(--b)]
            before:w-[var(--dot)] before:h-[var(--dot)] before:rounded-full before:bg-label
            before:-translate-x-1/2 before:-translate-y-3/4 before:pointer-events-none
            after:content-[''] after:absolute after:right-0 after:top-[var(--b)]
            after:w-[var(--dot)] after:h-[var(--dot)] after:rounded-full after:bg-label
            after:translate-x-1/2 after:-translate-y-3/4 after:pointer-events-none"
          />
          <p className="text-center text-[16px] font-regular">
            Collaboration & Sponsorship
          </p>

          <section className="max-mobile:px-5 flex items-center justify-around self-stretch justify-center gap-10 py-3">
            <div>
              <img src={Smilegate} alt="Smilegate" />
            </div>
            <div className="w-[60px] h-auto">
              <img src={Jampot} alt="Jampot" />
            </div>
            <div className="w-[61px] h-auto">
              <img src={Dotollim} alt="Dotollim" />
            </div>
            <div className="w-[105px]">
              <img src={FutureLab} alt="SogangFutureLab" />
            </div>
          </section>

          <div
            className="flex border-t border-label relative [--dot:6px] [--b:1px]
            before:content-[''] before:absolute before:left-0 before:top-[var(--b)]
            before:w-[var(--dot)] before:h-[var(--dot)] before:rounded-full before:bg-label
            before:-translate-x-1/2 before:-translate-y-3/4 before:pointer-events-none
            after:content-[''] after:absolute after:right-0 after:top-[var(--b)]
            after:w-[var(--dot)] after:h-[var(--dot)] after:rounded-full after:bg-label
            after:translate-x-1/2 after:-translate-y-3/4 after:pointer-events-none"
          />
        </div>
      )}
    </footer>
  );
}
