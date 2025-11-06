import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuToggle from "../../components/menu/MenuToggle";

const IconPlaceholder = "img/A-Z.svg";
const LinkIconPlaceholder = "img/go-to.svg";
const MakersLinkIconPlaceholder = "https://placehold.co/16x16";

const initialArtworks = [
    {
        id: "art001", title: "녹색 비둘기 Green Pigeon", artist: "이선명 Sunmyeong Lee", description: "작품 설명", image: "https://placehold.co/250x340",
        artistLinks: [
            { url: "#link1_ig", icon: MakersLinkIconPlaceholder, alt: "Instagram" },
            { url: "#link1_web", icon: MakersLinkIconPlaceholder, alt: "Website" }
        ]
    },
    {
        id: "art002", title: "Sunny Day", artist: "이사이오 2420", description: "작품 설명", image: "https://placehold.co/250x340",
        artistLinks: [
            { url: "#link2_only", icon: MakersLinkIconPlaceholder, alt: "Single Link" }
        ]
    },
    {
        id: "art003", title: "내 말을 들어줘", artist: "오리너구리", description: "작품 설명", image: "https://placehold.co/250x340",
        artistLinks: [
            { url: "#link3_a", icon: MakersLinkIconPlaceholder, alt: "Link A" },
            { url: "#link3_b", icon: MakersLinkIconPlaceholder, alt: "Link B" },
            { url: "#link3_c", icon: MakersLinkIconPlaceholder, alt: "Link C" }
        ]
    },
    { id: "art004", title: "심층화", artist: "Compdsst", description: "작품 설명", image: "https://placehold.co/250x340", artistLinks: [] },
    { id: "art005", title: "천국을 지켜라!", artist: "장효선", description: "작품 설명", image: "https://placehold.co/250x340", artistLinks: [] },
    { id: "art006", title: "Running Girls", artist: "런닝피플", description: "작품 설명", image: "https://placehold.co/250x340", artistLinks: [] },
    { id: "art007", title: "Bring to LIGHT", artist: "OWIN", description: "작품 설명", image: "https://placehold.co/250x340", artistLinks: [] },
    { id: "art008", title: "간판", artist: "Newzing", description: "작품 설명", image: "https://placehold.co/250x340", artistLinks: [] },
    { id: "art009", title: "For You", artist: "CHOIs", description: "작품 설명", image: "https://placehold.co/250x340", artistLinks: [] },
    { id: "art010", title: "썩지않게 아주 오래", artist: "DPM GIRLZ", description: "작품 설명", image: "https://placehold.co/250x340", artistLinks: [] },
    { id: "art011", title: "썩지않게 아주 오래", artist: "DPM GIRLZ", description: "작품 설명", image: "https://placehold.co/250x340", artistLinks: [] },
    { id: "art012", title: "가가가", artist: "DPM GIRLZ", description: "작품 설명", image: "https://placehold.co/250x340", artistLinks: [] }
];

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

