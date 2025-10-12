import CloseButton from "../../components/archive/CloseButton";
import StaffProfile from "../../components/archive/StaffProfile";
import Footer from "../../components/Footer";

export default function Staff({ onClose }) {
  return (
    <div className="relative flex flex-col min-h-svh bg-mint-6">
      <div className="sticky top-0 inset-x-0 z-10 flex justify-center px-4">
        <button onClick={onClose}>
          <CloseButton />
        </button>
      </div>
      <div className="flex-1 py-10 px-[120px] flex flex-col gap-[80px]">
        <section className="flex flex-col gap-5">
          <div className="text-[24px] font-semibold italic flex gap-3">
            <p>크리에이티브 디렉터</p>
            <p>Creative Director</p>
          </div>
          <div className="flex gap-2">
            <StaffProfile name="김현지" nameEng="Hyunji Kim" />
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="text-[24px] font-semibold italic flex gap-3">
            <p>전시팀</p>
            <p>Exhibiton Team</p>
          </div>
          <div className="flex gap-2">
            <StaffProfile lead="Team Lead" />
            <StaffProfile />
            <StaffProfile />
            <StaffProfile />
            <StaffProfile />
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="text-[24px] font-semibold italic flex gap-3">
            <p>프로그램팀</p>
            <p>Program Team</p>
          </div>
          <StaffProfile />
        </section>
        <section className="flex flex-col gap-5">
          <div className="text-[24px] font-semibold italic flex gap-3">
            <p>대외협력팀</p>
            <p>Program Team</p>
          </div>
          <StaffProfile />
        </section>
        <section className="flex flex-col gap-5">
          <div className="text-[24px] font-semibold italic flex gap-3">
            <p>비주얼 디자인팀</p>
            <p>Visual Design Team</p>
          </div>
          <StaffProfile />
        </section>
        <section className="flex flex-col gap-5">
          <div className="text-[24px] font-semibold italic flex gap-3">
            <p>인터랙션팀</p>
            <p>Interaction Team</p>
          </div>
          <StaffProfile />
        </section>
        <section className="flex flex-col gap-5">
          <div className="text-[24px] font-semibold italic flex gap-3">
            <p>아카이브팀</p>
            <p>Archive Team</p>
          </div>
          <StaffProfile />
        </section>
      </div>
      <div className="shrink-0">
        <Footer />
      </div>
    </div>
  );
}
