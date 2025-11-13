import Logo from "../../assets/Logo.svg";

export default function MainLogo({ onClick }) {
  return (
    <div className="cursor-pointer flex shrink-0 ustify-center items-center rounded-[60px] bg-brown p-[12px] h-[45px]">
      <img
        svg={Logo}
        onClick={onClick}
        src={Logo}
        alt="Logo"
        className="w-[30.158px] h-[21px]"
      />
    </div>
  );
}
