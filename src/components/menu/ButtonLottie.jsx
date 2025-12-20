import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef, useState } from "react";

export default function ButtonLottie({ open, onToggle, onAnimationDone }) {
  const playerRef = useRef(null);
  const rafIdRef = useRef(0);
  const timeoutIdRef = useRef(null);

  const [ready, setReady] = useState(false);
  const [animating, setAnimating] = useState(false);

  const openRef = useRef(open);
  const animatingRef = useRef(animating);

  useEffect(() => {
    openRef.current = open;

    const p = playerRef.current;
    if (!ready || !p) return;

    // 메뉴가 외부에서 닫힌 경우 (패널에서 onClose만 호출한 경우 등)
    if (!open && !animatingRef.current) {
      stopWatch(); // 혹시 돌고 있는 requestAnimationFrame 있으면 정지
      p.stop?.(); // 애니메이션 멈추고
      p.setDirection?.(1);
      p.setFrame?.(0); // 첫 프레임으로 초기화
      setAnimating(false);
    }
  }, [open, ready]);

  useEffect(() => {
    animatingRef.current = animating;
  }, [animating]);

  const stopWatch = () => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = 0;
    }
  };

  const clearSafetyTimeout = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
  };

  const startWatch = (fn) => {
    stopWatch();
    const loop = () => {
      if (fn() === true) return;
      rafIdRef.current = requestAnimationFrame(loop);
    };
    rafIdRef.current = requestAnimationFrame(loop);
  };

  useEffect(
    () => () => {
      stopWatch();
      clearSafetyTimeout();
    },
    []
  );

  const handleRef = (instance) => {
    if (!instance) return;
    playerRef.current = instance;
    instance.setLoop?.(false);
    instance.stop?.();
    setReady(true);
  };

  useEffect(() => {
    const p = playerRef.current;
    if (!ready || !p) return;

    const onComplete = () => {
      if (!animatingRef.current || !openRef.current) return;
      p.pause?.();
      const total = p.getDuration?.(true);
      if (typeof total === "number") p.setFrame?.(Math.max(0, total - 1));
      setAnimating(false);
      onAnimationDone?.();
    };

    p.addEventListener?.("complete", onComplete);
    return () => p.removeEventListener?.("complete", onComplete);
  }, [ready, onAnimationDone]);

  const manualReverse = (p) => {
    const total =
      typeof p.getDuration?.(true) === "number" ? p.getDuration(true) : 120;
    let curr = Math.min(p.getCurrentFrame?.() ?? total - 1, total - 1);
    let frameCount = 0;
    const maxFrames = 100; // 안전장치: 최대 100프레임
    startWatch(() => {
      curr -= 3; // 속도를 2에서 3으로 증가
      frameCount++;

      // 안전장치: 너무 오래 실행되면 강제 종료
      if (frameCount > maxFrames || curr <= 0) {
        p.setFrame?.(0);
        p.pause?.();
        setAnimating(false);
        onAnimationDone?.();
        return true;
      }
      p.setFrame?.(curr);
      return false;
    });
  };

  const handleClick = () => {
    if (!ready) return;

    const p = playerRef.current;
    if (!p) return;

    // 강제로 이전 애니메이션 정리 (stuck 방지)
    stopWatch();
    clearSafetyTimeout();

    const wasOpen = openRef.current;
    setAnimating(true);
    onToggle?.();

    if (!wasOpen) {
      // 열 때: 정방향 재생
      const total =
        typeof p.getDuration?.(true) === "number"
          ? p.getDuration(true)
          : undefined;
      if (typeof total === "number") p.setSegment?.(0, total - 1);
      p.setLoop?.(false);
      p.setDirection?.(1);
      p.setSpeed?.(1);
      p.play?.();

      // 안전장치: 1초 후에도 완료 안 되면 강제 완료
      timeoutIdRef.current = setTimeout(() => {
        if (animatingRef.current && openRef.current) {
          p.pause?.();
          const t = p.getDuration?.(true);
          if (typeof t === "number") p.setFrame?.(Math.max(0, t - 1));
          setAnimating(false);
          onAnimationDone?.();
        }
      }, 1000);
    } else {
      // 닫을 때: manualReverse로 역재생
      p.stop?.();
      const total =
        typeof p.getDuration?.(true) === "number" ? p.getDuration(true) : 120;
      const last = Math.max(0, total - 1);
      p.setFrame?.(last);
      manualReverse(p);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={open ? "Close menu" : "Open menu"}
      className="cursor-pointer py-3 w-[45px] h-[45px] inline-flex items-center justify-center"
    >
      <DotLottieReact
        src={import.meta.env.BASE_URL + "lottie/MenuIcon.lottie"}
        autoplay={false}
        loop={false}
        className="w-full h-full"
        dotLottieRefCallback={handleRef}
      />
    </button>
  );
}
