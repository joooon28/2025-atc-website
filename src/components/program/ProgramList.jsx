import { useState } from "react";

export default function ProgramList({
  number = "1",
  title,
  eng,
  date = "11.20. (THU) 13:00-15:00",
  text = "이번 오프닝 행사는 울퉁불퉁하게 말아리 컨퍼런스의 시작을 알리는 중요한 자리로, 참가자들에게 환영의 인사를 전하고 행사 일정과 주요 프로그램에 대한 소개를 제공합니다. 또한, 네트워킹 세션을 통해 참석자들이 서로 교류하고 협력할 수 있는 기회를 마련합니다. 이번 행사는 컨퍼런스의 분위기를 조성하고 참가자들이 앞으로의 일정에 대한 기대감을 높이는 데 중점을 둡니다.",
  onMoreInfo,
  detailKo,
  detailEng,
  image,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className=" 
        group flex hover:bg-mint-6 
        border-t border-label py-3 
        relative [--dot:6px] [--b:1px] [--expand:250px]
    
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
        <div className="tex-center px-5 text-[20px] font-[500]">({number})</div>

        <div className="flex flex-col pr-4">
          <div
            onClick={() => setOpen((v) => !v)}
            role="button"
            aria-expanded={open}
            className="flex flex-col gap-10 cursor-pointer select-none"
          >
            <div className="flex min-[847px]:gap-3 text-[20px] max-[847px]:flex-col max-[287px]:gap-[6px]">
              <p>{title}</p>
              <p className="italic">{eng}</p>
            </div>
            <p className="text-[14px]">{date}</p>
          </div>

          <div
            className={[
              "overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out",
              "[will-change:max-height,opacity]",
              open ? "max-h-[var(--expand)] opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="flex flex-col gap-10 pt-10">
              <div className="text-[14px]">{text}</div>
              <button
                type="button"
                onClick={() =>
                  onMoreInfo?.({
                    title,
                    eng,
                    date: date,
                    koText: detailKo ?? text,
                    enText: detailEng ?? "",
                    image,
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
