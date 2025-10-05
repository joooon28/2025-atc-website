import {
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
  GlobeIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

export default function StaffProfile({ name, nameEng }) {
  return (
    <section className="flex flex-col gap-2">
      <div className="h-[311.467px] w-[233.6px] bg-mint-3"></div>
      <div className="flex flex-col items-start gap-1">
        <div className="flex gap-1">
          <p className="font-[500] text-sm">{name}</p>
          <p className="italic text-sm">{nameEng}</p>
        </div>
        <div className="flex gap-1 items-center">
          <EnvelopeSimpleIcon className="w-6 h-6" weight="light" />
          <InstagramLogoIcon className="w-6 h-6" weight="light" />
          <GlobeIcon className="w-6 h-6" weight="light" />
          <LinkedinLogoIcon className="w-6 h-6" weight="light" />
        </div>
      </div>
    </section>
  );
}
