import {
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
  GlobeIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

export default function StaffProfile({
  name = "김준수",
  nameEng = "Junsu Kim",
  lead,
  imagesrc,
}) {
  return (
    <section className="flex flex-col gap-2 aspect-[1/2]">
      <div className="aspect-[3/4] w-full max-w-[250px] mx-auto">
        <img
          src={imagesrc || "/images/archive/staff/default_profile.png"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        <div className="flex gap-1">
          <p className="font-[500] text-sm">{name}</p>
          <p className="italic text-sm">{nameEng}</p>
        </div>
        <p className="text-mint font-[350] text-sm">{lead}</p>
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
