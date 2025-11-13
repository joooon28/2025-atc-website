import LogoBrown from "../../assets/LogoBrown.svg";
import { useNavigate, useLocation } from "react-router-dom";

export default function MenuPanel({ onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (targetPath) => {
    if (location.pathname === targetPath) {
      if (onClose) {
        onClose();
      }
      return;
    }
    
    navigate(targetPath);
    
    if (onClose) {
      onClose();
    }
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
        <MenuPanel />
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
