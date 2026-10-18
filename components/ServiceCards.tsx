import Link from "next/link";
import { services } from "@/data/clinic";
import { Icon } from "./ui";

export default function ServiceCards() {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {services.map((s) => (
        <li key={s.slug} className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-md">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-mint text-teal-deep"><Icon name={s.icon} /></span>
          <h3 className="mt-5 font-serif text-2xl">{s.title}</h3>
          <p className="mt-2 flex-1 text-muted">{s.summary}</p>
          <Link href={`/services/${s.slug}`} aria-label={`Learn more about ${s.title}`} className="mt-5 text-sm font-semibold text-teal-deep hover:underline">Learn more →</Link>
        </li>
      ))}
    </ul>
  );
}
