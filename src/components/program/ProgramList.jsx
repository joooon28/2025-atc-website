export default function ProgramList({
  id,
  title,
  number,
  titleeng,
  date1,
  date2,
  date3,
  text,
  texteng,
  detailKo1,
  detailEng1,
  detailKo2,
  detailEng2,
  rounded,
  main,
  sub1,
  activeId,
  onActivate,
  onMoreInfo,
}) {
  const open = activeId === id;

  return (
    <div
      onClick={() => onActivate?.(open ? null : id)}
      role="button"
      aria-expanded={open}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate?.(open ? null : id);
        }
      }}
      className={`
    group flex border-t border-label py-3
    relative [--dot:6px] [--b:1px] [--expand:800px]
    ${open ? "bg-mint-6" : "hover:bg-mint-6"}

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
  `}
    >
      <section className="flex">
        <div className="text-center px-5 text-[20px] text-label font-[500]">
          <div className="flex justfiy-center items-center">
            (<p className="text-[15px]">{number}</p>)
          </div>
        </div>

        <div className="flex flex-col pr-4">
          <div className="flex flex-col gap-10 cursor-pointer select-none">
            <div className="flex min-[847px]:gap-3 text-[20px] max-[847px]:flex-col max-[287px]:gap-[6px]">
              <p className="text-label">{title}</p>
              <p className="italic text-label">{titleeng}</p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="text-[14px] text-label">{date1}</p>
              <p className="text-[14px] text-label">{date2}</p>
              <p className="text-[14px] text-label">{date3}</p>
            </div>
          </div>

          <div
            className={[
              "overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out",
              "[will-change:max-height,opacity]",
              open ? "max-h-[var(--expand)] opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="flex flex-col gap-10 pt-10">
              <div className="text-[14px] text-label">{text}</div>
              <button
                type="button"
                onClick={() =>
                  onMoreInfo?.({
                    title,
                    titleeng,
                    date1,
                    date2,
                    date3,
                    text,
                    texteng,
                    detailKo1,
                    detailEng1,
                    detailKo2,
                    detailEng2,
                    rounded,
                    main,
                    sub1,
                  })
                }
                className="flex text-[14px] underline cursor-pointer"
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
