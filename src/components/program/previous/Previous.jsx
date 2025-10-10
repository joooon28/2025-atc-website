import PreviousList from "./PreviousList";

export default function Previous() {
  return (
    <div className="flex flex-col gap-5">
      <div className="font-[600] text-[24px] flex gap-3">
        <p>이전 프로그램</p>
        <p className="italic">Previous Program</p>
      </div>
      <section className="flex flex-col gap-5">
        <div
          className=" flex
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
        <section className="flex gap-5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <PreviousList />
          <PreviousList />
          <PreviousList />
          <PreviousList />
          <PreviousList />
        </section>

        <div
          className=" flex
    border-t border-label
    relative [--dot:6px] [--b:1px]
    
        before:content-[''] before:absolute
        before:left-0 before:top-[var(--b)]
        before:w-[var(--dot)] before:h-[var(--dot)]
        before:rounded-full before:bg-label
        before:-translate-x-1/2 before:-translate-y-3/4
        before:pointer-events-none before:z-10

        after:content-[''] after:absolute
        after:right-0 after:top-[var(--b)]
        after:w-[var(--dot)] after:h-[var(--dot)]
        after:rounded-full after:bg-label
        after:translate-x-1/2 after:-translate-y-3/4
        after:pointer-events-none after:z-10

    "
        />
      </section>
    </div>
  );
}
