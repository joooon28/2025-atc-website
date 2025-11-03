import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const GoBackIcon = "/lottie/WorkDetailIcon/go_back.svg"; 
const TopIcon = "/lottie/WorkDetailIcon/top.svg";
const LinkPlaceholderIcon = "https://placehold.co/18x18"; 

const allArtworkData = {
    "art001": { titleKr: "녹색 비둘기", titleEn: "Green Pigeon", location: "4F Fabrication Lab", artistKr: "이선명", artistEn: "Sunmyeong Lee", imageMainSrc: "https://placehold.co/200x267", imageDetailSrc: "qVzXxoZ 1.png", commentary: { kr: { p1: '양자역학을 통해 내면의 다중자아를 탐구하는 퍼포먼스 작업', p2: '팀 무아레는 다양한 정체성이 거듭 포개진 상태를 ‘겹’, 겹이 만들어낸 무늬와 흔적을 ‘결’이라고 생각하였다. <겹과 결>은 한 사람 내면에 존재하는 다양한 자아의 모습을 발견하고 포용해가는 과정을 양자역학의 개념(양자 얽힘, 중첩, 입자성과 파동성, 연속과 불연속 등)과 연결하는 작업이다. 우리 모두는 내면에 중첩된 다중자아를 가지고 있으며 각자가 살아가는 공간과 관계 속에서 자아의 흔적을 남기는 존재이다. 또한 이 둘은 관찰 불가능한 미시세계를 다루는 양자역학과 보이지 않는 내면의 자아라는 점에서 공통점을 가진다.' }, en: { p1: 'A performance exploring the multiple selves within through quantum mechanics in performance art.', p2: 'Team Moiré conceived the state of overlapping identities as “layers” and the patterns and traces created by these layers as “textures.” <Singlet & Multiplet> is a work that connects the process of discovering and embracing the multiple selves that exist within an individual to key concepts in quantum mechanics—such. We all possess multiple selves superposed within our inner world, leaving traces of our identities across the spaces and relationships we inhabit. In this sense, both quantum mechanics.' } }, links: [{ text: "Instagram", url: "https://instagram.com/moire_team" }, { text: "Process Archive", url: "https://process.archive/art001" }] },
    "art002": { titleKr: "", titleEn: "Sunny Day", location: "5F Studio", artistKr: "이사이오", artistEn: "2420", imageMainSrc: "https://placehold.co/200x267", imageDetailSrc: "sunny_detail.png", commentary: { kr: { p1: '써니 데이는 이사이오 2420의 빛과 색을 주제로 한 새로운 미디어 아트입니다.', p2: '작가는 이 작품을 통해 일상의 햇살이 주는 따뜻함과 찰나의 순간을 포착하여 관람객에게 긍정적인 에너지를 전달하고자 했습니다. 다양한 색채의 레이어가 중첩되며 새로운 시각적 경험을 선사합니다.' }, en: { p1: 'Sunny Day is a new media art piece by 2420 exploring light and color.', p2: 'Through this work, the artist sought to capture the warmth and fleeting moments of daily sunshine, conveying positive energy to the viewer. Overlapping layers of various colors offer a new visual experience.' } }, links: [{ text: "Facebook", url: "https://facebook.com/2420" }, { text: "Personal Website", url: "https://2420.com" }, { text: "LinkedIn", url: "https://linkedin.com/2420" }] },
    "art003": { titleKr: "내 말을 들어줘", titleEn: "", location: "3F Gallery", artistKr: "오리너구리", artistEn: "", imageMainSrc: "https://placehold.co/200x267", imageDetailSrc: "listen_detail.png", commentary: { kr: { p1: '오리너구리 작가의 목소리를 담은 사운드 설치 작품입니다.', p2: '현대 사회에서 소통의 단절과 외로움을 다루며, 관람객에게 자신의 내면의 소리에 귀 기울일 것을 촉구합니다.' }, en: { p1: 'A sound installation by artist Platypus, capturing their voice.', p2: 'It addresses the isolation and loneliness in modern society, urging the viewer to listen to their own inner voice.' } }, links: [{ text: "Process Archive", url: "https://archive.com/platypus" }] },
    "art004": { titleKr: "심층화", titleEn: "", location: "4F Studio", artistKr: "", artistEn: "Compdsst", imageMainSrc: "https://placehold.co/200x267", imageDetailSrc: "deepening_detail.png", commentary: { kr: { p1: '디지털 레이어를 통해 복잡한 인간 심리를 탐구합니다.', p2: '표면 뒤에 숨겨진 감정의 깊이를 시각화한 작품입니다.' }, en: { p1: 'Exploring complex human psychology through digital layers.', p2: 'A work that visualizes the depth of emotions hidden beneath the surface.' } }, links: [{ text: "Instagram", url: "https://instagram.com/compdsst" }] },
    "art005": { titleKr: "천국을 지켜라!", titleEn: "", location: "2F Wall", artistKr: "장효선", artistEn: "", imageMainSrc: "https://placehold.co/200x267", imageDetailSrc: "heaven_detail.png", commentary: { kr: { p1: '빛과 그림자를 활용한 대형 설치 작품입니다.', p2: '인간의 이상과 현실 간의 괴리를 천국의 문을 지키는 존재로 은유합니다.' }, en: { p1: 'A large-scale installation using light and shadow.', p2: 'It metaphorizes the gap between human ideals and reality as a guardian of the gate of heaven.' } }, links: [{ text: "Portfolio", url: "https://portfolio.com/hyosun" }] },
    "art006": { titleKr: "", titleEn: "Running Girls", location: "5F Roof", artistKr: "런닝피플", artistEn: "", imageMainSrc: "https://placehold.co/200x267", imageDetailSrc: "running_detail.png", commentary: { kr: { p1: '멈추지 않는 청춘의 에너지를 담은 키네틱 아트입니다.', p2: '반복되는 움직임을 통해 현대인의 끊임없는 질주를 표현합니다.' }, en: { p1: 'Kinetic art capturing the energy of relentless youth.', p2: 'Expressing the ceaseless race of modern people through repetitive movements.' } }, links: [{ text: "Vimeo", url: "https://vimeo.com/runningpeople" }, { text: "Instagram", url: "https://instagram.com/runningpeople" }] },
    "art007": { titleKr: "", titleEn: "Bring to LIGHT", location: "3F Media", artistKr: "", artistEn: "OWIN", imageMainSrc: "https://placehold.co/200x267", imageDetailSrc: "qVzXxoZ 1.png", commentary: { kr: { p1: '어둠 속에서 진실을 찾는 과정을 빛으로 표현한 미디어 아트입니다.', p2: '스크린의 변화를 통해 정보화 시대의 왜곡된 진실을 조명합니다.' }, en: { p1: 'Media art expressing the process of finding truth in darkness with light.', p2: 'Illuminating the distorted truth of the information age through screen changes.' } }, links: [{ text: "Website", url: "https://owin.art" }] },
    "art008": { titleKr: "간판", titleEn: "", location: "4F Stair", artistKr: "", artistEn: "Newzing", imageMainSrc: "https://placehold.co/200x267", imageDetailSrc: "sign_detail.png", commentary: { kr: { p1: '버려진 간판을 재해석한 설치 작품입니다.', p2: '도시의 소외된 목소리와 기억을 간판이라는 매체를 통해 되살립니다.' }, en: { p1: 'An installation reinterpreting discarded signboards.', p2: 'Reviving the marginalized voices and memories of the city through the medium of signboards.' } }, links: [{ text: "Behance", url: "https://behance.net/newzing" }] },
    "art009": { titleKr: "", titleEn: "For You", location: "2F Lounge", artistKr: "", artistEn: "CHOIs", imageMainSrc: "https://placehold.co/200x267", imageDetailSrc: "foryou_detail.png", commentary: { kr: { p1: '관람객을 위한 맞춤형 인터랙티브 미디어 작품입니다.', p2: '관람객의 움직임과 반응에 따라 작품의 색상과 소리가 변화합니다.' }, en: { p1: 'A customized interactive media work for the audience.', p2: 'The color and sound of the work change according to the audience\'s movements and reactions.' } }, links: [{ text: "GitHub", url: "https://github.com/chois" }] },
    "art010": { titleKr: "썩지않게 아주 오래", titleEn: "", location: "3F Corner", artistKr: "", artistEn: "DPM GIRLZ", imageMainSrc: "https://placehold.co/200x267", imageDetailSrc: "unrotten_detail.png", commentary: { kr: { p1: '자연 소재의 부패와 영속성을 다루는 실험적인 영상 작품입니다.', p2: '시간의 흐름 속에서 변하지 않는 가치에 대해 질문을 던집니다.' }, en: { p1: 'An experimental video work dealing with the decay and permanence of natural materials.', p2: 'It raises questions about values that remain unchanged through the passage of time.' } }, links: [] },
    "art011": { titleKr: "마지막 작품", titleEn: "", location: "1F Lobby", artistKr: "팀 이름", artistEn: "", imageMainSrc: "https://placehold.co/200x267", imageDetailSrc: "final_detail.png", commentary: { kr: { p1: '전시의 대미를 장식하는 설치 및 퍼포먼스 결합 작품입니다.', p2: '모든 참여 작가들의 흔적과 메시지를 하나로 모아 결론을 제시합니다.' }, en: { p1: 'A combined installation and performance piece concluding the exhibition.', p2: 'It presents a conclusion by gathering the traces and messages of all participating artists.' } }, links: [{ text: "Contact Email", url: "mailto:final@work.com" }] },
    "art012": { titleKr: "", titleEn: "Only English Title", location: "2F Lounge", artistKr: "", artistEn: "Tester", imageMainSrc: "https://placehold.co/200x267", imageDetailSrc: "foryou_detail.png", commentary: { kr: { p1: '테스트용 작품입니다.', p2: '영문 제목만 있을 경우를 테스트합니다.' }, en: { p1: 'This is a test piece.', p2: 'Testing the case where only the English title exists.' } }, links: [] },
};

