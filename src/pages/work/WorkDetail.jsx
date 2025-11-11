import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { allArtworkData } from "../../data/work/WorkDetailArtistInfo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MenuToggle from "../../components/menu/MenuToggle";

const GoBackIcon = "/lottie/WorkDetailIcon/go_back.svg";
const TopIcon = "/lottie/WorkDetailIcon/top.svg";
const LinkPlaceholderIcon = "/lottie/WorkDetailIcon/WorkDetail_link.svg";

const EmailIcon = "https://placehold.co/18x18/1e1e1e/ffffff?text=E";
const InstagramIcon = "https://placehold.co/18x18/1e1e1e/ffffff?text=I";
const LinkedInIcon = "https://placehold.co/18x18/1e1e1e/ffffff?text=L";

const getDefaultArtwork = () => allArtworkData.art001;

const fontMap = {
  medium: "font-medium",
  italic: "italic font-normal",
  text: "font-[450]",
  textItalic: "italic font-normal",
  semibold: "font-semibold",
  semiboldItalic: "italic font-semibold",
};

const getVimeoEmbedUrl = (videoSrc) => {
  if (!videoSrc || !videoSrc.includes("vimeo.com")) return null;

  try {
    const urlObj = new URL(videoSrc);
    let videoId = urlObj.pathname.split("/").pop();
    if (videoId && !isNaN(videoId)) {
      return `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&badge=0`;
    }
  } catch (e) {
    console.error("Vimeo URL parsing error:", e);
  }

  return null;
};

const StickyTitle = React.memo(({ data }) => {
  const titleKr = data.titleKr.trim();
  const titleEn = data.titleEn.trim();

  if (!titleKr && !titleEn) return null;

  return (
    <p id="Sticky-Title-Combined">
      {titleKr && (
        <span
          className={`${fontMap.medium} text-[14px] leading-none tracking-normal`}
        >
          {titleKr}
        </span>
      )}
      {titleKr && titleEn && " "}
      {titleEn && (
        <span
          className={`${fontMap.italic} text-[14px] leading-none tracking-normal`}
        >
          {titleEn}
        </span>
      )}
    </p>
  );
});

const StickyArtist = React.memo(({ data }) => {
  const artistKr = data.artistKr.trim();
  const artistEn = data.artistEn.trim();

  if (!artistKr && !artistEn) return null;

  return (
    <p id="Sticky-Artist-Combined">
      {artistKr && (
        <span
          className={`${fontMap.medium} text-[14px] leading-none tracking-normal`}
        >
          {artistKr}
        </span>
      )}
      {artistKr && artistEn && " "}
      {artistEn && (
        <span
          className={`${fontMap.italic} text-[14px] leading-none tracking-normal`}
        >
          {artistEn}
        </span>
      )}
    </p>
  );
});

