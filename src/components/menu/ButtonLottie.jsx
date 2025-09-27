import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef, useState } from "react";

export default function ButtonLottie({ open, onToggle, onAnimationDone }) {
  const playerRef = useRef(null);
  const rafIdRef = useRef(0);

  const [ready, setReady] = useState(false);
  const [animating, setAnimating] = useState(false);

  const openRef = useRef(open);
  const animatingRef = useRef(animating);
  useEffect(() => {
    openRef.current = open;
  }, [open]);
  useEffect(() => {
    animatingRef.current = animating;
  }, [animating]);

  const stopWatch = () => cancelAnimationFrame(rafIdRef.current);
  const startWatch = (fn) => {
    stopWatch();
    const loop = () => {
      if (fn() === true) return;
      rafIdRef.current = requestAnimationFrame(loop);
    };
    rafIdRef.current = requestAnimationFrame(loop);
  };
  useEffect(() => () => stopWatch(), []);

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
    startWatch(() => {
      curr -= 2;
      if (curr <= 0) {
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
    if (!ready || animatingRef.current) return;
    const p = playerRef.current;
    if (!p) return;

    const wasOpen = openRef.current;
    setAnimating(true);
    onToggle?.();

    if (!wasOpen) {
      const total =
        typeof p.getDuration?.(true) === "number"
          ? p.getDuration(true)
          : undefined;
      if (typeof total === "number") p.setSegment?.(0, total - 1); // 세그먼트 보장
      p.setLoop?.(false);
      p.setDirection?.(1);
      p.setSpeed?.(1);
      p.play?.();
    } else {
      const CloseSpeed = 0.1;

      const total =
        typeof p.getDuration?.(true) === "number"
          ? p.getDuration(true)
          : undefined;
      if (typeof total === "number") {
        const last = Math.max(0, total - 1);
        p.setSegment?.(0, last);
        p.setFrame?.(last);
      }

      p.setLoop?.(false);
      if (p.setDirection) {
        p.setDirection(-1);
        p.setSpeed?.(CloseSpeed);
      } else {
        p.setSpeed?.(-CloseSpeed);
      }
      p.play?.();

      let last = p.getCurrentFrame?.() ?? 0;
      let stagnant = 0;
      startWatch(() => {
        const curr = p.getCurrentFrame?.() ?? 0;

        if (curr <= 0) {
          p.pause?.();
          p.setFrame?.(0);
          setAnimating(false);
          onAnimationDone?.();
          return true;
        }

        if (curr >= last - 0.5) {
          stagnant++;
          if (stagnant > 6) {
            manualReverse(p);
            return true;
          }
        } else {
          stagnant = 0;
        }

        last = curr;
        return false;
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={open ? "Close menu" : "Open menu"}
      className="p-3 w-[45px] h-[45px] inline-flex items-center justify-center"
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
