import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../components/Header'; 
import Footer from '../../components/Footer'; 

const IconPlaceholder = "";
const LinkIconPlaceholder = "";
const MakersLinkIconPlaceholder = "";

const initialArtworks = [
    { id: "art001", title: "녹색 비둘기 Green Pigeon", artist: "이선명 Sunmyeong Lee", description: "작품 설명", image: "https://placehold.co/250x340" },
    { id: "art002", title: "Sunny Day", artist: "이사이오 2420", description: "작품 설명", image: "https://placehold.co/250x340" },
    { id: "art003", title: "내 말을 들어줘", artist: "오리너구리", description: "작품 설명", image: "https://placehold.co/250x340" },
    { id: "art004", title: "심층화", artist: "Compdsst", description: "작품 설명", image: "https://placehold.co/250x340" },
    { id: "art005", title: "천국을 지켜라!", artist: "장효선", description: "작품 설명", image: "https://placehold.co/250x340" },
    { id: "art006", title: "Running Girls", artist: "런닝피플", description: "작품 설명", image: "https://placehold.co/250x340" },
    { id: "art007", title: "Bring to LIGHT", artist: "OWIN", description: "작품 설명", image: "https://placehold.co/250x340" },
    { id: "art008", title: "간판", artist: "Newzing", description: "작품 설명", image: "https://placehold.co/250x340" },
    { id: "art009", title: "For You", artist: "CHOIs", description: "작품 설명", image: "https://placehold.co/250x340" },
    { id: "art0010", title: "썩지않게 아주 오래", artist: "DPM GIRLZ", description: "작품 설명", image: "https://placehold.co/250x340" },
    { id: "art0011", title: "썩지않게 아주 오래", artist: "DPM GIRLZ", description: "작품 설명", image: "https://placehold.co/250x340" }
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
        if (/[A-Za-z]/.test(part)) eng += part + " ";
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


const formatArtistName = (artistName) => {
    const parts = artistName.split(/([가-힣]+)/).filter(p => p.length > 0);

    return parts.map((part, index) => {
        if (part.trim().length === 0) return <React.Fragment key={index}>{part}</React.Fragment>;
        
        if (/[가-힣]/.test(part)) {
            return <span key={index} className="Makers-Artist-Kr font-medium text-[14px] leading-none">{part}</span>;
        } else {
            return <span key={index} className="Makers-Artist-En italic font-normal text-[14px] leading-none">{part}</span>;
        }
    });
};

const formatTitleForMakers = (title) => {
    let processedTitle = title.replace(/([가-힣])([A-Za-z0-9])/g, '$1 $2');
    processedTitle = processedTitle.replace(/([A-Za-z0-9])([가-힣])/g, '$1 $2');

    const tokenRegex = /([가-힣\s]+)|([A-Za-z0-9\s]+)|([.,!?:;])/g;
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
        const isPunctuation = /[.,!?:;]/.test(part) && part.trim().length === 1;
        const isKoreanPart = /[가-힣]/.test(part) && !/[A-Za-z0-9]/.test(part) && !isPunctuation;

        if (index > 0 && isPreviousKorean && !isPunctuation && !isKoreanPart) {
             formattedElements.push(
                <span key={`spacer-${index}`} className="inline-block w-[6px] h-0"></span>
            );
        }

        isPreviousKorean = isKoreanPart;

        if (isPunctuation) {
            formattedElements.push(
                <React.Fragment key={key}>{part.trim()}</React.Fragment>
            );
        } else if (isKoreanPart) {
            formattedElements.push(
                <span key={key} className="Makers-Title-Kr font-medium text-[14px] leading-none">{part.trim()}</span>
            );
        } else {
            formattedElements.push(
                <span key={key} className="Makers-Title-En italic font-normal text-[14px] leading-none">{part.trim()}</span>
            );
        }
    });

    return formattedElements;
};

const ArtworkCard = React.memo(({ art }) => {
    return (
        <div className="Artwork flex flex-col box-border">
            <a href={`WorkDetail.html?id=${art.id}`} className="group flex flex-col w-full gap-4 text-label">
                <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-[340px] object-cover rounded-none transition-all duration-700 group-hover:rounded-[200px]"
                />
                <div className="title font-['Monoplex KR']">
                    {formatTitle(art.title)}
                </div>
                <div className="artist font-['Monoplex KR'] font-[450] text-[14px] leading-none tracking-normal underline underline-offset-[5px]">
                    {art.artist}
                </div>
                <div className="description font-['Monoplex KR'] font-[450] text-[14px] leading-none tracking-normal">
                    {art.description}
                </div>
            </a>
        </div>
    );
});

