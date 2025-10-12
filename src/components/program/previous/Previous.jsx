import PreviousList from "./PreviousList";
import { useState, useRef, useEffect } from "react";
import MoreInfo from "./MoreInfo";

export default function Previous() {
  const [selected, setSelected] = useState(null);
  const [showSheet, setShowSheet] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const openSheet = (item) => {
    setSelected(item);
    setShowSheet(true);
    requestAnimationFrame(() => setSheetOpen(true));
  };
  const closeSheet = () => setSheetOpen(false);

  const scrollerRef = useRef(null);
  const justDraggedRef = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let isDown = false,
      startX = 0,
      startLeft = 0,
      lastX = 0,
      lastT = 0,
      v = 0,
      raf = null;

    const stopInertia = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    };

    const down = (e) => {
      isDown = true;
      startX = e.pageX;
      startLeft = el.scrollLeft;
      lastX = e.pageX;
      lastT = performance.now();
      el.classList.add("dragging");
    };
    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const now = performance.now();
      const dx = e.pageX - lastX;
      const dt = now - lastT || 16;
      el.scrollLeft = startLeft - (e.pageX - startX);
      v = dx / dt;

      if (Math.abs(e.pageX - startX) > 5) {
        justDraggedRef.current = true;
      }

      lastX = e.pageX;
      lastT = now;
    };

    const up = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove("dragging");

      const decay = 0.95;
      const minV = 0.02;

      const step = () => {
        v *= decay;
        if (Math.abs(v) < minV) {
          raf = null;
          setTimeout(() => (justDraggedRef.current = false), 0);
          return;
        }
        el.scrollLeft -= v * 16;
        raf = requestAnimationFrame(step);
      };

      if (Math.abs(v) >= minV) {
        raf = requestAnimationFrame(step);
      } else {
        setTimeout(() => (justDraggedRef.current = false), 0);
      }
    };

    const preventNativeDrag = (e) => e.preventDefault();

    el.addEventListener("mousedown", down);
    el.addEventListener("mousemove", move, { passive: false });
    el.addEventListener("mouseleave", up);
    el.addEventListener("mouseup", up);
    el.addEventListener("dragstart", preventNativeDrag);

    return () => {
      stopInertia();
      el.removeEventListener("mousedown", down);
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", up);
      el.removeEventListener("mouseup", up);
      el.removeEventListener("dragstart", preventNativeDrag);
    };
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="font-[600] text-[24px] flex gap-3">
        <p>이전 프로그램</p>
        <p className="italic">Previous Program</p>
      </div>
      <section className="flex flex-col gap-5">
        <div className="pr-10">
          <div
            className=" flex
        border-t border-label
        relative [--dot:6px] [--b:1px]
    
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
        </div>
        <section
          ref={scrollerRef}
          onClickCapture={(e) => {
            if (justDraggedRef.current) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          className="flex gap-5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-10"
        >
          <PreviousList
            title="지도 그리기"
            eng="Drawing Map"
            time="9.30. (THU) 16:00-18:00"
            text="요약 한글"
            detailKo="상세 한글 본문"
            detailEn="Detailed English paragraph…"
            image="https://i.imgur.com/xxxx1.jpg"
            onMoreInfo={openSheet}
          />
          <PreviousList onMoreInfo={openSheet} />
          <PreviousList onMoreInfo={openSheet} />
          <PreviousList onMoreInfo={openSheet} />
          <PreviousList onMoreInfo={openSheet} />
        </section>
        <div className="pr-10">
          <div
            className=" flex
        border-t border-label
        relative [--dot:6px] [--b:1px]
    
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
        </div>
      </section>
      {showSheet && (
        <div className="fixed inset-0 z-50">
          <button
            aria-label="close overlay"
            onClick={closeSheet}
            className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
              sheetOpen ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            onTransitionEnd={() => {
              if (!sheetOpen) {
                setShowSheet(false);
                setSelected(null);
              }
            }}
            className={`absolute inset-x-0 bottom-0 transition-transform duration-500 will-change-transform ${
              sheetOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="bg-mint-6 h-svh overflow-y-auto ">
              {selected && <MoreInfo onClose={closeSheet} {...selected} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
