import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-12 hover:translate-x-1 transition-transform duration-300">
      <h2 className="text-xl font-mono mb-4 text-gray-800">{title}</h2>
      {children}
    </section>
  );
}