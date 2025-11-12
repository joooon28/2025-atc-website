import { XIcon } from "@phosphor-icons/react";

export default function CloseButton() {
  return (
    <div className="pt-10 flex flex-col justify-end items-center">
      <div className="cursor-pointer hover:bg-fill hover:text-label-invert hover:border-label-invert flex justify-center items-center border border-label w-[45px] h-[45px] bg-mint-4 p-3">
        <XIcon className="w-[21px] h-[21px]" weight="thin" />
      </div>
    </div>
  );
}
