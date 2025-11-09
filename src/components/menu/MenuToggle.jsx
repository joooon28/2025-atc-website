import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import MenuPanel from "./MenuPanel";
import ButtonLottie from "./ButtonLottie";

export default function MenuToggle() {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleToggle = () => {
    if (animating) return;
    setAnimating(true);
    setOpen((v) => !v);
  };

  const handleAnimationDone = () => setAnimating(false);

  return (
    <div className="relative">
      <div
        className={[
          "transition-opacity duration-500 ease-in-out",
          open ? "opacity-0 pointer-events-none" : "opacity-100",
        ].join(" ")}
        aria-hidden={open}
      >
        <MenuButton />
      </div>
      
      <div
        className={[
          "absolute inset-x-0 top-0 z-[50]",
          "transition-opacity duration-500 ease-in-out",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <MenuPanel onClose={handleToggle} />
      </div>
      
      <div className="absolute top-0 right-0 z-[60]">
        <ButtonLottie
          open={open}
          onToggle={handleToggle}
          onAnimationDone={handleAnimationDone}
        />
      </div>
    </div>
  );
}