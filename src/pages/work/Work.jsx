import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  useLayoutEffect,
} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MenuToggle from "../../components/menu/MenuToggle";

import {
  initialArtworks,
  getLinkIcon,
  MakersLinkIconPlaceholder,
} from "../../data/work/WorkArtistInfo";

let cachedInitialArtworks = null;
let cachedInitialMakers = null;

const IconPlaceholder = "img/A-Z.svg";
const LinkIconPlaceholder = "img/go-to.svg";

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const useIsMobileOneLine = (maxWidth = 375) => {
  const [isMobileOneLine, setIsMobileOneLine] = useState(false);

  const checkWidth = useCallback(() => {
    setIsMobileOneLine(window.innerWidth <= maxWidth);
  }, [maxWidth]);

  useLayoutEffect(() => {
    checkWidth();
    const debouncedCheck = debounce(checkWidth, 100);
    window.addEventListener("resize", debouncedCheck);
    return () => window.removeEventListener("resize", debouncedCheck);
  }, [checkWidth]);

  return isMobileOneLine;
};

const shuffle = (array) => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const sortArtworksFn = (list, ascending, sortBy) => {
  return [...list].sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    const res = valA.localeCompare(valB, "ko", { sensitivity: "base" });
    return ascending ? res : -res;
  });
};

const sortMakersFn = (list, ascending) => {
  return [...list].sort((a, b) => {
    const valA = a.name;
    const valB = b.name;
    const res = valA.localeCompare(valB, "ko", { sensitivity: "base" });
    return ascending ? res : -res;
  });
};

const getUniqueMakersMap = (list) => {
  const grouped = {};
  list.forEach((work) => {
    if (!Array.isArray(work.makers)) return;
    const workInfo = { id: work.id, title: work.title, team: work.artist };

    work.makers.forEach((maker) => {
      if (!maker.name) return;
      const makerName = maker.name;

      if (!grouped[makerName]) {
        grouped[makerName] = {
          name: makerName,
          links: Array.isArray(maker.links) ? maker.links : [],
          works: [],
        };
      }
      if (!grouped[makerName].works.some((w) => w.id === work.id)) {
        grouped[makerName].works.push(workInfo);
      }
    });
  });

  Object.values(grouped).forEach((maker) => {
    maker.works = sortArtworksFn(maker.works, true, "title");
  });

  return grouped;
};

const groupArtworksByMaker = (list, ascending) => {
  const makersMap = getUniqueMakersMap(list);
  return sortMakersFn(Object.values(makersMap), ascending);
};

const shuffleMakers = (makerList) => {
  return shuffle(makerList);
};

const formatTitle = (title) => {
  if (typeof title !== "string" || title.trim().length === 0) {
    return (
      <span className="font-semibold text-[15px] leading-[145%] tracking-[-0.5%]">
        제목 없음
      </span>
    );
  }

  const trimmedTitle = title.trim();
  let finalKorText = trimmedTitle;
  let finalEngText = "";

  const hasKorean = /[가-힣]/.test(trimmedTitle);

  if (/[A-Za-z]/.test(trimmedTitle)) {
    const matches = trimmedTitle.match(
      /^([\s\S]*?[가-힣]+[\s\S]*?)\s+([A-Za-z].*)$/
    );

    if (matches && matches.length === 3) {
      finalKorText = matches[1].trim();
      finalEngText = matches[2].trim();
    } else {
      const firstLatinIndex = trimmedTitle.search(/[A-Za-z]/);
      if (firstLatinIndex !== -1) {
        finalKorText = trimmedTitle.substring(0, firstLatinIndex).trim();
        finalEngText = trimmedTitle.substring(firstLatinIndex).trim();
      }
    }

    if (finalKorText.length > 0 && finalEngText.length > 0) {
      if (!/[가-힣]/.test(finalKorText)) {
        if (!/[가-힣]/.test(trimmedTitle)) {
          finalKorText = "";
          finalEngText = trimmedTitle;
        }
      }
    } else if (!finalKorText && !finalEngText && !hasKorean) {
      finalKorText = "";
      finalEngText = trimmedTitle;
    }
  } else {
    finalKorText = trimmedTitle;
    finalEngText = "";
  }

  return (
    <>
      {finalKorText && (
        <span className="font-[500] text-[15px] leading-[145%] tracking-[-0.5%]">
          {finalKorText}
        </span>
      )}

      {finalKorText && finalEngText && <br />}

      {finalEngText && (
        <span
          className={`italic font-[500] text-[15px] leading-[145%] tracking-[-0.5%]`}
        >
          {finalEngText}
        </span>
      )}
    </>
  );
};

