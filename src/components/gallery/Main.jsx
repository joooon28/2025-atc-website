import main from "../../data/archive/gallery.json";

export default function Main({ images = "Test1" }) {
  return (
    <div className="flex h-full max-h-[300px] overflow-hidden">
      <img
        draggable={false}
        src={main[images]}
        alt="Gallery Image"
        className="block w-full h-auto max-h-full object-contain"
      />
    </div>
  );
}
