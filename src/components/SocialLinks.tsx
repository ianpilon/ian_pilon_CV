import { Linkedin, Github, Twitter } from "lucide-react";

const SocialLinks = () => {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ianpilon/",
      icon: Linkedin,
    },
    {
      name: "X",
      url: "https://x.com/IanTimotheos",
      icon: Twitter,
    },
    {
      name: "GitHub",
      url: "https://github.com/ianpilon",
      icon: Github,
    },
  ];

  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
        >
          <link.icon className="w-4 h-4" />
          <span className="text-sm font-medium">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