const formatArtistName = (artistName, isGallery = false) => {
  if (typeof artistName !== "string" || artistName.trim().length === 0) {
    return (
      <span className="Makers-Artist-Kr font-regular text-[14px]">N/A</span>
    );
  }

  const trimmedName = artistName.trim();
  const baseFontWeight = isGallery ? "font-regular" : "font-regular";

  const isMakersViewAndOnlyEnglish = !isGallery && !/[가-힣]/.test(trimmedName);

  if (isGallery && trimmedName.length >= 25) {
    let finalKorText = "";
    let finalEngText = "";

    const hasKorean = /[가-힣]/.test(trimmedName);

    if (/[A-Za-z]/.test(trimmedName)) {
      const matches = trimmedName.match(
        /^([\s\S]*?[가-힣]+[\s\S]*?)\s+([A-Za-z].*)$/
      );

      if (matches && matches.length === 3) {
        finalKorText = matches[1].trim();
        finalEngText = matches[2].trim();
      } else {
        const firstLatinIndex = trimmedName.search(/[A-Za-z]/);
        if (firstLatinIndex !== -1) {
          finalKorText = trimmedName.substring(0, firstLatinIndex).trim();
          finalEngText = trimmedName.substring(firstLatinIndex).trim();
        }
      }

      if (!finalKorText && !finalEngText) {
        finalKorText = hasKorean ? trimmedName : "";
        finalEngText = hasKorean ? "" : trimmedName;
      } else if (!finalKorText && hasKorean && trimmedName.length > 0) {
        finalKorText = trimmedName;
        finalEngText = "";
      } else if (!finalEngText && !hasKorean && trimmedName.length > 0) {
        finalKorText = "";
        finalEngText = trimmedName;
      }
    } else {
      finalKorText = trimmedName;
      finalEngText = "";
    }

    return (
      <>
        {finalKorText && (
          <span
            className={`Makers-Artist-Kr ${baseFontWeight} text-[14px] block mb-[-15px]`}
          >
            {finalKorText}
          </span>
        )}

        {finalKorText && finalEngText && <br />}

        {finalEngText && (
          <span
            className={`Makers-Artist-En italic ${baseFontWeight} text-[14px] leading-none`}
          >
            {finalEngText}
          </span>
        )}
      </>
    );
  }

  const parts = trimmedName.split(/([가-힣]+)/).filter((p) => p.length > 0);

  return parts.map((part, index) => {
    if (part.trim().length === 0)
      return <React.Fragment key={index}>{part}</React.Fragment>;

    if (/[가-힣]/.test(part)) {
      return (
        <span
          key={index}
          className={`Makers-Artist-Kr ${
            isGallery ? "font-regular" : "font-[500]"
          } text-[14px]`}
        >
          {part}
        </span>
      );
    } else {
      const englishFontWeight = isMakersViewAndOnlyEnglish
        ? "font-[500]"
        : baseFontWeight;
      return (
        <span
          key={index}
          className={`Makers-Artist-En italic ${englishFontWeight} text-[14px] leading-none`}
        >
          {part}
        </span>
      );
    }
  });
};

