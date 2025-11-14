import { useState } from "react";
import { WaveformIcon, WaveformSlashIcon } from "@phosphor-icons/react";

export default function VolumeButton({ muted, onToggle, className = "" }) {
  const [innerMuted, setInnerMuted] = useState(false);
  const isMuted = muted ?? innerMuted;

  const handleClick = () => {
    const next = !isMuted;
    onToggle?.(next);
    if (muted === undefined) {
      setInnerMuted(next);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isMuted}
      aria-label={isMuted ? "Unmute" : "Mute"}
      className={`cursor-pointer hover:bg-fill hover:text-label-invert flex justify-center items-center border border-label w-[69px] rounded-[60px] bg-mint-5 p-3 transition-colors ${className}`}
    >
      {isMuted ? (
        <WaveformSlashIcon className="w-[21px] h-[21px]" weight="thin" />
      ) : (
        <WaveformIcon className="w-[21px] h-[21px]" weight="thin" />
      )}
    </button>
  );
}
