import { ArrowRightIcon } from "@phosphor-icons/react";

export default function GoButton({ text, onClick }) {
  return (
    <div className="group ...">
      <button
        onClick={onClick}
        className="group-hover:bg-fill-invert flex gap-3 justify-center items-center px-6 py-3 border border-fill-invert rounded-full"
      >
        <p className="group-hover:text-label text-base text-label-invert">
          {text}
        </p>
        <ArrowRightIcon
          className="group-hover:text-label text-label-invert w-6 h-6"
          weight="light"
        />
      </button>
    </div>
  );
}
