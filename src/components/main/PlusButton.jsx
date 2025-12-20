import { PlusIcon } from "@phosphor-icons/react";

export default function PlusButton({ onClick }) {
  return (
    <button onClick={onClick} className="cursor-pointer hover:bg-fill hover:text-label-invert flex justify-center items-center border border-label w-[45px] h-[45px] bg-mint-5 p-3">
      <PlusIcon className="w-[21px] h-[21px]" weight="thin" />
    </button>
  );
}
