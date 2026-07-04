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
      id: "management-dashboard",
      title: "Redesigning Blink’s Dashboard for Consistency and Scale",
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
        src: "/media/work/cards/management-dashboard.png",
        alt: "Redesigning Blink’s Dashboard for Consistency and Scale visual composition",
        priority: true
      }
    },
    {
      id: "organizer-app",
      title: "Building Blink’s Award-Winning Organizer App",
      brief:
        "Led the end-to-end design of Blink’s new Organizer App, turning early references into a scalable product for complex event operations, attendee and VIP management, sessions, access, and on-site workflows.",
      role: "Product Designer",
      period: "Jan 2024 — Mar 2024",
      tags: [
        { label: "Award-Winning Platform", highlight: true },
        { label: "Unified Product Experience" },
        { label: "Scalable Event Operations" }
      ],
      media: {
        src: "/media/work/cards/organizer-app.png",
        alt: "Building Blink’s Award-Winning Organizer App visual composition"
      }
    },
    {
      id: "dynamic-tables",
      title: "Redesigning Dynamic Tables for Complex Event Data",
      brief:
        "Led the redesign of Blink’s Dynamic Tables system, transforming dense event data into a flexible workspace with configurable columns, inline editing, draft records, validation states, and reusable table logic. Integrated Claude early in the process to turn brainstorming into presentation-ready concepts.",
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
        src: "/media/work/cards/dynamic-tables.png",
        alt: "Redesigning Dynamic Tables for Complex Event Data visual composition"
      }
    },
    {
      id: "attendee-vip",
      title: "Unifying Attendee & VIP Experiences in One App",
      brief:
        "Leading the new Attendee App and integrating VIP journeys into one personalized product. Used custom Claude skills to simulate VIP perspectives, support design sprints, audit flows, and explore new page variants for premium services and persona-specific needs.",
      role: "Product Design Lead",
      period: "Aug 2025 — October 2025",
      tags: [
        { label: "Unified App Experience" },
        { label: "VIP-Ready Architecture" },
        { label: "Claude Audits" },
        { label: "Faster Solution Exploration with Claude" }
      ],
      media: {
        src: "/media/work/cards/attendee-vip.png",
        alt: "Unifying Attendee & VIP Experiences in One App visual composition"
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
      "Name’s Khaled. Senior Product Designer focused on web apps, mobile experiences, and complex SaaS dashboards. I design products that make dense workflows feel clearer, more scalable, and easier to build.",
      "My work combines product thinking, design systems, front-end understanding, and AI-integrated workflows — from redesigning event-management platforms to shaping organizer tools, attendee apps, and dashboard systems used across large-scale events.",
      "I care about clean structure, edge-case thinking, practical implementation, and design that works beyond the perfect happy path."
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