const formatTitleForMakers = (title, isMobileOneLine) => {
  if (typeof title !== "string" || title.trim().length === 0) {
    return (
      <span className="Makers-Title-Kr font-medium text-[14px] leading-none">
        제목 없음
      </span>
    );
  }

  const trimmedTitle = title.trim();

  let finalKorText = trimmedTitle;
  let finalEngText = "";

  const hasKorean = /[가-힣]/.test(trimmedTitle);
  const isOnlyEnglish = !hasKorean && /[A-Za-z0-9]/.test(trimmedTitle);

  if (/[A-Za-z]/.test(trimmedTitle)) {
    const matches = trimmedTitle.match(
      /^([\s\S]*?[가-힣]+[\s\S]*?)\s+([A-Za-z].*)$/
    );

    if (matches && matches.length === 3) {
      finalKorText = matches[1].trim();
      finalEngText = matches[2].trim();
    } else {
      const firstLatinIndex = trimmedTitle.search(/[A-Za-z]/);
      if (firstLatinIndex !== -1) {
        finalKorText = trimmedTitle.substring(0, firstLatinIndex).trim();
        finalEngText = trimmedTitle.substring(firstLatinIndex).trim();
      }
    }

    if (finalKorText.length > 0 && finalEngText.length > 0) {
      if (!/[가-힣]/.test(finalKorText)) {
        if (!/[가-힣]/.test(trimmedTitle)) {
          finalKorText = "";
          finalEngText = trimmedTitle;
        }
      }
    } else if (!finalKorText && !finalEngText && !hasKorean) {
      finalKorText = "";
      finalEngText = trimmedTitle;
    }
  } else {
    finalKorText = trimmedTitle;
    finalEngText = "";
  }

  const englishFontWeight = isOnlyEnglish ? "font-[500]" : "font-normal";
  const englishItalic = "italic";

  const korElement = finalKorText ? (
    <span
      key="kor"
      className="Makers-Title-Kr font-[500] text-[14px] leading-[20px] mr-[6px]"
    >
      {finalKorText}
    </span>
  ) : null;

  const engElement = finalEngText ? (
    <span
      key="en"
      className={`Makers-Title-En ${englishItalic} ${englishFontWeight} text-[14px] leading-[24px] whitespace-nowrap`}
    >
      {finalEngText}
    </span>
  ) : null;

  if (korElement && engElement) {
    return (
      <>
        {korElement}
        {engElement}
      </>
    );
  } else if (korElement) {
    return korElement;
  } else if (engElement) {
    return engElement;
  } else {
    return (
      <span className="Makers-Title-Kr font-[500] text-[14px] leading-none">
        {trimmedTitle}
      </span>
    );
  }
};

const ArtworkCard = React.memo(({ art }) => {
  return (
    <div className="Artwork flex flex-col box-border">
      <Link
        to={`/work/${art.id}?from=gallery`}
        className="group flex flex-col w-full gap-4 text-label"
      >
        <div className="relative w-full pt-[136%]">
          <img
            src={art.image}
            alt={art.title}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-none transition-all duration-600 ease-out transform group-hover:rounded-[200px] group-hover:scale-[0.93]"
          />
        </div>
        <div className="title font-regular text-[15px] leading-[145%] tracking-[-0.5%] whitespace-normal">
          {formatTitle(art.title)}
        </div>
        <div className="artist font-regular text-[14px] leading-[145%] tracking-normal underline underline-offset-[4.5px]">
          {formatArtistName(art.artist, true)}
        </div>
        <div className="description font-regular text-[14px] leading-[145%] tracking-normal whitespace-normal">
          {art.description}
        </div>
      </Link>
    </div>
  );
});

const MakerWorkItem = ({ art, index }) => {
  return (
    <div
      key={art.id}
      className={`Maker-Work-Info font-regular text-left flex-grow-0 w-full overflow-hidden ${
        index > 0 ? "mt-[4px]" : ""
      } text-[14px] leading-none`}
    >
      <Link
        to={`/work/${art.id}?from=makers`}
        className={`hover:opacity-30 cursor-pointer`}
        style={{
          display: "block",
          whiteSpace: "normal",
          overflow: "visible",
          textOverflow: "clip",
        }}
      >
        {formatTitleForMakers(art.title, false)}
      </Link>
    </div>
  );
};

