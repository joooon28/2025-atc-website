import { XIcon } from "@phosphor-icons/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Popup({
  animationSrc,
  autoplay = true,
  loop = true,
  title = "생각이 번뜩",
  description = "무작위로 선택된 프로젝트 페이지로 이동해요. '생각이 번뜩!' 떠오를 계기가 될 수도?",
  onClose,
  onGo,
  lottieProps = {},
}) {
  return (
    <div className="text-label flex flex-col text-center gap-6 w-[300px] h-[362px] bg-mint-6 border border-label p-3">
      <div className="flex justify-end">
        <button type="button" aria-label="닫기" onClick={onClose}>
          <XIcon className="w-[24px] h-[24px]" weight="thin" />
        </button>
      </div>
      <div className="flex-1 min-h-0 flex items-center justify-center">
        {animationSrc && (
          <DotLottieReact
            src={animationSrc}
            autoplay={autoplay}
            loop={loop}
            className="w-auto h-full"
            {...lottieProps}
          />
        )}
      </div>
      <p className="text-[20px] font-heavy">{title}</p>
      <p className="text-[14px] font-regular px-3">{description}</p>
      <button
        type="button"
        onClick={onGo}
        className="mt-auto text-[14px] border border-label px-3 py-2"
      >
        바로가기
      </button>
    </div>
  );
}
