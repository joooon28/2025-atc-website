import MainFrame from "../../assets/main/MainFrame.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function MainVisual({ onOpen }) {
  const lottieItems = [
    {
      key: "Arrow",
      src: "/lottie/MainInteraction/Arrow.lottie",
      top: 31.9,
      left: 60.3,
      width: 75,
      rotate: 0,
      ariaLabel: "About 이동",
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
      key: "ArrowCurved",
      src: "/lottie/MainInteraction/ArrowCurved.lottie",
      top: 92,
      left: 80.8,
      width: 200,
      rotate: 0,
      ariaLabel: "Documentary 이동",
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
      key: "Zigzag2",
      src: "/lottie/MainInteraction/Zigzag2.lottie",
      top: 88.6,
      left: 36,
      width: 274,
      rotate: 0,
      ariaLabel: "??? 이동",
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
      key: "Zigzag",
      src: "/lottie/MainInteraction/Zigzag.lottie",
      top: 91.5,
      left: 83.3,
      width: 475,
      rotate: 0,
      ariaLabel: "Gallery 이동",
      autoplay: true,
      loop: true,
      hitbox: {
        width: 100,
        height: 240,
        offsetX: 50,
        offsetY: 120,
      },
    },
  ];

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
          className="block w-[1206px] h-auto"
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

          if (it.hitbox) {
            const {
              width: vw,
              height: vh,
              offsetX = 0,
              offsetY = 0,
            } = it.hitbox;
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
                    className="
                      absolute top-1/2 left-1/2
                      -translate-x-1/2 -translate-y-1/2
                      bg-transparent
                    "
                    style={{
                      width: `${vw}px`,
                      height: `${vh}px`,
                      transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`,
                      cursor: "pointer",
                    }}
                  />
                </div>
              </Wrapper>
            );
          }

          // 기본(그 외 아이템): 버튼이 곧 시각(기존 방식)
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
