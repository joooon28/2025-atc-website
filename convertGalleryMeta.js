import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 현재 파일 절대경로 계산
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, "src/data/archive/gallery.json");
const outputPath = path.join(__dirname, "src/data/archive/gallery.meta.json");

// 파일 존재 확인 (process가 없어도 작동하도록 수정)
if (!fs.existsSync(inputPath)) {
  console.error("❌ gallery.json 파일을 찾을 수 없습니다:", inputPath);
  // process가 없으면 단순 return
  if (typeof process !== "undefined" && process.exit) process.exit(1);
  else throw new Error("gallery.json not found");
}

const raw = fs.readFileSync(inputPath, "utf-8");
const data = JSON.parse(raw);

// 날짜 추출 함수
function extractDate(filename) {
  const match = filename.match(/^(\d{4})/);
  if (!match) return "";
  const mm = match[1].slice(0, 2);
  const dd = match[1].slice(2, 4);
  return `${mm}.${dd}`;
}

const DEFAULT_TEXT = "전시팀 회의";
const converted = {};

for (const key in data) {
  const date = extractDate(key);
  converted[key] = {
    date,
    text: DEFAULT_TEXT,
  };
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(converted, null, 2), "utf-8");

console.log(
  `✅ gallery.meta.json 생성 완료! (${Object.keys(converted).length}개 항목)`
);
console.log(`📁 저장 위치: ${outputPath}`);
