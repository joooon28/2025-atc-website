import Logo from "../../assets/Logo.svg";

export default function MainLogo() {
  return (
    <div className="flex justify-center items-center rounded-[60px] bg-brown p-[12px] w-[54.15764px]h-[54px]">
      <img src={Logo} alt="Logo" className="w-[30.158px] h-[21px]" />
    </div>
  );
}
