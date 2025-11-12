export const InstagramIcon = "/lottie/WorkIcon/instagram.svg";
export const EmailIcon = "/lottie/WorkIcon/email.svg";
export const DefaultLinkIcon = "/lottie/WorkIcon/link.svg";
export const MakersLinkIconPlaceholder = "https://placehold.co/16x16";

export const getLinkIcon = (link) => {
    const url = (link.url || '').toLowerCase();
    const alt = (link.alt || '').toLowerCase();

    if (url.includes('instagram') || url.includes('ig') || alt.includes('instagram')) {
        return InstagramIcon;
    }
    if (url.includes('web') || url.includes('site') || alt.includes('website')) {
        return WebsiteIcon;
    }
    if (url.includes('mailto') || url.includes('email') || alt.includes('email')) {
        return EmailIcon;
    }

    if (link.icon && link.icon !== MakersLinkIconPlaceholder) {
        return link.icon;
    }

    return DefaultLinkIcon;
};

export const initialArtworks = [
    {
        id: "art001",
        title: "[]",
        artist: "손정우 Jeongwoo Son",
        description: "시 '꽃'을 재해석한 미디어 아트.",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "손정우 Jeongwoo Son", links: [] }
        ]
    },
    {
        id: "art002",
        title: "닷(Dot)이듣기 Listening Dot",
        artist: "도티즈 dotties",
        description: "작은 부품 소리가 모여 소리로 만든 시계가 되는 라이브 퍼포먼스",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "정다혜 Dahye Jeong", links: [] },
            { name: "김주성 Joosung Kim", links: [] },
            { name: "김주연 Juyoun Kim", links: [] },
            { name: "황도경 Dokyung Hwang", links: [] }
        ]
    },
    {
        id: "art003",
        title: "면풍2 Wind2",
        artist: "키스 갈기기 Throwing Kith",
        description: "이제는, 우리 곁에 항상 있던 바람을 마주할 때이다.",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "서기수 Kith Suh", links: [] },
            { name: "고은서 Eunseo Ko", links: [] }
        ]
    },
    {
        id: "art004",
        title: "물숨 Mulsum",
        artist: "자발적 과로단 self over workers",
        description: "번아웃에 빠진 청년이 쓰레기로 가득한 집에서 벗어나 일상을 되찾기까지",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "설혜인 Hyein Seol", links: [] },
            { name: "양윤서 Yunseo Yang", links: [] },
            { name: "남현지 Hyunjee Nam", links: [] },
            { name: "노수현 Suhyeon Roh", links: [] },
            { name: "김무영 Muyeong Kim", links: [] }
        ]
    },
    {
        id: "art005",
        title: "블루 네거티브 Blue Negative",
        artist: "로피 Roffi",
        description: "감정이 없는 로봇들의 도시, 재즈가 울려 퍼진 순간 변화가 시작된다.",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "김인규 Ingyu Kim", links: [] },
            { name: "신채원 Chaewon Shin", links: [] },
            { name: "허준하 Junha Heo", links: [] },
            { name: "이소윤 Soyoun Lee", links: [] },
            { name: "천성하 Sungha Cheon", links: [] }
        ]
    },
    {
        id: "art006",
        title: "삶은 설화 SOUL-hwa",
        artist: "맷돌 스튜디오 Maetdol Studio",
        description: "삶 속에서 한국 설화가 우리를 사랑하는 방식을 담은 애니메이션 & 웹게임",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "문금미 Geummi Moon", links: [] },
            { name: "오현서 Hyeonseo Oh", links: [] },
            { name: "곽민서 Minseo Kwak", links: [] },
            { name: "이다은 Daeun Lee", links: [] }
        ]
    },
    {
        id: "art007",
        title: "심 (心) Sim(心): The Forbidden Bite",
        artist: "뚜앙즈 Tuangz",
        description: "한국 전통 정서와 감정을 풀어낸, 기묘하고 아름다운 디저트 브랜드 「심」",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "김인규 Ingyu Kim", links: [] },
            { name: "최윤정 Yunjeong Choi", links: [] },
            { name: "김시리 Siri Kim", links: [] }
        ]
    },
    {
        id: "art008",
        title: "아지트 A-ZIT",
        artist: "야너이상해 Hey, What's wrong with you?",
        description: "어린 시절의 추억을 당신만의 소리로 만들어드립니다... *",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "김태희 Taehee Kim", links: [] },
            { name: "신서윤 Seoyun Shin", links: [] },
            { name: "유지오 Jio Yu", links: [] }
        ]
    },
    {
        id: "art009",
        title: "에린의 신들  Gods of Érin",
        artist: "와이칼리버 Ycalibur",
        description: "켈트 신화를 바탕으로 한 전략 보드게임",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "박선우 Sunwoo Park", links: [] },
            { name: "임동준 Dongjun Lim", links: [] }
        ]
    },
    {
        id: "art010",
        title: "영원의 초상  Figure of Eternity",
        artist: "아마따 Amatuer",
        description: "거슬러 붙잡고 싶지만 그렇다고 계속하여 마주할 수 없는 마음을 담아.",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "김현지 Hyunji Kim", links: [] },
            { name: "신서윤 Seoyun Shin", links: [] },
            { name: "문금미 Geummi Moon", links: [] }
        ]
    },
    {
        id: "art011",
        title: "영원한 여름: 노년 여성의 얼굴 Eternal Summer: Faces of elder women",
        artist: "투진스 2genes",
        description: "생산성과 돌봄으로 빚어진 그녀들의 얼굴에 대해",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "김현진 Hyeonjin Kim", links: [] },
            { name: "배윤진 Yunjin Bae", links: [] }
        ]
    },
    {
        id: "art012",
        title: "옴 Ohm",
        artist: "더 스님스 The Seunims",
        description: "끝없이 떠오르는 마음의 소란을 조용히 알아차리고 흘려보내는 태도",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "박민지 Minji Park", links: [] },
            { name: "김서영 Seoyoung Kim", links: [] },
            { name: "김시리 Siri Kim", links: [] }
        ]
    },
    {
        id: "art013",
        title: "우리가 잊지 말아야 할 것은 무엇인가요 Things We Must Remember",
        artist: "기록도록 GRDR",
        description: "여러분에게 우리가 잊지 말아야 할 것을 묻고 그 답을 세상과 나눌 수 있도록 돕습니다.",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "최윤서 Yunseo Choi", links: [] },
            { name: "김시윤 Siyun Kim", links: [] },
            { name: "김대희 Daehee Kim", links: [] }
        ]
    },
    {
        id: "art014",
        title: "찰나비(刹那비) Rain of Kṣaṇa",
        artist: "비상명(非常名) Project Kṣaṇa",
        description: "억겁의 시간속에서 당신은 무엇인가?",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "최서빈 Seobin Choi", links: [] },
            { name: "류해성 Haesung Ryu", links: [] }
        ]
    },
    {
        id: "art015",
        title: "토스트 아웃 TOAST OUT",
        artist: "노릇노릇 NRNR",
        description: "TOAST OUT: 처음 꺼내보는 우리들의 진솔함",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "김수임 Suim Kim", links: [] },
            { name: "유지오 Jio Yu", links: [] },
            { name: "이예나 Yena Lee", links: [] }
        ]
    },
    {
        id: "art016",
        title: "튀어나와요 감각의 숲 Watch Out!",
        artist: "서탭입니다 We're steff",
        description: "저희 카페는 음료를 팔지 않습니다. 저희 카페에서는 감각을 판매합니다.",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "천성하 Sungha Cheon", links: [] },
            { name: "허준하 Junha Heo", links: [] },
            { name: "오현서 Hyeonseo Oh", links: [] },
            { name: "곽민서 Minseo Kwak", links: [] },
            { name: "이소윤 Soyoun Lee", links: [] }
        ]
    },
    {
        id: "art017",
        title: "파브리카: 자유가 시작되는 곳 Fabrika: where freedom begins",
        artist: "파브리카 Fabrika",
        description: "일상의 무뎌진 틈에서 ‘나의 자유’를 찾아가는 우리 모두의 여정",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "파브리카 Fabrika", links: [] }
        ]
    },
    {
        id: "art018",
        title: "허리피자 HurryPizza",
        artist: "X205",
        description: "피자 만들기를 테마로 한 아동/청소년 대상 교육용 보드게임",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "박종호 Jongho Park", links: [] },
            { name: "김지윤 Jiyun Kim", links: [] },
            { name: "임동준 Dongjun Lim", links: [] },
            { name: "최윤서 Yunseo Choi", links: [] }
        ]
    },
    {
        id: "art019",
        title: "Omi: 낯선 말하기 Omi: Breathing in the Context",
        artist: "라스트 댄스 Last Dance",
        description: "논리 분석(REBT)과 정서 공감(PCT)을 맞춤 제공하는 대화형 AI",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "노하은 Haeun Rho", links: [] },
            { name: "길민경 Minkyong Kil", links: [] }
        ]
    },
    {
        id: "art020",
        title: "D-31",
        artist: "ACTA",
        description: "미디어와 AI 억압 속에서 내 생각을 돌아보게 하는 2D 인터랙티브 게임",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "차세연 Seyeon Cha", links: [] },
            { name: "오주하 Juha Oh", links: [] },
            { name: "정태연 Taeyoen Jung", links: [] },
            { name: "임지은 Jieun Lim", links: [] },
            { name: "조현지 Hyeonji Cho", links: [] }
        ]
    },
    {
        id: "art021",
        title: "E.C.H.O.",
        artist: "CONTINUE?",
        description: "기억을 잃은 소년이 폐허가 된 도시를 탐험하며 기억을 찾는 사이드뷰 게임",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "차세연 Seyeon Cha", links: [] },
            { name: "심수민 Sumin Shim", links: [] },
            { name: "김민아 MinA Kim", links: [] },
            { name: "설혜인", links: [] }
        ]
    },
    {
        id: "art022",
        title: "web-sight",
        artist: "이건 네 번째 레슨 The fourth lesson",
        description: "아트앤테크놀로지 학과 내 네트워킹 서비스",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "곽윤희 Yoonhee Kwak", links: [] },
            { name: "설혜인 Hyein Seol", links: [] },
            { name: "양윤서 Yunseo Yang", links: [] },
            { name: "차유민 Yumin Cha", links: [] }
        ]
    },
    {
        id: "art023",
        title: "Musical Dream",
        artist: "김민수 Min Soo Kim",
        description: "모든 음악인의 꿈 같은 인터랙티브 아트",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "김민수 Min Soo Kim", links: [] }
        ]
    },
    {
        id: "art024",
        title: "Faces face",
        artist: "이윤선 Yoonseon Lee",
        description: "다양한 얼굴들을 만나보세요.",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "이윤선 Yoonseon Lee", links: [] }
        ]
    },
    {
        id: "art025",
        title: "Rest In Pixels",
        artist: "디지털 기억 재단 Digital Memory Foundation",
        description: "죽음을 디지털로 감각하고, 애도를 다시 질문하는 체험형 전시 프로젝트",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "박종호 Jongho Park", links: [] },
            { name: "윤은솔 Eunsol Yun", links: [] },
            { name: "김민서 Minseo Kim", links: [] },
            { name: "이예원 Yewon Lee", links: [] }
        ]
    },
    {
        id: "art026",
        title: "Snowball Effect",
        artist: "두바구 DBG",
        description: "체험형 미디어아트 상호작용을 통한 개인의 공동체 기여 인식 증진 프로젝트",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "장채원 Chaewon Jang", links: [] },
            { name: "설희윤 Heeyun Sul", links: [] },
            { name: "윤기완 Giwan Yoon", links: [] },
            { name: "허원준 Wonjoon Huh", links: [] }
        ]
    },
    {
        id: "art027",
        title: "NEUVERSE",
        artist: "Neuverse Lab",
        description: "온·오프라인 데이터를 개인화된 우주로 시각화하는 몰입형 XR 서비스",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "이선명 Sunmyeong Lee", links: [] },
            { name: "고은서 Eunseo Ko", links: [] },
            { name: "김은홍 Eunhong Kim", links: [] },
            { name: "송명은 Myeongeun Song", links: [] },
            { name: "이수연 Soo Yeon Lee", links: [] }
        ]
    },
    {
        id: "art028",
        title: "Tongue Torn Twice",
        artist: "티씨케이 TCK",
        description: "중심 없이 떠도는 정체성 조각들이 서로 충돌하고 겹치는 순간을 기록한다.",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "김서영 Seoyoung Kim", links: [] },
            { name: "이서정 Seojung Lee", links: [] }
        ]
    },
    {
        id: "art029",
        title: "e-mo",
        artist: "신채원 Chaewon Shin",
        description: "작업자의 취향을 꾹꾹 눌러담은 아기자기 도파민 공간. 우리 같이 놀자!",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "신채원 Chaewon Shin", links: [] }
        ]
    },
    {
        id: "art030",
        title: "GLASS LAB",
        artist: "커비 KIRBY",
        description: "생성형 인공지능을 활용한 아이웨어 디자인 도구",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "손정우 Jeongwoo Son", links: [] },
            { name: "김가윤 Kayun Kim", links: [] },
            { name: "김별 Byul Kim", links: [] },
            { name: "황인성 Inseong Hwang", links: [] }
        ]
    },
    {
        id: "art031",
        title: "Chroma",
        artist: "노진서 Noh jinseo",
        description: "미래 서강대의 모습",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "노진서 Jinseo Noh", links: [] }
        ]
    },
    {
        id: "art032",
        title: "Fragments of Me",
        artist: "Sunmyeong Lee",
        description: "소셜 미디어 이미지 AI 분류·시각화를 통한 자기 성찰 연구",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "이선명 Sunmyeong Lee", links: [] }
        ]
    },
    {
        id: "art033",
        title: "ART( )IST",
        artist: "토마토마토 tomat()mato",
        description: "손기호 인식을 통해 사운드를 생성하고 시각화하는 인터랙티브 웹",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "이연재 Yeonjae Lee", links: [] },
            { name: "조민경 Mingyeong Cho", links: [] },
            { name: "현지민 Jimin Hyun", links: [] }
        ]
    },
    {
        id: "art034",
        title: "With Lily",
        artist: "김태현 Taehyun Kim",
        description: "가상 소녀 'Lily'와의 만남, 없는 존재와의 소통",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "김태현 Taehyun Kim", links: [] }
        ]
    }
];