import galleryimages from "../../data/archive/gallery.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function ListSection({
  images,
  onClick,
  date,
  text,
  isActive = false,
}) {
  const tooltip = [date, text].filter(Boolean).join(" · ");
  const altText = text || images || "Gallery Image";

  return (
    <div
      onClick={onClick}
      data-id={images}
      className={`
        flex flex-col gap-3 justify-end cursor-pointer shrink-0
        snap-start
        max-desktop:flex-[0_0_calc(100%/8)]     
        max-[1100px]:flex-[0_0_calc(100%/7)]    
        max-[1000px]:flex-[0_0_calc(100%/6)]    
        max-[800px]:flex-[0_0_calc(100%/5)]     
        max-tablet:flex-[0_0_calc(100%/4)]   
        max-w-[148.5px]   
      `}
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
      <div className="flex flex-col overflow-hidden gap-3 w-full">
        <div className="relative group overflow-hidden aspect-[2/3.5]">
          <input
            type="radio"
            name="gallery-click"
            className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
            aria-label="select thumbnail"
            checked={isActive}
            readOnly
          />

          <LazyLoadImage
            src={galleryimages[images]}
            placeholderSrc={
              galleryimages[images]?.includes("cloudinary.com")
                ? galleryimages[images].replace("/upload/", "/upload/w_50,q_auto,f_auto/")
                : undefined
            }
            effect="opacity"
            alt={altText}
            draggable={false}
            className="absolute bottom-0 left-0 w-full h-auto max-h-full object-contain object-bottom transition-opacity duration-500"
            wrapperClassName="absolute inset-0 flex items-end justify-center"
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

        <div className="w-full break-words flex flex-col gap-1">
          <p className="font-regular text-[14px] text-label">{date}</p>
          <p className="font-small text-[14px] text-label">{text}</p>
        </div>
      </div>
    </div>
  );
}