const MakerListItem = React.memo(({ art }) => {
    return (
        <div className="Makers-Item relative flex justify-between items-center py-6 border-b border-label before:content-[''] before:absolute before:bottom-[-3px] before:left-0 before:w-[5px] before:h-[5px] before:bg-label before:rounded-full before:-translate-x-1/2 after:content-[''] after:absolute after:bottom-[-3px] after:right-0 after:w-[5px] after:h-[5px] after:bg-label after:rounded-full after:translate-x-1/2">
            <div className="Makers-Artist-Info font-['Monoplex KR'] flex items-center gap-3 pl-5 flex-1 w-1/2 font-[450] text-base leading-none text-left">
                <div className="Makers-Artist-Name cursor-default">
                    {formatArtistName(art.artist)}
                </div>
                <a href="#"><img src={MakersLinkIconPlaceholder} alt="링크1" className="w-4 h-4 align-baseline translate-y-[1px]" /></a>
                <a href="#"><img src={MakersLinkIconPlaceholder} alt="링크2" className="w-4 h-4 align-baseline translate-y-[1px]" /></a>
            </div>
            
            <div className="Makers-Work-Wrapper flex justify-start flex-1 w-1/2">
                <div className="Makers-Work-Info font-['Monoplex KR'] italic font-normal text-base leading-none text-left flex-grow-0 w-max whitespace-normal break-normal hover:opacity-30 transition-opacity">
                    <a href={`WorkDetail.html?id=${art.id}`} className="inline-flex w-max whitespace-normal break-normal">
                        {formatTitleForMakers(art.title)}
                    </a>
                </div>
            </div>
        </div>
    );
});