const getDefaultArtwork = () => allArtworkData.art001; 

const fontMap = {
    text: 'font-[450]', 
    textItalic: 'italic font-normal', 
    medium: 'font-medium', 
    mediumItalic: 'italic font-medium', 
    semibold: 'font-semibold', 
    semiboldItalic: 'italic font-semibold', 
    italic: 'italic font-normal', 
};

const StickyTitle = React.memo(({ data }) => {
    const titleKr = data.titleKr.trim();
    const titleEn = data.titleEn.trim();

    if (!titleKr && !titleEn) return null;

    return (
        <p id="Sticky-Title-Combined" className="text-base">
            {titleKr && (
                <span className={`${fontMap.semibold} text-[14px] leading-none tracking-normal`}>{titleKr}</span>
            )}
            {titleKr && titleEn && ' '}
            {titleEn && (
                <span className={`${fontMap.semiboldItalic} text-[14px] leading-none tracking-normal`}>{titleEn}</span>
            )}
        </p>
    );
});

const StickyArtist = React.memo(({ data }) => {
    const artistKr = data.artistKr.trim();
    const artistEn = data.artistEn.trim();

    if (!artistKr && !artistEn) return null;

    return (
        <p id="Sticky-Artist-Combined" className="text-base">
            {artistKr && (
                <span className={`${fontMap.text} text-[14px] leading-none tracking-normal`}>{artistKr}</span>
            )}
            {artistKr && artistEn && ' '}
            {artistEn && (
                <span className={`${fontMap.italic} text-[14px] leading-none tracking-normal`}>{artistEn}</span>
            )}
        </p>
    );
});

