export default function ArchiveSection({ ko, eng, onClick }) {
  return (
    <a href="#" class="group ...">
      <button
        type="button"
        onClick={onClick}
        className="w-full h-full aspect-square flex flex-col justify-between items-center py-5 cursor-pointer gap-auto group-hover:bg-fill ..."
      >
        <p className="group-hover:text-label-invert text-label font-mono font-semibold">
          {ko}
        </p>
        <p className="group-hover:text-label-invert text-label font-mono font-semibold italic">
          {eng}
        </p>
      </button>
    </a>
  );
}
