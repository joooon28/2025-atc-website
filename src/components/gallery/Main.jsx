import main from "../../data/archive/gallery.json";

export default function Main({ images }) {
  return (
    <div className="flex h-full max-h-[230px] overflow-hidden">
      <img
        draggable={false}
        src={main[images]}
        alt="Gallery Image"
        className="block w-full h-auto max-h-full object-contain"
      />
    </div>
  );
}
