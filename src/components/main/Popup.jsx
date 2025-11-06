import { XIcon } from "@phosphor-icons/react";

export default function Popup() {
  return (
    <div className="text-label flex flex-col text-center gap-6 w-[300px] h-[362px] bg-mint-6 border border-label p-3">
      <div className="flex justify-end">
        <XIcon className="w-[24px] h-[24px]" weight="thin" />
      </div>
      <p className="text-[20px] font-semibold">생각이 번뜩</p>
      <p className="text-[14px] px-3">
        무작위로 선택된 프로젝트 페이지로 이동해요. '생각이 번뜩!' 떠오를 계기가
        될 수도?
      </p>
      <button className="mt-auto text-[14px] border border-label px-3 py-2">
        바로가기
      </button>
    </div>
  );
}
