import Link from "next/link";
import { Btn, CtaBand, Eyebrow, H2, Icon, Photo, Section } from "@/components/ui";
import ServiceCards from "@/components/ServiceCards";
import Faq from "@/components/Faq";
import { clinic, faqs } from "@/data/clinic";

export default function Home() {
  return (
    <>
      <section className="bg-mint">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <Eyebrow>Thoughtful, patient-centred care</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">Your Health Deserves Thoughtful Care.</h1>
            <p className="mt-5 max-w-lg text-lg text-muted">Clear medical guidance, personalised consultations, and a welcoming approach to everyday healthcare.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Btn href="/contact#enquiry">Book an Appointment</Btn><Btn href="/about" variant="secondary">Meet Your Doctor</Btn></div>
            <p className="mt-5 text-sm text-muted">Healthcare information and appointment enquiries, made simple.</p>
          </div>
          <div className="mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-line shadow-card md:max-w-none"><Photo src="/images/doctor-portrait.svg" alt={`Illustrated portrait of ${clinic.doctor} in a white coat`} priority /></div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <ul className="mx-auto grid max-w-6xl gap-4 px-5 py-6 sm:grid-cols-3">
          {[["chat", "General healthcare consultations"], ["leaf", "Preventive healthcare"], ["calendar", "Appointment enquiries"]].map(([i, l]) => (
            <li key={l} className="flex items-center gap-3 text-sm font-medium"><span className="text-teal-mid"><Icon name={i} /></span>{l}</li>
          ))}
        </ul>
      </section>

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="aspect-[4/5] max-h-[28rem] overflow-hidden rounded-xl border border-line"><Photo src="/images/consultation.svg" alt="Illustration of a doctor speaking with a patient" /></div>
          <div><Eyebrow>About the clinic</Eyebrow><H2>A More Personal Approach to Healthcare</H2>
            <p className="mt-4 text-lg text-muted">{clinic.name} is a fictional general and preventive practice used to show what a complete clinic website can look like. Here, patients can learn about their doctor, explore the services on offer, and send an appointment enquiry in a few steps.</p>
            <p className="mt-3 text-lg text-muted">The focus is on clear communication, unhurried consultations and information that is easy to find.</p>
            <Link href="/about" className="mt-6 inline-block font-semibold text-teal-deep hover:underline">About the practice →</Link></div>
        </div>
      </Section>

      <Section tone="soft"><div className="mb-10"><Eyebrow>What we offer</Eyebrow><H2>Healthcare Services</H2></div><ServiceCards /></Section>

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="aspect-[4/5] max-h-[30rem] overflow-hidden rounded-xl border border-line"><Photo src="/images/doctor-portrait.svg" alt={`Illustrated portrait of ${clinic.doctor}`} /></div>
          <div><Eyebrow>{clinic.doctor} · General healthcare practice</Eyebrow><H2>Meet Your Doctor</H2>
            <p className="mt-4 text-lg text-muted">{clinic.doctor} offers general healthcare consultations with an emphasis on listening first. Appointments are meant to give you space to ask questions and leave with a clear understanding of what was discussed.</p>
            <p className="mt-3 text-lg text-muted">Her approach is calm, practical and respectful of the way each patient prefers to be involved in their own care.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Btn href="/about" variant="secondary">Read the full profile</Btn><Btn href="/contact#enquiry">Book an Appointment</Btn></div></div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="mb-10"><Eyebrow>How it works</Eyebrow><H2>Getting Started Is Simple</H2></div>
        <ol className="grid gap-6 md:grid-cols-3">
          {[["search", "Explore the services", "Browse the services to see which best matches what you would like to discuss."], ["send", "Send an appointment enquiry", "Fill in a short form. It prepares a message for the clinic."], ["phone", "Contact the clinic to confirm", "An online enquiry does not automatically confirm an appointment. The clinic will confirm arrangements with you."]].map(([i, t, d], n) => (
            <li key={t} className="rounded-xl border border-line bg-white p-6"><span className="flex items-center gap-3 text-teal-deep"><Icon name={i} /><span className="text-sm font-semibold">Step {n + 1}</span></span><h3 className="mt-3 font-serif text-xl">{t}</h3><p className="mt-2 text-muted">{d}</p></li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div><Eyebrow>Patient information</Eyebrow><H2>Common Questions</H2><Link href="/contact#faq" className="mt-5 inline-block font-semibold text-teal-deep hover:underline">See all FAQs →</Link></div>
          <Faq items={faqs.slice(0, 4)} />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
