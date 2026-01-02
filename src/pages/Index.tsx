import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import StartupCard from "@/components/StartupCard";
import SocialLinks from "@/components/SocialLinks";

const workExperience = [
  {
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGODtvGLtdIpw/company-logo_200_200/B56ZrqDHB.MIAI-/0/1764863275416/input_output_group_logo?e=1769040000&v=beta&t=A1fxbRpZIs_qQ1lEbAzp1RnY05r2XgHjcLQ75YWDWf8",
    company: "Input Output (IOHK)",
    role: "Senior AI Solution Architect",
    period: "July 2025 - Present",
    description:
      "Leading AI solution architecture and driving innovation in blockchain and AI integration.",
    link: "https://iohk.io/",
    additionalRoles: [
      {
        role: "Entrepreneur in Residence",
        period: "Oct 2024 - July 2025",
        description:
          "Driving innovation and exploring new business opportunities at the intersection of blockchain and AI.",
      },
      {
        role: "Applied AI Research",
        period: "April 2024 - Oct 2024",
        description:
          "Conducted applied AI research for blockchain applications and decentralized systems.",
      },
      {
        role: "Head of Product Design",
        period: "May 2022 - April 2024",
        description:
          "Led product design department with 10 direct reports on complex decentralized products including Atala Prism (Identity), Lace (Web3 Wallet), Intersect (Governance), Project Catalyst (Innovation Funding), Marlowe (Smart Contracts), and RealFi (Micro-Finance).",
      },
      {
        role: "UX Product Designer",
        period: "May 2021 - May 2022",
        description:
          "Designed user experiences for blockchain products, focusing on making decentralized technology accessible.",
      },
    ],
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHWjGqYIDFv6Q/company-logo_200_200/B56Zia34ebG0AU-/0/1754944997878/sun_life_financial_logo?e=1769040000&v=beta&t=ri77byaHCeYYlKYGPBaxg9hjYlLbW2u2dY2LhDtbNYY",
    company: "Sun Life",
    role: "Senior User Experience Architect",
    period: "2021",
    description:
      "Introduced continuous product discovery as an agile design process lead to improve our team velocity from shipping software releases every 14 weeks to shipping a release every 4 weeks.",
    link: "https://www.sunlife.com/",
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQE3hYT2QCBRzw/company-logo_200_200/company-logo_200_200/0/1687864720039/consensys_software_inc_logo?e=1769040000&v=beta&t=5sRKX29xqYNNQyWRi-ToFIBfAo8Ze0E5BPW777eoaOE",
    company: "ConsenSys",
    role: "Senior Product Designer",
    period: "2019",
    description:
      "Designed user experiences for Web3 and blockchain products, focusing on making decentralized technology accessible and user-friendly for mainstream adoption.",
    link: "https://consensys.io/",
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/D560BAQESSH3ao_I1DQ/company-logo_200_200/company-logo_200_200/0/1733334407018/arcticwolf_logo?e=1769040000&v=beta&t=_E3ElDK2nG8KP3eB4j790lYwk5gZ8unTwLmjzxoQDEM",
    company: "Arctic Wolf",
    role: "Member of Technical Staff",
    period: "2018",
    description:
      "Designed intuitive interfaces for cybersecurity solutions, helping organizations detect and respond to cyber threats through user-centered security operations platform design.",
    link: "https://arcticwolf.com/",
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/C510BAQFJKVAE-9EDOQ/company-logo_200_200/company-logo_200_200/0/1631380332146?e=1769040000&v=beta&t=XTO5q2j_3H7Wm4OA0y5qeioXOzwYYOq68R7iroYk0Lg",
    company: "Aterica Digital Health",
    role: "Senior UX/UI",
    period: "2016",
    description:
      "Aterica is a consumer-focused digital health company that develops health measurement, monitoring, and diagnostic products to enable individuals and families to actively manage their health on their own terms.",
    link: "https://aterica.com/",
  },
];

const education = [
  {
    logo: "https://media.licdn.com/dms/image/v2/C560BAQH0rMqWuDcNzA/company-logo_200_200/company-logo_200_200/0/1656670432790/carnegie_mellon_university_logo?e=1769040000&v=beta&t=ig-xMOItV_T4OmDiN3EfDaqBpngUigxBnesg97_Zkek",
    company: "Carnegie Mellon University - Tepper School of Business",
    role: "Product Management Academy Certificate",
    period: "Product Management",
    link: "https://www.cmu.edu/tepper/",
  },
];

