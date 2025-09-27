import LogoBrown from "../../assets/LogoBrown.svg";

export default function MenuPanel() {
  return (
    <div className="w-full max-h-[80vh] overflow-y-auto border border-label bg-mint-4/80 p-[12px]">
      <img src={LogoBrown} alt="LogoBrown" className="w-[30.158px] h-[21px]" />
      <nav>
        <ul className="italic flex flex-col items-center gap-[16px]">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Program</li>
          <li className="cursor-pointer">Archive</li>
          <li className="cursor-pointer">Map</li>
          <li className="cursor-pointer">Playground</li>
        </ul>
      </nav>
    </div>
  );
}
