import CloseButton from "../../archive/CloseButton";
import Footer from "../../Footer";
import { ArrowUpIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState, useCallback } from "react";
import KorEnButton from "../../KorEnButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const GoBackIcon = "/lottie/WorkDetailIcon/go_back.svg";
const TopIcon = "/lottie/WorkDetailIcon/top.svg";

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
  const [isButtonListActive, setIsButtonListActive] = useState(false);
  const scrollRef = useRef(null);

  const [currentLanguage, setCurrentLanguage] = useState("kr");
  const isKR = currentLanguage === "kr";

  const BUTTON_LIST_ACTIVATION_POINT = 0;

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

  // const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;

    const computeActive = () => {
      const y = el ? el.scrollTop : window.scrollY;
      setIsButtonListActive(y >= BUTTON_LIST_ACTIVATION_POINT);
    };

    computeActive();
    if (el) el.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("scroll", computeActive, { passive: true });

    return () => {
      if (el) el.removeEventListener("scroll", computeActive);
      window.removeEventListener("scroll", computeActive);
    };
  }, [BUTTON_LIST_ACTIVATION_POINT]);

  const handleGoToTop = useCallback(() => {
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
        <div className="text-label p-10 max-tablet:px-5">
          <section className="flex flex-col w-full gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex gap-[10px] font-heavy text-[24px] max-tablet:flex-col max-tablet:gap-0">
                <p>{title}</p>
                <p className="italic">{titleeng}</p>
              </div>
              <p className="flex text-[15px] font-heavy leading-regular tracking-regular">
                {date}
              </p>
              {main ? (
                <div className="flex w-full aspect-[16/9] overflow-hidden">
                  <LazyLoadImage
                    src={main}
                    placeholderSrc={
                      main?.includes("cloudinary.com")
                        ? main.replace("/upload/", "/upload/w_50,q_auto,f_auto/")
                        : undefined
                    }
                    effect="opacity"
                    alt={title}
                    className="flex w-full h-full object-cover transition-opacity duration-500"
                    wrapperClassName="flex w-full h-full"
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
                <p className="whitespace-pre-line flex text-[15px] font-regular leading-large tracking-tighter">
                  {detailKo1}
                </p>
              ) : (
                <p className="whitespace-pre-line flex text-[15px] font-regular leading-regular tracking-regular">
                  {detailEng1}
                </p>
              )}
            </div>

            {isKR ? (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-large tracking-tighter">
                {detailKo2}
              </p>
            ) : (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-regular tracking-regular">
                {detailEng2}
              </p>
            )}
            {sub1 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden ">
                <LazyLoadImage
                  src={sub1}
                  placeholderSrc={
                    sub1?.includes("cloudinary.com")
                      ? sub1.replace("/upload/", "/upload/w_50,q_auto,f_auto/")
                      : undefined
                  }
                  effect="opacity"
                  alt={title}
                  className="flex w-full h-full object-cover transition-opacity duration-500"
                  wrapperClassName="flex w-full h-full"
                />
              </div>
            ) : null}
            {isKR ? (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-large tracking-tighter">
                {detailKo3}
              </p>
            ) : (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-regular tracking-regular">
                {detailEng3}
              </p>
            )}
            {sub2 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden">
                <LazyLoadImage
                  src={sub2}
                  placeholderSrc={
                    sub2?.includes("cloudinary.com")
                      ? sub2.replace("/upload/", "/upload/w_50,q_auto,f_auto/")
                      : undefined
                  }
                  effect="opacity"
                  alt={title}
                  className="flex w-full h-full object-cover transition-opacity duration-500"
                  wrapperClassName="flex w-full h-full"
                />
              </div>
            ) : null}
            {isKR ? (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-large tracking-tighter">
                {detailKo4}
              </p>
            ) : (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-regular tracking-regular">
                {detailEng4}
              </p>
            )}

            {sub3 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden rounded-[1000px]">
                <LazyLoadImage
                  src={sub3}
                  placeholderSrc={
                    sub3?.includes("cloudinary.com")
                      ? sub3.replace("/upload/", "/upload/w_50,q_auto,f_auto/")
                      : undefined
                  }
                  effect="opacity"
                  alt={title}
                  className="flex w-full h-full object-cover rounded-[1000px] transition-opacity duration-500"
                  wrapperClassName="flex w-full h-full"
                />
              </div>
            ) : null}
            {sub4 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden">
                <LazyLoadImage
                  src={sub4}
                  placeholderSrc={
                    sub4?.includes("cloudinary.com")
                      ? sub4.replace("/upload/", "/upload/w_50,q_auto,f_auto/")
                      : undefined
                  }
                  effect="opacity"
                  alt={title}
                  className="flex w-full h-full object-cover transition-opacity duration-500"
                  wrapperClassName="flex w-full h-full"
                />
              </div>
            ) : null}
            {sub5 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden rounded-[1000px]">
                <LazyLoadImage
                  src={sub5}
                  placeholderSrc={
                    sub5?.includes("cloudinary.com")
                      ? sub5.replace("/upload/", "/upload/w_50,q_auto,f_auto/")
                      : undefined
                  }
                  effect="opacity"
                  alt={title}
                  className="flex w-full h-full object-cover rounded-[1000px] transition-opacity duration-500"
                  wrapperClassName="flex w-full h-full"
                />
              </div>
            ) : null}
            {sub6 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden ">
                <LazyLoadImage
                  src={sub6}
                  placeholderSrc={
                    sub6?.includes("cloudinary.com")
                      ? sub6.replace("/upload/", "/upload/w_50,q_auto,f_auto/")
                      : undefined
                  }
                  effect="opacity"
                  alt={title}
                  className="flex w-full h-full object-cover transition-opacity duration-500"
                  wrapperClassName="flex w-full h-full"
                />
              </div>
            ) : null}
            {sub7 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden rounded-[1000px]">
                <LazyLoadImage
                  src={sub7}
                  placeholderSrc={
                    sub7?.includes("cloudinary.com")
                      ? sub7.replace("/upload/", "/upload/w_50,q_auto,f_auto/")
                      : undefined
                  }
                  effect="opacity"
                  alt={title}
                  className="flex w-full h-full object-cover rounded-[1000px] transition-opacity duration-500"
                  wrapperClassName="flex w-full h-full"
                />
              </div>
            ) : null}
            {sub8 ? (
              <div className="flex w-full aspect-[16/9] overflow-hidden ">
                <LazyLoadImage
                  src={sub8}
                  placeholderSrc={
                    sub8?.includes("cloudinary.com")
                      ? sub8.replace("/upload/", "/upload/w_50,q_auto,f_auto/")
                      : undefined
                  }
                  effect="opacity"
                  alt={title}
                  className="flex w-full h-full object-cover transition-opacity duration-500"
                  wrapperClassName="flex w-full h-full"
                />
              </div>
            ) : null}
            {isKR ? (
              <p className="whitespace-pre-line flex text-[15px] font-regular leading-large tracking-tighter">
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
      <div
        className={[
          "button_list",
          "w-[calc(100%-40px)] left-5",
          "min-tablet:w-[calc(100%-80px)] min-tablet:left-10",
          "fixed transition-all duration-300 overflow-hidden z-[10040] block",
          isButtonListActive ? "bottom-10" : "-bottom-[50px]",
        ].join(" ")}
      >
        {/* 뒤로가기 = onClose 과 동일 기능 */}
        <button
          onClick={onClose}
          id="goBackBottom"
          className={[
            "go_back bg-[#F3F3EC] button_list_go_back",
            "float-left border border-label cursor-pointer text-base leading-none tracking-none",
            "w-12 h-12 rounded-full flex justify-center items-center",
            "min-mobile:w-auto min-mobile:h-auto min-mobile:rounded-[60px] min-mobile:py-3 min-mobile:px-6 min-mobile:inline-flex",
          ].join(" ")}
        >
          <img
            src={GoBackIcon}
            alt="뒤로 가기 버튼"
            className="w-4 h-4 transform translate-y-px mr-0 min-mobile:mr-3"
          />
          <span className="min-mobile:inline hidden">Back</span>
        </button>

        {/* Top 버튼 */}
        <button
          onClick={handleGoToTop}
          id="Top-Button"
          className="Top-Button w-12 h-12 rounded-full bg-[#F3F3EC] border border-label float-right ml-4 flex justify-center items-center cursor-pointer"
        >
          <img src={TopIcon} alt="위로 가기" className="w-5 h-5" />
        </button>

        {/* 한/영 전환 버튼 */}
        <KorEnButton
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
      {/* <div
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
        </button> */}
      {/* </div> */}
    </div>
  );
}
