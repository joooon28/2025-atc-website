export default function ProgramCalendar({
  onHoverNumber,
  onLeaveNumber,
  onClickNumber,
}) {
  return (
    <div className="flex flex-col max-tablet:gap-[8.5px]">
      <div className="font-strong text-[24px] flex gap-3">
        <p className="min-tablet:hidden">프로그램</p>
        <p className="italic min-tablet:hidden">Program</p>
      </div>
      <div>
        <div className="flex flex-col max-tablet:pt-4">
          <section className="relative h-[35px] pl-15 font-strong text-[14px] leading-[1.1] select-none">
            <p className="absolute left-[20%] -translate-x-1/2 top-0 text-center">
              20
              <br />
              THU
            </p>
            <p className="absolute left-[43%] -translate-x-1/2 top-0 text-center">
              21
              <br />
              FRI
            </p>
            <p className="absolute left-[65.8%] -translate-x-1/2 top-0 text-center">
              20
              <br />
              SAT
            </p>
            <p className="absolute left-[88.3%] -translate-x-1/2 top-0 text-center">
              23
              <br />
              SUN
            </p>
          </section>
        </div>
        <section className="relative isolate text-[13px] font-strong flex flex-col gap-6">
          <div className="flex items-center">
            <p>14:00</p>
            <div
              className="ml-3 flex-1
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
            >
              <div className="absolute left-0 top-0 right-0 bottom-0 pointer-events-none">
                <div className="absolute left-0 top-0 bottom-0 w-1/2" />
                <div
                  className="absolute left-1/2 w-1/4 top-0 bottom-[-84.3px]
                 bg-[#E9F1E9] flex justify-center items-center
                 text-[20px] font-regular
                 cursor-pointer pointer-events-auto z-[1]"
                  onMouseEnter={() => onHoverNumber?.(3, "bg-[#E9F1E9]")}
                  onMouseLeave={() => onLeaveNumber?.()}
                  onClick={() => onClickNumber?.(3, "bg-[#E9F1E9]")}
                  role="button"
                  aria-label="program 3"
                >
                  ( <span className="text-[14px] font-strong">3</span> )
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <p className="px-[17px] py-[9px]" />
            <div
              className="ml-3 flex-1
        border-t border-label/20 border-dotted
        relative [--dot:6px] [--b:1px]"
            />
          </div>

          <div className="flex items-center">
            <p>15:00</p>
            <div
              className="ml-3 flex-1
        border-t border-label
        relative [--dot:6px] [--b:1px]"
            >
              <div className="absolute left-0 top-0 right-0 bottom-0 pointer-events-none z-10">
                <div
                  className="absolute left-0 w-[25%] top-0 bottom-[-169.5px]
               bg-mint-3 flex justify-center items-center
               text-[20px] font-regular cursor-pointer
               pointer-events-auto z-[60]"
                  onMouseEnter={() => onHoverNumber?.(2, "bg-mint-3")}
                  onMouseLeave={() => onLeaveNumber?.()}
                  onClick={() => onClickNumber?.(2, "bg-mint-3")}
                  role="button"
                  aria-label="program 2"
                >
                  ( <span className="text-[14px] font-strong">2</span> )
                </div>

                <div
                  className="absolute left-[25%] w-[25%] top-0 bottom-[-169.5px]
               bg-mint-3 flex justify-center items-center
               text-[20px] font-regular cursor-pointer
               pointer-events-auto z-[60]"
                  onMouseEnter={() => onHoverNumber?.(2, "bg-mint-3")}
                  onMouseLeave={() => onLeaveNumber?.()}
                  onClick={() => onClickNumber?.(2, "bg-mint-3")}
                  role="button"
                  aria-label="program 2"
                >
                  ( <span className="text-[14px] font-strong">2</span> )
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <p className="px-[17px] py-[9px]" />
            <div
              className="ml-3 flex-1
        border-t border-label/20 border-dotted
        relative [--dot:6px] [--b:1px]"
            />
          </div>
          <div className="flex items-center">
            <p>16:00</p>
            <div
              className="ml-3 flex-1
        border-t border-label
        relative [--dot:6px] [--b:1px]
    "
            />
          </div>
          <div className="flex items-center">
            <p className="px-[17px] py-[9px]" />
            <div
              className="ml-3 flex-1
        border-t border-label/20 border-dotted
        relative [--dot:6px] [--b:1px]"
            />
          </div>
          <div className="flex items-center">
            <p>17:00</p>
            <div
              className="ml-3 flex-1
        border-t border-label
        relative [--dot:6px] [--b:1px]
    "
            >
              <div className="absolute left-0 top-0 right-0 h-[340px] pointer-events-none z-[100]">
                <div
                  className="absolute left-1/2 w-[12.5%] top-0 h-full
                   bg-mint-5 flex justify-center items-center
                   text-[20px] font-regular cursor-pointer
                   pointer-events-auto"
                  onMouseEnter={() => onHoverNumber?.(1, "bg-mint-5")}
                  onMouseLeave={() => onLeaveNumber?.()}
                  onClick={() => onClickNumber?.(1, "bg-mint-5")}
                  role="button"
                  aria-label="program 1"
                >
                  ( <span className="text-[14px] font-strong">1</span> )
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <p className="px-[17px] py-[9px]" />
            <div
              className="ml-3 flex-1
            border-t border-label/20 border-dotted
            relative overflow-visible z-[1] [--dot:6px] [--b:1px]"
            ></div>
          </div>

          <div className="flex items-center">
            <p>18:00</p>
            <div
              className="ml-3 flex-1
        border-t border-label
        relative [--dot:6px] [--b:1px]
    "
            >
              <div className="absolute left-0 top-0 right-0 h-[255px] pointer-events-none z-[50]">
                <div
                  className="absolute left-[12.4%] top-0 bottom-[171px] w-[12.6%]
               bg-[#E9F1E9] flex justify-center items-center
               text-[20px] font-regular cursor-pointer
               pointer-events-auto"
                  onMouseEnter={() => onHoverNumber?.(3, "bg-[#E9F1E9]")}
                  onMouseLeave={() => onLeaveNumber?.()}
                  onClick={() => onClickNumber?.(3, "bg-[#E9F1E9]")}
                  role="button"
                  aria-label="program 3"
                >
                  ( <span className="text-[14px] font-strong">3</span> )
                </div>
                <div
                  className="absolute right-0 top-0 h-full w-[25%]
               bg-mint-5 flex justify-center items-center
               text-[20px] font-regular cursor-pointer
               pointer-events-auto z-[2000]"
                  onMouseEnter={() => onHoverNumber?.(5, "bg-mint-5")}
                  onMouseLeave={() => onLeaveNumber?.()}
                  onClick={() => onClickNumber?.(5, "bg-mint-5")}
                  role="button"
                  aria-label="program 5"
                >
                  ( <span className="text-[14px] font-strong">5</span> )
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <p className="px-[17px] py-[9px]" />
            <div
              className="ml-3 flex-1
        border-t border-label/20 border-dotted
        relative [--dot:6px] [--b:1px]"
            >
              <div className="absolute left-0 top-0 right-0 h-[169.5px] pointer-events-none z-[50]">
                <div
                  className="absolute left-0 top-0 h-full w-[12.4%]
               bg-mint-3 flex justify-center items-center
               text-[20px] font-regular cursor-pointer
               pointer-events-auto z-[2000]"
                  onMouseEnter={() => onHoverNumber?.(2, "bg-mint-3")}
                  onMouseLeave={() => onLeaveNumber?.()}
                  onClick={() => onClickNumber?.(2, "bg-mint-3")}
                  role="button"
                  aria-label="program 2"
                >
                  ( <span className="text-[14px] font-strong">2</span> )
                </div>

                <div
                  className="absolute left-[25%] top-0 h-[169.5px] w-[25%]
               bg-mint-5 flex justify-center items-center
               text-[20px] font-regular cursor-pointer
               pointer-events-auto z-[2000]"
                  onMouseEnter={() => onHoverNumber?.(4, "bg-mint-5")}
                  onMouseLeave={() => onLeaveNumber?.()}
                  onClick={() => onClickNumber?.(4, "bg-mint-5")}
                  role="button"
                  aria-label="program 4"
                >
                  ( <span className="text-[14px] font-strong">4</span> )
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center pointer-events-none">
            <p>19:00</p>
            <div
              className="ml-3 flex-1
        border-t border-label
        relative [--dot:6px] [--b:1px]
        "
            >
              <div className="absolute left-0 top-0 right-0 h-[calc(100%+170px)] pointer-events-none z-[55]">
                <div
                  className="absolute left-[62.5%] top-0 h-full w-[12.5%]
               bg-mint-3 flex justify-center items-center
               text-[20px] font-regular cursor-pointer
               pointer-events-auto"
                  onMouseEnter={() => onHoverNumber?.(2, "bg-mint-3")}
                  onMouseLeave={() => onLeaveNumber?.()}
                  onClick={() => onClickNumber?.(2, "bg-mint-3")}
                  role="button"
                  aria-label="program 2"
                >
                  ( <span className="text-[14px] font-strong">2</span> )
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <p className="px-[17px] py-[9px]" />
            <div
              className="ml-3 flex-1
        border-t border-label/20 border-dotted
        relative [--dot:6px] [--b:1px]"
            />
          </div>
          <div className="flex items-center">
            <p>20:00</p>
            <div
              className="ml-3 flex-1
        border-t border-label
        relative [--dot:6px] [--b:1px]
    "
            />
          </div>
          <div className="flex items-center">
            <p className="px-[17px] py-[9px]" />
            <div
              className="ml-3 flex-1
        border-t border-label/20 border-dotted
        relative [--dot:6px] [--b:1px]"
            />
          </div>

          <div className="flex items-center">
            <p>21:00</p>
            <div
              className="ml-3 flex-1 z-[70]
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
          </div>
        </section>
      </div>
    </div>
  );
}
