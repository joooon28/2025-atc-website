import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProgramList from "../../components/program/ProgramList";
import ProgramCalendar from "../../components/program/ProgramCalendar";
import Previous from "../../components/program/previous/Previous";
import MoreInfo from "../../components/program/previous/MoreInfo";
import { useState, useRef, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import MenuToggle from "../../components/menu/MenuToggle";

import images from "../../data/program/program.json";
import programs from "../../data/program/program.meta.json";

const items = Object.keys(programs).map((key) => {
  const meta = programs[key];
  const img = images[key];

  return {
    id: key,
    title: meta.title,
    number: meta.number,
    titleeng: meta.titleeng,
    date1: meta.date1,
    date2: meta.date2,
    date3: meta.date3,
    text: meta.text,
    texteng: meta.texteng,
    detailKo1: meta.detailKo1,
    detailEng1: meta.detailEng1,
    detailKo2: meta.detailKo2,
    detailEng2: meta.detailEng2,
    detailKo3: meta.detailKo3,
    detailEng3: meta.detailEng3,
    rounded: meta.rounded,
    location: meta.location,
    audience: meta.audience,
    main: img.main,
    sub1: img.sub1,
    sub2: img.sub2,
  };
});

export default function Program() {
  const [selected, setSelected] = useState(null);
  const [showSheet, setShowSheet] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const [activeId, setActiveId] = useState(null);

  // Calendar ↔ ProgramList 연동 상태
  const [hovered, setHovered] = useState({ number: null, color: "" });
  const [active, setActive] = useState({ number: null, color: "" });

  const onHoverNumber = (n, c) => setHovered({ number: n, color: c });
  const onLeaveNumber = () => setHovered({ number: null, color: "" });
  const onClickNumber = (n, c) => {
    const id = numToId[String(n)];
    const closing = activeId === id; // 이미 열린 걸 다시 클릭 → 닫힘
    if (closing) {
      setActive({ number: null, color: "" });
    } else {
      setActive({ number: n, color: c }); // 클릭한 직사각형 색으로 고정
    }
    toggleListByNumber(n);
  };

  // number → id 매핑 (Calendar 클릭 시 ProgramList 토글용)
  const numToId = useMemo(
    () => Object.fromEntries(items.map((it) => [String(it.number), it.id])),
    []
  );

  // Calendar에서 (n) 클릭 → 해당 ProgramList 토글
  const toggleListByNumber = (n) => {
    const id = numToId[String(n)];
    if (!id) return;
    setActiveId((prev) => (prev === id ? null : id));
  };

  const openSheet = (item) => {
    setSelected(item);
    setShowSheet(true);
    requestAnimationFrame(() => setSheetOpen(true));
  };
  const closeSheet = () => setSheetOpen(false);

  const scrollerRef = useRef(null);
  const justDraggedRef = useRef(false);

  const handleActivate = (next) => {
    if (justDraggedRef.current) return;
    setActiveId(next);

    if (!next) {
      setActive({ number: null, color: "" });
      return;
    }
    const num = idToNumber[next];
    const color = colorByNumber[num] || "";
    setActive({ number: num, color });
  };

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

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const st = location.state?.scrollTo;
    if (!st) return;

    const scrollNow = () => {
      if (st.selector) {
        const el = document.querySelector(st.selector);
        if (el)
          el.scrollIntoView({ behavior: "smooth", block: st.block || "start" });
        return;
      }

      if (st.mode === "px") {
        window.scrollTo({ top: Number(st.y) || 0, behavior: "smooth" });
        return;
      }

      if (st.mode === "percent") {
        const doc = document.documentElement;
        const maxScroll = (doc.scrollHeight || 0) - window.innerHeight;
        const y = Math.max(0, maxScroll * Number(st.p ?? 0));
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
    };

    requestAnimationFrame(() => setTimeout(scrollNow, 0));

    navigate(".", { replace: true, state: null });
  }, [location.state, navigate]);

  const hoverClassByNumber = {
    1: "hover:bg-mint-5",
    2: "hover:bg-mint-3",
    3: "hover:bg-[#E9F1E9]",
    4: "hover:bg-mint-5",
    5: "hover:bg-mint-5",
  };

  const colorByNumber = {
    1: "bg-mint-5",
    2: "bg-mint-3",
    3: "bg-[#E9F1E9]",
    4: "bg-mint-5",
    5: "bg-mint-5",
  };

  const idToNumber = useMemo(
    () => Object.fromEntries(items.map((it) => [it.id, it.number])),
    []
  );

  return (
    <div className="flex flex-col min-h-dvh bg-mint-2">
      <div className="max-tablet:hidden pt-[40px]">
        <Header />
      </div>
      <div className="p-5 z-50">
        <div className="min-tablet:hidden relative">
          <MenuToggle />
        </div>
      </div>

      <section className="text-label grid grid-cols-1 min-tablet:grid-cols-2 gap-10 p-10 max-tablet:p-5">
        <div className="max-tablet:order-2 flex flex-col gap-[8.5px]">
          <div className="font-strong text-[24px] flex gap-3">
            <p className="max-tablet:hidden">프로그램</p>
            <p className="italic max-tablet:hidden">Program</p>
          </div>

          <section>
            {items.map((it) => (
              <ProgramList
                key={it.id}
                id={it.id}
                title={it.title}
                number={it.number}
                titleeng={it.titleeng}
                date1={it.date1}
                date2={it.date2}
                date3={it.date3}
                text={it.text}
                texteng={it.texteng}
                detailKo1={it.detailKo1}
                detailEng1={it.detailEng1}
                detailKo2={it.detailKo2}
                detailEng2={it.detailEng2}
                rounded={it.rounded}
                main={it.main}
                sub1={it.sub1}
                sub2={it.sub2}
                location={it.location}
                audience={it.audience}
                onMoreInfo={openSheet}
                activeId={activeId}
                onActivate={handleActivate}
                hoveredNumber={hovered.number}
                hoveredColor={hovered.color}
                activeColor={active.color}
                selfHoverClass={hoverClassByNumber[it.number]}
              />
            ))}

            <div
              className='flex hover:bg-mint-6 border-t border-label relative [--dot:6px] [--b:1px]
                before:content-[""] before:absolute before:left-0 before:top-[var(--b)]
                before:w-[var(--dot)] before:h-[var(--dot)] before:rounded-full before:bg-label
                before:-translate-x-1/2 before:-translate-y-3/4 before:pointer-events-none
                after:content-[""] after:absolute after:right-0 after:top-[var(--b)]
                after:w-[var(--dot)] after:h-[var(--dot)] after:rounded-full after:bg-label
                after:translate-x-1/2 after:-translate-y-3/4 after:pointer-events-none'
            />
          </section>
        </div>

        <ProgramCalendar
          onHoverNumber={onHoverNumber}
          onLeaveNumber={onLeaveNumber}
          onClickNumber={onClickNumber}
        />
      </section>

      <section
        className="text-label pl-10 py-20 max-tablet:pl-5"
        id="previous-section"
      >
        <Previous initialOpenId={location.state?.openPreviousId} />
      </section>

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
                setSelected(null);
              }
            }}
            className={`absolute inset-x-0 bottom-0 transition-transform duration-500 will-change-transform ${
              sheetOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="bg-mint-6 h-dvh overflow-y-auto ">
              {selected && <MoreInfo onClose={closeSheet} {...selected} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
