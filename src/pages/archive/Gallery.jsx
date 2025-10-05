import CloseButton from "../../components/archive/CloseButton";
import Footer from "../../components/Footer";

export default function Gallery({ onClose }) {
  return (
    <div className="flex flex-col min-h-svh">
      <div className="fixed top-0 inset-x-0 z-50 h-14 flex justify-center px-4">
        <button onClick={onClose}>
          <CloseButton />
        </button>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
