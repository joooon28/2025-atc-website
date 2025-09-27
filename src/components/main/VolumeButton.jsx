import { WaveformIcon } from "@phosphor-icons/react";

export default function VolumeButton() {
  return (
    <button className="flex justify-center items-center border border-label w-[69px] rounded-[60px] bg-mint-4 p-3">
      <WaveformIcon className="w-[21px] h-[21px]" weight="thin" />
    </button>
  );
}
