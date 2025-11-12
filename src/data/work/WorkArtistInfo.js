export const InstagramIcon = "/lottie/WorkIcon/instagram.svg";
export const EmailIcon = "/lottie/WorkIcon/email.svg";
export const LinkedInIcon = "/lottie/WorkIcon/linkedin.svg";
export const DefaultLinkIcon = "/lottie/WorkIcon/linkedin.svg";
export const MakersLinkIconPlaceholder = "https://placehold.co/16x16";

export const getLinkIcon = (link) => {
    const url = (link.url || '').toLowerCase();
    const alt = (link.alt || '').toLowerCase();

    if (url.includes('instagram') || url.includes('ig') || alt.includes('instagram')) {
        return InstagramIcon;
    }
    if (url.includes('linkedin') || url.includes('in/') || alt.includes('linkedin')) {
        return LinkedInIcon;
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
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954496/-_%EC%86%90%EC%A0%95%EC%9A%B0_qpc0nk.png",
        makers: [
            { name: "손정우 Jeongwoo Son", links: [
                { url: "https://www.instagram.com/sonjwooo/", alt: "Instagram" },
                { url: "mailto:sonjw7193@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art002",
        title: "닷(Dot)이듣기 Listening Dot",
        artist: "도티즈 dotties",
        description: "작은 부품 소리가 모여 소리로 만든 시계가 되는 라이브 퍼포먼스",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "정다혜 Dahye Jeong", links: [
                { url: "https://instagram.com/d.hxxye/", alt: "Instagram" },
                { url: "mailto:wjdekgp000@naver.com", alt: "Email" }
            ] },
            { name: "김주성 Joosung Kim", links: [
                { url: "https://instagram.com/blunacy_/", alt: "Instagram" },
                { url: "mailto:tjd629@naver.com", alt: "Email" }
            ] },
            { name: "김주연 Juyoun Kim", links: [
                { url: "https://instagram.com/spinacho0/", alt: "Instagram" },
                { url: "mailto:reborn2263@naver.com", alt: "Email" }
            ] },
            { name: "황도경 Dokyung Hwang", links: [
                { url: "https://instagram.com/wavybleuu/", alt: "Instagram" },
                { url: "mailto:ghkdehrud9727@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art003",
        title: "면풍2 Wind2",
        artist: "키스 갈기기 Throwing Kith",
        description: "이제는, 우리 곁에 항상 있던 바람을 마주할 때이다.",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954511/%EB%A9%B4%ED%92%8D2_%EC%8D%B8%EB%84%A4%EC%9D%BC_mnkbnb.jpg",
        makers: [
            { name: "서기수 Kith Suh", links: [
                { url: "https://instagram.com/rash_pollo/", alt: "Instagram" },
                { url: "mailto:oon08044@gmail.com", alt: "Email" }
            ] },
            { name: "고은서 Eunseo Ko", links: [
                { url: "mailto:taeyerica2468@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art004",
        title: "물숨 Mulsum",
        artist: "자발적 과로단 self over workers",
        description: "번아웃에 빠진 청년이 쓰레기로 가득한 집에서 벗어나 일상을 되찾기까지",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954513/%EB%AC%BC%EC%88%A8_%EC%8D%B8%EB%84%A4%EC%9D%BC_l581j4.png",
        makers: [
            { name: "설혜인 Hyein Seol", links: [
                { url: "https://instagram.com/hyein335210/", alt: "Instagram" }
            ] },
            { name: "양윤서 Yunseo Yang", links: [
                { url: "https://instagram.com/y.__.rano/", alt: "Instagram" },
                { url: "mailto:yunseo7196@sogang.ac.kr", alt: "Email" }
            ] },
            { name: "남현지 Hyunjee Nam", links: [
                { url: "https://instagram.com/j22.15/", alt: "Instagram" },
                { url: "mailto:jeeee22@sogang.ac.kr", alt: "Email" }
                
            ] },
            { name: "노수현 Suhyeon Roh", links: [
                { url: "https://instagram.com/i_shny_i_/", alt: "Instagram" },
                { url: "mailto:shnyz28@sogang.ac.kr", alt: "Email" }
            ] },
            { name: "김무영 Muyeong Kim", links: [
                { url: "https://instagram.com/moo_bbang/", alt: "Instagram" },
                { url: "mailto:moxnoxox@sogang.ac.kr", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art005",
        title: "블루 네거티브 Blue Negative",
        artist: "로피 Roffi",
        description: "감정이 없는 로봇들의 도시, 재즈가 울려 퍼진 순간 변화가 시작된다.",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954514/%EB%B8%94%EB%A3%A8%EB%84%A4%EA%B1%B0%ED%8B%B0%EB%B8%8C_%EC%8D%B8%EB%84%A4%EC%9D%BC_cdzwzz.png",
        makers: [
            { name: "김인규 Ingyu Kim", links: [
                { url: "https://instagram.com/slothmind.png/", alt: "Instagram" },
                { url: "mailto:sloth1819@naver.com", alt: "Email" }
            ] },
            { name: "신채원 Chaewon Shin", links: [
                { url: "https://instagram.com/60dy_one/", alt: "Instagram" },
                { url: "mailto:scw0203@gmail.com", alt: "Email" }
            ] },
            { name: "허준하 Junha Heo", links: [
                { url: "https://instagram.com/heownsgk/", alt: "Instagram" },
                { url: "mailto:hjh03070427@gmail.com", alt: "Email" }
            ] },
            { name: "이소윤 Soyoun Lee", links: [
                { url: "https://instagram.com/ima_tortoise/", alt: "Instagram" },
                { url: "mailto:yoonlee@u.sogang.ac.kr", alt: "Email" }
            ] },
            { name: "천성하 Sungha Cheon", links: [
                { url: "https://instagram.com/1o0o_sh_/", alt: "Instagram" },
                { url: "mailto:030314molly1k@naver.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art006",
        title: "삶은 설화 SOUL-hwa",
        artist: "맷돌 스튜디오 Maetdol Studio",
        description: "삶 속에서 한국 설화가 우리를 사랑하는 방식을 담은 애니메이션 & 웹게임",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954516/%EC%82%B6%EC%9D%80%EC%84%A4%ED%99%94_%EB%A7%B7%EB%8F%8C%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4__%EC%8D%B8%EB%84%A4%EC%9D%BC_%EC%9D%B4%EB%AF%B8%EC%A7%80_-_%EC%9D%B4%EB%8B%A4%EC%9D%80_mej1dm.png",
        makers: [
            { name: "문금미 Geummi Moon", links: [
                { url: "https://instagram.com/forsz0/", alt: "Instagram" },
                { url: "mailto:rmaal520@gmail.com", alt: "Email" }
            ] },
            { name: "오현서 Hyeonseo Oh", links: [
                { url: "https://instagram.com/peri.h_sso/", alt: "Instagram" },
                { url: "mailto:hsoh0408@gmail.com", alt: "Email" }
            ] },
            { name: "곽민서 Minseo Kwak", links: [
                { url: "https://instagram.com/fogpoc/", alt: "Instagram" },
                { url: "mailto:minsi27@icloud.com", alt: "Email" }
            ] },
            { name: "이다은 Daeun Lee", links: [
                { url: "https://instagram.com/roof_an.age/", alt: "Instagram" },
                { url: "mailto:feel_2015@naver.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art007",
        title: "심 (心) Sim(心): The Forbidden Bite",
        artist: "뚜앙즈 Tuangz",
        description: "한국 전통 정서와 감정을 풀어낸, 기묘하고 아름다운 디저트 브랜드 「심」",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954517/%EC%8B%AC_%EC%8D%B8%EB%84%A4%EC%9D%BC_-_%EC%8B%9C%EB%A6%AC%EB%A1%B1_vyx7ua.png",
        makers: [
            { name: "김인규 Ingyu Kim", links: [] },
            { name: "최윤정 Yunjeong Choi", links: [
                { url: "https://instagram.com/1chi.g5/", alt: "Instagram" },
                { url: "mailto:1chig5.obj@gmail.com", alt: "Email" }
            ] },
            { name: "김시리 Siri Kim", links: [
                { url: "https://instagram.com/sirilongstocking/", alt: "Instagram" },
                { url: "mailto:ksrksr777@naver.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art008",
        title: "아지트 A-ZIT",
        artist: "야너이상해 Hey, What's wrong with you?",
        description: "어린 시절의 추억을 당신만의 소리로 만들어드립니다... *",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954519/%EC%95%84%EC%A7%80%ED%8A%B8_%EC%8D%B8%EB%84%A4%EC%9D%BC_-_%EC%8B%A0%EC%84%9C%EC%9C%A4_imnumt.png",
        makers: [
            { name: "김태희 Taehee Kim", links: [
                { url: "mailto:thkim4459@gmail.com", alt: "Email" }
            ] },
            { name: "신서윤 Seoyun Shin", links: [
                { url: "https://instagram.com/seoyunscene/", alt: "Instagram" },
                { url: "mailto:shnsn0114@sogang.ac.kr", alt: "Email" }
            ] },
            { name: "유지오 Jio Yu", links: [
                { url: "https://instagram.com/life_like_monji/", alt: "Instagram" },
                { url: "mailto:jioyu14@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art009",
        title: "에린의 신들  Gods of Érin",
        artist: "와이칼리버 Ycalibur",
        description: "켈트 신화를 바탕으로 한 전략 보드게임",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954527/%EC%97%90%EB%A6%B0%EC%9D%98%EC%8B%A0%EB%93%A4_%EC%8D%B8%EB%84%A4%EC%9D%BC_vwuvnw.png",
        makers: [
            { name: "박선우 Sunwoo Park", links: [
                { url: "https://instagram.com/lindensun0507/", alt: "Instagram" },
                { url: "mailto:lindensun0507@gmail.com", alt: "Email" }
            ] },
            { name: "임동준 Dongjun Lim", links: [
                { url: "https://instagram.com/n0va_0/", alt: "Instagram" },
                { url: "mailto:nova903@sogang.ac.kr", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art010",
        title: "영원의 초상  Figure of Eternity",
        artist: "아마따 Amatuer",
        description: "거슬러 붙잡고 싶지만 그렇다고 계속하여 마주할 수 없는 마음을 담아.",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954523/%EC%98%81%EC%B4%88_%EC%8D%B8%EB%84%A4%EC%9D%BC_-_%EC%8B%A0%EC%84%9C%EC%9C%A4_jv1o1y.jpg",
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
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954524/%EC%98%81%EC%9B%90%ED%95%9C%EC%97%AC%EB%A6%84_%EC%8D%B8%EB%84%A4%EC%9D%BC_kj28ee.png",
        makers: [
            { name: "김현진 Hyeonjin Kim", links: [
                { url: "mailto:wlswls0121@gmail.com", alt: "Email" }
            ] },
            { name: "배윤진 Yunjin Bae", links: [
                { url: "https://instagram.com/ldrlof_ljin/", alt: "Instagram" },
                { url: "mailto:qodbswls0304@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art012",
        title: "옴 Ohm",
        artist: "더 스님스 The Seunims",
        description: "끝없이 떠오르는 마음의 소란을 조용히 알아차리고 흘려보내는 태도",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954524/%EC%98%B4_%EC%8D%B8%EB%84%A4%EC%9D%BC_khk6hr.png",
        makers: [
            { name: "박민지 Minji Park", links: [
                { url: "https://instagram.com/mmm.mj_/", alt: "Instagram" },
                { url: "mailto:minjip0810@gmail.com", alt: "Email" }
            ] },
            { name: "김서영 Seoyoung Kim", links: [
                { url: "https://instagram.com/maloismycat/", alt: "Instagram" },
                { url: "mailto:seoyoungkimchi@gmail.com", alt: "Email" }
            ] },
            { name: "김시리 Siri Kim", links: [
                { url: "https://instagram.com/sirilongstocking/", alt: "Instagram" },
                { url: "mailto:srksr777@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art013",
        title: "우리가 잊지 말아야 할 것은 무엇인가요 Things We Must Remember",
        artist: "기록도록 GRDR",
        description: "여러분에게 우리가 잊지 말아야 할 것을 묻고 그 답을 세상과 나눌 수 있도록 돕습니다.",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954526/%EC%9A%B0%EC%9E%8A%EB%A7%90_%EC%8D%B8%EB%84%A4%EC%9D%BC_ne9trv.png",
        makers: [
            { name: "최윤서 Yunseo Choi", links: [
                { url: "https://instagram.com/yschoi0919/", alt: "Instagram" },
                { url: "mailto:yschoi0919@gmail.com", alt: "Email" }
            ] },
            { name: "김시윤 Siyun Kim", links: [
                { url: "https://instagram.com/nuy.lv_/", alt: "Instagram" },
                { url: "mailto:tldbs37@gmail.com", alt: "Email" }
            ] },
            { name: "김대희 Daehee Kim", links: [
                { url: "mailto:kdaehee1021@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art014",
        title: "찰나비(刹那비) Rain of Kṣaṇa",
        artist: "비상명(非常名) Project Kṣaṇa",
        description: "억겁의 시간속에서 당신은 무엇인가?",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954528/%EC%B0%B0%EB%82%98%EB%B9%84_%EC%8D%B8%EB%84%A4%EC%9D%BC_-_%EB%A5%98%ED%95%B4%EC%84%B1_h4pm5i.jpg",
        makers: [
            { name: "최서빈 Seobin Choi", links: [
                { url: "https://instagram.com/empty_binnn/", alt: "Instagram" },
                { url: "mailto:bin139271@gmail.com", alt: "Email" },
                { url: "https://www.linkedin.com/in/seobin", alt: "LinkedIn" }
            ] },
            { name: "류해성 Haesung Ryu", links: [
                { url: "https://instagram.com/egzg.up/", alt: "Instagram" },
                { url: "mailto:haesung1997@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art015",
        title: "토스트 아웃 TOAST OUT",
        artist: "노릇노릇 NRNR",
        description: "TOAST OUT: 처음 꺼내보는 우리들의 진솔함",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762953843/ToastOut_%EC%8D%B8%EB%84%A4%EC%9D%BC%EC%9D%B4%EB%AF%B8%EC%A7%80_enjz5l.png",
        makers: [
            { name: "김수임 Suim Kim", links: [
                { url: "https://instagram.com/li_ssome._/", alt: "Instagram" },
                { url: "mailto:softee220@naver.com", alt: "Email" }
            ] },
            { name: "유지오 Jio Yu", links: [
                { url: "https://instagram.com/monjio04/", alt: "Instagram" },
                { url: "mailto:jioyu14@gmail.com", alt: "Email" }
            ] },
            { name: "이예나 Yena Lee", links: [
                { url: "https://instagram.com/_yena.lee/", alt: "Instagram" },
                { url: "mailto:cellano100@naver.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art016",
        title: "튀어나와요 감각의 숲 Watch Out!",
        artist: "서탭입니다 We're steff",
        description: "저희 카페는 음료를 팔지 않습니다. 저희 카페에서는 감각을 판매합니다.",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954509/%EA%B0%90%EA%B0%81%EC%9D%98%EC%88%B2_%EC%8D%B8%EB%84%A4%EC%9D%BC_i0inan.jpg",
        makers: [
            { name: "천성하 Sungha Cheon", links: [
                { url: "https://instagram.com/1o0o_sh_/", alt: "Instagram" },
                { url: "mailto:030314molly1k@naver.com", alt: "Email" }
            ] },
            { name: "허준하 Junha Heo", links: [
                { url: "https://instagram.com/heownsgk/", alt: "Instagram" },
                { url: "mailto:hjh03070427@gmail.com", alt: "Email" }
            ] },
            { name: "오현서 Hyeonseo Oh", links: [
                { url: "https://instagram.com/peri.h_sso/", alt: "Instagram" },
                { url: "mailto:hsoh0408@gmail.com", alt: "Email" }
            ] },
            { name: "곽민서 Minseo Kwak", links: [
                { url: "https://instagram.com/fogpoc/", alt: "Instagram" },
                { url: "mailto:minsi27@icloud.com", alt: "Email" }
            ] },
            { name: "이소윤 Soyoun Lee", links: [
                { url: "https://instagram.com/ima_tortoise/", alt: "Instagram" },
                { url: "mailto:yoonlee@u.sogang.ac.kr", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art017",
        title: "파브리카: 자유가 시작되는 곳 Fabrika: where freedom begins",
        artist: "파브리카 Fabrika",
        description: "일상의 무뎌진 틈에서 ‘나의 자유’를 찾아가는 우리 모두의 여정",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954532/%ED%8C%8C%EB%B8%8C%EB%A6%AC%EC%B9%B4_%EC%8D%B8%EB%84%A4%EC%9D%BC_jh3yto.png",
        makers: [
            { name: "파브리카 Fabrika", links: [
                { url: "https://instagram.com/fabrika.cell/", alt: "Instagram" },
                { url: "mailto:fabrika2024@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art018",
        title: "허리피자 HurryPizza",
        artist: "X205",
        description: "피자 만들기를 테마로 한 아동/청소년 대상 교육용 보드게임",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954532/%ED%97%88%EB%A6%AC%ED%94%BC%EC%9E%90_%EC%8D%B8%EB%84%A4%EC%9D%BC_-_Jiyun_Kim_gwowms.png",
        makers: [
            { name: "박종호 Jongho Park", links: [
                { url: "https://instagram.com/jongho0211/", alt: "Instagram" },
                { url: "mailto:park020211@sogang.ac.kr", alt: "Email" }
            ] },
            { name: "김지윤 Jiyun Kim", links: [
                { url: "https://instagram.com/cgxyooon/", alt: "Instagram" },
                { url: "mailto:olgayooon@gmail.com", alt: "Email" }
            ] },
            { name: "임동준 Dongjun Lim", links: [
                { url: "https://instagram.com/n0va_0/", alt: "Instagram" },
                { url: "mailto:nova903@sogang.ac.kr", alt: "Email" }
            ] },
            { name: "최윤서 Yunseo Choi", links: [
                { url: "https://instagram.com/yschoi0919/", alt: "Instagram" },
                { url: "mailto:yschoi0919@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art019",
        title: "Omi: 낯선 말하기 Omi: Breathing in the Context",
        artist: "라스트 댄스 Last Dance",
        description: "논리 분석(REBT)과 정서 공감(PCT)을 맞춤 제공하는 대화형 AI",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "노하은 Haeun Rho", links: [
                { url: "mailto:haeunrho01@gmail.com", alt: "Email" },
                { url: "https://www.linkedin.com/in/haeun-rho", alt: "LinkedIn" }
            ] },
            { name: "길민경 Minkyong Kil", links: [
                { url: "mailto:eaim6262@naver.com", alt: "Email" },
                { url: "https://www.linkedin.com/in/al3yd1s", alt: "LinkedIn" }
            ] }
        ]
    },
    {
        id: "art020",
        title: "D-31",
        artist: "ACTA",
        description: "미디어와 AI 억압 속에서 내 생각을 돌아보게 하는 2D 인터랙티브 게임",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954501/D31_Thumbnail_Image_-_%EC%98%A4%EC%A3%BC%ED%95%98_fq20vt.png",
        makers: [
            { name: "차세연 Seyeon Cha", links: [
                { url: "mailto:chaseyeon02@gmail.com", alt: "Email" }
            ] },
            { name: "오주하 Juha Oh", links: [
                { url: "mailto:sophia2004714@gmail.com", alt: "Email" }
            ] },
            { name: "정태연 Taeyoen Jung", links: [
                { url: "mailto:xopowo2006@gmail.com", alt: "Email" }
            ] },
            { name: "임지은 Jieun Lim", links: [
                { url: "mailto:dlalim112@gmail.com", alt: "Email" }
            ] },
            { name: "조현지 Hyeonji Cho", links: [
                { url: "mailto:ji090633@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art021",
        title: "E.C.H.O.",
        artist: "CONTINUE?",
        description: "기억을 잃은 소년이 폐허가 된 도시를 탐험하며 기억을 찾는 사이드뷰 게임",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954500/E.C.H.O._%EC%8D%B8%EB%84%A4%EC%9D%BC_-_%EC%B0%A8%EC%84%B8%EC%97%B0_ygczd4.png",
        makers: [
            { name: "차세연 Seyeon Cha", links: [
                { url: "mailto:chaseyeon02@gmail.com", alt: "Email" }
            ] },
            { name: "심수민 Sumin Shim", links: [
                { url: "mailto:suminarmy1@gmail.com", alt: "Email" }
            ] },
            { name: "김민아 MinA Kim", links: [
                { url: "mailto:minakim3256@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art022",
        title: "web-sight",
        artist: "이건 네 번째 레슨 The fourth lesson",
        description: "아트앤테크놀로지 학과 내 네트워킹 서비스",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954507/web-sight_%EC%8D%B8%EB%84%A4%EC%9D%BC_e9hxpo.png",
        makers: [
            { name: "곽윤희 Yoonhee Kwak", links: [
                { url: "mailto:gagyun222@sogang.ac.kr", alt: "Email" }
            ] },
            { name: "설혜인 Hyein Seol", links: [
                { url: "https://instagram.com/hyein335210/", alt: "Instagram" }
            ] },
            { name: "양윤서 Yunseo Yang", links: [
                { url: "https://instagram.com/y.__.rano/", alt: "Instagram" },
                { url: "mailto:yunseo7196@sogang.ac.kr", alt: "Email" }
            ] },
            { name: "차유민 Yumin Cha", links: [
                { url: "mailto:shrimpmini0405@sogang.ac.kr", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art023",
        title: "Musical Dream",
        artist: "김민수 Min Soo Kim",
        description: "모든 음악인의 꿈 같은 인터랙티브 아트",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762955526/MusicalDream_%EC%8D%B8%EB%84%A4%EC%9D%BC_jir0wp.png",
        makers: [
            { name: "김민수 Min Soo Kim", links: [
                { url: "mailto:minsoofelixkim@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art024",
        title: "Faces face",
        artist: "이윤선 Yoonseon Lee",
        description: "다양한 얼굴들을 만나보세요.",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954501/Faces_%EC%8D%B8%EB%84%A4%EC%9D%BC_xqws7o.png",
        makers: [
            { name: "이윤선 Yoonseon Lee", links: [
                { url: "mailto:prinys00@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art025",
        title: "Rest In Pixels",
        artist: "디지털 기억 재단 Digital Memory Foundation",
        description: "죽음을 디지털로 감각하고, 애도를 다시 질문하는 체험형 전시 프로젝트",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954509/RIP_%EC%8D%B8%EB%84%A4%EC%9D%BC_a5nosj.png",
        makers: [
            { name: "박종호 Jongho Park", links: [
                { url: "mailto:park020211@sogang.ac.kr", alt: "Email" }
            ] },
            { name: "윤은솔 Eunsol Yun", links: [
                { url: "mailto:yun1104@sogang.ac.kr", alt: "Email" }
            ] },
            { name: "김민서 Minseo Kim", links: [
                { url: "mailto:kimminseo0416@gmail.com", alt: "Email" }
            ] },
            { name: "이예원 Yewon Lee", links: [
                { url: "mailto:jenny6874@sogang.ac.kr", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art026",
        title: "Snowball Effect",
        artist: "두바구 DBG",
        description: "체험형 미디어아트 상호작용을 통한 개인의 공동체 기여 인식 증진 프로젝트",
        image: "https://placehold.co/250x340",
        makers: [
            { name: "장채원 Chaewon Jang", links: [
                { url: "https://instagram.com/caffaeine/", alt: "Instagram" },
                { url: "mailto:chewingon@naver.com", alt: "Email" }
            ] },
            { name: "설희윤 Heeyun Sul", links: [
                { url: "https://instagram.com/abm0ww/", alt: "Instagram" },
                { url: "mailto:heeyun0301@gmail.com", alt: "Email" }
            ] },
            { name: "윤기완 Giwan Yoon", links: [
                { url: "https://instagram.com/gwan_yn/", alt: "Instagram" },
                { url: "mailto:davidmario519@gmail.com", alt: "Email" }
            ] },
            { name: "허원준 Wonjoon Huh", links: [
                { url: "https://instagram.com/bolt0122/", alt: "Instagram" },
                { url: "mailto:bolt0122@naver.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art027",
        title: "NEUVERSE",
        artist: "Neuverse Lab",
        description: "온·오프라인 데이터를 개인화된 우주로 시각화하는 몰입형 XR 서비스",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954504/Neuverse_Thumbnail_-_SunMyeong_Lee_budira.png",
        makers: [
            { name: "이선명 Sunmyeong Lee", links: [
                { url: "mailto:03leesun@gmail.com", alt: "Email" },
                { url: "https://www.linkedin.com/in/sunmyeonglee/", alt: "LinkedIn" }
            ] },
            { name: "고은서 Eunseo Ko", links: [
                { url: "https://instagram.com/k0i.es/", alt: "Instagram" },
                { url: "mailto:taeyerica2468@gmail.com", alt: "Email" }
            ] },
            { name: "김은홍 Eunhong Kim", links: [
                { url: "https://instagram.com/_hong0l/", alt: "Instagram" },
                { url: "its4hong@gmail.com", alt: "Email" }
            ] },
            { name: "송명은 Myeongeun Song", links: [
                { url: "https://instagram.com/light_me__01/", alt: "Instagram" },
                { url: "mailto:songmyeongeun7@gmail.com", alt: "Email" }
            ] },
            { name: "이수연 Soo Yeon Lee", links: [
                { url: "mailto:sooyeon737@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art028",
        title: "Tongue Torn Twice",
        artist: "티씨케이 TCK",
        description: "중심 없이 떠도는 정체성 조각들이 서로 충돌하고 겹치는 순간을 기록한다.",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954529/%ED%8B%B0%ED%8B%B0%ED%8B%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_%EC%B5%9C%EC%A2%85%EB%B3%B8_-_Seoyoung_Kim_ddurni.jpg",
        makers: [
            { name: "김서영 Seoyoung Kim", links: [
                { url: "mailto:seoyoungkimchi@gmail.com", alt: "Email" }
            ] },
            { name: "이서정 Seojung Lee", links: [
                { url: "mailto:leeseojungjina@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art029",
        title: "e-mo",
        artist: "신채원 Chaewon Shin",
        description: "작업자의 취향을 꾹꾹 눌러담은 아기자기 도파민 공간. 우리 같이 놀자!",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954499/e-mo_%EC%8D%B8%EB%84%A4%EC%9D%BC_plxtn7.jpg",
        makers: [
            { name: "신채원 Chaewon Shin", links: [
                { url: "https://instagram.com/60dy_one_/", alt: "Instagram" },
                { url: "mailto:scw0203@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art030",
        title: "GLASS LAB",
        artist: "커비 KIRBY",
        description: "생성형 인공지능을 활용한 아이웨어 디자인 도구",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954502/GlassLab_%EC%8D%B8%EB%84%A4%EC%9D%BC_c2gu5h.png",
        makers: [
            { name: "손정우 Jeongwoo Son", links: [] },
            { name: "김가윤 Kayun Kim", links: [
                { url: "mailto:gykim0129@gmail.com", alt: "Email" }
            ] },
            { name: "김별 Byul Kim", links: [
                { url: "mailto:byul88byul@gmail.com", alt: "Email" }
            ] },
            { name: "황인성 Inseong Hwang", links: [
                { url: "mailto:jacob011011@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art031",
        title: "Chroma",
        artist: "노진서 Noh jinseo",
        description: "미래 서강대의 모습",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954497/Chroma_%EC%8D%B8%EB%84%A4%EC%9D%BC_v0p9yb.png",
        makers: [
            { name: "노진서 Jinseo Noh", links: [
                { url: "https://instagram.com/dotoro_o/", alt: "Instagram" },
                { url: "mailto:jinseojj@naver.com", alt: "Email" }
            ] }
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
            { name: "이연재 Yeonjae Lee", links: [
                { url: "https://instagram.com/leeyeonzh/", alt: "Instagram" },
                { url: "mailto:yeonzhry@gmail.com", alt: "Email" }
            ] },
            { name: "조민경 Mingyeong Cho", links: [
                { url: "https://instagram.com/firohdkv/", alt: "Instagram" },
                { url: "mailto:alsrudlovepresent@gmail.com", alt: "Email" }
            ] },
            { name: "현지민 Jimin Hyun", links: [
                { url: "https://instagram.com/hyunzimn/", alt: "Instagram" },
                { url: "mailto:hyunzimn@gmail.com", alt: "Email" }
            ] }
        ]
    },
    {
        id: "art034",
        title: "With Lily",
        artist: "김태현 Taehyun Kim",
        description: "가상 소녀 'Lily'와의 만남, 없는 존재와의 소통",
        image: "https://res.cloudinary.com/dbw1ckgzr/image/upload/v1762954509/WithLily_%EC%8D%B8%EB%84%A4%EC%9D%BC_kie6bf.jpg",
        makers: [
            { name: "김태현 Taehyun Kim", links: [
                { url: "https://instagram.com/9uququ9u4787/", alt: "Instagram" },
                { url: "mailto:9uququ9u4787@gmail.com", alt: "Email" }
            ] }
        ]
    }
];