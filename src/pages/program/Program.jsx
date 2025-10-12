import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProgramList from "../../components/program/ProgramList";
import ProgramCalendar from "../../components/program/ProgramCalendar";
import Previous from "../../components/program/previous/Previous";

export default function Program() {
  return (
    <div className="flex flex-col min-h-svh bg-mint-2">
      <div className="sticky z-1 top-0 pt-[40px]">
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
            <ProgramList number="2" title="오프닝 행사" eng="Opening Party" />
            <ProgramList number="3" title="오프닝 행사" eng="Opening Party" />
            <ProgramList number="4" title="오프닝 행사" eng="Opening Party" />
            <div
              className=" flex hover:bg-mint-6 
    border-t border-label
    relative [--dot:6px] [--b:1px]
    
        before:content-[''] before:absolute
        before:left-0 before:top-[var(--b)]
        before:w-[var(--dot)] before:h-[var(--dot)]
        before:rounded-full before:bg-label
        before:-translate-x-1/2 before:-translate-y-3/4
        before:pointer-events-none 

        after:content-[''] after:absolute
        after:right-0 after:top-[var(--b)]
        after:w-[var(--dot)] after:h-[var(--dot)]
        after:rounded-full after:bg-label
        after:translate-x-1/2 after:-translate-y-3/4
        after:pointer-events-none 

    "
            />
          </section>
        </div>
        <ProgramCalendar />
      </section>
      <section className="pl-10 py-20">
        <Previous />
      </section>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
