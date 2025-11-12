import React, { useState, useEffect, useCallback, useRef, useMemo, useLayoutEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuToggle from "../../components/menu/MenuToggle";

import {
    initialArtworks,
    getLinkIcon,
    MakersLinkIconPlaceholder,
} from '../../data/work/WorkArtistInfo';

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
        window.addEventListener('resize', debouncedCheck);
        return () => window.removeEventListener('resize', debouncedCheck);
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
        const res = valA.localeCompare(valB, 'ko', { sensitivity: 'base' });
        return ascending ? res : -res;
    });
};

const sortMakersFn = (list, ascending) => {
    return [...list].sort((a, b) => {
        const valA = a.name;
        const valB = b.name;
        const res = valA.localeCompare(valB, 'ko', { sensitivity: 'base' });
        return ascending ? res : -res;
    });
};

const getUniqueMakersMap = (list) => {
    const grouped = {};
    list.forEach(work => {
        if (!Array.isArray(work.makers)) return;
        const workInfo = { id: work.id, title: work.title, team: work.artist };
        
        work.makers.forEach(maker => {
            if (!maker.name) return;
            const makerName = maker.name;

            if (!grouped[makerName]) {
                grouped[makerName] = {
                    name: makerName,
                    links: Array.isArray(maker.links) ? maker.links : [],
                    works: [],
                };
            }
            if (!grouped[makerName].works.some(w => w.id === work.id)) {
                grouped[makerName].works.push(workInfo);
            }
        });
    });
    
    Object.values(grouped).forEach(maker => {
        maker.works = sortArtworksFn(maker.works, true, 'title'); 
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
    if (typeof title !== 'string' || title.trim().length === 0) {
        return <span className="font-semibold text-[15px] leading-[145%] tracking-[-0.5%]">제목 없음</span>;
    }

    const trimmedTitle = title.trim();
    let finalKorText = trimmedTitle;
    let finalEngText = '';

    if (/[A-Za-z]/.test(trimmedTitle)) {
        const matches = trimmedTitle.match(/^([\s\S]*?[가-힣]+[\s\S]*?)\s+([A-Za-z].*)$/);

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
                    finalKorText = '';
                    finalEngText = trimmedTitle;
                }
            }
        }
    } else {
        finalKorText = trimmedTitle;
        finalEngText = '';
    }

    return (
        <>
            {finalKorText && (
                <span className="font-[500] text-[15px] leading-[145%] tracking-[-0.5%]">{finalKorText}</span>
            )}

            {finalKorText && finalEngText && <br />}

            {finalEngText && (
                <span className="italic font-[500] text-[15px] leading-[145%] tracking-[-0.5%]">{finalEngText}</span>
            )}
        </>
    );
};


const formatArtistName = (artistName, isGallery = false) => {
    if (typeof artistName !== 'string' || artistName.trim().length === 0) {
        return <span className="Makers-Artist-Kr font-normal text-[14px]">N/A</span>;
    }

    const parts = artistName.split(/([가-힣]+)/).filter(p => p.length > 0);
    const baseFontWeight = isGallery ? "font-normal" : "font-normal";

    return parts.map((part, index) => {
        if (part.trim().length === 0) return <React.Fragment key={index}>{part}</React.Fragment>;

        if (/[가-힣]/.test(part)) {
            return <span key={index} className={`Makers-Artist-Kr ${isGallery ? 'font-normal' : 'font-[500]'} text-[14px]`}>{part}</span>;
        } else {
            return <span key={index} className={`Makers-Artist-En italic ${baseFontWeight} text-[14px] leading-none`}>{part}</span>;
        }
    });
};

