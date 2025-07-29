import { Clapperboard } from "lucide-react";
import { FolderKanban } from "lucide-react";
import { CalendarCog } from "lucide-react";
import { Target } from "lucide-react";
import { MonitorCog } from "lucide-react";
import { ShieldAlert } from "lucide-react";
import {
  Search,
  Users,
  Rocket,
  BarChart2,
  Zap,
} from "lucide-react";
import {
  UserRoundSearch,
  Link as LinkIcon,
  TrendingUp,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#how" },
  { label: "Results", href: "#why" },
];

export const metrics = [
  { label: "Dedicated Support", value: "24/7", icon: <Users size={32} /> },
  { label: "Guranteed Views",  value: "100k+", icon: <Zap size={32} /> },
  { label: "Collective Reach", value: "2M+", icon: <BarChart2 size={32} /> },
  { label: "Match Time",   value: "24‑48h", icon: <Rocket size={32} /> },
];

export const steps = [
  {
    icon: <UserRoundSearch size={28} className="text-cyan-400" />,
    title: "Targeted Research",
    description:
      "We dive deep into audience demographics, platform behaviors, and niche trends to pinpoint the perfect influencers who resonate with your brand story.",
  },
  {
    icon: <LinkIcon size={28} className="text-cyan-400" />,
    title: "Personalized Pairing",
    description:
      "Our team handles outreach, negotiation, and brief alignment—crafting bespoke partnerships that ensure both sides are excited and fully prepared.",
  },
  {
    icon: <Rocket size={28} className="text-cyan-400" />,
    title: "Flawless Execution",
    description:
      "From content calendars to publish approvals, we orchestrate every step so your campaign launches on schedule and delivers the intended impact.",
  },
  {
    icon: <TrendingUp size={28} className="text-cyan-400" />,
    title: "Continuous Optimization",
    description:
      "We track real‑time performance, A/B test creatives, and refine targeting—maximizing engagement and ROI long after launch.",
  },
];

export const features = [
  {
    icon: <Clapperboard />,
    text: "Influencer Discovery",
    description:
      "Quickly surface creators by niche, audience size, engagement, and platform so Replayed Media can pitch the right talent every time.",
  },
  {
    icon: <CalendarCog />,
    text: "Brand Prospecting",
    description:
      "Find companies that align with your creators’ audiences and goals. Complete with decision‑maker intel for faster outreach.",
  },
  {
    icon: <Target />,
    text: "Strategic Matchmaking",
    description:
      "We pair brands and influencers based on audience overlap, creative style, and budget which eliminates guesswork and misfits.",
  },
  {
    icon: <FolderKanban />,
    text: "Campaign Management",
    description:
      "Briefs, deliverables, timelines, and approvals all in one hub. Replayed Media keeps both sides on track from concept to post.",
  },
  {
    icon: <MonitorCog />,
    text: "Automated Outreach & Deal Flow",
    description:
      "Use Replayed Media’s intelligent platform to dispatch personalized pitch campaigns, schedule automated follow‑ups, and monitor engagement analytics.",
  },
  {
    icon: <ShieldAlert />,
    text: "Contracts, Payments & Compliance",
    description:
      "E‑sign agreements, secure payouts, and clear disclosure guidelines all handled by Replayed Media to keep everyone protected.",
  },
];


export const checklistItems = [
  {
    title: "Effortless Talent Discovery",
    description:
      "Leverage our portfolio of Influencers who perfectly align with your brand’s values and audience. No more guesswork, just the right fit every time.",
  },
  {
    title: "Seamless Campaign Coordination",
    description:
      "We manage everything, from creative briefs and approvals to scheduling, so you enjoy a frictionless process and campaign milestones that stay on track.",
  },
  {
    title: "Performance Analytics at Your Fingertips",
    description:
      "Get real‑time insights on reach, engagement, and ROI. Our transparent reporting empowers you to optimize campaigns on the fly and scale with confidence.",
  },
  {
    title: "Rapid Launch & Amplification",
    description:
      "Activate high‑impact campaigns in days, not weeks, and leverage multi‑channel amplification strategies that drive buzz, build momentum, and boost your bottom line.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];