export default function Work() {
    const [currentView, setCurrentView] = useState('gallery'); 
    const [isAscending, setIsAscending] = useState(true);
    const [sortedArtworks, setSortedArtworks] = useState(initialArtworks);

    const sortArtworks = useCallback((list, ascending, sortBy) => {
        return sortArtworksFn(list, ascending, sortBy);
    }, []);

    useEffect(() => {
        setSortedArtworks(shuffle(initialArtworks));
    }, []);

    const handleSwitchView = (mode) => {
        setCurrentView(mode);
        setIsAscending(true);
        
        let newList;
        if (mode === 'makers') {
            newList = sortArtworks(initialArtworks, true, 'artist');
        } else if (mode === 'gallery') {
            newList = shuffle(initialArtworks);
        }
        setSortedArtworks(newList);
    };

    const handleRandomize = () => {
        setSortedArtworks(shuffle(initialArtworks));
        setIsAscending(true);
    };

    const handleSort = () => {
        const sortBy = currentView === 'makers' ? 'artist' : 'title';
        const newAscending = !isAscending;
        
        const sorted = sortArtworks(initialArtworks, newAscending, sortBy);
        setSortedArtworks(sorted);
        setIsAscending(newAscending);
    };

    const sortButtonText = isAscending 
        ? 'A–Z' 
        : 'Z–A';

    return (
        <div className="bg-off-white text-label min-h-screen font-['Monoplex KR']">
            
            <div className="fixed top-0 left-0 right-0 z-50 pt-10"> 
                <Header />
            </div>
            
            <main className="pt-[198px]"> 
                
                {/* Work 텍스트 영역 */}
                <div className="Work-Detail w-[calc(100%-80px)] mx-auto mb-20"> 
                    
                    {/* Work 제목 */}
                    <p id="Work-Title" className="font-['Monoplex KR'] font-medium text-[40px] leading-none mb-10">Work</p>
                    
                    <div className="Work-Detail-Text flex flex-wrap items-start gap-10">
                        {/* 첫 번째 문단 */}
                        <p className="w-full sm:w-[38%] font-['Monoplex KR'] font-[450] text-[15px] leading-[180%] tracking-tightest">
                            기술은 과감해졌고, 기술은 정교해졌습니다.
                            아트&테크놀로지라는 사회 속에서 우리는 항상 그 사이의 미묘한 균형을 찾고 있습니다. 자유로운 표현의 바다와 정밀한 구조의 정글 사이에서, 각자의 길을 개척하며, 걷습니다. &lt;ATC 2024&gt;에서 수많은 작품들은 다양한 색채와 형태로 질문에 대답하며, 저마다 다른 방식으로 이 도전과 마주합니다.
                        </p>
                        {/* 두 번째 문단 */}
                        <p className="w-full sm:w-[38%] font-['Monoplex KR'] font-[450] text-[15px] leading-[180%] tracking-tightest">
                            We draw maps both alone and together, then share stories about them. The maps
                            we create are not merely
                            about marking roads and places; they become tools that reveal—and even generate—our perspectives on the
                            world.
                        </p>
                        {/* 전시 배치도 링크 */}
                        <a href="#" className="inline-flex items-center w-auto font-['Monoplex KR'] font-[450] text-base leading-[180%] tracking-tighter underline decoration-solid decoration-1 underline-offset-[1px] relative z-50">
                            전시 배치도 Exhibiton Map
                            <img src={LinkIconPlaceholder} alt="바로가기 버튼" className="w-5 h-5 ml-1 align-middle mb-[3px]" />
                        </a>
                    </div>
                </div>

                {/* 버튼 영역 */}
                <div className="WorkList-Button clear-both overflow-hidden w-[calc(100%-80px)] mx-auto mb-10 relative z-50"> 
                    
                    <div className="float-left flex gap-10">
                        <button 
                            id="Randomize-btn" 
                            onClick={handleRandomize} 
                            className="border-none bg-transparent font-['Monoplex KR'] italic font-normal text-base leading-none tracking-normal inline-flex items-center gap-1.5 cursor-pointer"
                        >
                            Randomize <img src={IconPlaceholder} alt="랜덤 정렬 버튼" className="w-8 h-8" />
                        </button>
                        <button 
                            id="Sort-btn" 
                            onClick={handleSort} 
                            className="border-none bg-transparent font-['Monoplex KR'] italic font-normal text-base leading-none tracking-normal inline-flex items-center gap-1.5 cursor-pointer"
                        >
                            {sortButtonText} <img src={IconPlaceholder} alt="정렬 버튼" className="w-8 h-8" />
                        </button>
                    </div>
                    
                    <div className="float-right flex gap-10">
                        <button 
                            id="Gallery-btn" 
                            onClick={() => handleSwitchView('gallery')} 
                            className={`border-none bg-transparent font-['Monoplex KR'] italic font-normal text-base leading-none tracking-normal inline-flex items-center gap-1.5 cursor-pointer transition-opacity ${currentView === 'gallery' ? 'opacity-100' : 'opacity-50'}`}
                        >
                            Gallery <img src={IconPlaceholder} alt="갤러리 버튼" className="w-8 h-8" />
                        </button>
                        <button 
                            id="Makers-btn" 
                            onClick={() => handleSwitchView('makers')} 
                            className={`border-none bg-transparent font-['Monoplex KR'] italic font-normal text-base leading-none tracking-normal inline-flex items-center gap-1.5 cursor-pointer transition-opacity ${currentView === 'makers' ? 'opacity-100' : 'opacity-50'}`}
                        >
                            Makers <img src={IconPlaceholder} alt="작가 버튼" className="w-8 h-8" />
                        </button>
                    </div>
                </div>

                {/* Gallery */}
                <div 
                    id="Gallery" 
                    className={`grid grid-cols-5 gap-x-6 gap-y-20 pt-6 px-10 box-border ${currentView === 'makers' ? 'hidden' : ''}`}
                >
                    {sortedArtworks.map(art => (
                        <ArtworkCard key={art.id} art={art} />
                    ))}
                </div>

                {/* Makers List */}
                <div 
                    id="Makers-List" 
                    className={`w-[calc(100%-80px)] mx-auto pt-0 box-border border-t border-label clear-both relative 
                    ${currentView === 'makers' ? 'block active' : 'hidden'}
                    ${currentView === 'makers' ? 'before:content-[""] before:absolute before:top-[-3px] before:left-0 before:w-[5px] before:h-[5px] before:bg-label before:rounded-full before:-translate-x-1/2 after:content-[""] after:absolute after:top-[-3px] after:right-0 after:w-[5px] after:h-[5px] after:bg-label after:rounded-full after:translate-x-1/2' : ''}`}
                >
                    {sortedArtworks.map(art => (
                        <MakerListItem key={art.id} art={art} />
                    ))}
                </div>
            </main>

            <footer className="h-[554px]">
                <Footer />
            </footer>
        </div>
    );
}