import type { IconType } from "react-icons";
import {
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiSearch,
  FiTrendingUp,
  FiCpu,
  FiCloud,
  FiRefreshCw,
  FiShoppingCart,
  FiSettings,
  FiUsers,
  FiUserCheck,
} from "react-icons/fi";

export interface ServiceItem {
  id: string;
  icon: IconType;
  title: string;
  color: string;
  tagline: string;
  copy: string;
  bullets: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "svc-web-development",
    icon: FiCode,
    title: "Web Development",
    color: "#4F8CFF",
    tagline: "Fast, scalable sites built to convert.",
    copy: "We design and build websites and web apps on modern, maintainable stacks — from marketing sites to full product platforms. Every build is optimized for Core Web Vitals, accessibility, and long-term maintainability, not just launch day.",
    bullets: [
      "Next.js / React builds",
      "CMS-driven marketing sites",
      "Performance & Core Web Vitals audits",
      "Ongoing maintenance & support",
    ],
  },
  {
    id: "svc-mobile-app-development",
    icon: FiSmartphone,
    title: "Mobile App Development",
    color: "#8B5CF6",
    tagline: "Native and cross-platform apps users love.",
    copy: "From first prototype to App Store launch, we build iOS, Android, and cross-platform apps that feel native, load fast, and hold up under real usage — not just demo conditions.",
    bullets: [
      "iOS & Android native",
      "React Native / Flutter",
      "App Store & Play Store launch support",
      "Push, offline & sync architecture",
    ],
  },
  {
    id: "svc-ui-ux-design",
    icon: FiPenTool,
    title: "UI/UX Design",
    color: "#06B6D4",
    tagline: "Interfaces people actually enjoy using.",
    copy: "Good design is invisible until it's missing. We research, wireframe and prototype around real user behavior, then design systems your team can keep extending long after we hand it off.",
    bullets: [
      "User research & journey mapping",
      "Design systems & component libraries",
      "High-fidelity prototyping",
      "Usability testing",
    ],
  },
  {
    id: "svc-seo-services",
    icon: FiSearch,
    title: "SEO Services",
    color: "#10B981",
    tagline: "Findable, fast, and built to rank.",
    copy: "Technical SEO baked into the build, not bolted on after. We fix what's actually holding rankings back — crawlability, speed, structured data — then track what moves the needle.",
    bullets: [
      "Technical SEO audits",
      "Structured data & schema",
      "Content & keyword strategy",
      "Ongoing rank tracking & reporting",
    ],
  },
  {
    id: "svc-digital-marketing",
    icon: FiTrendingUp,
    title: "Digital Marketing",
    color: "#F59E0B",
    tagline: "Growth channels backed by real data.",
    copy: "Paid, lifecycle and content marketing built around measurable outcomes. We instrument everything up front so you know exactly what's driving pipeline, not just traffic.",
    bullets: [
      "Paid search & social campaigns",
      "Lifecycle & email automation",
      "Analytics & attribution setup",
      "Conversion rate optimization",
    ],
  },
  {
    id: "svc-ai-solutions",
    icon: FiCpu,
    title: "AI Solutions",
    color: "#EC4899",
    tagline: "Applied AI that ships to production.",
    copy: "Custom models, agentic workflows and LLM-powered features built with the same rigor as the rest of your stack — evaluated, monitored, and safe to put in front of real users.",
    bullets: [
      "LLM & agent integrations",
      "RAG & retrieval pipelines",
      "Model evaluation & guardrails",
      "Internal copilots & automation",
    ],
  },
  {
    id: "svc-cloud-services",
    icon: FiCloud,
    title: "Cloud Services",
    color: "#4F8CFF",
    tagline: "Infrastructure that scales without surprises.",
    copy: "We design cloud architecture for the load you'll actually have — cost-efficient at rest, resilient under spikes, and boring in the best possible way.",
    bullets: [
      "AWS / Azure / GCP architecture",
      "Cost optimization & right-sizing",
      "Infrastructure as code",
      "Disaster recovery planning",
    ],
  },
  {
    id: "svc-devops",
    icon: FiRefreshCw,
    title: "DevOps",
    color: "#8B5CF6",
    tagline: "Ship faster without breaking things.",
    copy: "CI/CD pipelines, observability and release processes that let your team deploy with confidence, multiple times a day if that's what the business needs.",
    bullets: [
      "CI/CD pipeline design",
      "Containerization & orchestration",
      "Monitoring & alerting",
      "Zero-downtime deployments",
    ],
  },
  {
    id: "svc-e-commerce-development",
    icon: FiShoppingCart,
    title: "E-Commerce Development",
    color: "#06B6D4",
    tagline: "Storefronts built for peak-day traffic.",
    copy: "Headless and platform-based commerce builds engineered to handle your highest-revenue day without buckling — with checkout flows tuned for conversion, not just uptime.",
    bullets: [
      "Headless commerce architecture",
      "Checkout & conversion optimization",
      "Inventory & payments integration",
      "Peak-traffic load testing",
    ],
  },
  {
    id: "svc-erp-solutions",
    icon: FiSettings,
    title: "ERP Solutions",
    color: "#10B981",
    tagline: "Operations software that fits how you work.",
    copy: "Custom and configured ERP implementations that unify finance, inventory and operations data — without forcing your team into a workflow that doesn't fit the business.",
    bullets: [
      "Custom & configured ERP builds",
      "Legacy system migration",
      "Cross-department integrations",
      "Reporting & analytics dashboards",
    ],
  },
  {
    id: "svc-crm-solutions",
    icon: FiUsers,
    title: "CRM Solutions",
    color: "#F59E0B",
    tagline: "One source of truth for every customer.",
    copy: "CRM builds and integrations that keep sales, support and marketing looking at the same data — so nothing falls through the cracks between teams.",
    bullets: [
      "Custom CRM builds & integrations",
      "Sales pipeline automation",
      "Support & ticketing workflows",
      "Data migration & cleanup",
    ],
  },
  {
    id: "svc-dedicated-developers",
    icon: FiUserCheck,
    title: "Dedicated Developers",
    color: "#EC4899",
    tagline: "Senior engineers, embedded in your team.",
    copy: "Need to extend your own team rather than hand off a project? We embed senior engineers directly into your workflow, tools and standups — no ramp-up theater.",
    bullets: [
      "Senior engineers, not juniors",
      "Embedded in your tools & standups",
      "Flexible month-to-month engagement",
      "Direct communication, no account layers",
    ],
  },
];
