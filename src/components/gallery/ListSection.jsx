import galleryimages from "../../data/archive/gallery.json";

export default function ListSection({ images = "Test1", onClick, date, text }) {
  const tooltip = [date, text].filter(Boolean).join(" · ");
  const altText = text || images || "Gallery Image";

  return (
    <div
      onClick={onClick}
      data-id={images}
      className="
        flex flex-col gap-3 justify-end cursor-pointer
        min-w-[148.5px] shrink-0
        snap-start
        "
      title={tooltip || undefined}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="flex flex-col overflow-hidden gap-3 w-[148.5px]">
        <div className="relative group flex items-end overflow-hidden h-[198px]">
          <input
            type="radio"
            name="gallery-click"
            className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
            aria-label="select thumbnail"
          />

          <img
            src={galleryimages[images]}
            alt={altText}
            draggable={false}
            className="block w-full h-auto max-h-full object-contain object-bottom"
          />

          <div
            className="
        absolute inset-0 pointer-events-none transition-opacity duration-200
        bg-[#9EB7A2]
        opacity-0
        group-hover:opacity-50
        peer-checked:opacity-80
      "
            style={{
              WebkitMaskImage: `url(${galleryimages[images]})`,
              maskImage: `url(${galleryimages[images]})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center bottom",
              maskPosition: "center bottom",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
        </div>

        <div className="max-w-[148.5px] break-words flex flex-col gap-1">
          <p className="font-[450] text-[14px] text-label">{date}</p>
          <p className="font-[400] text-[14px] text-label">{text}</p>
        </div>
      </div>
    </div>
  );
}
