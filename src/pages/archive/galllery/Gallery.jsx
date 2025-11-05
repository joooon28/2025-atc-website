import CloseButton from "../../../components/archive/CloseButton";
import Footer from "../../../components/Footer";
import GalleryList from "./GalleryList";
import GalleryMain from "../../../components/gallery/Main";
import { useRef, useState } from "react";
import gallery from "../../../data/archive/gallery.json";
import meta from "../../../data/archive/gallery.meta.json";

export default function Gallery({ onClose }) {
  const [selected, setSelected] = useState("Test1");
  const listRef = useRef(null);

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

    const idsInOrder = Object.keys(gallery);
    const firstId = idsInOrder.find((id) =>
      (meta[id]?.date || "").startsWith(`${mm}.`)
    );
    if (!firstId) return;

    setSelected(firstId);
    listRef.current?.scrollToId(firstId);
  };

  return (
    <div className="flex flex-col min-h-svh">
      <div className="sticky top-0 inset-x-0 z-10 flex justify-center px-4">
        <button onClick={onClose}>
          <CloseButton />
        </button>
      </div>

      <div className="flex-1 min-h-0 flex flex-col pt-10">
        <div className="shrink-0 flex justify-center text-center gap-6">
          {["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"].map((m) => (
            <p
              key={m}
              className="hover:underline hover:font-semibold cursor-pointer"
              onClick={() => jumpToMonth(m)}
            >
              {m}
            </p>
          ))}
        </div>

        <div className="flex-1 p-10 flex justify-center items-center">
          <GalleryMain images={selected} />
        </div>
        <div className="mt-auto">
          <GalleryList
            ref={listRef}
            selected={selected}
            onSelect={setSelected}
          />
        </div>
        <div className="mt-auto min-[501px]:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}
