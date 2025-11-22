import { ArrowRightIcon } from "@phosphor-icons/react";

export default function GoButton({ text, onClick }) {
  return (
    <div className="group ...">
      <button
        onClick={onClick}
        className="cursor-pointer group-hover:bg-fill-invert flex gap-3 justify-center items-center px-6 py-3 border border-fill-invert rounded-full transition-all duration-300 ease-out"
      >
        <p className="group-hover:text-label text-[16px] text-label-invert transition-colors duration-300">
          {text}
        </p>
        <ArrowRightIcon
          className="group-hover:text-label text-label-invert w-6 h-6 transition-all duration-300 group-hover:translate-x-1"
          weight="light"
        />
      </button>
    </div>
  );
}
