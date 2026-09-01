import type { Content } from "@/content";
import type { CvTarget } from "@/lib/cv";
import { Reveal } from "./Reveal";

/** Contact : sobre et direct, tout est en clair et cliquable. */
export function ContactSection({
  contact,
  cv,
}: {
  contact: Content["contact"];
  cv: CvTarget;
}) {
  const rows = [
    { label: contact.emailLabel, value: contact.email, href: `mailto:${contact.email}` },
    {
      label: contact.phoneLabel,
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
    },
    {
      label: "LinkedIn",
      value: contact.linkedinLabel,
      href: contact.linkedin,
      external: true,
    },
    { label: contact.locationLabel, value: contact.location },
  ];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <Reveal>
        <p className="text-balance text-lg leading-snug text-ink sm:text-xl">{contact.intro}</p>

        <a
          href={cv.href}
          {...(cv.isPdf
            ? { download: cv.download, target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="push-button push-button--primary mt-8 inline-block px-5 py-3"
        >
          {contact.cvLabel}
        </a>
        <p className="label-instrument mt-2.5 normal-case tracking-normal">{contact.cvHint}</p>
      </Reveal>

      <Reveal delay={90}>
        <dl className="overflow-hidden rounded-[3px] border border-line">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 border-b border-line bg-panel px-5 py-4 last:border-0 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <dt className="label-instrument sm:w-28 sm:shrink-0">{row.label}</dt>
              <dd className="min-w-0 break-words font-mono text-sm text-ink">
                {row.href ? (
                  <a
                    href={row.href}
                    {...(row.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-cyan underline-offset-4 transition-colors hover:underline"
                  >
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