const skills = [
  { name: "AI Agents", note: "Building and leading AI agent networks" },
  { name: "Strategic Planning" },
  { name: "Product Vision" },
  { name: "Leadership", note: "Led team of 10+ direct reports" },
  { name: "Blockchain/Web3", note: "4+ years at Input Output Global" },
  { name: "Product Design", note: "Head of Product Design at IOHK" },
  { name: "AI Research", note: "Applied AI research and solutions" },
  { name: "Community Building", note: "Founded IoT Waterloo & co-founded ETHWaterloo" },
  { name: "Entrepreneurship", note: "Multiple ventures and published author" },
  { name: "Innovation", note: "Entrepreneur in Residence at IOHK" },
  { name: "Writing", note: "Published author on Contextual Intelligence" },
  { name: "Public Speaking" },
];

const projects = [
  {
    title: "AI Agents Waterloo Voice Hackathon",
    period: "Nov 2024 - Present",
    description:
      "Building and leading a new peer-to-peer network in the Waterloo Region around the theme of AI Agents, fostering innovation and collaboration in the AI community.",
    technologies: [
      "Community Building",
      "AI Agents",
      "Network Development",
      "Event Organization",
    ],
    image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/vm/e731dca6-b23e-456f-bec5-8353f59f4ca8.png",
    websiteUrl: "https://waterloo-voice-hackathon.replit.app/",
  },
  {
    title: "Cultivating Clarity",
    period: "Sep 2023 - Present",
    description:
      "The art of discerning what matters using contextual intelligence. Published book arguing that successful innovation stems from deep understanding of customers' struggles, motivations, and aspirations. Draws on perspectives from nine industry experts including Jeff Jonas, Nick Shackleton-Jones, Bob Moesta, and Michael Levin.",
    technologies: [
      "Customer Contextual Intelligence",
      "System 1 & System 2 Thinking",
      "Information Foraging Theory",
      "Jobs to Be Done Theory",
      "Product Strategy",
      "Innovation Frameworks",
    ],
    websiteUrl: "https://a.co/d/eIP4QuQ",
    websiteText: "Amazon",
    image: "https://media.licdn.com/dms/image/v2/D562DAQF4ix9dbqRXXA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1721392290760?e=1767909600&v=beta&t=o7rxNZOcFu0BeyBXgw2-HcVx49L5F0IX6lD8rDTHEls",
  },
  {
    title: "NeuroKick",
    period: "Sept 2023 - Oct 2024",
    description:
      "Privacy-focused leadership development sidekick that catches issues early, provides objective data, scales effortlessly, drives accountability, and proves ROI by connecting behavioral patterns to business outcomes.",
    technologies: [
      "AI/ML",
      "Leadership Analytics",
      "Privacy-First Design",
      "Behavioral Analysis",
      "Data Science",
    ],
    websiteUrl: "https://neurokick.ai/",
    image: "/neurokick-screenshot.png",
  },
  {
    title: "World's First Agent to Agent Payments Hackathon",
    period: "Jan 2025 - Feb 2025",
    description:
      "Organized and ran the world's first hackathon focused on Agent to Agent payments, pioneering new paradigms in autonomous AI interactions and financial transactions.",
    technologies: [
      "AI Agents",
      "Blockchain",
      "Payment Systems",
      "Event Management",
      "Innovation",
    ],
    image: "https://media.licdn.com/dms/image/v2/D562DAQG1jffGPQdUjA/profile-treasury-image-shrink_800_800/B56Zb53Ck.G4AY-/0/1747948679779?e=1767913200&v=beta&t=6sxrPymhEF0URQRejSz6NH8Z1-iwus1LRo2cg6IuHMU",
    websiteUrl: "https://instant-landing-sculptor.lovable.app/",
  },
];

// Removed Ambient Intelligence IoT Conference from projects - moved to startups/community section

