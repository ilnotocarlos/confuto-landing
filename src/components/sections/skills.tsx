const skills = [
  "Design Thinking",
  "Service Design",
  "Facilitazione di team",
  "Future Thinking",
  "Organizational Design",
  "Collaborative design",
  "Use Experience Design",
  "Cultural Design",
  "Strategy",
  "Customer Experience",
  "User Research",
  "Business Design",
  "Innovation",
  "Brand",
  "Generative AI",
];

export function SkillsSection() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 text-center md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Confuto pensa questa lingua, ma la semplifica per tutti
        </p>
        <ul className="mx-auto mt-10 max-w-2xl columns-3 gap-6 text-left">
          {skills.map((skill) => (
            <li
              key={skill}
              className="border-b border-border pb-2 pt-2 text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
