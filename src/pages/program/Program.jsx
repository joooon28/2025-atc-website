import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProgramList from "../../components/program/ProgramList";
import ProgramCalendar from "../../components/program/ProgramCalendar";
import Previous from "../../components/program/Previous";

export default function Program() {
  return (
    <div className="flex flex-col min-h-svh bg-mint-2">
      <div className="sticky z-30 top-0 pt-[40px]">
        <Header />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2  gap-10 p-10">
        <div className="flex flex-col gap-[8.5px]">
          <div className="font-[600] text-[24px] flex gap-3">
            <p>프로그램</p>
            <p className="italic">Program</p>
          </div>
          <section>
            <ProgramList title="오프닝 행사" eng="Opening Party" />
            <ProgramList title="오프닝 행사" eng="Opening Party" />
            <ProgramList title="오프닝 행사" eng="Opening Party" />
            <ProgramList title="오프닝 행사" eng="Opening Party" />
          </section>
        </div>
        <ProgramCalendar />
      </section>
      <section className="px-10 py-20">
        <Previous />
      </section>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