const MakerRow = React.memo(({ maker }) => {
  if (!maker || typeof maker.name !== "string" || !Array.isArray(maker.works)) {
    return null;
  }

  const sortedLinks = useMemo(() => {
    return [...maker.links].sort((a, b) => {
      if (a.type === "email" && b.type !== "email") {
        return -1;
      }
      if (a.type !== "email" && b.type === "email") {
        return 1;
      }

      if (a.type === "instagram" && b.type !== "instagram") {
        return -1;
      }
      if (a.type !== "instagram" && b.type === "instagram") {
        return 1;
      }

      return 0;
    });
  }, [maker.links]);

  return (
    <div
      className="Maker-Row flex flex-col min-mobile:flex-row py-[16px] border-b border-label relative before:content-[''] before:absolute before:bottom-[-3px] before:left-0 before:w-[5px] before:h-[5px] before:bg-label before:rounded-full before:-translate-x-1/2 
        after:content-[''] after:absolute after:bottom-[-3px] after:right-0 after:w-[5px] after:h-[5px] after:bg-label after:rounded-full after:translate-x-1/2"
    >
      <div className="Maker-Info flex items-center gap-3 flex-1 w-full min-mobile:w-1/2 font-medium text-base leading-none text-left pl-[20px]">
        <div className="Maker-Name cursor-default">
          {formatArtistName(maker.name, false)}
        </div>
        {sortedLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getLinkIcon(link)}
              alt={link.alt}
              className="w-4 h-4 align-baseline translate-y-[1px]"
            />
          </a>
        ))}
      </div>

      <div className="Maker-Works-List flex flex-col flex-1 w-full min-mobile:w-1/2 mt-10 min-mobile:mt-0 min-mobile:pl-5 pl-[20px]">
        {maker.works.map((art, index) => (
          <MakerWorkItem key={art.id} art={art} index={index} />
        ))}
      </div>
    </div>
  );
});

