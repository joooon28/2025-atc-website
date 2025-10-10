// src/pages/archive/Archive.jsx
import Header from "../../components/Header";
import ArchiveSection from "../../components/ArchiveSection";
import Footer from "../../components/Footer";

// ⬇️ 각 페이지 컴포넌트 그대로 사용 (onClose prop만 선택적으로 받을 수 있게)
import Staff from "./Staff";
import Memo from "./Memo";
import Documentary from "./documentary/Documentary";
import Gallery from "./galllery/Gallery";

import { useState } from "react";

export default function Archive() {
  const [activeSheet, setActiveSheet] = useState(null);
  const [showSheet, setShowSheet] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const openSheet = (name) => {
    setActiveSheet(name);
    setShowSheet(true);
    requestAnimationFrame(() => setSheetOpen(true));
  };

  const closeSheet = () => {
    setSheetOpen(false);
  };

  const renderSheet = () => {
    const commonProps = { onClose: closeSheet }; // XIcon 클릭 시 닫히도록 전달
    switch (activeSheet) {
      case "staff":
        return <Staff {...commonProps} />;
      case "memo":
        return <Memo {...commonProps} />;
      case "documentary":
        return <Documentary {...commonProps} />;
      case "gallery":
        return <Gallery {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-svh bg-mint-6">
      <div className="pt-[40px]">
        <Header />
      </div>

      <div className="p-[40px]">
        <section
          className="max-[701px]:hidden grid grid-cols-4 items-stretch divide-x divide-label border border-label
          relative [--dot:6px] [--b:1px]
          [&>*]:relative
          [&>*::before]:content-[''] [&>*::before]:absolute [&>*::before]:left-0
          [&>*]:before:w-[var(--dot)] [&>*]:before:h-[var(--dot)]
          [&>*]:before:rounded-full [&>*]:before:bg-fill
          [&>*]:before:-translate-x-1/2 [&>*]:before:-translate-y-1/2 [&>*]:before:transform
          [&>*]:before:z-10 [&>*]:before:pointer-events-none

          [&>*]:after:content-[''] [&>*]:after:absolute [&>*]:after:left-0
          [&>*]:after:bottom-[var(--b)] [&>*]:after:w-[var(--dot)] [&>*]:after:h-[var(--dot)]
          [&>*]:after:rounded-full [&>*]:after:bg-fill
          [&>*]:after:-translate-x-3/5 [&>*]:after:translate-y-3/4 [&>*]:after:transform
          [&>*]:after:z-10 [&>*]:after:pointer-events-none

          before:content-[''] before:absolute before:right-0 before:top-[var(--b)]
          before:w-[var(--dot)] before:h-[var(--dot)] before:rounded-full before:bg-fill
          before:translate-x-3/5 before:-translate-y-3/4 before:z-20 before:pointer-events-none

          after:content-[''] after:absolute after:right-0 after:bottom-[var(--b)]
          after:w-[var(--dot)] after:h-[var(--dot)] after:rounded-full after:bg-fill
          after:translate-x-3/5 after:translate-y-3/4 after:z-20 after:pointer-events-none"
        >
          <ArchiveSection
            ko="기획단"
            eng="Staff"
            onClick={() => openSheet("staff")}
          />
          <ArchiveSection
            ko="말-(메)아리 모음"
            eng="Memo"
            onClick={() => openSheet("memo")}
          />
          <ArchiveSection
            ko="다큐멘터리"
            eng="Documentary"
            onClick={() => openSheet("documentary")}
          />
          <ArchiveSection
            ko="갤러리"
            eng="Gallery"
            onClick={() => openSheet("gallery")}
          />
        </section>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>

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
                setActiveSheet(null);
              }
            }}
            className={`absolute inset-x-0 bottom-0 transition-transform duration-500 will-change-transform
              ${sheetOpen ? "translate-y-0" : "translate-y-full"}`}
          >
            <div className="bg-mint-6 h-svh overflow-y-auto ">
              {renderSheet()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
