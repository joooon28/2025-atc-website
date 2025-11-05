import CloseButton from "../../archive/CloseButton";
import Footer from "../../Footer";
import { ArrowUpIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

export default function MoreInfo({
  onClose,
  title,
  titleeng,
  date,
  detailKo,
  detailEng,
  image,
}) {
  // 실제로 스크롤되는 가장 가까운 조상 컨테이너를 찾는다.
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
    // 없으면 문서 스크롤로 폴백
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

  // 팝업 내부/윈도우 스크롤 감지 (어떤 경우든 스크롤 시작하면 표시)
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
      <div className="sticky top-0 inset-x-0 z-10 flex justify-center px-4">
        <button onClick={onClose}>
          <CloseButton />
        </button>
      </div>
      <div
        ref={scrollRef}
        className="flex-1 flex px-[220px] max-desktop:px-[40px] max-tablet:px-[0px] justify-center overflow-y-auto"
      >
        {" "}
        <section className="flex flex-col w-full max-tablet:p-[20px] gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex gap-[10px] font-[450] text-[24px]">
              <p>{title}</p>
              <p className="italic">{titleeng}</p>
            </div>
            <p className="flex text-[14px] font-[450]">{date}</p>
            <p className="flex text-[14px] whitespace-normal ">{detailKo}</p>
            <p className="flex text-[14px] whitespace-normal ">{detailEng}</p>
          </div>
          <div className="flex w-full aspect-[1.85] overflow-hidden">
            {image ? (
              <img src={image} alt={title} className="w-full object-cover" />
            ) : (
              "img"
            )}
          </div>
          <div
            className=" 
                    group flex hover:bg-mint-6 
                    border-t border-label py-3 
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
        </section>
      </div>
      <div className="mt-auto">
        <Footer />
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

          // scrollRef가 가리키든 아니든, 실제 스크롤 컨테이너를 찾아서 올린다.
          const target = getScrollContainer(
            scrollRef.current || document.activeElement
          );

          // 문서 스크롤 폴백이면 window로
          if (
            target === document.scrollingElement ||
            target === document.documentElement ||
            target === document.body
          ) {
            window.scrollTo({ top: 0, behavior });
          } else {
            // 일부 구형 iOS 대비: scrollTo 없으면 scrollTop 직접 세팅
            if (typeof target.scrollTo === "function") {
              target.scrollTo({ top: 0, behavior });
            } else {
              target.scrollTop = 0;
            }
          }
        }}
        aria-label="팝업 맨 위로 이동"
        className={[
          "max-desktop:hidden",
          // 위치 (우측 정중앙 고정)
          "fixed right-[calc(theme(spacing.4)+env(safe-area-inset-right))] md:right-[calc(theme(spacing.6)+env(safe-area-inset-right))]",
          "top-1/2 -translate-y-1/2 -translate-x-1/2 z-[60]",

          // 스타일
          "flex justify-center items-center w-12 h-12 p-3 rounded-full",
          "border border-label bg-fill-primary",

          // 보임/숨김 (기존 showTop 그대로 사용)
          showTop
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",

          // 접근성
          "focus:outline-none focus:ring-2 focus:ring-mint-6",
        ].join(" ")}
      >
        <ArrowUpIcon size={24} weight="light" />
      </button>
    </div>
  );
}
