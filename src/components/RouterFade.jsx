import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function RouteFade() {
  const { pathname } = useLocation();
  const [entered, setEntered] = useState(false);
  const raf1 = useRef(0);
  const raf2 = useRef(0);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      setEntered(true);
      return;
    }

    setEntered(false);
    raf1.current = requestAnimationFrame(() => {
      raf2.current = requestAnimationFrame(() => setEntered(true));
    });
    return () => {
      cancelAnimationFrame(raf1.current);
      cancelAnimationFrame(raf2.current);
    };
  }, [pathname]);

  return (
    <div
      className={[
        "min-h-dvh",
        "transform-gpu",
        "motion-safe:transition-opacity motion-safe:duration-1000",
        "motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        "will-change-[opacity]",
        "motion-reduce:transition-none",
        entered ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      <Outlet />
    </div>
  );
}
