export default function ArchiveSection({ ko, eng, onClick }) {
  return (
    <div className="group ...">
      <button
        type="button"
        onClick={onClick}
        className="w-full h-full max-h-[370px] aspect-square flex flex-col justify-between items-center py-5 cursor-pointer gap-auto group-hover:bg-fill ..."
      >
        <p className="group-hover:text-label-invert text-label font-heavy">
          {ko}
        </p>
        <p className="group-hover:text-label-invert text-label font-heavy italic">
          {eng}
        </p>
      </button>
    </div>
  );
}