const formatTitle = (title) => {
    const parts = title.split(/([A-Za-z0-9 ,.'":;!?&()/-]+)/).filter(Boolean);
    let kor = "", eng = "";

    parts.forEach(part => {
        if (/[A-Za-z0-9]/.test(part)) eng += part + " ";
        else kor += part;
    });

    const korText = kor.trim();
    const engText = eng.trim();

    return (
        <div className="Artwork-Title">
            {korText && (
                <span className="font-semibold text-[15px] leading-[145%] tracking-[-0.5%]">{korText}</span>
            )}

            {korText && engText && <br />}

            {engText && (
                <span className="italic font-semibold text-[15px] leading-[145%] tracking-[-0.5%]">{engText}</span>
            )}
        </div>
    );
};

const formatArtistName = (artistName, isGallery = false) => {
    const parts = artistName.split(/([가-힣]+)/).filter(p => p.length > 0);
    const baseFontWeight = isGallery ? "font-[450]" : "font-normal";

    return parts.map((part, index) => {
        if (part.trim().length === 0) return <React.Fragment key={index}>{part}</React.Fragment>;

        if (/[가-힣]/.test(part)) {
            return <span key={index} className={`Makers-Artist-Kr ${isGallery ? 'font-[450]' : 'font-medium'} text-[14px]`}>{part}</span>;
        } else {
            return <span key={index} className={`Makers-Artist-En italic ${baseFontWeight} text-[14px] leading-none`}>{part}</span>;
        }
    });
};


const formatTitleForMakers = (title) => {
    let processedTitle = title.replace(/([가-힣])([A-Za-z0-9])/g, '$1 $2');
    processedTitle = processedTitle.replace(/([A-Za-z0-9])([가-힣])/g, '$1 $2');

    const tokenRegex = /([가-힣\s]+)|([A-Za-z0-9\s.,!?:;]+)|([.,!?:;])/g;
    const parts = [];
    let match;
    while ((match = tokenRegex.exec(processedTitle)) !== null) {
        if (match[0].trim() !== '') {
            parts.push(match[0]);
        }
    }

    const formattedElements = [];
    let isPreviousKorean = false;

    parts.forEach((part, index) => {
        const key = index;
        const trimmedPart = part.trim();

        if (trimmedPart.length === 0) return;

        const isPunctuation = /[.,!?:;]/.test(trimmedPart) && trimmedPart.length === 1;
        const isKoreanPart = /[가-힣]/.test(trimmedPart) && !/[A-Za-z0-9]/.test(trimmedPart) && !isPunctuation;

        if (isPreviousKorean && !isPunctuation && !isKoreanPart) {
            formattedElements.push(
                <span key={`spacer-${index}`} className="inline-block w-[6px] h-0"></span>
            );
        }

        isPreviousKorean = isKoreanPart;

        if (isPunctuation) {
            formattedElements.push(
                <React.Fragment key={key}>{trimmedPart}</React.Fragment>
            );
        } else if (isKoreanPart) {
            formattedElements.push(
                <span key={key} className="Makers-Title-Kr font-medium text-[14px] leading-none">{trimmedPart}</span>
            );
        } else {
            formattedElements.push(
                <span key={key} className="Makers-Title-En italic font-normal text-[14px] leading-none">{trimmedPart}</span>
            );
        }
    });

    return formattedElements;
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
                <div className="title font-['Monoplex KR']">
                    {formatTitle(art.title)}
                </div>
                <div className="artist font-['Monoplex KR'] text-[14px] leading-none tracking-normal underline underline-offset-[4.5px]">
                    {formatArtistName(art.artist, true)}
                </div>
                <div className="description font-['Monoplex KR'] font-[450] text-[14px] leading-none tracking-normal">
                    {art.description}
                </div>
            </Link>
        </div>
    );
});

const MakersArtistGroup = React.memo(({ group }) => {
    return (
        <div className="Makers-Artist-Group flex flex-col sm:flex-row py-6 border-b border-label relative before:content-[''] before:absolute before:bottom-[-3px] before:left-0 before:w-[5px] before:h-[5px] before:bg-label before:rounded-full before:-translate-x-1/2 after:content-[''] after:absolute after:bottom-[-3px] after:right-0 after:w-[5px] after:h-[5px] after:bg-label after:rounded-full after:translate-x-1/2">
            {/* 작가 정보: 모바일(375px 이하 포함)에서 전체 너비, sm 이상에서 1/2 너비 */}
            <div className="Makers-Artist-Info font-['Monoplex KR'] flex items-center gap-3 pl-5 flex-1 w-full sm:w-1/2 font-[450] text-base leading-none text-left">
                <div className="Makers-Artist-Name cursor-default">
                    {formatArtistName(group.artist, false)}
                </div>
                {group.links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        <img src={link.icon} alt={link.alt} className="w-4 h-4 align-baseline translate-y-[1px]" />
                    </a>
                ))}
            </div>

            {/* 작품 목록: 모바일(375px 이하 포함)에서 상단 마진 mt-10 (40px), sm 이상에서 mt-0 */}
            <div className="Makers-Works-List flex flex-col justify-start flex-1 w-full sm:w-1/2 mt-10 sm:mt-0 pl-5">
                {group.works.map((art, index) => (
                    <div
                        key={art.id}
                        className={`Makers-Work-Info font-['Monoplex KR'] font-normal text-base leading-none text-left flex-grow-0 w-max whitespace-normal break-normal transition-opacity ${index > 0 ? 'mt-3' : ''}`}
                    >
                        <Link
                            to={`/work/${art.id}?from=makers`}
                            className="inline-flex w-max whitespace-normal break-normal hover:opacity-30 cursor-pointer"
                        >
                            {formatTitleForMakers(art.title)}
                        </Link>
                    </div>
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
    const initialSortParam = getQueryParam('sort');

    const initialAscending = initialSortParam === 'desc' ? false : true;

    const [currentView, setCurrentView] = useState(initialView);
    const [isAscending, setIsAscending] = useState(initialSortParam ? initialAscending : true);

    const [sortedArtworks, setSortedArtworks] = useState(() => {

        if (initialSortParam) {
            const sortBy = initialView === 'makers' ? 'artist' : 'title';
            return sortArtworksFn(initialArtworks, initialAscending, sortBy);
        }

        return shuffle(initialArtworks);
    });

    const sortArtworks = useCallback((list, ascending, sortBy) => {
        return sortArtworksFn(list, ascending, sortBy);
    }, []);

    const groupArtworksByArtist = (list, maintainOrder = true) => {
        const grouped = list.reduce((acc, work) => {
            if (!acc[work.artist]) {
                acc[work.artist] = {
                    artist: work.artist,
                    works: [],
                    links: work.artistLinks || []
                };
            }
            acc[work.artist].works.push(work);
            return acc;
        }, {});

        Object.values(grouped).forEach(group => {
            group.works = sortArtworksFn(group.works, true, 'title');
        });

        if (maintainOrder) {
            const artistOrder = [];
            const seenArtists = new Set();
            list.forEach(work => {
                if (!seenArtists.has(work.artist)) {
                    artistOrder.push(work.artist);
                    seenArtists.add(work.artist);
                }
            });
            return artistOrder
                .map(artist => grouped[artist])
                .filter(group => group);
        }
        return Object.values(grouped);
    };

    const saveScrollPosition = () => {
    };

    useEffect(() => {
        window.removeEventListener('scroll', saveScrollPosition);
    }, [location.pathname]);

    const handleSwitchView = (mode) => {
        setCurrentView(mode);
        setIsAscending(true);

        let newList;
        let newSearchParams = `?view=${mode}`;

        newList = shuffle(initialArtworks);

        setSortedArtworks(newList);
        navigate(newSearchParams, { replace: true });
    };

    const handleRandomize = () => {
        setIsAscending(true);

        if (currentView === 'makers') {
            setSortedArtworks(shuffle(sortedArtworks));
        } else {
            setSortedArtworks(shuffle(initialArtworks));
        }

        navigate(`?view=${currentView}`, { replace: true });
    };

    const handleSort = () => {
        const sortBy = currentView === 'makers' ? 'artist' : 'title';
        const newAscending = !isAscending;

        const sorted = sortArtworks(initialArtworks, newAscending, sortBy);
        setSortedArtworks(sorted);
        setIsAscending(newAscending);

        const sortParam = newAscending ? 'asc' : 'desc';
        navigate(`?view=${currentView}&sort=${sortParam}`, { replace: true });
    };

    const sortButtonText = isAscending
        ? 'A–Z'
        : 'Z–A';

    const makersArtistGroups = currentView === 'makers'
        ? groupArtworksByArtist(sortedArtworks, true)
        : [];

    return (
        <div className="bg-off-white text-label min-h-screen font-['Monoplex KR']">

            <div className="max-[701px]:hidden py-[40px] fixed top-0 left-0 right-0 z-[999] pt-10">
                <Header />
            </div>
            <div className="p-5">
                <div className="min-[701px]:hidden relative">
                    <MenuToggle />
                </div>
            </div>

            <main className="pt-[198px]">
                <div className="mx-5 lg:mx-10">

                    {/* Work 텍스트 영역 */}
                    <div className="Work-Detail mb-20">

                        {/* Work 제목 */}
                        <p id="Work-Title" className="font-['Monoplex KR'] font-medium text-[40px] leading-none mb-10">Work</p>

                        <div className="Work-Detail-Text flex flex-col xl:flex-row items-start justify-between gap-y-[20px]">
                            <p className="w-full xl:w-[39.5%] font-['Monoplex KR'] font-[450] text-[15px] leading-[180%] tracking-tightest">
                                기술은 과감해졌고, 기술은 정교해졌습니다.
                                아트&테크놀로지라는 사회 속에서 우리는 항상 그 사이의 미묘한 균형을 찾고 있습니다. 자유로운 표현의 바다와 정밀한 구조의 정글 사이에서, 각자의 길을 개척하며, 걷습니다. &lt;ATC 2024&gt;에서 수많은 작품들은 다양한 색채와 형태로 질문에 대답하며, 저마다 다른 방식으로 이 도전과 마주합니다.
                            </p>
                            <p className="w-full xl:w-[39.5%] font-['Monoplex KR'] font-[450] text-[15px] leading-[180%] tracking-tightest">
                                We draw maps both alone and together, then share stories about them. The maps
                                we create are not merely
                                about marking roads and places; they become tools that reveal—and even generate—our perspectives on the
                                world.
                            </p>
                            <a href="#" className="inline-flex items-center w-auto font-['Monoplex KR'] font-[450] text-base leading-[180%] tracking-tighter underline decoration-solid decoration-1 underline-offset-[1px] relative z-50">
                                전시 배치도 Exhibiton Map
                                <img src="/lottie/WorkIcon/go_to.svg" alt="바로가기 버튼" className="w-[11px] h-[11px] ml-1 align-middle mb-[3px]" />
                            </a>
                        </div>
                    </div>

                    {/* 버튼 영역 */}
                    <div className="WorkList-Button clear-both overflow-hidden mb-10 relative z-50">

                        <div className="float-left flex gap-10">
                            <button
                                id="Randomize-btn"
                                onClick={handleRandomize}
                                className="border-none bg-transparent font-['Monoplex KR'] italic font-normal text-base leading-none tracking-normal inline-flex items-center gap-1.5 cursor-pointer"
                            >
                                <span className="hidden md:inline">Randomize</span>
                                <img src="/lottie/WorkIcon/Randomize.svg" alt="랜덤 정렬 버튼" className="w-[27px] h-[27px]" />
                            </button>
                            <button
                                id="Sort-btn"
                                onClick={handleSort}
                                className={`border-none bg-transparent font-['Monoplex KR'] italic font-normal text-base leading-none tracking-normal inline-flex items-center gap-1.5 cursor-pointer 
                                    ${currentView === 'makers' && sortedArtworks.length > 0 ? 'opacity-100' :
                                        currentView === 'gallery' && sortedArtworks.length > 0 ? 'opacity-100' : 'opacity-50 cursor-default'}`
                                }
                                disabled={currentView === 'makers' && makersArtistGroups.length === 0}
                            >
                                <span className="hidden md:inline">{sortButtonText}</span>
                                <img src="/lottie/WorkIcon/A-Z.svg" alt="정렬 버튼" className="w-[27px] h-[27px]" />
                            </button>
                        </div>

                        <div className="float-right flex gap-10">
                            <button
                                id="Gallery-btn"
                                onClick={() => handleSwitchView('gallery')}
                                className={`border-none bg-transparent font-['Monoplex KR'] italic font-normal text-base leading-none tracking-normal inline-flex items-center gap-1.5 cursor-pointer transition-opacity ${currentView === 'gallery' ? 'opacity-100' : 'opacity-50'}`}
                            >
                                <span className="hidden md:inline">Gallery</span>
                                <img src="/lottie/WorkIcon/Gallery.svg" alt="갤러리 버튼" className="w-[27px] h-[27px]" />
                            </button>
                            <button
                                id="Makers-btn"
                                onClick={() => handleSwitchView('makers')}
                                className={`border-none bg-transparent font-['Monoplex KR'] italic font-normal text-base leading-none tracking-normal inline-flex items-center gap-1.5 cursor-pointer transition-opacity ${currentView === 'makers' ? 'opacity-100' : 'opacity-50'}`}
                            >
                                <span className="hidden md:inline">Makers</span>
                                <img src="/lottie/WorkIcon/Makers.svg" alt="작가 버튼" className="w-[27px] h-[27px]" />
                            </button>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div
                        id="Gallery"
                        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-20 pt-6 box-border ${currentView === 'makers' ? 'hidden' : ''}`}
                    >
                        {sortedArtworks.map(art => (
                            <ArtworkCard key={art.id} art={art} />
                        ))}
                    </div>

                    {/* Makers List */}
                    <div
                        id="Makers-List"
                        className={`pt-0 box-border border-t clear-both relative 
                        ${currentView === 'makers' ? 'block active' : 'hidden'}
                        before:content-[""] before:absolute before:top-[-3px] before:left-0 before:w-[5px] before:h-[5px] before:bg-label before:rounded-full before:-translate-x-1/2 
                        after:content-[""] after:absolute after:top-[-3px] after:right-0 after:w-[5px] after:h-[5px] after:bg-label before:rounded-full after:translate-x-1/2`}
                    >
                        {makersArtistGroups.map((group) => (
                            <MakersArtistGroup key={group.artist} group={group} />
                        ))}
                    </div>
                </div>
            </main>

            <footer className="h-[554px]">
                <Footer />
            </footer>
        </div>
    );
}