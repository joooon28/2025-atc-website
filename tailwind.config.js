export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        suit: ['"SUIT Variable"', "system-ui", "sans-serif"],
        monoKR: ['"Monoplex KR"', "system-ui", "sans-serif"],
        // (선택) 제목 전용 토큰 필요하면 아래처럼 쓰세요
        // heading: ['"SUIT Variable"', "system-ui", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
