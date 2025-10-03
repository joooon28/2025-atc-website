import Header from "../../components/Header";
import ArchiveSection from "../../components/ArchiveSection";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

export default function Archive() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-svh bg-mint-6">
      <div className="pt-[40px]">
        <Header />
      </div>
      <div className="p-[40px]">
        <section
          className="max-[701px]:hidden grid grid-cols-4 items-stretch divide-x divide-label border border-label
        relative [--dot:6px] [--b:1px]
        [&>*]:relative
        [&>*::before]:content-[''] [&>*::before]:absolute [&>*::before]:left-0
        [&>*::before]:w-[var(--dot)] [&>*::before]:h-[var(--dot)]
        [&>*::before]:rounded-full [&>*::before]:bg-fill
        [&>*::before]:-translate-x-1/2 [&>*::before]:-translate-y-1/2 [&>*::before]:transform
        [&>*::before]:z-10 [&>*::before]:pointer-events-none

        [&>*::after]:content-[''] [&>*::after]:absolute [&>*::after]:left-0
        [&>*::after]:bottom-[var(--b)] [&>*::after]:w-[var(--dot)] [&>*::after]:h-[var(--dot)]
        [&>*::after]:rounded-full [&>*::after]:bg-fill
        [&>*::after]:-translate-x-3/5 [&>*::after]:translate-y-3/4 [&>*::after]:transform
        [&>*::after]:z-10 [&>*::after]:pointer-events-none

        before:content-[''] before:absolute before:right-0 before:top-[var(--b)]
        before:w-[var(--dot)] before:h-[var(--dot)] before:rounded-full before:bg-fill
        before:translate-x-3/5 before:-translate-y-3/4 before:z-20 before:pointer-events-none

        after:content-[''] after:absolute after:right-0 after:bottom-[var(--b)]
        after:w-[var(--dot)] after:h-[var(--dot)] after:rounded-full after:bg-fill
        after:translate-x-3/5 after:translate-y-3/4 after:z-20 after:pointer-events-none
        "
        >
          <ArchiveSection
            ko="기획단"
            eng="Staff"
            onClick={() => navigate("staff")}
          />

          <ArchiveSection
            ko="말-(메)아리 모음"
            eng="Memo"
            onClick={() => navigate("memo")}
          />
          <ArchiveSection
            ko="다큐멘터리"
            eng="Documentary"
            onClick={() => navigate("documentary")}
          />
          <ArchiveSection
            ko="갤러리"
            eng="Gallery"
            onClick={() => navigate("gallery")}
          />
        </section>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
