import CloseButton from "../../../components/archive/CloseButton";
import TabBar from "../../../components/archive/TabBar";
import { useState } from "react";
import Opening from "./Opening";
import Final from "./Final";

export default function Documentary({ onClose }) {
  const [active, setActive] = useState("opening");

  return (
    <div className="flex flex-col min-h-svh">
      <div className="fixed inset-x-0 z-[60] flex justify-center">
        <button onClick={onClose}>
          <CloseButton />
        </button>
      </div>

      <div className="fixed inset-x-0 bottom-10 z-[60] flex justify-center">
        <TabBar active={active} onChange={setActive} />
      </div>
      <div className="relative z-10 flex-1 overflow-y-auto">
        <div className="relative mx-auto w-full min-h-[60vh] px-4 py-6">
          <section
            role="tabpanel"
            id="panel-opening"
            aria-labelledby="tab-opening"
            aria-hidden={active !== "opening"}
            className={[
              "absolute inset-0 transition-opacity duration-300",
              active === "opening"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none",
            ].join(" ")}
          >
            <Opening />
          </section>

          <section
            role="tabpanel"
            id="panel-final"
            aria-labelledby="tab-final"
            aria-hidden={active !== "final"}
            className={[
              "absolute inset-0 transition-opacity duration-300",
              active === "final"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none",
            ].join(" ")}
          >
            <Final />
          </section>
        </div>
      </div>
    </div>
  );
}
