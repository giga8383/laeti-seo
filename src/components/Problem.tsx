import ProblemStory from './ProblemStory';

/* Section « Vous vous reconnaissez ? » : le contenu et l'animation sont dans ProblemStory (composant client). */
export default function Problem() {
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ProblemStory />
      </div>
    </section>
  );
}
