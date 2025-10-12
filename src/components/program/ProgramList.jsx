export default function ProgramList({ number = "1", title, eng }) {
  return (
    <div
      className=" flex hover:bg-mint-6 
    border-t border-label py-3 
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
    >
      <section className="flex">
        <div className="flex justify-center w-15 text-[20px] font-[500]">
          ({number})
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-[20.5px] text-[20px]">
            <p>{title}</p>
            <p className="italic">{eng}</p>
          </div>
          <p className="text-[14px]">11.20. (THU) 13:00-15:00</p>
        </div>
      </section>
    </div>
  );
}
