import CloseButton from "../../components/archive/CloseButton";
import Footer from "../../components/Footer";

export default function Memo({ onClose }) {
  return (
    <div className="flex flex-col min-h-svh">
      <div className="top-0 inset-x-0 z-10 flex justify-center px-4">
        <button onClick={onClose}>
          <CloseButton />
        </button>
      </div>
      <div className="flex-1 py-[40px] px-[120px]">memo</div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
