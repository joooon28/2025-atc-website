import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

export default function GalleryList() {
  return (
    <div className="flex-1 flex justify-between items-center p-[40px]">
      <div>
        <ArrowLeftIcon className="w-[24px] h-[24px]" weight="thin" />
      </div>
      <section className="flex"></section>
      <div>
        <ArrowRightIcon className="w-[24px] h-[24px]" weight="thin" />
      </div>
    </div>
  );
}
