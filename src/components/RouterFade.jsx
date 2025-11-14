import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/**
 * 라우트 변경 시 화면 전체를 1→0으로 페이드시키는 오버레이.
 * Outlet을 감싸지 않으며, pointer-events:none 이라 클릭 막지 않음.
 */
export default function RouteFadeOverlay() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const first = useRef(true);
  const raf1 = useRef(0);
  const raf2 = useRef(0);

  useEffect(() => {
    // 첫 렌더는 애니메이션 생략 (원하면 여기서도 페이드 걸 수 있음)
    if (first.current) {
      first.current = false;
      return;
    }
    // 1) 즉시 불투명(=덮기) → 2) 다음 프레임에 투명으로 전환(=보여주기)
    setShow(true);
    raf1.current = requestAnimationFrame(() => {
      raf2.current = requestAnimationFrame(() => setShow(false));
    });
    return () => {
      cancelAnimationFrame(raf1.current);
      cancelAnimationFrame(raf2.current);
    };
  }, [pathname]);

  return (
    <div
      aria-hidden
      className={[
        "fixed inset-0 z-[999] pointer-events-none",
        // 더 진하게 + 약간 흐림
        "bg-black/80 backdrop-blur-sm",
        // 더 긴 시간 + 더 부드러운 이징
        "motion-safe:transition-opacity motion-safe:duration-2000",
        "motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]",
        "will-change-[opacity]",
        "motion-reduce:hidden",
        show ? "opacity-100" : "opacity-0",
      ].join(" ")}
    />
  );
}
