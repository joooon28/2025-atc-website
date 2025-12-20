import { MinusIcon } from "@phosphor-icons/react";

export default function MinusButton({ onClick }) {
  return (
    <button onClick={onClick} className="cursor-pointer hover:bg-fill hover:text-label-invert flex justify-center items-center border border-label w-[45px] h-[45px] bg-mint-5 p-3">
      <MinusIcon className="w-[21px] h-[21px]" weight="thin" />
    </button>
  );
}
