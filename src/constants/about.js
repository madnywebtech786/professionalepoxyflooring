import { Radar, ScanLine, Layers, ShieldCheck, Target, HeartHandshake, Leaf, Gauge, Compass } from "lucide-react";

export const ABOUT_METRICS = [
  { id: "experience", value: 15, suffix: "+", label: "Years in Operation", code: "OPS-01" },
  { id: "projects", value: 1200, suffix: "+", label: "Floors Deployed", code: "OPS-02" },
  { id: "satisfaction", value: 98, suffix: "%", label: "Client Satisfaction", code: "OPS-03" },
];

export const ABOUT_PILLARS = [
  {
    id: "precision",
    title: "Precision Prep",
    description: "Diamond ground substrates and moisture testing before a drop of material is mixed, since most floor failures start in the prep stage, not the topcoat.",
    icon: ScanLine,
  },
  {
    id: "systems",
    title: "Engineered Systems",
    description: "Industrial grade epoxy and polyaspartic formulations matched to your load, use case, and Calgary's freeze and thaw cycles.",
    icon: Layers,
  },
  {
    id: "assurance",
    title: "Quality Assurance",
    description: "Every install passes a multi point inspection before we call a project complete.",
    icon: ShieldCheck,
  },
  {
    id: "monitoring",
    title: "Long Term Support",
    description: "A written warranty backed by a team that still answers the phone after the invoice is paid.",
    icon: Radar,
  },
];

export const ABOUT_MISSION =
  "To install flooring systems that hold up to Calgary's real world demands, freeze and thaw, road salt, daily traffic, without asking clients to compromise on how the finished space looks or feels.";

export const ABOUT_STORY = {
  eyebrow: "Our Story",
  title: "Built on the shop floor, not in a boardroom",
  paragraphs: [
    "We started as a small crew doing garage floors on weekends around Calgary. Every callback, every failed batch of resin, every slab that didn't cure right in the cold taught us something a sales brochure never could.",
    "Today we run the same way, hands on, on site, accountable for the finish long after the crew has packed up. Growth changed our size, not our standard.",
  ],
};

export const ABOUT_MISSION_STATEMENT = {
  eyebrow: "Our Mission",
  icon: Target,
  code: "M-01",
  statement: "Engineer flooring that performs like it was built for a factory floor, then finish it like it belongs in a showroom.",
  points: [
    { id: "craft", label: "Craft over shortcuts", icon: Gauge },
    { id: "transparent", label: "Straight, honest quotes", icon: HeartHandshake },
    { id: "accountable", label: "We answer the phone", icon: ShieldCheck },
  ],
};

export const ABOUT_VISION_STATEMENT = {
  eyebrow: "Our Vision",
  icon: Compass,
  code: "V-01",
  statement: "Become the standard clients measure every other flooring crew against for precision, for material science, and for showing up.",
  points: [
    { id: "standard", label: "Set the regional benchmark", icon: Radar },
    { id: "systems", label: "Invest in better systems, yearly", icon: Layers },
    { id: "lowvoc", label: "Low-VOC, occupied-space safe", icon: Leaf },
  ],
};
