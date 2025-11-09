import MainFrame from "../../assets/main/MainFrame.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Marker from "../../assets/main/Marker";

export default function MainVisual({ onOpen }) {
  const lottieItems = [
    {
      key: "Word_Ul",
      src: "/lottie/MainInteraction/Word_Ul.lottie",
      top: 70,
      left: 15,
      width: 100,
      rotate: 0,
      ariaLabel: "Made 페이지 이동(완료)",
      autoplay: true,
      loop: true,
      hitbox: {
        width: 145,
        height: 140,
        offsetX: 72,
        offsetY: 70,
      },
    },
    {
      key: "Word_Toong",
      src: "/lottie/MainInteraction/Word_Toong.lottie",
      top: 23,
      left: 26,
      width: 100,
      rotate: 0,
      ariaLabel: "무작위로 선택된 Work 디테일 페이지 이동(완료)",
      autoplay: true,
      loop: true,
      hitbox: {
        width: 145,
        height: 140,
        offsetX: 72,
        offsetY: 70,
      },
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
      autoplay: true,
      loop: true,
      hitbox: {
        width: 145,
        height: 140,
        offsetX: 72,
        offsetY: 70,
      },
    },
    {
      key: "Word_Toong2",
      src: "/lottie/MainInteraction/Word_Toong2.lottie",
      top: 55,
      left: 38,
      width: 100,
      rotate: 0,
      ariaLabel: "Work 페이지의 5초마다 새로운 프로젝트 페이지 이동(완료)",
      autoplay: true,
      loop: true,
      hitbox: {
        width: 145,
        height: 140,
        offsetX: 72,
        offsetY: 70,
      },
    },
    {
      key: "Word_Ha",
      src: "/lottie/MainInteraction/Word_Ha.lottie",
      top: 15,
      left: 45,
      width: 100,
      rotate: 0,
      ariaLabel: "Program 페이지로 이동 후 하단 스크롤 이동(완료)",
      autoplay: true,
      loop: true,
      hitbox: {
        width: 145,
        height: 140,
        offsetX: 72,
        offsetY: 70,
      },
    },
    {
      key: "Word_Ge",
      src: "/lottie/MainInteraction/Word_Ge.lottie",
      top: 40,
      left: 60.3,
      width: 75,
      rotate: 0,
      ariaLabel: "About 페이지 이동(완료)",
      autoplay: true,
      loop: true,
      hitbox: {
        width: 60,
        height: 39,
        offsetX: 30,
        offsetY: 20,
      },
    },
    {
      key: "Word_Mal",
      src: "/lottie/MainInteraction/Word_Mal.lottie",
      top: 99.5,
      left: 83.3,
      width: 475,
      rotate: 0,
      ariaLabel: "Archive 페이지 이동 후 Gallery Sheet 오픈(완료)",
      autoplay: true,
      loop: true,
      hitbox: {
        width: 100,
        height: 240,
        offsetX: 50,
        offsetY: 120,
      },
    },
    {
      key: "Word_A",
      src: "/lottie/MainInteraction/Word_A.lottie",
      top: 100,
      left: 80.9,
      width: 200,
      rotate: 0,
      ariaLabel: "Archive 페이지 이동 후 Documentary Sheet 오픈(완료)",
      autoplay: true,
      loop: true,
      z: 60,
      hitbox: {
        width: 120,
        height: 60,
        offsetX: 60,
        offsetY: 30,
      },
    },
    {
      key: "Word_Ri",
      src: "/lottie/MainInteraction/Word_Ri.lottie",
      top: 72,
      left: 85,
      width: 100,
      rotate: 0,
      ariaLabel: "Archive 페이지 이동 후 Memo Sheet 오픈(완료)",
      autoplay: true,
      loop: true,
      z: 60,
      hitbox: {
        width: 120,
        height: 60,
        offsetX: 60,
        offsetY: 30,
      },
    },
  ];

  const markerByKey = {
    Word_Ul: { label: "울", pos: { mode: "abs", x: 50, y: -15, unit: "px" } },
    Word_Toong: {
      label: "퉁",
      pos: { mode: "abs", x: 70, y: -26, unit: "px" },
    },
    Word_Bul: {
      label: "불",
      pos: { mode: "abs", x: 170, y: -160, unit: "px" },
    },
    Word_Toong2: {
      label: "퉁",
      pos: { mode: "abs", x: 80, y: 10, unit: "px" },
    },
    Word_Ha: { label: "하", pos: { mode: "abs", x: 87, y: 30, unit: "px" } },
    Word_Ge: { label: "게", pos: { mode: "abs", x: 35, y: -60, unit: "px" } },
    Word_Mal: { label: "말", pos: { mode: "abs", x: 250, y: -50, unit: "px" } },
    Word_A: { label: "아", pos: { mode: "abs", x: 110, y: -20, unit: "px" } },
    Word_Ri: { label: "리", pos: { mode: "abs", x: 110, y: -15, unit: "px" } },
  };

  return (
    <section className="fixed inset-0 z-0 overflow-auto">
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          relative pointer-events-none
          w-[1206px]
        "
      >
        <img
          src={MainFrame}
          alt="Main frame"
          className="block w-[1206px] h-auto pointer-events-none z-[1]"
        />

        {lottieItems.map((it) => {
          const Wrapper = ({ children }) => (
            <div
              className="absolute pointer-events-auto -translate-x-1/2 -translate-y-1/2"
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

          if (it.hitbox) {
            return (
              <Wrapper key={it.key}>
                <div className="relative" style={{ width: it.width }}>
                  <DotLottieReact
                    src={it.src}
                    autoplay={it.autoplay ?? true}
                    loop={it.loop ?? true}
                    className="w-full h-auto pointer-events-none"
                  />
                  <button
                    type="button"
                    aria-label={it.ariaLabel}
                    onClick={() => onOpen?.(it.key)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent z-[100]"
                    style={{
                      width: `${it.hitbox?.width ?? it.width}px`,
                      height: `${it.hitbox?.height ?? (it.width * 35) / 45}px`,
                      transform: `translate(calc(-50% + ${
                        it.hitbox?.offsetX ?? 0
                      }px), calc(-50% + ${it.hitbox?.offsetY ?? 0}px)) rotate(${
                        it.rotate ?? 0
                      }deg)`,
                      cursor: "pointer",
                    }}
                  />

                  {mk && (
                    <Marker
                      width={mk.w ?? 45}
                      height={mk.h ?? Math.round(((mk.w ?? 45) * 35) / 45)}
                      label={mk.label}
                      className="
                        absolute
                        z-[110]
                        cursor-pointer
                        "
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
                              transform: `translate(calc(-50% + ${
                                mk.dx || 0
                              }px), calc(-50% + ${mk.dy || 0}px))${
                                mk.rotate ? ` rotate(${mk.rotate}deg)` : ""
                              }`,
                            }
                      }
                      bgClass="text-label-invert group-hover:text-label transition-colors"
                      textClass="italic text-[14px] text-label group-hover:text-label-invert transition-colors"
                      aria-label={`${it.ariaLabel} (Marker)`}
                      role="button"
                      tabIndex={0}
                      onClick={() => onOpen?.(it.key)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          onOpen?.(it.key);
                        }
                      }}
                    />
                  )}
                </div>
              </Wrapper>
            );
          }

          return (
            <Wrapper key={it.key}>
              <button
                type="button"
                aria-label={it.ariaLabel}
                onClick={() => onOpen?.(it.key)}
                className="block"
                style={{ width: `${it.width}px` }}
              >
                <DotLottieReact
                  src={it.src}
                  autoplay={it.autoplay ?? true}
                  loop={it.loop ?? true}
                  className="w-full h-auto"
                />
              </button>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
