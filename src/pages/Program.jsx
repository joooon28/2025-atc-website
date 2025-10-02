import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Program() {
  return (
    <div className="flex flex-col min-h-svh bg-mint-2">
      <div className="py-[40px]">
        <Header />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