const ArtistDetailInfo = ({ artistsDetail }) => {
  if (!artistsDetail || artistsDetail.length === 0) return null;

  const renderLinkIcon = (url, icon, type) => {
    let finalUrl = url;

    if (type === "email" || type === "gmail") {
      if (finalUrl && !finalUrl.startsWith('mailto:')) {
        finalUrl = `mailto:${finalUrl}`;
      }
    }

    return finalUrl ? (
      <a
        key={type}
        href={finalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mr-2"
      >
        <img src={icon} alt={`${type} icon`} className="w-[18px] h-[18px]" />
      </a>
    ) : null;
  };

  return (
    <div className="Artist-Detail-Info w-full flex flex-wrap gap-x-10 gap-y-5">
      {artistsDetail.map((artist, index) => (
        <div key={index} className="Artist-Card w-[calc(50%-20px)]">
          {artist.kr && (
            <p
              className={`${fontMap.semibold} font-[500] text-[14px] leading-snug tracking-normal mb-0.5`}
            >
              {artist.kr}
            </p>
          )}
          {artist.en && (
            <p
              className={`${fontMap.italic} font-[400] text-[14px] leading-snug tracking-normal mb-1.5`}
            >
              {artist.en}
            </p>
          )}
          <div className="flex items-center">
            {renderLinkIcon(artist.links.email || artist.links.gmail, EmailIcon, "email")}
            {renderLinkIcon(artist.links.instagram, InstagramIcon, "instagram")}
            {renderLinkIcon(artist.links.linkedin, LinkedInIcon, "linkedin")}
          </div>
        </div>
      ))}
    </div>
  );
};

// 5초마다 새로운 Workdetail로 이동
const allIds = Object.keys(allArtworkData);
const pickNextRandomId = (excludeId) => {
  const pool = allIds.filter((x) => x !== excludeId);
  return pool[Math.floor(Math.random() * pool.length)];
};

export default function WorkDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    const params = new URLSearchParams(location.search);
    const autoplay = params.get("autoplay") === "1";
    if (!autoplay) return;

    const interval = setInterval(() => {
      const next = pickNextRandomId(id);
      navigate(`/work/${next}?from=gallery&autoplay=1`, { replace: true });
    }, 5000);

    return () => clearInterval(interval);
  }, [id, location.search, navigate]);

  const initialData = allArtworkData[id] || getDefaultArtwork();
  const [artwork, setArtwork] = useState(initialData);
  const [currentLanguage, setCurrentLanguage] = useState("kr");
  const [isButtonListActive, setIsButtonListActive] = useState(false);
  const [isStickyHeaderActive, setIsStickyHeaderActive] = useState(false);

  const stickyInfoRef = useRef(null);
  const topBackButtonRef = useRef(null);
  const firstSectionRef = useRef(null);
  const mainImgContainerRef = useRef(null);

  const HEADER_OFFSET = 40;
  const HEADER_COMPONENT_HEIGHT = 97;
  const TOTAL_FIXED_HEADER_HEIGHT = HEADER_OFFSET + HEADER_COMPONENT_HEIGHT;
  const TARGET_SCROLL_POINT = 400;
  const BUTTON_LIST_ACTIVATION_POINT = 137;

  const getQueryParam = useCallback(
    (param) => {
      const urlParams = new URLSearchParams(location.search);
      return urlParams.get(param);
    },
    [location.search]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const data = allArtworkData[id] || getDefaultArtwork();
    setArtwork(data);
    setCurrentLanguage("kr");
    setIsStickyHeaderActive(false);
    setIsButtonListActive(false);

    if (data) {
      document.title = `${data.titleKr || data.titleEn} | Work-Detail`;
    }
  }, [id]);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (!stickyInfoRef.current) return;

      const stickyElementStartPos = stickyInfoRef.current.offsetTop;
      const headerActivationScrollPoint =
        stickyElementStartPos - TOTAL_FIXED_HEADER_HEIGHT;

      const scrollY = window.scrollY;

      if (window.innerWidth >= 640) {
        
        if (scrollY >= BUTTON_LIST_ACTIVATION_POINT) {
          setIsButtonListActive(true);
        } else {
          setIsButtonListActive(false);
        }

        if (scrollY >= TARGET_SCROLL_POINT) {
          setIsStickyHeaderActive(true); 
        } else {
          setIsStickyHeaderActive(false);
        }

      } else {
        setIsButtonListActive(false);

        if (scrollY >= headerActivationScrollPoint) {
          setIsStickyHeaderActive(true);
        } else {
          setIsStickyHeaderActive(false);
        }
      }
    };

    window.addEventListener("scroll", checkScrollPosition);
    const timeoutId = setTimeout(checkScrollPosition, 0);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, [artwork, TOTAL_FIXED_HEADER_HEIGHT, TARGET_SCROLL_POINT, BUTTON_LIST_ACTIVATION_POINT]); // 🌟 의존성 배열에 새 상수 추가

  const handleGoBack = useCallback(() => {
    const fromView = getQueryParam("from");

    if (fromView === "makers") {
      navigate(`/work?view=makers`);
    } else if (fromView === "gallery") {
      navigate(`/work?view=gallery`);
    } else {
      navigate(-1);
    }
  }, [getQueryParam, navigate]);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!artwork) {
    return (
      <div className="text-label min-h-screen bg-white">
        <Header />
        <main className="w-[calc(100%-40px)] sm:w-[calc(100%-80px)] mx-auto pt-[137px] text-center">
          <p className="mt-20">작품을 찾을 수 없습니다.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const currentCommentary = artwork.commentary[currentLanguage];
  const displayTitleKr = artwork.titleKr.trim() || null;
  const displayTitleEn = artwork.titleEn.trim() || null;
  const displayLocation = artwork.location.trim() || null;

  const vimeoEmbedUrl = getVimeoEmbedUrl(artwork.videoSrc);

  const displayLinks = artwork.links;

  const p1Class = `${fontMap.semibold} font-[600] text-[15px] leading-[145%] tracking-[-0.5%]`;
  const pBodyKrClass = `${fontMap.text} font-[450] text-[15px] leading-[180%] tracking-[-10%]`;
  const pBodyEnClass = `${fontMap.text} font-[450] text-[15px] leading-[145%] tracking-[-0.5%]`;

  const renderCommentaryBody = () => {
    if (!currentCommentary) return null;

    const { p1, ...bodyParagraphs } = currentCommentary;

    const paragraphKeys = Object.keys(bodyParagraphs)
      .filter(key => key.startsWith('p') && key !== 'p1')
      .sort((a, b) => parseInt(a.substring(1)) - parseInt(b.substring(1)));

    const bodyClass = currentLanguage === 'kr' ? pBodyKrClass : pBodyEnClass;

    return (
      <div className="Commentary-Body flex flex-col gap-[20px]">
        {paragraphKeys.map((key) => {
          const text = bodyParagraphs[key];
          if (text) {
            const htmlContent = text.replace(/\n/g, '<br/>');

            return (
              <p
                key={key}
                className={`commentary-paragraph ${bodyClass}`}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <div className="text-label min-h-screen">
      <div className="fixed top-0 left-0 right-0 h-[40px] z-[10000] bg-white"></div>

      <div
        className={`max-[701px]:hidden fixed top-[40px] left-0 right-0 h-[97px] z-[10000] ${
          isStickyHeaderActive ? "bg-white" : "bg-transparent"
        }`}
      >
        <Header />
      </div>
      
      <div className="p-5 fixed top-0 left-0 right-0 z-[10000] min-[701px]:hidden">
        <div className="relative ">
          <MenuToggle />
        </div>
      </div>

      <div
        ref={firstSectionRef}
        className="First-Section w-[calc(100%-40px)] md:w-[calc(100%-80px)] mx-auto text-center relative flex flex-col items-center justify-between gap-6 pb-10 pt-[117px] sm:pt-[137px] z-10"
      >
        <button
          onClick={handleGoBack}
          id="goBackTop"
          ref={topBackButtonRef}
          className={`go_back bg-white border border-label py-3 px-6 text-center rounded-[60px] absolute top-[117px] sm:top-[137px] left-0 cursor-pointer text-base leading-none tracking-normal hidden sm:inline-flex items-center`}
        >
          <img
            src={GoBackIcon}
            alt="뒤로 가기"
            className="mr-3 transform translate-y-px"
          />
          Back
        </button>

        <div className="Work-Title-Info flex flex-col items-center order-1 sm:order-3">
          <div className="Work-Title flex flex-col items-center gap-1.5 mb-5">
            {displayTitleKr && (
              <p
                id="Work-Title-Kr"
                className={`${fontMap.medium} text-[24px] leading-none tracking-normal`}
              >
                {displayTitleKr}
              </p>
            )}
            {displayTitleEn && (
              <p
                id="Work-Title-En"
                className={`${fontMap.medium} italic text-[24px] leading-none tracking-normal`}
              >
                {displayTitleEn}
              </p>
            )}
          </div>

          {displayLocation && (
            <p
              id="Work-Location"
              className={`${fontMap.text} font-[450] text-sm leading-none tracking-normal`}
            >
              {displayLocation}
            </p>
          )}
        </div>

        <div
          id="Work-Main-Img-Container"
          ref={mainImgContainerRef}
          className={`order-2 sm:order-1 max-w-[200px] w-full 
                        max-[375px]:w-screen max-[375px]:!max-w-none max-[375px]:mx-0 max-[375px]:-ml-5`}
        >
          <img
            src={artwork.imageMainSrc}
            alt={displayTitleKr || displayTitleEn}
            id="Work-Main-Img"
            className={`mt-0 object-cover 
                            **max-[375px]:!max-w-none max-[375px]:!max-h-none max-[375px]:w-full max-[375px]:h-auto** w-[200px] h-[267px]`}
          />
        </div>
      </div>

      <div className="Second-Section w-[calc(100%-40px)] md:w-[calc(100%-80px)] mx-auto">
        <div className="fixed top-0 left-0 right-0 max-[701px]:h-[85px] max-[701px]:bg-white min-[701px]:h-0 z-[9980] min-[701px]:hidden"></div>

        <div
          ref={stickyInfoRef}
          className={`Work-Detail-Sticky-Info w-full sticky max-[701px]:top-[85px] min-[701px]:top-[137px] py-2 z-[10010] 
                        max-[701px]:bg-white 
                        min-[701px]:bg-white 
                        flex justify-between items-center border-t border-b border-label mb-10 relative`}
        >
          <div className="absolute top-[-0.5px] left-0 w-[5px] h-[5px] bg-label rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-[-0.5px] right-0 w-[5px] h-[5px] bg-label rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-[-0.5px] left-0 w-[5px] h-[5px] bg-label rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-[-0.5px] right-0 w-[5px] h-[5px] bg-label rounded-full transform translate-x-1/2 translate-y-1/2"></div>

          <StickyTitle data={artwork} />
          <StickyArtist data={artwork} />
        </div>

        <div className="Work-Detail-Info w-full flex flex-col min-[701px]:flex-row justify-between gap-10">
          <div className="Work-Detail-Visual w-full min-[701px]:w-[calc(50%-20px)] min-[701px]:flex-shrink-0 order-2 min-[701px]:order-none">
            {vimeoEmbedUrl ? (
              <div className="Work-Detail-Video w-full h-auto border border-label box-border mb-5 relative aspect-video">
                <iframe
                  src={vimeoEmbedUrl}
                  className="w-full h-full absolute top-0 left-0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={displayTitleKr || displayTitleEn}
                ></iframe>
              </div>
            ) : null}

            <div className="Work-Detail-Img">
              <img
                src={artwork.imageDetailSrc}
                alt={displayTitleKr || displayTitleEn}
                id="Work-Detail-Img"
                className="object-contain w-full h-full"
                style={{ marginTop: vimeoEmbedUrl ? "0" : "0" }}
              />
            </div>
          </div>

          <div className="Work-Detail-Text w-full min-[701px]:w-[calc(50%-20px)] min-[701px]:flex-shrink-0 order-1 min-[701px]:order-none self-start mb-10 min-[701px]:mb-0 z-[990] min-[701px]:sticky min-[701px]:top-[217px]">
            <div className="Work-Detail-Commentary flex flex-col justify-between gap-10">
              <div className="Work-Detail-Commentary-Text flex flex-col justify-between gap-5">
                {currentCommentary.p1 && (
                  <p
                    id="commentary-p1"
                    className={p1Class}
                  >
                    {currentCommentary.p1}
                  </p>
                )}
                
                {renderCommentaryBody()}

              </div>

              <div className="Go-To-Link flex gap-5" id="Go-To-Link-Container">
                {displayLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${fontMap.italic} text-sm inline-flex items-center w-auto font-normal leading-none tracking-normal underline decoration-solid underline-offset-px decoration-1 decoration-skip-ink-true`}
                  >
                    {link.text}
                    <img
                      src={LinkPlaceholderIcon}
                      alt="아이콘"
                      className="w-[18px] h-[18px] ml-1 transform translate-y-px"
                    />
                  </a>
                ))}
              </div>

              <ArtistDetailInfo artistsDetail={artwork.artistsDetail} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`button_list w-[calc(100%-80px)] fixed left-10 transition-all duration-300 overflow-hidden z-[9999] hidden sm:block ${
          isButtonListActive ? "bottom-10" : "bottom-[-50px]"
        }`}
      >
        <button
          onClick={handleGoBack}
          id="goBackBottom"
          className={`go_back button_list_go_back float-left bg-white border border-label py-3 px-6 text-center rounded-[60px] cursor-pointer text-base leading-none tracking-normal inline-flex items-center`}
        >
          <img
            src={GoBackIcon}
            alt="뒤로 가기 버튼"
            className="mr-3 w-4 h-4 transform translate-y-px"
          />
          Back
        </button>
        <button
          onClick={handleGoToTop}
          id="Top-Button"
          className="Top-Button w-12 h-12 rounded-full bg-white border border-label float-right ml-4 flex justify-center items-center cursor-pointer"
        >
          <img src={TopIcon} alt="위로 가기" className="w-5 h-5" />
        </button>
        <div className="Lang-Switch float-right flex border border-white rounded-[60px] overflow-hidden h-12 w-[123px]">
          <button
            onClick={() => setCurrentLanguage("kr")}
            id="Lang-Switch-Kr-Btn"
            className={`${
              fontMap.italic
            } Lang-Switch-Kr flex-1 py-3 px-0 border-none bg-label text-fill-invert text-base cursor-pointer transition-colors duration-200 flex justify-center items-center ${
              currentLanguage === "kr"
                ? "underline decoration-1 underline-offset-[5px]"
                : ""
            }`}
          >
            KR
          </button>
          <button
            onClick={() => setCurrentLanguage("en")}
            id="Lang-Switch-En-Btn"
            className={`${
              fontMap.italic
            } Lang-Switch-En flex-1 py-3 px-0 border-none bg-label text-fill-invert text-base cursor-pointer transition-colors duration-200 flex justify-center items-center ${
              currentLanguage === "en"
                ? "underline decoration-1 underline-offset-[5px]"
                : ""
            }`}
          >
            EN
          </button>
        </div>
      </div>

        <Footer />
    </div>
  );
}