export default function PreviousList({
  title = "지도 그리기",
  eng = "Drawing Map",
  time = "9.30. (THU) 16:00-18:00",
  image,
  detailKo,
  detailEng,
  onMoreInfo,
  rounded = false,
}) {
  return (
    <div className="flex flex-col gap-5 w-[min(100%,500px)] shrink-0">
      <div
        className={`flex w-full aspect-[1.85] overflow-hidden ${
          rounded ? "rounded-[300px]" : ""
        }`}
      >
        {image ? (
          <img
            draggable={false}
            src={image}
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
          <p className="italic">{eng}</p>
        </div>
        <p className="flex text-[14px]">{time}</p>
        <p className="flex text-[14px] whitespace-normal max-tablet:hidden">
          {detailKo}
        </p>
        <button
          type="button"
          onClick={() =>
            onMoreInfo?.({
              title,
              eng,
              time,
              detailKo,
              detailEng,
              image,
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
