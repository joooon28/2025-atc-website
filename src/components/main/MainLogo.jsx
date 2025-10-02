import Logo from "../../assets/Logo.svg";

export default function MainLogo({ onClick }) {
  return (
    <div className="flex shrink-0 ustify-center items-center rounded-[60px] bg-brown p-[12px] w-[54.15764px]h-[54px]">
      <img
        onClick={onClick}
        src={Logo}
        alt="Logo"
        className="w-[30.158px] h-[21px]"
      />
    </div>
  );
}
