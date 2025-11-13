export default function ArchiveSection({ ko, eng, onClick }) {
  return (
    <div className="group ...">
      <button
        type="button"
        onClick={onClick}
        className="bg-transparent transition-colors duration-200 ease-in-out w-full h-full aspect-square flex flex-col justify-between items-center py-5 cursor-pointer gap-auto group-hover:bg-fill ..."
      >
        <p className="transition-colors duration-200 ease-in-out group-hover:text-label-invert text-label font-heavy">
          {ko}
        </p>
        <p className="transition-colors duration-200 ease-in-out group-hover:text-label-invert text-label font-heavy italic">
          {eng}
        </p>
      </button>
    </div>
  );
}
