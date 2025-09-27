import MainLogo from "../main/MainLogo";

export default function MenuButton() {
  return (
    <div className="flex justify-between">
      <MainLogo />
      <div className="p-3 w-[45px] h-[45px] border border-line-brown bg-mint-4 inline-flex items-center justify-center"></div>
    </div>
  );
}
