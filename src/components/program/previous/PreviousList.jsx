export default function PreviousList({
  number,
  title,
  titleeng,
  date,
  main,
  sub1,
  text,
  texteng,
  detailKo1,
  detailEng1,
  detailKo2,
  detailEng2,
  onMoreInfo,
  rounded,
}) {
  const isNumberFive = String(number) === "5";
  const isNumberSix = String(number) === "6";
  const isNumberSeven = String(number) === "7";
  const isNumberEight = String(number) === "8";

  return (
    <div
      className=" cursor-pointer
        flex flex-col gap-5 shrink-0
        w-[min(100%,500px)]
        max-[1000px]:w-[400px]
        max-mobile:w-[250px]
      "
      onClick={() =>
        onMoreInfo?.({
          title,
          titleeng,
          date,
          text,
          texteng,
          detailKo1,
          detailEng1,
          detailKo2,
          detailEng2,
          main,
          sub1,
        })
      }
    >
      <div
        className={`flex w-full aspect-[1.85] overflow-hidden ${
          rounded ? "rounded-[300px]" : ""
        }`}
      >
        {main ? (
          <img
            draggable={false}
            src={main}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          "img"
        )}
      </div>

      <div className="text-label flex flex-col gap-3">
        <div
          className={[
            "flex",
            isNumberFive
              ? "max-[1000px]:flex-col max-[1000px]:gap-0 font-medium gap-[10px]"
              : isNumberSix
              ? "max-[1000px]:flex-col max-[1000px]:gap-0 font-medium gap-[10px]"
              : isNumberSeven
              ? "max-[1000px]:flex-col max-[1000px]:gap-0 font-medium gap-[10px]"
              : isNumberEight
              ? "max-[1000px]:flex-col max-[1000px]:gap-0 font-medium gap-[10px]"
              : "gap-[10px] font-medium text-[16px]",
          ].join(" ")}
        >
          <p>{title}</p>
          <p className="italic">{titleeng}</p>
        </div>
        <p className="font-regular flex text-[14px]">{date}</p>
        <p className="leading-[1.4] tracking-[-0.7px] font-regular flex text-[14px] whitespace-normal max-tablet:hidden">
          {text}
        </p>
        <button
          type="button"
          className="font-regular flex text-[14px] underline cursor-pointer"
        >
          More Info
        </button>
      </div>
    </div>
  );
}