export default function Work() {
  const location = useLocation();
  const navigate = useNavigate();

  const getQueryParam = useCallback(
    (param) => {
      const urlParams = new URLSearchParams(location.search);
      return urlParams.get(param);
    },
    [location.search]
  );
  
  const getInitialRandomArtworks = () => {
    if (!cachedInitialArtworks) {
      cachedInitialArtworks = shuffle(initialArtworks);
    }
    return cachedInitialArtworks;
  };

  const getInitialRandomMakers = () => {
    if (!cachedInitialMakers) {
      const uniqueMakersMap = getUniqueMakersMap(initialArtworks);
      cachedInitialMakers = shuffleMakers(Object.values(uniqueMakersMap));
    }
    return cachedInitialMakers;
  };

  const initialView = getQueryParam("view") === "makers" ? "makers" : "gallery";

  const initialIsCurrentlySorted = initialView === "makers";
  const [isCurrentlySorted, setIsCurrentlySorted] = useState(
    initialIsCurrentlySorted
  );
  const [isAscending, setIsAscending] = useState(true);

  const [currentView, setCurrentView] = useState(initialView);

  const [randomArtworkList, setRandomArtworkList] = useState(getInitialRandomArtworks);
  const [randomMakerList, setRandomMakerList] = useState(getInitialRandomMakers);

  const [makerListKey, setMakerListKey] = useState(Math.random().toString());

  const initialSortedArtworks = useMemo(() => {
    if (initialView === "makers") {
      return groupArtworksByMaker(initialArtworks, true);
    }
    return randomArtworkList;
  }, [initialView, randomArtworkList]);

  const [sortedArtworks, setSortedArtworks] = useState(initialSortedArtworks);

  const sortArtworks = useCallback((list, ascending, sortBy) => {
    return sortArtworksFn(list, ascending, sortBy);
  }, []);

  const handleSwitchView = (mode) => {
    setCurrentView(mode);

    let newList;
    let newIsSorted;
    let newIsAscending = true;

    if (mode === "gallery") {
      newList = randomArtworkList;
      newIsSorted = false;
    } else {
      newList = groupArtworksByMaker(initialArtworks, true);
      newIsSorted = true;
    }

    setIsCurrentlySorted(newIsSorted);
    setIsAscending(newIsAscending);
    setSortedArtworks(newList);
    setMakerListKey(Math.random().toString());

    navigate(`?view=${mode}`, { replace: true });
  };

  const handleRandomize = () => {
    const newRandomList = shuffle(initialArtworks);
    cachedInitialArtworks = newRandomList; 
    setRandomArtworkList(newRandomList);

    const uniqueMakersMap = getUniqueMakersMap(initialArtworks);
    const allMakers = Object.values(uniqueMakersMap);
    const newRandomMakers = shuffleMakers(allMakers);
    cachedInitialMakers = newRandomMakers; 
    setRandomMakerList(newRandomMakers);

    setIsAscending(true);
    setIsCurrentlySorted(false);

    if (currentView === "makers") {
      setMakerListKey(Math.random().toString());
      setSortedArtworks(newRandomMakers);
    } else {
      setSortedArtworks(newRandomList);
    }

    navigate(`?view=${currentView}`, { replace: true });
  };

  const handleSort = () => {
    let newAscending;

    if (!isCurrentlySorted) {
      newAscending = true;
    } else {
      newAscending = !isAscending;
    }

    setIsCurrentlySorted(true);

    if (currentView === "gallery") {
      const sorted = sortArtworks(initialArtworks, newAscending, "title");
      setSortedArtworks(sorted);
    } else {
      const sortedMakers = groupArtworksByMaker(initialArtworks, newAscending);
      setSortedArtworks(sortedMakers);
    }

    setIsAscending(newAscending);
    setMakerListKey(Math.random().toString());

    navigate(`?view=${currentView}`, { replace: true });
  };

  const sortButtonText = isCurrentlySorted && isAscending ? "Z–A" : "A–Z";

  const makersList = currentView === "makers" ? sortedArtworks : [];
  const galleryList = currentView === "gallery" ? sortedArtworks : [];

  return (
    <div
      style={{ backgroundColor: "#F8F8F7" }}
      className="text-label min-h-screen"
    >
      <div className="max-tablet:hidden py-[40px] fixed top-0 left-0 right-0 z-[999] pt-10">
        <Header />
      </div>
      <div className="p-5 fixed top-0 left-0 right-0 z-[999] min-tablet:hidden">
        <div className="relative">
          <MenuToggle />
        </div>
      </div>

      <main className="pt-[120px] min-tablet:pt-[160px]">
        <div className="mx-5 lg:mx-10">
          <div className="Work-Detail mb-20">
            <p
              id="Work-Title"
              className="font-medium text-[40px] leading-[100%] mb-10"
            >
              Work
            </p>

            <div className="Work-Detail-Text flex flex-col xl:flex-row items-start justify-between gap-y-[20px]">
              <p className="w-full xl:w-[39.5%] font-regular text-[15px] leading-large tracking-tighter">
                각자의 고유한 감각에서 출발한 말하기는 울퉁불퉁한 궤적을 따라
                전시 공간으로 이어집니다. 미디어 아트, 게임, 웹, 애니메이션,
                퍼포먼스 등 형식에 제한을 두지 않은 실험적 시도들을 선보입니다.{" "}
                <span
                  onClick={() =>
                    navigate("/program/", {
                      state: { openPreviousId: "program4" },
                    })
                  }
                  className="underline cursor-pointer hover:opacity-70"
                >
                  다시 소개하기 워크숍
                </span>
                을 거치며 함께 만들어진 소개 텍스트와 함께 웹사이트에서도 전시작들을 만나보세요!
              </p>
              <p className="w-full xl:w-[39.5%] font-regular text-[15px] leading-regular tracking-regular">
                Each maker’s unique sensibility unfolds into the exhibition
                space, tracing an uneven trajectory of expression. The
                exhibition presents experimental works unrestricted by
                form—ranging from media art and games to web projects,
                animation, and performance. Explore the works on our website,
                accompanied by the collaboratively written introductions created
                through{" "}
                <span
                  onClick={() =>
                    navigate("/program/", {
                      state: { openPreviousId: "program4" },
                    })
                  }
                  className="underline cursor-pointer hover:opacity-70"
                >
                  the workshop
                </span>
                !
              </p>
              <a
                href="https://drive.google.com/file/d/1NKNTD1WekwNaXNd5H6l2rRXtcFXj4vyU/view"
                target="_blank"
                className="inline-flex gap-[4px] items-center w-auto font-regular text-base leading-regular tracking-tight underline decoration-solid decoration-1 underline-offset-[1px] relative z-50 hover:opacity-70"
              >
                전시 배치도 Exhibition Map
                <img
                  src="/lottie/WorkIcon/go_to.svg"
                  alt="바로가기 버튼"
                  className="w-[11px] h-[11px] ml-1 align-middle "
                />
              </a>
            </div>
          </div>

          <div className="WorkList-Button clear-both overflow-hidden mb-6 relative z-50">
            <div className="float-left flex gap-8 max-tablet:gap-[20px]">
              <button
                id="Randomize-btn"
                onClick={handleRandomize}
                className="border-none bg-transparent italic font-medium text-base leading-none tracking-normal inline-flex items-center gap-2.5 cursor-pointer"
              >
                <span className="hidden min-tablet:inline">Randomize</span>
                <img
                  src="/lottie/WorkIcon/Randomize.svg"
                  alt="랜덤 정렬 버튼"
                  className="w-[27px] h-[27px]"
                />
              </button>
              <button
                id="Sort-btn"
                onClick={handleSort}
                className={`border-none bg-transparent italic font-medium text-base leading-none tracking-normal inline-flex items-center gap-2.5 cursor-pointer 
                                    ${
                                      currentView === "makers" &&
                                      makersList.length > 0
                                        ? "opacity-100"
                                        : currentView === "gallery" &&
                                          sortedArtworks.length > 0
                                        ? "opacity-100"
                                        : "opacity-50 cursor-default"
                                    }`}
                disabled={currentView === "makers" && makersList.length === 0}
              >
                <span className="hidden min-tablet:inline">
                  {sortButtonText}
                </span>
                <img
                  src="/lottie/WorkIcon/A-Z.svg"
                  alt="정렬 버튼"
                  className="w-[23px] h-[23px]"
                />
              </button>
            </div>

            <div className="float-right flex gap-8 max-tablet:gap-[20px]">
              <button
                id="Gallery-btn"
                onClick={() => handleSwitchView("gallery")}
                className={`border-none bg-transparent font-medium italic text-base leading-none tracking-normal inline-flex items-center gap-2.5 cursor-pointer transition-opacity ${
                  currentView === "gallery" ? "opacity-100" : "opacity-50"
                }`}
              >
                <span className="hidden min-tablet:inline">Gallery</span>
                <img
                  src="/lottie/WorkIcon/Gallery.svg"
                  alt="갤러리 버튼"
                  className="w-[24px] h-[24px]"
                />
              </button>
              <button
                id="Makers-btn"
                onClick={() => handleSwitchView("makers")}
                className={`border-none bg-transparent italic font-medium text-base leading-none tracking-normal inline-flex items-center gap-2.5 cursor-pointer transition-opacity ${
                  currentView === "makers" ? "opacity-100" : "opacity-50"
                }`}
              >
                <span className="hidden min-tablet:inline">Makers</span>
                <img
                  src="/lottie/WorkIcon/Makers.svg"
                  alt="작가 버튼"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>
          </div>

          <div
            id="Gallery"
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[12px] md:gap-x-6 gap-y-20 pt-0 box-border ${
              currentView === "makers" ? "hidden" : ""
            }`}
          >
            {galleryList.map((art) => (
              <ArtworkCard key={art.id} art={art} />
            ))}
          </div>

          <div
            id="Makers-List"
            key={currentView === "makers" ? makerListKey : "gallery"}
            className={`pt-0 box-border border-t clear-both relative 
                        ${currentView === "makers" ? "block active" : "hidden"}
                        before:content-[""] before:absolute before:top-[-3px] before:left-0 before:w-[5px] before:h-[5px] before:bg-label before:rounded-full before:-translate-x-1/2 
                        after:content-[""] after:absolute after:top-[-3px] after:right-0 after:w-[5px] after:h-[5px] after:bg-label after:rounded-full after:translate-x-1/2`}
          >
            {makersList.map((maker) => (
              <MakerRow key={maker.name} maker={maker} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
