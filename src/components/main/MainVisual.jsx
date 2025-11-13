import MainFrame from "../../assets/main/MainFrame.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Marker from "../../assets/main/Marker";
import React, { useMemo, memo, useRef, useEffect, useState } from "react";

import Sound_Ul from "../../assets/mainsound/Sound_Ul.mp3";
import Sound_Toong from "../../assets/mainsound/Sound_Toong.mp3";
import Sound_Bul from "../../assets/mainsound/Sound_Bul.mp3";
import Sound_Toong2 from "../../assets/mainsound/Sound_Toong2.mp3";
import Sound_Ha from "../../assets/mainsound/Sound_Ha.mp3";
import Sound_Ge from "../../assets/mainsound/Sound_Ge.mp3";
import Sound_Mal from "../../assets/mainsound/Sound_Mal.mp3";
import Sound_Ri from "../../assets/mainsound/Sound_Ri.mp3";
import Sound_A from "../../assets/mainsound/Sound_A.mp3";

const AUDIO_SRC_BY_KEY = {
  Word_Mal: Sound_Mal,
  Word_Ri: Sound_Ri,
  Word_Toong: Sound_Toong,
  Word_Ge: Sound_Ge,
  Word_Bul: Sound_Bul,
  Word_A: Sound_A,
  Word_Ha: Sound_Ha,
  Word_Toong2: Sound_Toong2,
  Word_Ul: Sound_Ul,
};

