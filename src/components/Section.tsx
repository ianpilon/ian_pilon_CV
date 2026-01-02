import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`pt-2 pb-12 ${className}`}>
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
