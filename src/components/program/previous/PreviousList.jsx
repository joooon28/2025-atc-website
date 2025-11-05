export default function PreviousList({
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
  return (
    <div className="flex flex-col gap-5 w-[min(100%,500px)] shrink-0">
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
            className="w-full object-cover"
          />
        ) : (
          "img"
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-[10px] font-[450]">
          <p>{title}</p>
          <p className="italic">{titleeng}</p>
        </div>
        <p className="flex text-[14px]">{date}</p>
        <p className="flex text-[14px] whitespace-normal max-tablet:hidden">
          {text}
        </p>
        <button
          type="button"
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
          className="flex text-[14px] underline cursor-pointer"
        >
          More Info
        </button>
      </div>
    </div>
  );
}
