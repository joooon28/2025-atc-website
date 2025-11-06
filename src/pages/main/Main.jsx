import Header from "../../components/Header";
import MinusButton from "../../components/main/MinusButton";
import PlusButton from "../../components/main/PlusButton";
import VolumeButton from "../../components/main/VolumeButton";
import MenuToggle from "../../components/menu/MenuToggle";
import Popup from "../../components/main/Popup";

export default function Main() {
  return (
    <main className="min-h-svh bg-mint-3">
      <div className="max-tablet:hidden py-[40px]">
        <Header />
      </div>
      <div className="p-5">
        <div className="min-tablet:hidden relative">
          <MenuToggle />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 flex justify-center gap-3 pb-[40px]">
        <div className="flex justify-center items-center gap-3 ">
          <PlusButton />
          <MinusButton />
          <VolumeButton />
        </div>
      </div>
      <div className="max-[800px]:hidden fixed inset-x-0 bottom-0 flex justify-between items-end px-10 pb-[40px] pointer-events-none">
        <p className="text-[15px] text-label opacity-30">
          울퉁불퉁하게 말아리 <br />
          2025 Art & Technology Conference
        </p>
        <p className="text-end text-[15px] text-label opacity-30">
          11.24 - 11.30 <br />
          서강대학교 하비에르관(X관)
        </p>
      </div>

      <p className="fixed min-[800px]:hidden left-0 right-0 top-[165px] opacity-70 text-center line-height-[1.4] text-label/30 ">
        2025 <br />
        Art & Technology Conference <br />
        울퉁불퉁하게 말아리
      </p>

      <div className="z-40 fixed bottom-10 right-10">
        <Popup />
      </div>
    </main>
  );
}
