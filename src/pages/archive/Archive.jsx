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
        <section className="max-[701px]:hidden grid grid-cols-5 items-stretch divide-x divide-label border border-label">
          <ArchiveSection
            ko="기획단"
            eng="Staff"
            onClick={() => navigate("staff")}
          />
          <ArchiveSection
            ko="작업자"
            eng="Maksers"
            onClick={() => navigate("makers")}
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
