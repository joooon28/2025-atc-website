import MainFrame from "../../assets/main/MainFrame.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Marker from "../../assets/main/Marker";
import React, { useMemo, memo, useRef, useEffect, useState } from "react";

export default function MainVisual({ onOpen, scale = 1, onWheelZoom }) {
  // null → 전체 재생, 특정 key → 그 키만 재생
  const [activeKey, setActiveKey] = useState(null);

  const lottieItems = useMemo(
    () => [
      {
        key: "Word_Ul",
        src: "/lottie/MainInteraction/Word_Ul.lottie",
        top: 98,
        left: 20.8,
        width: 330,
        rotate: 0,
        ariaLabel: "Made 페이지 이동(완료)",
        hitbox: { width: 145, height: 140, offsetX: 72, offsetY: 70 },
      },
      {
        key: "Word_Toong",
        src: "/lottie/MainInteraction/Word_Toong.lottie",
        top: 32.5,
        left: 27,
        width: 100,
        rotate: 0,
        ariaLabel: "무작위로 선택된 Work 디테일 페이지 이동(완료)",
        z: -1,
        hitbox: { width: 145, height: 140, offsetX: 72, offsetY: 70 },
      },
      {
        key: "Word_Bul",
        src: "/lottie/MainInteraction/Word_Bul.lottie",
        top: 96.7,
        left: 36,
        width: 274,
        rotate: 0,
        ariaLabel:
          "Previous Program의 '도대체 무슨 소리를 하는 거야?' More Info로 이동(완료)",
        z: 500,
        hitbox: { width: 145, height: 140, offsetX: 72, offsetY: 70 },
      },
      {
        key: "Word_Toong2",
        src: "/lottie/MainInteraction/Word_Toong2.lottie",
        top: 74,
        left: 46,
        width: 280,
        rotate: 0,
        ariaLabel: "Work 페이지의 5초마다 새로운 프로젝트 페이지 이동(완료)",
        hitbox: { width: 145, height: 140, offsetX: 72, offsetY: 50 },
      },
      {
        key: "Word_Ha",
        src: "/lottie/MainInteraction/Word_Ha.lottie",
        top: 32,
        left: 54.5,
        width: 228,
        rotate: 0,
        ariaLabel: "Program 페이지로 이동 후 하단 스크롤 이동(완료)",
        hitbox: { width: 145, height: 140, offsetX: 72, offsetY: 70 },
      },
      {
        key: "Word_Ge",
        src: "/lottie/MainInteraction/Word_Ge.lottie",
        top: 40,
        left: 60.3,
        width: 75,
        rotate: 0,
        ariaLabel: "About 페이지 이동(완료)",
        hitbox: { width: 60, height: 39, offsetX: 30, offsetY: 20 },
      },
      {
        key: "Word_Mal",
        src: "/lottie/MainInteraction/Word_Mal.lottie",
        top: 99.5,
        left: 83.3,
        width: 475,
        rotate: 0,
        ariaLabel: "Archive 페이지 이동 후 Gallery Sheet 오픈(완료)",
        z: 200,
        hitbox: { width: 100, height: 240, offsetX: 50, offsetY: 120 },
      },
      {
        key: "Word_A",
        src: "/lottie/MainInteraction/Word_A.lottie",
        top: 99.3,
        left: 79.4,
        width: 180,
        rotate: 0,
        ariaLabel: "Archive 페이지 이동 후 Documentary Sheet 오픈(완료)",
        z: 600,
        hitbox: { width: 100, height: 60, offsetX: 60, offsetY: 30 },
      },
      {
        key: "Word_Ri",
        src: "/lottie/MainInteraction/Word_Ri.lottie",
        top: 92.5,
        left: 89.7,
        width: 250,
        rotate: 0,
        ariaLabel: "Archive 페이지 이동 후 Memo Sheet 오픈(완료)",
        z: 500,
        hitbox: { width: 100, height: 110, offsetX: 50, offsetY: 38 },
      },
    ],
    []
  );

  const markerByKey = useMemo(
    () => ({
      Word_Ul: {
        label: "울",
        pos: { mode: "abs", x: 183, y: -133, unit: "px" },
      },
      Word_Toong: {
        label: "퉁",
        pos: { mode: "abs", x: 61, y: -76, unit: "px" },
      },
      Word_Bul: {
        label: "불",
        pos: { mode: "abs", x: 170, y: -160, unit: "px" },
      },
      Word_Toong2: {
        label: "퉁",
        pos: { mode: "abs", x: 155, y: -70, unit: "px" },
      },
      Word_Ha: { label: "하", pos: { mode: "abs", x: 99, y: -44, unit: "px" } },
      Word_Ge: { label: "게", pos: { mode: "abs", x: 35, y: -60, unit: "px" } },
      Word_Mal: {
        label: "말",
        pos: { mode: "abs", x: 250, y: -50, unit: "px" },
      },
      Word_A: { label: "아", pos: { mode: "abs", x: 110, y: -20, unit: "px" } },
      Word_Ri: {
        label: "리",
        pos: { mode: "abs", x: 202, y: -104, unit: "px" },
      },
    }),
    []
  );

  // 단순/안정: key 변경으로 DotLottieReact 재마운트 → play/pause 강제
  const LottieBlock = memo(function LottieBlock({
    item,
    isActive, // true|null=재생, false=정지
    onOpenAndReset,
    onHoverIn,
    onHoverOut,
  }) {
    const { src, width, rotate = 0, ariaLabel, hitbox } = item;
    const paused = isActive === false;

    return (
      <div
        // ⛔️ group 제거: Lottie hover가 Marker 색에 영향 못 주게
        className="relative"
        style={{ width }}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
      >
        <DotLottieReact
          key={`${item.key}-${paused ? "paused" : "playing"}`}
          src={src}
          autoplay={!paused}
          loop={!paused}
          className="w-full h-auto pointer-events-none"
        />
        <button
          type="button"
          aria-label={ariaLabel}
          onPointerUp={onOpenAndReset}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[300]
                     bg-transparent cursor-pointer outline-none focus:outline-none focus:ring-0 border-none"
          style={{
            width: `${hitbox?.width ?? width}px`,
            height: `${hitbox?.height ?? (width * 35) / 45}px`,
            transform: `translate(calc(-50% + ${hitbox?.offsetX ?? 0}px),
                                   calc(-50% + ${hitbox?.offsetY ?? 0}px))
                        rotate(${rotate}deg)`,
          }}
        />
      </div>
    );
  });

  const onOpenRef = useRef(onOpen);
  useEffect(() => {
    onOpenRef.current = onOpen;
  }, [onOpen]);

  const lottieLayer = useMemo(() => {
    return lottieItems.map((it) => {
      const Wrapper = ({ children }) => (
        <div
          // Wrapper에도 group 없음
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            top: `${it.top}%`,
            left: `${it.left}%`,
            transform: `translate(-50%, -50%) rotate(${it.rotate ?? 0}deg)`,
            zIndex: it.z ?? 0,
          }}
        >
          {children}
        </div>
      );

      const mk = markerByKey[it.key];
      const isActive =
        activeKey === null ? null : activeKey === it.key ? true : false;

      return (
        <Wrapper key={it.key}>
          <LottieBlock
            item={it}
            isActive={isActive}
            onOpenAndReset={() => {
              onOpenRef.current?.(it.key);
              setActiveKey(null);
            }}
            onHoverIn={() => setActiveKey(it.key)}
            onHoverOut={() => setActiveKey(null)}
          />

          {mk && (
            <Marker
              width={mk.w ?? 45}
              height={mk.h ?? Math.round(((mk.w ?? 45) * 35) / 45)}
              label={mk.label}
              className="absolute z-[400] cursor-pointer pointer-events-auto"
              style={
                mk.pos?.mode === "abs"
                  ? {
                      top:
                        typeof mk.pos.y === "number"
                          ? `${mk.pos.y}${mk.pos.unit || "%"}`
                          : mk.pos.y,
                      left:
                        typeof mk.pos.x === "number"
                          ? `${mk.pos.x}${mk.pos.unit || "%"}`
                          : mk.pos.x,
                      transform: `translate(-50%, -50%)${
                        mk.rotate ? ` rotate(${mk.rotate}deg)` : ""
                      }`,
                    }
                  : {
                      top: "50%",
                      left: "50%",
                      transform: `translate(calc(-50% + ${mk.dx || 0}px),
                                             calc(-50% + ${mk.dy || 0}px))${
                        mk.rotate ? ` rotate(${mk.rotate}deg)` : ""
                      }`,
                    }
              }
              // ✅ Marker 고유 hover (Lottie와 독립)
              bgClass="text-label-invert"
              hoverBgClass="hover:text-label"
              textClass="italic text-[14px] text-label"
              hoverTextClass="group-hover:text-label-invert"
              ariaLabel={`${it.ariaLabel} (Marker)`}
              role="button"
              tabIndex={0}
              onClick={() => {
                onOpenRef.current?.(it.key);
                setActiveKey(null);
              }}
              onMouseEnter={() => setActiveKey(it.key)}
              onMouseLeave={() => setActiveKey(null)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenRef.current?.(it.key);
                  setActiveKey(null);
                }
              }}
            />
          )}
        </Wrapper>
      );
    });
  }, [lottieItems, markerByKey, activeKey]);

  return (
    <section className="fixed inset-0 z-0 overflow-auto">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          onWheel={onWheelZoom}
          className="relative w-[1206px]
                     origin-center transition-transform duration-200 will-change-transform"
          style={{ transform: `scale(${scale})` }}
        >
          <img
            src={MainFrame}
            alt="Main frame"
            className="block w-[1206px] h-auto pointer-events-none z-[1]"
          />
          {lottieLayer}
        </div>
      </div>
    </section>
  );
}
