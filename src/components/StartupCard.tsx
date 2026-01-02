interface StartupCardProps {
  logo: string;
  name: string;
  location: string;
  period: string;
  description: string;
  backers: { name: string; url?: string }[];
  websiteUrl?: string;
  sourceUrl?: string;
  mediaCoverage?: { name: string; url: string }[];
}

const StartupCard = ({
  logo,
  name,
  location,
  period,
  description,
  backers,
  websiteUrl,
  sourceUrl,
  mediaCoverage,
}: StartupCardProps) => {
  return (
    <div className="p-6 rounded-lg bg-card border border-border card-hover">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-lg overflow-hidden bg-secondary flex-shrink-0 flex items-center justify-center">
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-semibold text-muted-foreground">${name.charAt(0)}</span>`;
            }}
          />
        </div>
        <div className="flex-1">
          <div className="text-sm text-muted-foreground mb-1">{period}</div>
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {backers.map((backer) =>
          backer.url ? (
            <a
              key={backer.name}
              href={backer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              {backer.name}
            </a>
          ) : (
            <span
              key={backer.name}
              className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
            >
              {backer.name}
            </span>
          )
        )}
      </div>
      <div className="flex flex-wrap gap-4">
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground link-underline"
          >
            Website
          </a>
        )}
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground link-underline"
          >
            Media Coverage
          </a>
        )}
        {mediaCoverage && mediaCoverage.map((media) => (
          <a
            key={media.name}
            href={media.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground link-underline"
          >
            {media.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default StartupCard;
