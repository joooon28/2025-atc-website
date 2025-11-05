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
  mail, // "name@example.com"
  insta, // "@handle" 또는 "https://instagram.com/handle"
  linkedin, // "https://www.linkedin.com/in/handle"
  website, // "example.com" 또는 "https://example.com"
}) {
  const emailHref = mail ? `mailto:${mail}` : null;
  const instaHref = insta
    ? insta.startsWith("http")
      ? insta
      : `https://instagram.com/${insta.replace(/^@/, "")}`
    : null;
  const linkedinHref = linkedin
    ? linkedin.startsWith("http")
      ? linkedin
      : `https://${linkedin}`
    : null;
  const websiteHref = website
    ? website.startsWith("http")
      ? website
      : `https://${website}`
    : null;

  const isVideo = /\.(mp4|mov)$/i.test(imagesrc ?? "");
  return (
    <section className="flex flex-col gap-2">
      <div className="aspect-[3/4] w-full overflow-hidden">
        {isVideo ? (
          <video
            src={imagesrc}
            className="w-full h-full object-cover object-[50%_0px] scale-110"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={imagesrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="flex flex-col items-start gap-1">
        <div className="flex gap-1">
          <p className="font-[500] text-sm">{name}</p>
          <p className="italic text-sm">{nameEng}</p>
        </div>
        {lead && <p className="text-mint font-[350] text-sm">{lead}</p>}

        <div className="flex gap-1 items-center">
          {emailHref && (
            <a href={emailHref} aria-label={`Send email to ${name}`}>
              <EnvelopeSimpleIcon className="w-6 h-6" weight="light" />
            </a>
          )}

          {instaHref && (
            <a
              href={instaHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Instagram"
            >
              <InstagramLogoIcon className="w-6 h-6" weight="light" />
            </a>
          )}

          {websiteHref && (
            <a
              href={websiteHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open website"
            >
              <GlobeIcon className="w-6 h-6" weight="light" />
            </a>
          )}

          {linkedinHref && (
            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn"
            >
              <LinkedinLogoIcon className="w-6 h-6" weight="light" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