const startups = [
  {
    logo: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/73/d535ca7b-5556-4cce-8212-3d1c3fd29820",
    name: "AI Agents Waterloo",
    location: "Waterloo, Ontario",
    period: "Nov 2024 - Present",
    description:
      "Building and leading a new peer-to-peer network in the Waterloo Region around the theme of AI Agents, fostering innovation and collaboration in the AI community. Creating a space for developers, researchers, and entrepreneurs to explore the future of autonomous AI systems.",
    backers: [],
    websiteUrl: "https://luma.com/event/manage/evt-eyuHVOSZLD1WhCQ",
  },
  {
    logo: "https://pbs.twimg.com/profile_images/1137853093327048705/SNJvxKF__400x400.png",
    name: "Internet of Things Waterloo Region",
    location: "Waterloo, Ontario",
    period: "Jan 2014 - Jan 2019",
    description:
      "Founded and led Canada's largest Internet of Things peer-to-peer network in the pre-COVID era. Built a thriving community of innovators, developers, and entrepreneurs focused on IoT technologies.",
    backers: [],
    websiteUrl: "https://iotwaterloo.github.io/home/",
    mediaCoverage: [
      { name: "Twitter/X", url: "https://x.com/iotWaterloo" },
      { name: "MakeBright", url: "https://makebright.com/2014/04/internet-of-things-waterloofirst-meet-up/" },
    ],
  },
  {
    logo: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/000/537/763/datas/large.png",
    name: "ETHWaterloo",
    location: "Waterloo, Ontario",
    period: "July 2017 - Aug 2017",
    description:
      "Co-founded the world's largest Ethereum hackathon in 2017. Brought together over 400 talented hackers and developers from across the world to build decentralized applications. Featured mentorship from Ethereum Founder Vitalik Buterin.",
    backers: [],
    mediaCoverage: [
      { name: "BetaKit", url: "https://betakit.com/teams-from-over-32-countries-attend-ethereum-hackathon-in-waterloo/" },
      { name: "Forbes", url: "https://www.forbes.com/sites/ksamani/2017/10/20/what-happens-when-you-lock-400-crypto-nerds-in-a-room-for-the-weekend/" },
      { name: "Cision", url: "https://www.newswire.ca/news-releases/cats-invade-worlds-largest-ethereum-hackathon-651263343.html" },
    ],
  },
  {
    logo: "/Ambient.png",
    name: "Ambient Intelligence IoT Conference",
    location: "Waterloo, Ontario",
    period: "August 20, 2015",
    description:
      "Organized and hosted a conference focused on Ambient Intelligence and the Internet of Things, bringing together thought leaders and innovators to explore the future of connected environments and smart systems.",
    backers: [],
    mediaCoverage: [
      { name: "Marketing Video", url: "https://youtu.be/HllGW01hL8E?si=Y4MV5KdFvadc8aKg" },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl py-16 px-4 sm:px-6">
        {/* Hero Section */}
        <section className="mb-2 animate-fade-in">
          <div className="flex items-start gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-secondary flex-shrink-0">
              <img
                src="/ian.png"
                alt="Ian Timotheos-Pilon"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Hi 👋, I'm Ian from Waterloo 🇨🇦
              </h1>
              <p className="text-lg text-muted-foreground">
                Builder | Connector | Published Author on Contextual Intelligence
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" title="About">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I build at the edges of what's emerging. Over a decade, I've founded communities
              around nascent technologies—IoT Waterloo (Canada's largest IoT network), ETHWaterloo
              (world's largest Ethereum hackathon in 2017), and now AI Agents Waterloo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm drawn to the intersection of technology and human potential: leading product and AI solutions
              at{" "}
              <a
                href="https://iohk.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium link-underline"
              >
                Input Output Global
              </a>
              , developing NeuroKick (a privacy-focused leadership sidekick), and writing
              "Cultivating Clarity" about discerning what matters using contextual intelligence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's organizing the world's first Agent-to-Agent Payments Hackathon or
              convening 400+ developers around decentralized tech, I'm energized by spotting
              patterns early and creating the conditions for interesting people to collide and
              build together.
            </p>
          </div>
        </Section>

        {/* Community Initiatives Section - Moved to be front and center */}
        <Section id="startups" title="Community Initiatives">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Building Networks Around What's Next
            </h3>
            <p className="text-muted-foreground">
              I've founded and co-founded transformative community initiatives that have
              brought together thousands of innovators, developers, and entrepreneurs.
            </p>
          </div>
          <div className="grid gap-6">
            {startups.map((startup) => (
              <StartupCard key={startup.name} {...startup} />
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Recent Projects">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Proof of exceptional work
            </h3>
            <p className="text-muted-foreground">
              I've worked on a variety of projects, from simple websites to complex
              web applications. Here are a few of my favorites.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>

        {/* Work Experience Section - Moved down before Contact */}
        <Section id="experience" title="Work Experience">
          <div className="space-y-4">
            {workExperience.map((exp) => (
              <ExperienceCard
                key={`${exp.company}-${exp.period}`}
                {...exp}
              />
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Get in Touch
            </h3>
            <p className="text-muted-foreground">
              Feel free to reach out via email at{" "}
              <a
                href="mailto:ianpilon@gmail.com"
                className="text-foreground font-medium link-underline"
              >
                ianpilon@gmail.com
              </a>{" "}
              or connect with me on LinkedIn. I'm always open to interesting conversations
              about AI, innovation, and building transformative products.
            </p>
          </div>
          <SocialLinks />
        </Section>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Ian Timotheos-Pilon. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
