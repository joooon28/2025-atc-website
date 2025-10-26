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
      <div className="flex pt-10 justify-center text-center gap-6">
        <p className="hover:underline hover:font-semibold cursor-pointer">
          Jun
        </p>
        <p className="hover:underline hover:font-semibold cursor-pointer">
          Jul
        </p>
        <p className="hover:underline hover:font-semibold cursor-pointer">
          Aug
        </p>
        <p className="hover:underline hover:font-semibold cursor-pointer">
          Sep
        </p>
        <p className="hover:underline hover:font-semibold cursor-pointer">
          Oct
        </p>
        <p className="hover:underline hover:font-semibold cursor-pointer">
          Nov
        </p>
      </div>
      <GalleryList />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