export default function WorkDetail() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const initialData = allArtworkData[id] || getDefaultArtwork();
    const [artwork, setArtwork] = useState(initialData);
    const [currentLanguage, setCurrentLanguage] = useState('kr');
    const [isButtonListActive, setIsButtonListActive] = useState(false);
    const [isStickyHeaderActive, setIsStickyHeaderActive] = useState(false);

    const stickyInfoRef = useRef(null);
    const topBackButtonRef = useRef(null); 
    
    const HEADER_OFFSET = 40;
    const HEADER_COMPONENT_HEIGHT = 97;
    const TOTAL_FIXED_HEADER_HEIGHT = HEADER_OFFSET + HEADER_COMPONENT_HEIGHT;
    
    const DETAIL_TEXT_STICKY_TOP = TOTAL_FIXED_HEADER_HEIGHT + 80;


    const getQueryParam = useCallback((param) => {
        const urlParams = new URLSearchParams(location.search);
        return urlParams.get(param);
    }, [location.search]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' }); 
        
        const data = allArtworkData[id] || getDefaultArtwork();
        setArtwork(data);
        setCurrentLanguage('kr'); 
        setIsStickyHeaderActive(false);
        setIsButtonListActive(false);

        if (data) {
            document.title = `${data.titleKr || data.titleEn} | Work-Detail`;
        }
    }, [id]); 

    useEffect(() => {
        const checkScrollPosition = () => {
            if (!stickyInfoRef.current || !topBackButtonRef.current) return;

            const buttonTopY = topBackButtonRef.current.offsetTop; 
            const buttonHeight = topBackButtonRef.current.offsetHeight; 
            const buttonActivationScrollPoint = buttonTopY + buttonHeight - TOTAL_FIXED_HEADER_HEIGHT;

            const stickyElementStartPos = stickyInfoRef.current.offsetTop;

            const headerActivationScrollPoint = stickyElementStartPos - TOTAL_FIXED_HEADER_HEIGHT;
            
            const scrollY = window.scrollY;

            if (scrollY >= buttonActivationScrollPoint) {
                setIsButtonListActive(true);
            } else {
                setIsButtonListActive(false);
            }

            if (scrollY >= headerActivationScrollPoint) {
                setIsStickyHeaderActive(true);
            } else {
                setIsStickyHeaderActive(false);
            }
        };

        window.addEventListener('scroll', checkScrollPosition);
        const timeoutId = setTimeout(checkScrollPosition, 0); 

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, [artwork]); 

    const handleGoBack = useCallback(() => {
        const fromView = getQueryParam('from');

        if (fromView === 'makers' || fromView === 'gallery') {
            navigate(`/work#${fromView}`);
        } else {
            navigate(-1);
        }
    }, [getQueryParam, navigate]);

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!artwork) {
        return (
            <div className="text-label min-h-screen bg-white"> 
                <Header />
                <main className="w-[calc(100%-80px)] mx-auto pt-[97px] text-center">
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

    return (
        <div className="text-label min-h-screen">
            
            <div className="fixed top-0 left-0 right-0 h-[40px] z-50 bg-white"></div>

            <div 
                className={`fixed top-[40px] left-0 right-0 h-[97px] z-50 transition-colors duration-200 
                ${isStickyHeaderActive ? 'bg-white' : 'bg-transparent'}`}
            > 
                <Header />
            </div>

            <div className="First-Section w-[calc(100%-80px)] mx-auto text-center relative flex flex-col items-center justify-between gap-6 pb-10 pt-[177px]"> 
                <button
                    onClick={handleGoBack}
                    id="goBackTop"
                    ref={topBackButtonRef}
                    className={`go_back bg-white border border-label py-3 px-6 text-center rounded-[60px] absolute top-[233px] left-0 cursor-pointer text-base leading-none tracking-normal inline-flex items-center`}
                >
                    <img src={GoBackIcon} alt="뒤로 가기" className="mr-3 transform translate-y-px" />
                    Back
                </button>
                <img src={artwork.imageMainSrc} alt={displayTitleKr || displayTitleEn} id="Work-Main-Img" className="mt-14 w-[200px] h-[267px] object-cover" />
                <div className="Work-Title flex flex-col items-center gap-1.5">
                    {displayTitleKr && (
                        <p id="Work-Title-Kr" className={`${fontMap.medium} text-2xl leading-none tracking-normal`}>
                            {displayTitleKr}
                        </p>
                    )}
                    {displayTitleEn && (
                        <p id="Work-Title-En" className={`${fontMap.mediumItalic} italic text-2xl leading-none tracking-normal`}>
                            {displayTitleEn}
                        </p>
                    )}
                </div>
                {displayLocation && (
                    <p id="Work-Location" className={`${fontMap.text} font-[450] text-sm leading-none tracking-normal`}>
                        {displayLocation}
                    </p>
                )}
            </div>

            <div className="Second-Section w-[calc(100%-80px)] mx-auto">
                
                <div
                    ref={stickyInfoRef}
                    className="Work-Detail-Sticky-Info w-full sticky top-[137px] py-2 z-10 bg-white flex justify-between items-center border-t border-b border-label mb-10 relative
                        /* 상단 테두리 닷 */
                        before:content-[''] before:absolute before:top-[-0.5px] before:left-0 before:w-[5px] before:h-[5px] before:bg-label before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2
                        after:content-[''] after:absolute after:top-[-0.5px] after:right-0 after:w-[5px] after:h-[5px] after:bg-label before:rounded-full before:transform after:translate-x-1/2 after:-translate-y-1/2"
                >
                    <div className="absolute bottom-0 left-0 w-full h-0">
                        <div className="absolute top-[0.5px] left-0 w-[5px] h-[5px] bg-label rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute top-[0.5px] right-0 w-[5px] h-[5px] bg-label rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <StickyTitle data={artwork} />
                    <StickyArtist data={artwork} />
                </div>

                <div className="Work-Detail-Info w-full flex justify-between">
                    <div className="Work-Detail-Visual w-[calc(50%-20px)]">
                        <div className="Work-Detail-Video w-full h-[400px] border border-label box-border mb-5">
                        </div>
                        <div className="Work-Detail-Img">
                            <img src={artwork.imageDetailSrc} alt={displayTitleKr || displayTitleEn} id="Work-Detail-Img" className="object-contain w-full h-full" />
                        </div>
                    </div>

                    <div className="Work-Detail-Text w-[calc(50%-20px)] sticky top-[217px] self-start">
                        <div className="Work-Detail-Commentary flex flex-col justify-between gap-10">
                            <div className="Work-Detail-Commentary-Text flex flex-col justify-between gap-5">
                                <p id="commentary-p1" className={`${fontMap.semibold} font-semibold text-[15px] leading-[145%] tracking-[-0.5%]`}>
                                    {currentCommentary.p1}
                                </p>
                                <p id="commentary-p2" className={`${fontMap.text} font-[450] text-[15px] leading-[180%] tracking-[-10%]`}>
                                    {currentCommentary.p2}
                                </p>
                            </div>
                            
                            <div className="Go-To-Link flex gap-5" id="Go-To-Link-Container">
                                <img src={LinkPlaceholderIcon} alt="아이콘" className="w-[18px] h-[18px] translate-y-0.5" />
                                {artwork.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${fontMap.italic} inline-flex items-center w-auto font-normal text-sm leading-none tracking-normal underline decoration-solid underline-offset-px decoration-1 decoration-skip-ink-true`}
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>

                            <div className="Artist-Detail-Info w-full h-[200px] border border-label box-border">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div
                className={`button_list w-[calc(100%-80px)] fixed left-10 transition-all duration-200 overflow-hidden z-[9999] ${isButtonListActive ? 'bottom-10' : 'bottom-[-50px]'}`}
            >
                <button
                    onClick={handleGoBack}
                    id="goBackBottom"
                    className={`go_back button_list_go_back float-left bg-white border border-label py-3 px-6 text-center rounded-[60px] cursor-pointer text-base leading-none tracking-normal inline-flex items-center`}
                >
                    <img src={GoBackIcon} alt="뒤로 가기 버튼" className="mr-3 w-4 h-4 transform translate-y-px" />
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
                        onClick={() => setCurrentLanguage('kr')}
                        id="Lang-Switch-Kr-Btn"
                        className={`${fontMap.mediumItalic} Lang-Switch-Kr flex-1 py-3 px-0 border-none bg-label text-fill-invert text-base cursor-pointer transition-colors duration-200 flex justify-center items-center ${currentLanguage === 'kr' ? 'underline decoration-1 underline-offset-[5px]' : ''}`}
                    >
                        KR
                    </button>
                    <button
                        onClick={() => setCurrentLanguage('en')}
                        id="Lang-Switch-En-Btn"
                        className={`${fontMap.mediumItalic} Lang-Switch-En flex-1 py-3 px-0 border-none bg-label text-fill-invert text-base cursor-pointer transition-colors duration-200 flex justify-center items-center ${currentLanguage === 'en' ? 'underline decoration-1 underline-offset-[5px]' : ''}`}
                    >
                        EN
                    </button>
                </div>
            </div>

            <footer className="w-full h-[554px] pt-[240px] box-border">
                <Footer />
            </footer>
        </div>
    );
}