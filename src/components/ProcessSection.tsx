import { SectionHeader } from "./SectionHeader";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    t: "Envoyez votre demande sur WhatsApp",
    d: "Un message rapide, sans engagement. C’est le moyen le plus simple de démarrer.",
  },
  {
    n: "02",
    t: "Partagez le modèle du véhicule + photos",
    d: "Marque, modèle, année, état actuel, zones concernées. Quelques photos suffisent.",
  },
  {
    n: "03",
    t: "Recevez un devis adapté",
    d: "Conseil sur le film, les finitions et le périmètre. Devis transparent, sans surprise.",
  },
  {
    n: "04",
    t: "Pose en atelier",
    d: "Pose professionnelle, finition propre, restitution prête à reprendre la route.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-24">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            eyebrow="Process simple"
            title="De la demande à la pose : 4 étapes."
            subtitle="Pas de prise de tête, pas de devis interminable. Vous écrivez sur WhatsApp, on s’occupe du reste."
          />
        </Reveal>

        <div className="relative mt-14">
          <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <li className="group relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                  <span className="font-display text-3xl font-semibold text-accent transition-transform duration-300 group-hover:scale-110">
                    {s.n}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-white">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex justify-center">
            <WhatsAppButton ctaLocation="process" label="Démarrer ma demande sur WhatsApp" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
