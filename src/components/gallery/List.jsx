import { forwardRef } from "react";
import ListSection from "./ListSection";
import gallery from "../../data/archive/gallery.json";
import meta from "../../data/archive/gallery.meta.json";

const List = forwardRef(function List({ selected, onSelect }, ref) {
  const ids = Object.keys(gallery);

  return (
    <div
      ref={ref}
      className="
        items-start
        flex gap-3
        snap-x snap-mandatory
        overflow-x-auto
        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        [-ms-overflow-style:none]
      "
    >
      {ids.map((id) => {
        const { date, text } = meta[id] || {};
        return (
          <ListSection
            key={id}
            images={id}
            onClick={() => onSelect(id)}
            isActive={selected === id}
            date={date}
            text={text}
          />
        );
      })}
    </div>
  );
});

export default List;
