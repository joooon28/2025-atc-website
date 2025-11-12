import { useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import List from "../../../components/gallery/List";

const GalleryList = forwardRef(function GalleryList(
  { selected, onSelect, onWheelStep },
  ref
) {
  const scrollerRef = useRef(null);
  const sectionRef = useRef(null);

  const scrollByPage = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !onWheelStep) return;
    const handleWheel = (e) => {
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;
      // passive:false 로 등록했어도, 안전하게 cancelable 체크
      if (e.cancelable) e.preventDefault();
      onWheelStep(delta > 0 ? 1 : -1);
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () =>
      el.removeEventListener("wheel", handleWheel, { passive: false });
  }, [onWheelStep]);

  useImperativeHandle(ref, () => ({
    scrollToId(id) {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      const item = scroller.querySelector(`[data-id="${id}"]`);
      if (!item) return;

      const targetLeft =
        item.getBoundingClientRect().left -
        scroller.getBoundingClientRect().left +
        scroller.scrollLeft;

      scroller.scrollTo({ left: targetLeft, behavior: "smooth" });
    },
  }));

  return (
    <div className="max-[501px]:px-0 max-[501px]:gap-0 shrink-0 flex justify-between items-center px-[40px] gap-5">
      <button type="button" onClick={() => scrollByPage(-1)}>
        <ArrowLeftIcon
          className="max-[501px]:hidden w-[24px] h-[24px]"
          weight="thin"
        />
      </button>

      <section
        ref={sectionRef}
        className="flex-1 min-w-0 snap-x snap-mandatory overscroll-contain"
      >
        <List ref={scrollerRef} selected={selected} onSelect={onSelect} />
      </section>

      <button type="button" onClick={() => scrollByPage(1)}>
        <ArrowRightIcon
          className="max-[501px]:hidden w-[24px] h-[24px]"
          weight="thin"
        />
      </button>
    </div>
  );
});

export default GalleryList;
