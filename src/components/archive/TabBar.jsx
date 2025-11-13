import TabButton from "./TabButton";

export default function TabBar({ active, onChange }) {
  return (
    <div
      role="tablist"
      className="flex items-center justify-evenly w-[196px] h-[45px] border border-label bg-mint-6"
    >
      <TabButton
        label="Opening"
        isActive={active === "opening"}
        tabId="tab-opening"
        panelId="panel-opening"
        onClick={() => onChange("opening")}
        className="cursor-pointer"
      />
      <TabButton
        label="Final"
        isActive={active === "final"}
        tabId="tab-final"
        panelId="panel-final"
        onClick={() => onChange("final")}
        className="cursor-pointer"
      />
    </div>
  );
}