export default function MainVisual({
  onOpen,
  scale = 1,
  onWheelZoom,
  muted = false,
}) {
  const [activeKey, setActiveKey] = useState(null);

  const audioMapRef = useRef(new Map());
  const playingKeyRef = useRef(null);

  const isCoarsePointer = React.useCallback(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(pointer: coarse)")?.matches ||
      (navigator && navigator.maxTouchPoints > 0)
    );
  }, []);

  useEffect(() => {
    const mapAtMount = audioMapRef.current;
    // 프리로드
    Object.entries(AUDIO_SRC_BY_KEY).forEach(([k, src]) => {
      if (!audioMapRef.current.has(k)) {
        const a = new Audio(src);
        a.preload = "auto";
        a.crossOrigin = "anonymous";
        a.muted = muted;
        audioMapRef.current.set(k, a);
      }
    });

    // iOS 사운드 언락 (첫 사용자 제스처에서 1회)
    const unlock = () => {
      audioMapRef.current.forEach((a) => {
        a.play()
          .then(() => {
            a.pause();
            a.currentTime = 0;
          })
          .catch(() => {
            /* ignore autoplay-block errors */
          });
      });
      window.removeEventListener("pointerdown", unlock, { capture: true });
    };
    window.addEventListener("pointerdown", unlock, { capture: true });

    return () => {
      // 정리
      mapAtMount.forEach((a) => {
        a.pause();
      });
      playingKeyRef.current = null;
      window.removeEventListener("pointerdown", unlock, { capture: true });
    };
  }, [muted]);

  // ★ 유틸들
  const stopAll = React.useCallback(() => {
    audioMapRef.current.forEach((a) => {
      a.pause();
      a.currentTime = 0;
      a.loop = false;
    });
    playingKeyRef.current = null;
  }, []);

  useEffect(() => {
    audioMapRef.current.forEach((a) => {
      a.muted = muted;
    });
    if (muted) {
      stopAll();
    }
  }, [muted, stopAll]);

  const playHover = React.useCallback(
    (key) => {
      if (muted) return;
      const a = audioMapRef.current.get(key);
      if (!a) return;
      if (playingKeyRef.current !== key) stopAll();
      a.loop = true;
      a.currentTime = 0;
      a.play().catch(() => {});
      playingKeyRef.current = key;
    },
    [stopAll, muted]
  );

  const stopHover = React.useCallback((key) => {
    const a = audioMapRef.current.get(key);
    if (!a) return;
    a.pause();
    a.currentTime = 0;
    a.loop = false;
    if (playingKeyRef.current === key) playingKeyRef.current = null;
  }, []);

  // ★ 클릭 = 1회만 재생
  const playOnce = React.useCallback(
    (key) => {
      if (muted) return;
      const a = audioMapRef.current.get(key);
      if (!a) return;
      stopAll();
      a.loop = false;
      a.currentTime = 0;
      a.play()
        .then(() => {
          playingKeyRef.current = key;
          const onEnded = () => {
            playingKeyRef.current = null;
            a.removeEventListener("ended", onEnded);
          };
          a.addEventListener("ended", onEnded);
        })
        .catch(() => {});
    },
    [stopAll, muted]
  );

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
        top: 98.3,
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
        z: 500,
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
        hitbox: { width: 110, height: 60, offsetX: 60, offsetY: 30 },
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

  const LottieBlock = memo(function LottieBlock({
    item,
    isActive,
    onOpenAndReset,
    onHoverIn,
    onHoverOut,
  }) {
    const { src, width, rotate = 0, ariaLabel, hitbox } = item;
    const paused = isActive === false;

    return (
      <div
        className="relative"
        style={{ width }}
        onMouseEnter={(e) => {
          onHoverIn?.(e);
          // 데스크톱에서만 호버 사운드
          if (!isCoarsePointer()) playHover(item.key);
          playHover(item.key);
        }}
        onMouseLeave={(e) => {
          onHoverOut?.(e);
          if (!isCoarsePointer()) stopHover(item.key);
          stopHover(item.key);
        }}
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
          onPointerUp={(e) => {
            e.preventDefault();
            // ★ 모바일/터치에서만 탭 시: 1회 재생 + 팝업 열기
            if (isCoarsePointer()) {
              playOnce(item.key);
              onOpenAndReset?.();
            }
            // 데스크톱 클릭은 아무 것도 하지 않음(요구사항 4)
            playOnce(item.key);
            onOpenAndReset?.();
          }}
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
          className="absolute -translate-x-1/2 -translate-y-1/2 group"
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
              stopAll();
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
              bgClass="text-label-invert"
              hoverBgClass="group-hover:text-label"
              textClass="italic text-[14px] text-label"
              hoverTextClass="group-hover:text-label-invert"
              ariaLabel={`${it.ariaLabel} (Marker)`}
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                if (isCoarsePointer()) {
                  // 모바일 탭: 1회 재생 + 팝업 오픈
                  playOnce(it.key);
                  stopAll();
                  onOpenRef.current?.(it.key); // ★ 팝업 열림 (문제 3 해결)
                  setActiveKey(null);
                }
                // 데스크톱 클릭 무시(요구사항 4)
                playOnce(it.key);
                stopAll();
                onOpenRef.current?.(it.key);
                setActiveKey(null);
              }}
              onMouseEnter={() => {
                setActiveKey(it.key);
                if (!isCoarsePointer()) playHover(it.key); // 데스크톱 호버 재생
              }}
              onMouseLeave={() => {
                setActiveKey(null);
                if (!isCoarsePointer()) stopHover(it.key);
              }}
              onKeyDown={(e) => {
                // 접근성 고려해 Enter/Space로는 열고 싶다면 아래 유지 (원치 않으면 삭제)
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  if (isCoarsePointer()) {
                    playOnce(it.key);
                  }
                  stopAll();
                  onOpenRef.current?.(it.key);
                  setActiveKey(null);
                }
              }}
            />
          )}
        </Wrapper>
      );
    });
  }, [
    lottieItems,
    markerByKey,
    activeKey,
    playHover,
    stopHover,
    playOnce,
    stopAll,
    isCoarsePointer,
    onOpenRef,
  ]);

  return (
    <div
      onWheel={onWheelZoom}
      className="shrink-0 relative inline-block origin-center transition-transform duration-200 will-change-transform"
      style={{ transform: `scale(${scale})` }}
    >
      <img
        src={MainFrame}
        alt="Main frame"
        className="block w-[1206px] max-w-none h-auto pointer-events-none z-[1]"
      />
      {lottieLayer}
    </div>
  );
}
