import Header from "../../components/Header";
import ArchiveSection from "../../components/ArchiveSection";
import Footer from "../../components/Footer";
import Staff from "./Staff";
import Memo from "./Memo";
import Documentary from "./documentary/Documentary";
import Gallery from "./galllery/Gallery";
import MenuToggle from "../../components/menu/MenuToggle";
import { createPortal } from "react-dom";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageTransition from "../../components/PageTransition";

export default function Archive() {
  const [activeSheet, setActiveSheet] = useState(null);
  const [showSheet, setShowSheet] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const openSheet = (name) => {
    setActiveSheet(name);
    setShowSheet(true);
    requestAnimationFrame(() => setSheetOpen(true));
  };

  const closeSheet = () => {
    setSheetOpen(false);
  };

  // Archive 컴포넌트 안
  useEffect(() => {
    if (!showSheet) return;

    // 현재 스크롤 위치 고정
    const y = window.scrollY;
    const { style } = document.body;

    style.position = "fixed";
    style.top = `-${y}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    style.overflow = "hidden";

    return () => {
      // 복구
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      style.overflow = "";
      window.scrollTo(0, y);
    };
  }, [showSheet]);

  useEffect(() => {
    const target = location.state?.sheet;
    if (target === "gallery") {
      openSheet("gallery");
      navigate(".", { replace: true, state: {} });
    }
    if (target === "documentary") {
      openSheet("documentary");
      navigate(".", { replace: true, state: {} });
    }
    if (target === "memo") {
      openSheet("memo");
      navigate(".", { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const renderSheet = () => {
    const commonProps = { onClose: closeSheet };
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
    <>
      <PageTransition className="flex flex-col min-h-dvh bg-mint-6">
        <div className="max-tablet:hidden pt-[40px]">
          <Header />
        </div>
        <div className="p-5 z-10">
          <div className="min-tablet:hidden relative">
            <MenuToggle />
          </div>
        </div>

      <div className="min-desktop:px-[120px] max-desktop:px-[20px]">
        <section
          className="
    grid grid-cols-4 items-stretch
    max-tablet:grid-cols-2
    max-mobile:grid-cols-1
    min-h-0 relative

    border border-label

    [--dot:6px] [--b:1px]

    [&>*]:aspect-square
    [&>*]:relative

    [&>*]:border-r [&>*]:border-b [&>*]:border-label
    [&>*:nth-child(4n)]:border-r-0              
    [&>*:nth-last-child(-n+4)]:border-b-0       

      max-tablet:[&>*]:border-0
      max-tablet:text-label
      max-tablet:[background-image:linear-gradient(90deg,currentColor,currentColor),linear-gradient(0deg,currentColor,currentColor)]
      max-tablet:[background-size:1px_100%,100%_1px]
      max-tablet:[background-position:50%_0,0_50%]
      max-tablet:bg-no-repeat
      max-tablet:[&>*:nth-child(4)::before]:w-0
      max-tablet:[&>*:nth-child(4)::before]:h-0

    max-mobile:[&>*]:border-r-0
    max-mobile:[&>*]:border-b max-mobile:[&>*]:border-label
    max-mobile:[&>*:last-child]:border-b-0
    max-mobile:[background-image:none]

    max-mobile:[&>*:nth-last-child(-n+4)]:border-b

    max-mobile:[&>*:nth-child(4)::before]:w-[var(--dot)]
    max-mobile:[&>*:nth-child(4)::before]:h-[var(--dot)]
    max-mobile:[&>*:last-child]:!border-b-0

    [&>*::before]:content-[''] [&>*::before]:absolute
    [&>*::before]:w-[var(--dot)] [&>*::before]:h-[var(--dot)]
    [&>*::before]:rounded-full [&>*::before]:bg-fill
    [&>*::before]:left-0 [&>*::before]:top-0
    [&>*::before]:-translate-x-3/8 [&>*::before]:-translate-y-1/2
    [&>*::before]:z-5 [&>*::before]:pointer-events-none

    [&>*::after]:content-[''] [&>*::after]:absolute
    [&>*::after]:w-[var(--dot)] [&>*::after]:h-[var(--dot)]
    [&>*::after]:rounded-full [&>*::after]:bg-fill
    [&>*::after]:right-0 [&>*::after]:bottom-0
    [&>*::after]:translate-x-1/2 [&>*::after]:translate-y-1/2
    [&>*::after]:z-5 [&>*::after]:pointer-events-none

    before:content-[''] before:absolute
    before:w-[var(--dot)] before:h-[var(--dot)]
    before:rounded-full before:bg-fill
    before:right-0 before:top-0
    before:translate-x-1/2 before:-translate-y-1/2
    before:z-5 before:pointer-events-none

    after:content-[''] after:absolute
    after:w-[var(--dot)] after:h-[var(--dot)]
    after:rounded-full after:bg-fill
    after:left-0 after:bottom-0
    after:-translate-x-1/2 after:translate-y-1/2
    after:z-5 after:pointer-events-none
  "
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
      </PageTransition>

      {showSheet &&
        createPortal(
          <div className="fixed inset-0 z-50 overscroll-none">
            {/* 백드롭 */}
            <button
              aria-label="close overlay"
              onClick={closeSheet}
              className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
                sheetOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* 시트 패널 */}
            <div
              onTransitionEnd={() => {
                if (!sheetOpen) {
                  setShowSheet(false);
                  setActiveSheet(null);
                }
              }}
              className={`absolute inset-0 transition-transform duration-500 ${
                sheetOpen ? "transform-none" : "translate-y-full"
              }`}
            >
              <div className="bg-mint-6 h-full overflow-y-auto overscroll-contain">
                {renderSheet()}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
