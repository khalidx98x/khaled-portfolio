export type NavItem = {
  label: string;
  href: string;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  brief: string;
  role: string;
  period: string;
  tags: ProjectTagItem[];
  media: ProjectMediaItem;
};

export type ProjectTagItem = {
  label: string;
  highlight?: boolean;
};

export type ProjectMediaItem = {
  src: string;
  alt: string;
  priority?: boolean;
};

export type RecognitionItemData = {
  title: string;
  detail: string;
  badgeLabel: string;
};

export type ExperienceItemData = {
  role: string;
  organization: string;
  detail: string;
};

export type LogoItem = {
  name: string;
  display: string;
  detail?: string;
  assetPath?: string;
};

export type StackToolItem = {
  name: string;
  icon: string;
  tone: string;
  iconPath?: string;
};

export type StackCategoryItem = {
  title: string;
  icon: string;
  tools: StackToolItem[];
};

export type ContactCapabilityItem = {
  title: string;
  items: string;
};

export type AwardBodyPart = {
  text: string;
  strong?: boolean;
};

export type AwardSectionData = {
  headline: string;
  body: AwardBodyPart[];
  imagePaths: string[];
  imageAlt: string;
};

export const portfolio = {
  person: {
    name: "Khaled Abdalqader",
    role:
      "Product Design Lead building scalable event platforms, design systems, and AI-enabled product workflows.",
    location: "Istanbul, Türkiye"
  },
  nav: [
    { label: "Work", href: "#selected-work" },
    { label: "Awards", href: "#awards-recognition" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" }
  ] satisfies NavItem[],
  hero: {
    headlineLines: [
      "Senior Product Designer",
      "Specializing in"
    ],
    subtitle:
      "I integrate AI into my design workflows to explore faster, strengthen systems, and make smarter product decisions.",
    typewriterWords: ["Web Apps.", "Mobile Apps.", "SaaS Dashboards."]
  },
  work: {
    label: "Selected Work",
    title: "Product systems for complex event workflows.",
    description:
      "A focused index of platform chapters. Each card is ready for approved screenshots, section copy, and deeper case-study details."
  },
  projects: [
    {
      id: "design-system",
      title: "Design System for Event Management",
      brief:
        "Redesigned legacy dashboard modules into a unified, token-based system with reusable components, clearer layouts, and a consistent visual language across the platform. Integrated Claude into the workflow to audit screens, explore component variants, and speed up the shift from old layouts to the new system.",
      role: "Product Designer Lead",
      period: "Apr 2026 — May 2026",
      tags: [
        { label: "AI-Powered Design Audits" },
        { label: "Token Guided Layout" },
        { label: "Reusable Components" },
        { label: "30% Faster Delivery" },
        { label: "Unified Design Language" }
      ],
      media: {
        src: "/media/work/cards/design-system.png",
        alt: "Design System for Event Management visual composition",
        priority: true
      }
    },
    {
      id: "event-ops-app",
      title: "Event Ops App",
      brief:
        "Led the end-to-end design of Blink’s Event Ops App, a scalable operational product built for organizers managing complex on-site workflows. Turned early references into a system-led experience for attendees, VIPs, sessions, access, and event operations—used across SXSW, Super Bowl, and Sportico.",
      role: "Product Designer",
      period: "Jan 2025 — Mar 2025",
      tags: [
        { label: "Award-Winning Platform", highlight: true },
        { label: "Unified Product Experience" },
        { label: "Scalable Event Operations" }
      ],
      media: {
        src: "/media/work/cards/event-ops-app.png",
        alt: "Event Ops App visual composition"
      }
    },
    {
      id: "ticketing-commerce",
      title: "Event Ticketing & Badge Commerce",
      brief:
        "Designed a white-label ticketing and badge-commerce experience within the Blink platform, used by SXSW across two event editions. Led the design of management workflows for orders, payment methods, promotions, coupons, badge management, fulfillment, and attendee access features.",
      role: "Product Designer",
      period: "Jun 2024 — Dec 2024",
      tags: [
        { label: "£3M Ticket Sales" },
        { label: "30K+ Badges Processed" }
      ],
      media: {
        src: "/media/work/cards/ticketing-commerce.png",
        alt: "Event Ticketing & Badge Commerce visual composition"
      }
    },
    {
      id: "data-tables",
      title: "Building Configurable Data Tables",
      brief:
        "Designed Dynamic Tables for the Management Dashboard, turning static tables into flexible workspaces for complex event data. Integrated AI-powered workflows with Claude to explore solutions, prototype interactions, and speed up alignment.",
      role: "Product Designer",
      period: "Dec 2026 — Apr 2026",
      tags: [
        { label: "Flexible Data Workflows" },
        { label: "Clearer Record States" },
        { label: "Reusable Table Logic" },
        { label: "AI Prototyping" },
        { label: "Clean Dev Handoffs" }
      ],
      media: {
        src: "/media/work/cards/data-tables.png",
        alt: "Building Configurable Data Tables visual composition"
      }
    },
    {
      id: "solar-solutions",
      title: "A Digital Product Hub for Solar Solutions",
      brief:
        "Designed Ramo Power’s product website to make a broad solar portfolio easier to explore across solutions, products, projects, and catalogue content. Created a clearer structure for solar furniture, integrated poles, lighting, and product detail pages—supported by consistent image specifications and SEO-ready content patterns.",
      role: "Web / Product Designer",
      period: "Nov 2025 — Dec 2025",
      tags: [
        { label: "+40% Website Visitors" },
        { label: "+10% Conversion Rate" },
        { label: "Investor-Ready Product Showcase" }
      ],
      media: {
        src: "/media/work/cards/solar-solutions.png",
        alt: "A Digital Product Hub for Solar Solutions visual composition"
      }
    },
    {
      id: "z-learna",
      title: "Z Learna",
      brief:
        "Designed a story-led learning journey for Z Learna, helping students move from discovering the right service to trying classes and progressing with mentors, goals, and learning updates. Built around the Apply, Try, Fly framework to make education choices feel clearer, more motivating, and easier to continue.",
      role: "Product Designer",
      period: "Nov 2024 — Dec 2024",
      tags: [
        { label: "All-in-One Learning Hub" },
        { label: "Guided Student Journey" }
      ],
      media: {
        src: "/media/work/cards/z-learna.png",
        alt: "Z Learna visual composition"
      }
    }
  ] satisfies ProjectItem[],
  futureSections: [
    {
      id: "clients-platforms",
      label: "Folks",
      title: "Folks I designed for",
      description:
        "Selected organizations and event platforms represented from the approved logo references."
    },
    {
      id: "awards-recognition",
      label: "Recognition",
      title: "Awards & Recognition",
      description:
        "Placeholder anchor for approved awards, badges, and recognition copy."
    },
    {
      id: "stack",
      label: "Stack",
      title: "My Stack",
      description:
        "A practical set of tools I use across design systems, AI-assisted workflows, product delivery, and web production."
    }
  ],
  logoSets: [
    [
      {
        name: "FIFA World Cup Qatar 2022",
        display: "FIFA WORLD CUP",
        detail: "Qatar 2022",
        assetPath: "/media/logos/fifa-world-cup-qatar.svg"
      },
      {
        name: "SXSW London",
        display: "SXSW",
        detail: "London",
        assetPath: "/media/logos/sxsw.svg"
      },
      {
        name: "House of Melo",
        display: "House of",
        detail: "Melo",
        assetPath: "/media/logos/house-of-melo.svg"
      }
    ],
    [
      { name: "Formula 1", display: "F1", assetPath: "/media/logos/f1.svg" },
      {
        name: "Sportico World Summit",
        display: "Sportico",
        detail: "World Summit",
        assetPath: "/media/logos/sportico.svg"
      }
    ]
  ] satisfies LogoItem[][],
  stackCategories: [
    {
      title: "Design",
      icon: "DP",
      tools: [
        {
          name: "Figma",
          icon: "F",
          tone: "text-[#a259ff]",
          iconPath: "/media/stack/figma.png"
        },
        {
          name: "Adobe Suite",
          icon: "A",
          tone: "text-[#ff4b4b]",
          iconPath: "/media/stack/adobe-suite.png"
        },
        {
          name: "Framer",
          icon: "F",
          tone: "text-white",
          iconPath: "/media/stack/framer.png"
        },
        {
          name: "WordPress/Webflow",
          icon: "W",
          tone: "text-[#76a9ff]",
          iconPath: "/media/stack/wordpress-webflow.png"
        }
      ]
    },
    {
      title: "AI & Intelligence",
      icon: "AI",
      tools: [
        {
          name: "Claude",
          icon: "C",
          tone: "text-[#ff8b62]",
          iconPath: "/media/stack/claude.png"
        },
        {
          name: "ChatGPT",
          icon: "G",
          tone: "text-white",
          iconPath: "/media/stack/chatgpt.png"
        },
        {
          name: "Gemini",
          icon: "G",
          tone: "text-[#6aa8ff]",
          iconPath: "/media/stack/gemini.png"
        }
      ]
    },
    {
      title: "Product & PM",
      icon: "PM",
      tools: [
        { name: "Jira", icon: "J", tone: "text-[#2684ff]" },
        {
          name: "Google Workspace",
          icon: "G",
          tone: "text-[#6ab56f]",
          iconPath: "/media/stack/google-workspace.png"
        },
        {
          name: "Microsoft Suite",
          icon: "M",
          tone: "text-[#55aaff]",
          iconPath: "/media/stack/microsoft-suite.png"
        }
      ]
    }
  ] satisfies StackCategoryItem[],
  recognition: [
    {
      title: "Award title slot",
      detail: "Recognition details will be added after approval.",
      badgeLabel: "Award badge slot"
    }
  ] satisfies RecognitionItemData[],
  awards: {
    headline: "Award Winning System.",
    body: [
      { text: "Directly contributed to Blink winning " },
      { text: "Best Global Event System", strong: true },
      { text: ". By architecting the " },
      { text: "management dashboard", strong: true },
      { text: " and the dual-app ecosystem—the " },
      { text: "organizer tool", strong: true },
      { text: " and the " },
      { text: "event app", strong: true },
      {
        text: "—I helped deliver a world-class experience recognized globally for its seamless orchestration and innovation at scale."
      }
    ],
    imagePaths: [
      "/media/awards/award1.avif",
      "/media/awards/award2.avif",
      "/media/awards/award3.avif",
      "/media/awards/award4.avif"
    ],
    imageAlt: "Award recognition visual"
  } satisfies AwardSectionData,
  experience: [
    {
      role: "Earlier role slot",
      organization: "Organization slot",
      detail: "Earlier experience details will be added after approval."
    }
  ] satisfies ExperienceItemData[],
  footer: {
    heading: "Let's build the next generation of SaaS together.",
    email: "khalidalhajms@gmail.com",
    portraitPath: "/media/portrait/khaled-portrait.png",
    introTitle: "Sup!!",
    intro: [
      "Name’s Khaled. Senior Product Designer focused on web apps, mobile experiences, and complex SaaS dashboards. I use Claude and Claude Design as primary tools in my workflow, alongside other AI tools, to explore ideas faster, audit interfaces, test variants, and strengthen scalable product decisions.",
      "With a background in web development, branding, and UI design, I combine technical understanding with product thinking, design systems, and practical implementation.",
      "I’ve led a team of three designers and designed scalable platforms for clients including SXSW, Super Bowl, and Sportico — across dashboards, organizer tools, attendee apps, commerce flows, and white-label systems."
    ],
    location: "Based in Istanbul · Open to opportunities",
    capabilities: [
      {
        title: "Product Design",
        items: "UX Strategy · User Flows · Prototyping · Interaction Design"
      },
      {
        title: "Web & Mobile",
        items: "Responsive Design · Mobile Apps · Web Apps · SaaS Dashboards"
      },
      {
        title: "Design Systems",
        items: "Figma Libraries · Token Studio · Components · Variants"
      },
      {
        title: "Research & Testing",
        items: "User Research · Usability Testing · Journey Mapping"
      },
      {
        title: "AI Workflows",
        items: "Design Audits · Layout Exploration · Documentation Support"
      },
      {
        title: "Collaboration",
        items: "Design Leadership · Stakeholder Alignment · Developer Handoff"
      }
    ] satisfies ContactCapabilityItem[]
  }
};
