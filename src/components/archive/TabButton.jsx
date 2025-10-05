export default function TabButton({
  label,
  isActive = false,
  tabId,
  panelId,
  onClick,
  className = "",
}) {
  return (
    <button
      role="tab"
      id={tabId}
      aria-controls={panelId}
      aria-selected={isActive}
      onClick={onClick}
      className={[
        "italic",
        isActive
          ? "underline font-[600] text-label"
          : "text-label/70 hover:text-label hover:underline",
        className,
      ].join(" ")}
    >
      {label}
    </button>
  );
}
