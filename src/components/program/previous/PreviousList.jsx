export default function PreviousList({
  title = "지도 그리기",
  eng = "Drawing Map",
  text = "혼자 또 다함께 지도를 그려보고 지도에 관한 얘기를 나눕니다. 우리가 그리는 지도는 단순히 길과 장소를 표시하는 것이 아닌, 세계를 바라보는 관점을 드러내고 - 또 만들어내는 도구가 됩니다. 참여자들은 각자의 상상을 바탕으로 지도를 만들고, 서로의 지도를 비교하며 지구본의 축을 돌리고 돌리고 돌립니다. 이를 통해 시시각각 달라지는 정체성이 어떤 풍경을 만들어내는지, 그 겹쳐진 지도들이 우리에 대해 무엇을 말하는지 함께 알아가봅니다.",
  time = "9.30. (THU) 16:00-18:00",
}) {
  return (
    <div className="flex flex-col gap-5 w-[500px]">
      <div className="flex justify-center items-center bg-fill-invert w-[500px] h-[270px]">
        img
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-[10px] font-[450]">
          <p>{title}</p>
          <p className="italic">{eng}</p>
        </div>
        <p className="flex text-[14px]">{time}</p>
        <p className="flex text-[14px] whitespace-normal ">{text}</p>
        <p className="flex text-[14px] underline cursor-pointer">More Info</p>
      </div>
    </div>
  );
}
