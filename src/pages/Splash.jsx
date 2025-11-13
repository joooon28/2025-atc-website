import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const COLOR_THEMES = [
  { bg: '#D5B69B', text: '#362C11' },
  { bg: '#F8F8F7', text: '#362C11' },
  { bg: '#362C11', text: '#D9EAD8' },
  { bg: '#F3F3EC', text: '#9EB7A2' },
];

const ENTRY_ANIMATION_DURATION = 600;
const EXIT_ANIMATION_DURATION = 900;
const TOTAL_SPLASH_TIME = 3000;

export default function Splash() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTheme, setCurrentTheme] = useState(COLOR_THEMES[0]);
  
  const [isReady, setIsReady] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * COLOR_THEMES.length);
    setCurrentTheme(COLOR_THEMES[randomIndex]);
    
    const queryParams = new URLSearchParams(location.search);
    const redirectPath = queryParams.get('redirect') || '/';

    const entryTimer = setTimeout(() => setIsReady(true), 10);
    const exitTimer = setTimeout(() => setIsHiding(true), TOTAL_SPLASH_TIME - EXIT_ANIMATION_DURATION);
    const navigateTimer = setTimeout(() => navigate(redirectPath, { replace: true }), TOTAL_SPLASH_TIME);

    return () => {
      clearTimeout(entryTimer);
      clearTimeout(exitTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate, location.search]);

  return (
    <div
      className={`
        max-tablet:py-40 max-mobile:px-10 max-mobile:py-20 flex flex-col items-center min-h-svh py-[160px] fixed inset-0 z-[100]
        transition-transform
        ${isHiding ? 'origin-top' : 'origin-bottom'}
        ${!isReady || isHiding ? 'scale-y-0' : 'scale-y-100'}
      `}
      style={{ 
        backgroundColor: currentTheme.bg,
        transitionDuration: `${isHiding ? EXIT_ANIMATION_DURATION : ENTRY_ANIMATION_DURATION}ms`,
        transitionTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
      }}
    >
      <p 
        className="max-tablet:text-[24px] max-mobile:text-[16px] font-[400] text-[40px] text-center" 
        style={{ color: currentTheme.text }}
      >
        2025
        <br />
        Art & Technology Conference
        <br />
        울퉁불퉁하게 말아리
      </p>
      <div className="flex-grow" />

      <p 
        className="max-mobile:text-[14px] font-[400] text-sm text-center" 
        style={{ color: currentTheme.text }}
      >
        11.20 — 11.23
        <br />
        서울특별시 마포구 백범로 35
        <br className="min-tablet:hidden" /> 
        {" "}서강대학교 하비에르관(X관)
      </p>
    </div>
  );
}
