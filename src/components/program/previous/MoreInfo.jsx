import CloseButton from "../../archive/CloseButton";
import Footer from "../../Footer";

export default function MoreInfo({
  onClose,
  title,
  eng,
  date,
  koText,
  engText,
  image,
}) {
  return (
    <div className="flex flex-col min-h-svh">
      <div className="sticky top-0 inset-x-0 z-10 flex justify-center px-4">
        <button onClick={onClose}>
          <CloseButton />
        </button>
      </div>
      <div className="flex-1 flex px-[220px] justify-center">
        <section className="flex flex-col w-full p-[40px] gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex gap-[10px] font-[450]">
              <p>{title}</p>
              <p className="italic">{eng}</p>
            </div>
            <p className="flex text-[14px]">{date}</p>
            <p className="flex text-[14px] whitespace-normal ">{koText}</p>
            <p className="flex text-[14px] whitespace-normal ">{engText}</p>
            <div className="w-full h-[420px] bg-mint">
              {image ? (
                <img src={image} alt={title} className="h-full object-cover" />
              ) : (
                "img"
              )}
            </div>
          </div>
        </section>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
