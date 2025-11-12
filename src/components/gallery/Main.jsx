import main from "../../data/archive/gallery.json";

export default function Main({ images }) {
  return (
    <div className="h-full w-full overflow-hidden flex items-center justify-center">
      <img
        draggable={false}
        src={main[images]}
        alt="Gallery Image"
        className="block max-h-full max-w-full h-auto w-auto object-contain select-none"
      />
    </div>
  );
}
