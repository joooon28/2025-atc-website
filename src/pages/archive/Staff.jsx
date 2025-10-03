import CloseButton from "../../components/archive/CloseButton";
import Footer from "../../components/Footer";

export default function Staff() {
  return (
    <div className="flex flex-col min-h-svh">
      <CloseButton />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
