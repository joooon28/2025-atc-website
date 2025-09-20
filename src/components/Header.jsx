import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="border border-label bg-mint-4 absolute top-6 left-1/2 -translate-x-1/2 z-10 py-3 px-8">
      <nav>
        <ul className="italic flex gap-8">
          <li className="cursor-pointer" onClick={() => navigate("./about")}>
            About
          </li>
          <li className="cursor-pointer" onClick={() => navigate("./about")}>
            Work
          </li>
          <li className="cursor-pointer" onClick={() => navigate("./about")}>
            Program
          </li>
          <li className="cursor-pointer">Archive</li>
          <li className="cursor-pointer">Map</li>
          <li className="cursor-pointer">Playground</li>
        </ul>
      </nav>
    </header>
  );
}
