export default function ProgramList({
  id,
  title,
  number,
  titleeng,
  date1,
  date2,
  date3,
  text,
  // texteng,
  // detailKo1,
  // detailEng1,
  // detailKo2,
  // detailEng2,
  // rounded,
  // main,
  // sub1,
  location,
  audience,
  activeId,
  onActivate,
  // onMoreInfo,
  hoveredNumber,
  selfHoverClass,
  hoveredColor,
  activeColor,
}) {
  const isNumberOne = String(number) === "1";
  const isNumberTwo = String(number) === "2";
  const isNumberThree = String(number) === "3";
  const isNumberFour = String(number) === "4";

  const open = activeId === id;

  const forceHover = String(hoveredNumber) === String(number);
  const baseHover = selfHoverClass || "hover:bg-mint-6";

  const rowBg = open
    ? activeColor || "bg-mint-6"
    : forceHover && hoveredColor
    ? hoveredColor
    : baseHover;

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
    ${rowBg}

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
          <div className="text-[20px] font-heavy flex justfiy-center items-center gap-0">
            (<p className="text-[13px]">{number}</p>)
          </div>
        </div>

        <div className="flex flex-col pr-4">
          <div className="font-regular text-label flex flex-col gap-10 cursor-pointer select-none">
            <div
              className={[
                "flex text-[20px] max-mobile:text-[16px]",
                isNumberOne
                  ? "flex-col"
                  : isNumberTwo
                  ? "max-[1115px]:flex-col max-[1115px]:gap-0 gap-3"
                  : isNumberThree
                  ? "max-[1284px]:flex-col max-[1284px]:gap-0 gap-3"
                  : isNumberFour
                  ? "max-[1284px]:flex-col max-[1284px]:gap-0 gap-3"
                  : // ← 1번만 세로 정렬
                    " min-[1073px]:gap-3 max-[847px]:flex-col max-[287px]:gap-[6px] max-[1073px]:flex-col max-[1073px]:gap-0",
              ].join(" ")}
            >
              <p>{title}</p>
              <p className="italic ">{titleeng}</p>
            </div>
            <div className="text-[14px] flex flex-col gap-[6px]">
              {date1 && <p>{date1}</p>}
              {date2 && <p>{date2}</p>}
              {date3 && <p>{date3}</p>}
            </div>
          </div>

          <div
            className={[
              "overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out",
              "[will-change:max-height,opacity]",
              open ? "max-h-[var(--expand)] opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="flex flex-col gap-4 pt-10">
              <div className="whitespace-pre-line font-regular text-[15px] leading-regular tracking-regular text-label">
                {text}
              </div>
              <div className="flex font-regular text-[15px] gap-2">
                <p className="shrink-0 font-heavy">장소</p>
                <p>{location}</p>
              </div>
              <div className="flex font-regular text-[15px] gap-2">
                <p className="shrink-0 font-heavy">대상</p>
                <p>{audience}</p>
              </div>
              {/* <button
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
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
