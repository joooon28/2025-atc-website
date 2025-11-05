import { useRef, forwardRef, useImperativeHandle } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import List from "../../../components/gallery/List";

const GalleryList = forwardRef(function GalleryList(
  { selected, onSelect },
  ref
) {
  const scrollerRef = useRef(null);

  const scrollByPage = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

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
    <div className="max-[501px]:px-0 max-[501px]:gap-0 flex-1 flex justify-between items-center p-[40px] gap-5">
      <button type="button" onClick={() => scrollByPage(-1)}>
        <ArrowLeftIcon
          className="max-[501px]:hidden w-[24px] h-[24px]"
          weight="thin"
        />
      </button>

      <section className=" flex-1 min-w-0 snap-x snap-mandatory ">
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
