import CloseButton from "../../components/archive/CloseButton";
import StaffProfile from "../../components/archive/StaffProfile";
import Footer from "../../components/Footer";
import images from "../../data/archive/staffprofile.json";

export default function Staff({ onClose }) {
  const rowGrid =
    "grid gap-2 grid-cols-5 max-desktop:grid-cols-4 max-tablet:grid-cols-3 max-mobile:grid-cols-2";

  return (
    <div className="flex flex-col min-h-dvh bg-mint-6">
      <div className="top-0 inset-x-0 z-10 flex justify-center px-4">
        <button onClick={onClose}>
          <CloseButton />
        </button>
      </div>
      <div className="py-10 min-desktop:px-[120px] min-tablet:px-10 max-tablet:px-5 flex flex-col gap-[80px]">
        {/* 크리에이티브 디렉터 */}
        <section className="flex flex-col gap-5 w-full">
          <div className="text-label text-[22px] max-tablet:text-[18px] font-heavy flex gap-3 max-[510px]:flex-col max-[510px]:gap-0">
            <p>크리에이티브 디렉터</p>
            <p className="italic">Creative Director</p>
          </div>
          <div className={rowGrid}>
            <StaffProfile
              name="김현지"
              nameEng="Hyunji Kim"
              mail="rlagus0424@naver.com"
              imagesrc={images.Hyunji}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
          </div>
        </section>

        {/* 전시팀 */}
        <section className="flex flex-col gap-5 w-full">
          <div className="text-label text-[22px] max-tablet:text-[18px] font-heavy  flex gap-3">
            <p>전시팀</p>
            <p className="italic">Exhibition Team</p>
          </div>
          <div className={rowGrid}>
            <StaffProfile
              lead="Team Lead"
              name="김현진"
              nameEng="Hyeonjin Kim"
              mail="wlswls0121@gmail.com"
              imagesrc={images.Hyeonjin}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="신서윤"
              nameEng="Seoyun Shin"
              mail="tlstjdbs2717@naver.com"
              imagesrc={images.Seoyun}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="윤세은"
              nameEng="Seeun Yoon"
              mail="dongglee0811@naver.com"
              insta="y_sennn"
              imagesrc={images.Seeun}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="이윤선"
              nameEng="Yoonseon Lee"
              mail="prinys00@gmail.com"
              imagesrc={images.Yoonseon}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="황나금"
              nameEng="Nageum Hwang"
              mail="0na4ge0um8@naver.com"
              imagesrc={images.Nageum}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
          </div>
        </section>

        {/* 프로그램팀 */}
        <section className="flex flex-col gap-5 w-full">
          <div className="text-label text-[22px] max-tablet:text-[18px] font-heavy  flex gap-3">
            <p>프로그램팀</p>
            <p className="italic">Program Team</p>
          </div>
          <div className={rowGrid}>
            <StaffProfile
              lead="Team Lead"
              name="오제우"
              nameEng="Jewoo Oh"
              mail="jewoo0515@gmail.com"
              imagesrc={images.Jewoo}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="김예찬"
              nameEng="Yechan Kim"
              mail="inmy3y3@gmail.com"
              imagesrc={images.Yechan}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="우서진"
              nameEng="Seojin Woo"
              mail="woo0oseojin@gmail.com"
              imagesrc={images.Seojin}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
          </div>
        </section>

        {/* 대외협력팀 */}
        <section className="flex flex-col gap-5 w-full">
          <div className="text-label text-[22px] max-tablet:text-[18px] font-heavy  flex gap-3">
            <p>대외협력팀</p>
            <p className="italic">Business Team</p>
          </div>
          <div className={rowGrid}>
            <StaffProfile
              lead="Team Lead"
              name="김서영"
              nameEng="Seoyoung Kim"
              mail="seoyoung3804@gmail.com"
              imagesrc={images.Seoyoung}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="문금미"
              nameEng="Geummi Moon"
              mail="rmaal520@gmail.com"
              imagesrc={images.Geummi}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="유가형"
              nameEng="Kahyung Yoo"
              mail="kahyungyoo@gmail.com"
              insta="ooliviayooo"
              imagesrc={images.Gahyung}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="장채원"
              nameEng="Chaewon Jang"
              mail="vmiodneoo@gmail.com"
              insta="caffaeine"
              imagesrc={images.ChaewonJang}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
          </div>
        </section>

        {/* 비주얼 디자인팀 */}
        <section className="flex flex-col gap-5 w-full">
          <div className="text-label text-[22px] max-tablet:text-[18px] font-heavy  flex min-[709px]:gap-3 max-[709px]:flex-col max-[709px]:gap-0">
            <p>비주얼 디자인팀</p>
            <p className="italic">Visual Design Team</p>
          </div>
          <div className={rowGrid}>
            <StaffProfile
              lead="Team Lead"
              name="심유림"
              nameEng="Yurim Sim"
              mail="yurim@sogang.ac.kr"
              imagesrc={images.Yurim}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="김민서"
              nameEng="Minseo Kim"
              mail="kimminseo0416@gmail.com"
              imagesrc={images.Minseo}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="김성은"
              nameEng="Seongeun Kim "
              mail="vmiodneoo@gmail.com"
              imagesrc={images.Seoneun}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="김혜림"
              nameEng="Herim Kim"
              mail="110gigaaa@gmail.com"
              insta="hyrmm_workdiary"
              imagesrc={images.Herim}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              lead="Web Design"
              name="이선명"
              nameEng="Sunmyeong Lee"
              mail="sunnie@sogang.ac.kr"
              linkedin="https://www.linkedin.com/in/sunmyeonglee/"
              imagesrc={images.Sunmyeong}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
          </div>
        </section>

        {/* 인터렉션팀 */}
        <section className="flex flex-col gap-5 w-full">
          <div className="text-label text-[22px] max-tablet:text-[18px] font-heavy  flex gap-3">
            <p>인터랙션팀</p>
            <p className="italic">Interaction Team</p>
          </div>
          <div className={rowGrid}>
            <StaffProfile
              lead="Team Lead"
              name="김인규"
              nameEng="Ingyu Kim"
              mail="sloth1819@naver.com"
              imagesrc={images.Ingyu}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="설희윤"
              nameEng="Heeyun Sul"
              mail="heeyun0301@gmail.com"
              imagesrc={images.Heeyun}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="신채원"
              nameEng="Chaewon Shin"
              mail="scw0203@gmail.com"
              imagesrc={images.ChaewonShin}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="윤기완"
              nameEng="Giwan Yoon"
              mail="davidmario519@gmail.com"
              imagesrc={images.Giwan}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="이다은"
              nameEng="Daeun Lee"
              mail="feel_2015@naver.com"
              imagesrc={images.Daeun}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
          </div>
        </section>

        {/* 아카이브팀 */}
        <section className="flex flex-col gap-5 w-full">
          <div className="text-label text-[22px] max-tablet:text-[18px] font-heavy  flex gap-3">
            <p>아카이브팀</p>
            <p className="italic">Archive Team</p>
          </div>
          <div className={rowGrid}>
            <StaffProfile
              lead="Team Lead"
              name="강정모"
              nameEng="Jeongmo Kang"
              mail="jm151@naver.com"
              imagesrc={images.Jeongmo}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="김태희"
              nameEng="Taehee Kim"
              mail="thkim4459@gmail.com"
              imagesrc={images.Taehee}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="문예담"
              nameEng="Yedam Moon"
              mail="aquila7777@naver.com"
              imagesrc={images.Yedam}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="박민준"
              nameEng="Minjoon Park"
              mail="joonsterpark21@gmail.com"
              imagesrc={images.Minjoon}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
          </div>
        </section>

        {/* 크리에이티브 디렉터 */}
        <section className="flex flex-col gap-5 w-full">
          <div className="text-label text-[22px] max-tablet:text-[18px] font-heavy  flex min-[709px]:gap-3 max-[709px]:gap-3">
            <p>사운드 디자이너</p>
            <p className="italic">Sound Designer</p>
          </div>
          <div className={rowGrid}>
            <StaffProfile
              name="송창환"
              nameEng="Changwhan Song"
              mail="symotalumiere@gmail.com"
              imagesrc={images.Changwhan}
              objectPosClass="object-[10%_0px]"
              scaleClass="scale-100"
            />
            <StaffProfile
              name="윤기완"
              nameEng="Giwan Yoon"
              mail="davidmario519@gmail.com"
              imagesrc={images.Giwan}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
          </div>
        </section>

        {/* 크리에이티브 디렉터 */}
        <section className="flex flex-col gap-5 w-full">
          <div className="text-label text-[22px] max-tablet:text-[18px] font-heavy  flex min-[709px]:gap-3 max-[709px]:gap-3">
            <p>웹 개발</p>
            <p className="italic">Web Developer</p>
          </div>
          <div className={rowGrid}>
            <StaffProfile
              name="김서영"
              nameEng="Seoyoung Kim"
              mail="jellykeeng@naver.com"
              imagesrc={images.SeoyoungKim}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
            <StaffProfile
              name="김준수"
              nameEng="Junsu Kim"
              mail="rlawnstn2013@naver.com"
              imagesrc={images.Junsu}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
              insta="wnsuhz"
            />
            <StaffProfile
              name="이선명"
              nameEng="Sunmyeong Lee"
              mail="sunnie@sogang.ac.kr"
              linkedin="https://www.linkedin.com/in/sunmyeonglee/"
              imagesrc={images.Sunmyeong}
              objectPosClass="object-[50%_0px]"
              scaleClass="scale-110"
            />
          </div>
        </section>
      </div>
      <div className="shrink-0">
        <Footer />
      </div>
    </div>
  );
}
