import CloseButton from "../../../components/archive/CloseButton";
import Footer from "../../../components/Footer";
import GalleryList from "./GalleryList";

export default function Gallery({ onClose }) {
  return (
    <div className="flex flex-col min-h-svh">
      <div className="sticky top-0 inset-x-0 z-10 flex justify-center px-4">
        <button onClick={onClose}>
          <CloseButton />
        </button>
      </div>
      <GalleryList />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
