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
  rotate = 0,
  size = 140,
}) {
  const lottieClassName = `w-full h-auto ${lottieProps.className ?? ""}`.trim();
  const widthValueRaw = typeof size === "number" ? `${size}px` : size;
  const widthValue = `min(100%, ${widthValueRaw})`;

  return (
    <div
      className="text-label flex flex-col text-center gap-6
                 w-[300px] h-[362px] bg-mint-6 border border-label p-3
                 max-mobile:w-full"
    >
      <div className="flex justify-end">
        <button
          type="button"
          aria-label="닫기"
          onClick={onClose}
          className="cursor-pointer hover:opacity-50"
        >
          <XIcon className="w-[24px] h-[24px]" weight="thin" />
        </button>
      </div>
      <div className="flex-1 min-h-0 flex items-center justify-center">
        {animationSrc && (
          <div
            className="origin-center overflow-visible "
            style={{ transform: `rotate(${rotate}deg)`, width: widthValue }}
          >
            <DotLottieReact
              src={animationSrc}
              autoplay={autoplay}
              loop={loop}
              className={lottieClassName}
              {...{ ...lottieProps, className: lottieClassName }}
            />
          </div>
        )}
      </div>
      <p className="text-[20px] font-heavy">{title}</p>
      <p className="text-[14px] font-regular px-1 whitespace-pre-line max-mobile:px-[22px]">
        {description}
      </p>
      <button
        type="button"
        onClick={onGo}
        className="cursor-pointer hover:bg-fill hover:text-label-invert mt-auto text-[14px] border border-label px-3 py-2"
      >
        바로가기
      </button>
    </div>
  );
}