const formatTitleForMakers = (title, isMobileOneLine) => {
    if (typeof title !== 'string' || title.trim().length === 0) {
        return <span className="Makers-Title-Kr font-[500] text-[14px] leading-none">제목 없음</span>;
    }

    const trimmedTitle = title.trim();

    let finalKorText = trimmedTitle;
    let finalEngText = '';

    if (/[A-Za-z]/.test(trimmedTitle)) {

        const matches = trimmedTitle.match(/^([\s\S]*?[가-힣]+[\s\S]*?)\s+([A-Za-z].*)$/);

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
                    finalKorText = '';
                    finalEngText = trimmedTitle;
                }
            }
        }
    } else {
        finalKorText = trimmedTitle;
        finalEngText = '';
    }

    const korElement = finalKorText ? (
        <span key="kor" className="Makers-Title-Kr font-[500] text-[14px] leading-[20px] mr-[6px]">{finalKorText}</span>
    ) : null;

    const engElement = finalEngText ? (
        <span key="en" className="Makers-Title-En italic font-normal text-[14px] leading-[24px] whitespace-nowrap">{finalEngText}</span>
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
        return <span className="Makers-Title-Kr font-[500] text-[14px] leading-none">{trimmedTitle}</span>;
    }
};

const ArtworkCard = React.memo(({ art }) => {
    return (
        <div className="Artwork flex flex-col box-border">
            <Link to={`/work/${art.id}?from=gallery`} className="group flex flex-col w-full gap-4 text-label">
                <div className="relative w-full pt-[136%]">
                    <img
                        src={art.image}
                        alt={art.title}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-none transition-all duration-600 ease-out transform group-hover:rounded-[200px] group-hover:scale-[0.93]"
                    />
                </div>
                <div className="title font-normal text-[15px] leading-[145%] tracking-[-0.5%] whitespace-normal">
                    {formatTitle(art.title)}
                </div>
                <div className="artist font-normal text-[14px] leading-[145%] tracking-normal underline underline-offset-[4.5px]">
                    {formatArtistName(art.artist, true)}
                </div>
                <div className="description font-[400] text-[14px] leading-[145%] tracking-normal whitespace-normal">
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
            className={`Maker-Work-Info font-['Monoplex KR'] font-normal text-left flex-grow-0 w-full overflow-hidden ${index > 0 ? 'mt-3' : ''} text-[14px] leading-none`}
        >
            <Link
                to={`/work/${art.id}?from=makers`}
                className={`hover:opacity-30 cursor-pointer`} 
                style={{
                    display: 'block', 
                    whiteSpace: 'normal', 
                    overflow: 'visible',
                    textOverflow: 'clip',
                }}
            >
                {formatTitleForMakers(art.title, false)} 
            </Link>
        </div>
    );
};


const MakerRow = React.memo(({ maker }) => {
    if (!maker || typeof maker.name !== 'string' || !Array.isArray(maker.works)) {
        return null;
    }
    
    return (
        <div className="Maker-Row flex flex-col min-[376px]:flex-row py-6 border-b border-label relative before:content-[''] before:absolute before:bottom-[-3px] before:left-0 before:w-[5px] before:h-[5px] before:bg-label before:rounded-full before:-translate-x-1/2 
        after:content-[''] after:absolute after:bottom-[-3px] after:right-0 after:w-[5px] after:h-[5px] after:bg-label after:rounded-full after:translate-x-1/2">
            
            <div className="Maker-Info flex items-center gap-3 flex-1 w-full min-[376px]:w-1/2 font-[450] text-base leading-none text-left pl-[20px]">
                <div className="Maker-Name cursor-default">
                    {formatArtistName(maker.name, false)}
                </div>
                {maker.links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        <img
                            src={getLinkIcon(link)}
                            alt={link.alt}
                            className="w-4 h-4 align-baseline translate-y-[1px]"
                        />
                    </a>
                ))}
            </div>

            <div className="Maker-Works-List flex flex-col justify-start flex-1 w-full min-[376px]:w-1/2 mt-10 min-[376px]:mt-0 min-[376px]:pl-5 pl-[20px]">
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

    const getQueryParam = useCallback((param) => {
        const urlParams = new URLSearchParams(location.search);
        return urlParams.get(param);
    }, [location.search]);

    const initialView = getQueryParam('view') === 'makers' ? 'makers' : 'gallery';

    const [currentView, setCurrentView] = useState(initialView);

    const [isCurrentlySorted, setIsCurrentlySorted] = useState(false); 
    const [isAscending, setIsAscending] = useState(true);

    const initialRandomArtworks = shuffle(initialArtworks);
    const [randomArtworkList, setRandomArtworkList] = useState(initialRandomArtworks);
    
    const uniqueMakersMap = getUniqueMakersMap(initialArtworks); 
    
    const [makerListKey, setMakerListKey] = useState(Math.random().toString());

    const initialRandomMakers = shuffleMakers(Object.values(uniqueMakersMap));
    const [randomMakerList, setRandomMakerList] = useState(initialRandomMakers);


    const [sortedArtworks, setSortedArtworks] = useState(() => {
        if (initialView === 'makers') {
            return initialRandomMakers; 
        }
        return initialRandomArtworks;
    });

    const sortArtworks = useCallback((list, ascending, sortBy) => {
        return sortArtworksFn(list, ascending, sortBy);
    }, []);

    const handleSwitchView = (mode) => {
        setCurrentView(mode);

        let newList;
        let newSearchParams = `?view=${mode}`; 

        if (mode === 'gallery') {
            if (isCurrentlySorted) {
                newList = sortArtworks(initialArtworks, isAscending, 'title');
            } else {
                newList = randomArtworkList; 
            }
        } else {
            
            if (isCurrentlySorted) {
                newList = groupArtworksByMaker(initialArtworks, isAscending);
            } else {
                newList = randomMakerList;
            }
        }
        
        setSortedArtworks(newList);
        navigate(newSearchParams, { replace: true });
    };

    const handleRandomize = () => {
        
        const newRandomList = shuffle(initialArtworks);
        setRandomArtworkList(newRandomList); 

        const allMakers = Object.values(uniqueMakersMap);
        const newRandomMakers = shuffleMakers(allMakers);
        setRandomMakerList(newRandomMakers); 

        setIsAscending(true); 
        setIsCurrentlySorted(false);

        if (currentView === 'makers') {
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
        
        if (currentView === 'gallery') {
            const sorted = sortArtworks(initialArtworks, newAscending, 'title');
            setSortedArtworks(sorted);
        } else {
            const sortedMakers = groupArtworksByMaker(initialArtworks, newAscending);
            setSortedArtworks(sortedMakers);
        }

        setIsAscending(newAscending);
        setMakerListKey(Math.random().toString());

        navigate(`?view=${currentView}`, { replace: true });
    };

    const sortButtonText = isCurrentlySorted && isAscending
        ? 'Z–A' 
        : 'A–Z';

    const makersList = currentView === 'makers' ? sortedArtworks : [];
    const galleryList = currentView === 'gallery' ? sortedArtworks : [];


    return (
        <div style={{backgroundColor: '#F8F8F7'}} className="text-label min-h-screen font-['Monoplex KR']">

            <div className="max-[701px]:hidden py-[40px] fixed top-0 left-0 right-0 z-[999] pt-10">
                <Header />
            </div>
            <div className="p-5 fixed top-0 left-0 right-0 z-[999] min-[701px]:hidden">
                <div className="relative">
                    <MenuToggle />
                </div>
            </div>

            <main className="pt-[120px] min-[701px]:pt-[160px]">
                <div className="mx-5 lg:mx-10">

                    <div className="Work-Detail mb-20">

                        <p id="Work-Title" className="font-medium text-[40px] leading-[100%] mb-10">Work</p>

                        <div className="Work-Detail-Text flex flex-col xl:flex-row items-start justify-between gap-y-[20px]">
                            <p className="w-full xl:w-[39.5%] font-noraml text-[15px] leading-[180%] tracking-[-10%]">
                                기술은 과감해졌고, 기술은 정교해졌습니다.
                                아트&테크놀로지라는 사회 속에서 우리는 항상 그 사이의 미묘한 균형을 찾고 있습니다. 자유로운 표현의 바다와 정밀한 구조의 정글 사이에서, 각자의 길을 개척하며, 걷습니다. &lt;ATC 2024&gt;에서 수많은 작품들은 다양한 색채와 형태로 질문에 대답하며, 저마다 다른 방식으로 이 도전과 마주합니다.
                            </p>
                            <p className="w-full xl:w-[39.5%] font-normal text-[15px] leading-[145%] tracking-[-0.5%]">
                                We draw maps both alone and together, then share stories about them. The maps
                                we create are not merely
                                about marking roads and places; they become tools that reveal—and even generate—our perspectives on the
                                world.
                            </p>
                            <a href="https://drive.google.com/file/d/1NKNTD1WekwNaXNd5H6l2rRXtcFXj4vyU/view" target='_blank' className="inline-flex items-center w-auto font-normal text-base leading-[145%] tracking-[-0.5%] underline decoration-solid decoration-1 underline-offset-[1px] relative z-50">
                                전시 배치도 Exhibiton Map
                                <img src="/lottie/WorkIcon/go_to.svg" alt="바로가기 버튼" className="w-[11px] h-[11px] ml-1 align-middle mb-[3px]" />
                            </a>
                        </div>
                    </div>

                    <div className="WorkList-Button clear-both overflow-hidden mb-6 relative z-50">

                        <div className="float-left flex gap-8 max-[700px]:gap-[20px]">
                            <button
                                id="Randomize-btn"
                                onClick={handleRandomize}
                                className="border-none bg-transparent italic font-[500] text-base leading-none tracking-normal inline-flex items-center gap-1.5 cursor-pointer"
                            >
                                <span className="hidden min-[701px]:inline">Randomize</span>
                                <img src="/lottie/WorkIcon/Randomize.svg" alt="랜덤 정렬 버튼" className="w-[27px] h-[27px]" />
                            </button>
                            <button
                                id="Sort-btn"
                                onClick={handleSort}
                                className={`border-none bg-transparent italic font-[500] text-base leading-none tracking-normal inline-flex items-center gap-1.5 cursor-pointer 
                                    ${currentView === 'makers' && makersList.length > 0 ? 'opacity-100' :
                                        currentView === 'gallery' && sortedArtworks.length > 0 ? 'opacity-100' : 'opacity-50 cursor-default'}`
                                }
                                disabled={currentView === 'makers' && makersList.length === 0}
                            >
                                <span className="hidden min-[701px]:inline">{sortButtonText}</span>
                                <img src="/lottie/WorkIcon/A-Z.svg" alt="정렬 버튼" className="w-[27px] h-[27px]" />
                            </button>
                        </div>

                        <div className="float-right flex gap-8 max-[700px]:gap-[20px]">
                            <button
                                id="Gallery-btn"
                                onClick={() => handleSwitchView('gallery')}
                                className={`border-none bg-transparent font-[500] italic text-base leading-none tracking-normal inline-flex items-center gap-1.5 cursor-pointer transition-opacity ${currentView === 'gallery' ? 'opacity-100' : 'opacity-50'}`}
                            >
                                <span className="hidden min-[701px]:inline">Gallery</span>
                                <img src="/lottie/WorkIcon/Gallery.svg" alt="갤러리 버튼" className="w-[27px] h-[27px]" />
                            </button>
                            <button
                                id="Makers-btn"
                                onClick={() => handleSwitchView('makers')}
                                className={`border-none bg-transparent italic font-[500] text-base leading-none tracking-normal inline-flex items-center gap-1.5 cursor-pointer transition-opacity ${currentView === 'makers' ? 'opacity-100' : 'opacity-50'}`}
                            >
                                <span className="hidden min-[701px]:inline">Makers</span>
                                <img src="/lottie/WorkIcon/Makers.svg" alt="작가 버튼" className="w-[27px] h-[27px]" />
                            </button>
                        </div>
                    </div>

                    <div
                        id="Gallery"
                        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[12px] md:gap-x-6 gap-y-20 pt-0 box-border ${currentView === 'makers' ? 'hidden' : ''}`}
                    >
                        {galleryList.map(art => (
                            <ArtworkCard key={art.id} art={art} />
                        ))}
                    </div>

                    <div
                        id="Makers-List"
                        key={currentView === 'makers' ? makerListKey : 'gallery'}
                        className={`pt-0 box-border border-t clear-both relative 
                        ${currentView === 'makers' ? 'block active' : 'hidden'}
                        before:content-[""] before:absolute before:top-[-3px] before:left-0 before:w-[5px] before:h-[5px] before:bg-label before:rounded-full before:-translate-x-1/2 
                        after:content-[""] after:absolute after:top-[-3px] after:right-0 after:w-[5px] after:h-[5px] after:bg-label after:rounded-full after:translate-x-1/2`}
                    >
                        {makersList.map((maker) => (
                            <MakerRow 
                                key={maker.name} 
                                maker={maker} 
                            />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}