import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Role {
  role: string;
  period: string;
  description?: string;
}

interface ExperienceCardProps {
  logo: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  link?: string;
  additionalRoles?: Role[];
}

const ExperienceCard = ({
  logo,
  company,
  role,
  period,
  description,
  link,
  additionalRoles,
}: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasAdditionalRoles = additionalRoles && additionalRoles.length > 0;

  const handleToggle = (e: React.MouseEvent) => {
    if (hasAdditionalRoles) {
      e.preventDefault();
      e.stopPropagation();
      setIsExpanded(!isExpanded);
    }
  };

  const content = (
    <div className="rounded-lg bg-card border border-border overflow-hidden">
      <div
        className={`flex gap-4 p-4 ${hasAdditionalRoles ? 'cursor-pointer hover:bg-secondary/10' : link ? 'card-hover cursor-pointer' : ''}`}
        onClick={handleToggle}
      >
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-secondary flex items-center justify-center">
            <img
              src={logo}
              alt={company}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-lg font-semibold text-muted-foreground">${company.charAt(0)}</span>`;
              }}
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="font-semibold text-foreground">{company}</h3>
            <span className="text-sm text-muted-foreground">{period}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{role}</p>
          {description && (
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
              {description}
            </p>
          )}
        </div>
        {hasAdditionalRoles && (
          <div className="flex items-center">
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </div>
        )}
      </div>

      {hasAdditionalRoles && isExpanded && (
        <div className="border-t border-border bg-secondary/5">
          {additionalRoles.map((additionalRole, index) => (
            <div
              key={index}
              className="px-4 py-3 border-b border-border/50 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 ml-16">
                <p className="text-sm font-medium text-foreground">{additionalRole.role}</p>
                <span className="text-sm text-muted-foreground">{additionalRole.period}</span>
              </div>
              {additionalRole.description && (
                <p className="text-sm text-muted-foreground mt-1 ml-16">
                  {additionalRole.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  if (link && !hasAdditionalRoles) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default ExperienceCard;
