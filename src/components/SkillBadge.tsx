interface SkillBadgeProps {
  name: string;
  note?: string;
}

const SkillBadge = ({ name, note }: SkillBadgeProps) => {
  return (
    <div className="group relative">
      <span className="skill-badge transition-colors hover:bg-secondary/80">
        {name}
      </span>
      {note && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-foreground text-background rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {note}
        </span>
      )}
    </div>
  );
};

export default SkillBadge;
