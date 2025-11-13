import { useState, useEffect, useCallback } from "react";
import Staff from "../pages/archive/Staff"; 

export default function StaffSheetContainer({ isVisible, onClose }) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    let timeoutId;
    
    if (isVisible) {
      setShouldRender(true); 
      requestAnimationFrame(() => setSheetOpen(true));
      document.body.style.overflow = 'hidden';
    } else {
      setSheetOpen(false);
      
      timeoutId = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = 'unset';
      }, 500); 
    }
    
    return () => {
      clearTimeout(timeoutId);
      if (isVisible) {
          document.body.style.overflow = 'unset';
      }
    };
  }, [isVisible]);

  const handleSheetClose = useCallback(() => {
    onClose();
  }, [onClose]);


  if (!shouldRender && !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="close overlay"
        onClick={handleSheetClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
          sheetOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={` absolute inset-x-0 bottom-0 transition-transform duration-500 will-change-transform
          ${sheetOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="bg-mint-6 h-svh overflow-y-auto ">
          <Staff onClose={handleSheetClose} />
        </div>
      </div>
    </div>
  );
}