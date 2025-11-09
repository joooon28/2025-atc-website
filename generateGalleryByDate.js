import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// ✅ Cloudinary 설정
cloudinary.config({
  cloud_name: "dbw1ckgzr",
  api_key: "127227736155786",
  api_secret: "nMU7mXohk9zYXOGpqq4c8CMbX2A",
});

// ✅ Cloudinary 폴더 경로 (루트)
const FOLDER = "";

// 🔍 파일명에서 앞 4자리(예: 0710) 추출
function extractDateFromFilename(filename) {
  const match = filename.match(/^(\d{4})/);
  return match ? parseInt(match[1]) : 0;
}

// 🔧 Cloudinary 자동 붙는 _랜덤코드 제거 함수
function cleanFilename(filename) {
  // _6자리영문숫자 또는 _와 6자리 이상이 뒤에 붙은 경우 제거
  return filename.replace(/_[a-z0-9]{6,}$/i, "");
}

async function generateGalleryByDate() {
  const res = await cloudinary.api.resources({
    type: "upload",
    prefix: FOLDER,
    max_results: 500,
  });

  console.log(`🔍 ${res.resources.length}개 파일 발견됨`);

  if (res.resources.length === 0) {
    console.log("⚠️ Cloudinary 폴더 경로를 확인하세요:", FOLDER);
    return;
  }

  // 🧩 파일명 앞 날짜 기준 정렬
  const sorted = res.resources.sort((a, b) => {
    const nameA = a.public_id.split("/").pop();
    const nameB = b.public_id.split("/").pop();
    return extractDateFromFilename(nameA) - extractDateFromFilename(nameB);
  });

  // ✅ JSON 데이터 구성
  const data = {};
  sorted.forEach((file) => {
    let filename = file.public_id.split("/").pop(); // ex: 0710_대외협력팀_..._i4f8gr
    filename = cleanFilename(filename); // 랜덤코드 제거

    data[filename] = file.secure_url.replace(
      "/upload/",
      "/upload/f_auto,q_auto/"
    );
  });

  // ✅ gallery.json 저장 (경로 주의)
  const outputPath = "./src/data/archive/gallery_test.json";
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

  console.log(`✅ 날짜 순 gallery.json 생성 완료! (${outputPath})`);
}

generateGalleryByDate().catch((err) =>
  console.error("❌ Cloudinary API Error:", err)
);
