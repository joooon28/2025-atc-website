import CloseButton from "../../../components/archive/CloseButton";
import Footer from "../../../components/Footer";
import GalleryList from "./GalleryList";
import GalleryMain from "../../../components/gallery/Main";
import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import gallery from "../../../data/archive/gallery.json";
import meta from "../../../data/archive/gallery.meta.json";

export default function Gallery({ onClose }) {
  const [selected, setSelected] = useState(
    "0710_대외협력팀_킥오프_후_친해진_대협팀"
  );
  const listRef = useRef(null);
  const regionRef = useRef(null);
  const [isShort, setIsShort] = useState(window.innerHeight < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsShort(window.innerHeight < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const idsInOrder = useMemo(() => Object.keys(gallery), []);
  const idxOf = useCallback((id) => idsInOrder.indexOf(id), [idsInOrder]);

  const MONTHS = {
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
  };

  const jumpToMonth = (label) => {
    const mm = MONTHS[label];
    if (!mm) return;

    const firstId = idsInOrder.find((id) =>
      (meta[id]?.date || "").startsWith(`${mm}.`)
    );
    if (!firstId) return;

    setSelected(firstId);
    listRef.current?.scrollToId(firstId);
  };

  const selectByStep = useCallback(
    (step) => {
      if (!idsInOrder.length) return;
      const cur = idxOf(selected);
      const next = Math.min(idsInOrder.length - 1, Math.max(0, cur + step));
      const nextId = idsInOrder[next];
      if (nextId && nextId !== selected) {
        setSelected(nextId);
        listRef.current?.scrollToId(nextId);
      }
    },
    [idsInOrder, selected, idxOf]
  );

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      selectByStep(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      selectByStep(-1);
    }
  };

  return (
    <div className={`flex flex-col ${isShort ? "min-h-auto" : "min-h-svh"}`}>
      <div className="top-0 inset-x-0 z-10 flex justify-center px-4">
        <button onClick={onClose}>
          <CloseButton />
        </button>
      </div>
      <div
        ref={regionRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="flex-1 min-h-0 flex flex-col outline-none"
        aria-label="Gallery navigation region"
        role="application"
      >
        <div className="basis-0 flex-1 min-h-[50svh] md:min-h-0 p-4 md:p-10 flex justify-center items-center overflow-hidden">
          {" "}
          <GalleryMain images={selected} />
        </div>

        <div>
          <GalleryList
            ref={listRef}
            selected={selected}
            onSelect={(id) => {
              setSelected(id);
            }}
            onWheelStep={selectByStep}
          />
        </div>
        <div className="py-10 font-regular shrink-0 flex justify-center text-center gap-6">
          {["Jul", "Aug", "Sep", "Oct", "Nov"].map((m) => (
            <p
              key={m}
              className="hover:underline hover:font-heavy cursor-pointer"
              onClick={() => jumpToMonth(m)}
            >
              {m}
            </p>
          ))}
        </div>

        <div className="mt-auto min-[501px]:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}
