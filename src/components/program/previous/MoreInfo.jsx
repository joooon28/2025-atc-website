import CloseButton from "../../archive/CloseButton";
import Footer from "../../Footer";
import { ArrowUpIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import KorEnButton from "../../KorEnButton";

export default function MoreInfo({
  onClose,
  title,
  titleeng,
  date,
  detailKo1,
  detailEng1,
  detailKo2,
  detailEng2,
  detailKo3,
  detailEng3,
  detailKo4,
  detailEng4,
  main,
  sub1,
  sub2,
  sub3,
  sub4,
  sub5,
  sub6,
  sub7,
  sub8,
  madeby,
  madebyEng,
}) {
  const [currentLanguage, setCurrentLanguage] = useState("kr");
  const isKR = currentLanguage === "kr";

  const getScrollContainer = (startEl) => {
    let el = startEl;
    while (el) {
      const style = getComputedStyle(el);
      const oy = style.overflowY;
      const canScroll =
        (oy === "auto" || oy === "scroll" || oy === "overlay") &&
        el.scrollHeight > el.clientHeight;
      if (canScroll) return el;
      el = el.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  };

  const scrollRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    const computeShow = () => {
      const inEl = el ? el.scrollTop > 0 : false;
      const inWin = window.scrollY > 0;
      setShowTop(inEl || inWin);
    };

    computeShow();
    if (el) el.addEventListener("scroll", computeShow, { passive: true });
    window.addEventListener("scroll", computeShow, { passive: true });

    return () => {
      if (el) el.removeEventListener("scroll", computeShow);
      window.removeEventListener("scroll", computeShow);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col min-h-svh relative">
      <div className="top-0 inset-x-0 z-10 flex justify-center px-4">
        <button onClick={onClose}>
          <CloseButton />
        </button>
      </div>
      <div
        ref={scrollRef}
        className="flex-1 flex px-[220px] max-[1001px]:px-[0px] justify-center overflow-y-auto"
      >
        <div className="text-label p-10 max-tablet: px-5">
          <section className="flex flex-col w-full gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex gap-[10px] font-heavy text-[24px]">
                <p>{title}</p>
                <p className="italic">{titleeng}</p>
              </div>
              <p className="flex text-[15px] font-heavy leading-regular tracking-regular">
                {date}
              </p>
              {isKR ? (
                <p className="whitespace-pre-line flex text-[15px] font-regular leading-large tracking-tight">
                  {detailKo1}
                </p>
              ) : (
                <p className="whitespace-pre-line flex text-[15px] font-regular leading-regular tracking-regular">
                  {detailEng1}
                </p>
              )}
            </div>
            {main ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden">
                <img
                  src={main}
                  alt={title}
                  className="flex w-full h-full object-cover"
                />
              </div>
            ) : null}
            <div
              className=" 
                    group flex hover:bg-mint-6 
                    border-t border-label 
                    relative [--dot:6px] [--b:1px] [--expand:250px]
                
                    before:content-[''] before:absolute
                    before:left-0 before:top-[var(--b)]
                    before:w-[var(--dot)] before:h-[var(--dot)]
                    before:rounded-full before:bg-label
                    before:-translate-x-1/2 before:-translate-y-3/4
                    before:pointer-events-none 

                    after:content-[''] after:absolute
                    after:right-0 after:top-[var(--b)]
                    after:w-[var(--dot)] after:h-[var(--dot)]
                    after:rounded-full after:bg-label
                    after:translate-x-1/2 after:-translate-y-3/4
                    after:pointer-events-none 
                "
            />
            {isKR ? (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-large tracking-tight">
                {detailKo2}
              </p>
            ) : (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-regular tracking-regular">
                {detailEng2}
              </p>
            )}
            {sub1 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden rounded-[1000px]">
                <img
                  src={sub1}
                  alt={title}
                  className="flex w-full h-full object-cover rounded-[1000px]"
                />
              </div>
            ) : null}
            {isKR ? (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-large tracking-tight">
                {detailKo3}
              </p>
            ) : (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-regular tracking-regular">
                {detailEng3}
              </p>
            )}
            {sub2 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden">
                <img
                  src={sub2}
                  alt={title}
                  className="flex w-full h-full object-cover"
                />
              </div>
            ) : null}
            {isKR ? (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-large tracking-tight">
                {detailKo4}
              </p>
            ) : (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-regular tracking-regular">
                {detailEng4}
              </p>
            )}

            {sub3 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden rounded-[1000px]">
                <img
                  src={sub3}
                  alt={title}
                  className="flex w-full h-full object-cover rounded-[1000px]"
                />
              </div>
            ) : null}
            {sub4 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden">
                <img
                  src={sub4}
                  alt={title}
                  className="flex w-full h-full object-cover"
                />
              </div>
            ) : null}
            {sub5 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden rounded-[1000px]">
                <img
                  src={sub5}
                  alt={title}
                  className="flex w-full h-full object-cover rounded-[1000px]"
                />
              </div>
            ) : null}
            {sub6 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden ">
                <img
                  src={sub6}
                  alt={title}
                  className="flex w-full h-full object-cover "
                />
              </div>
            ) : null}
            {sub7 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden rounded-[1000px]">
                <img
                  src={sub7}
                  alt={title}
                  className="flex w-full h-full object-cover rounded-[1000px]"
                />
              </div>
            ) : null}
            {sub8 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden ">
                <img
                  src={sub8}
                  alt={title}
                  className="flex w-full h-full object-cover "
                />
              </div>
            ) : null}
            {isKR ? (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-large tracking-tight">
                {madeby}
              </p>
            ) : (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-regular tracking-regular">
                {madebyEng}
              </p>
            )}
          </section>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
      <div
        className={[
          "max-desktop:hidden",
          "fixed z-[60]",
          "top-1/2 -translate-y-1/2",
          "right-[calc(theme(spacing.4)+env(safe-area-inset-right))]",
          "md:right-[calc(theme(spacing.6)+env(safe-area-inset-right))]",
          "flex items-center gap-4",
        ].join(" ")}
      >
        <div
          className={[
            "max-desktop:hidden",
            "fixed right-[calc(theme(spacing.4)+env(safe-area-inset-right))] md:right-[calc(theme(spacing.6)+env(safe-area-inset-right))]",
            "top-1/2 -translate-y-0 -translate-x-1 z-[60]",
            "flex justify-center w-12",
          ]}
        >
          <KorEnButton
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
          />
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            const reduce = window.matchMedia?.(
              "(prefers-reduced-motion: reduce)"
            )?.matches;
            const behavior = reduce ? "auto" : "smooth";

            const target = getScrollContainer(
              scrollRef.current || document.activeElement
            );

            if (
              target === document.scrollingElement ||
              target === document.documentElement ||
              target === document.body
            ) {
              window.scrollTo({ top: 0, behavior });
            } else {
              if (typeof target.scrollTo === "function") {
                target.scrollTo({ top: 0, behavior });
              } else {
                target.scrollTop = 0;
              }
            }
          }}
          aria-label="팝업 맨 위로 이동"
          className={[
            "flex justify-center items-center w-12 h-12 p-3 rounded-full",

            "border border-label bg-mint-5",
            showTop
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",

            "focus:outline-none focus:ring-2 focus:ring-mint-5",
          ].join(" ")}
        >
          <ArrowUpIcon size={24} weight="light" />
        </button>
      </div>
    </div>
  );
}
