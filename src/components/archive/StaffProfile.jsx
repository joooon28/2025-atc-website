export default function StaffProfile({
  name = "김준수",
  nameEng = "Junsu Kim",
  lead,
  imagesrc,
  objectPosClass = "object-[50%_0px]",
  scaleClass = "scale-110",
}) {
  const isVideo = /\.(mp4|mov)$/i.test(imagesrc ?? "");
  const mediaClass = `w-full h-full object-cover ${objectPosClass} ${scaleClass}`;

  return (
    <section className="flex flex-col gap-2">
      <div className="bg-mint-5 aspect-[3/4] w-full overflow-hidden">
        {isVideo ? (
          <video
            src={imagesrc}
            className={mediaClass}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img src={imagesrc} alt={name} className={mediaClass} />
        )}
      </div>

      <div className="flex flex-col items-start gap-1">
        <div className="flex gap-1 max-[712px]:flex-col max-[712px]:gap-0 max-tablet:flex-row max-tablet:gap-1">
          <p className="font-medium text-[14px]">{name}</p>
          <p className="font-small italic text-[14px]">{nameEng}</p>
        </div>
        {lead && <p className="text-mint font-regular text-[14px]">{lead}</p>}
      </div>
    </section>
  );
}
