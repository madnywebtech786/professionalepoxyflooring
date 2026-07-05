import { SearchCheck, Hammer, PaintBucket, ShieldCheck, Truck } from "lucide-react";

export const PROCESS_STEPS = [
  {
    id: "inspection",
    step: "01",
    title: "Free Inspection and Quote",
    description: "We assess your slab, moisture levels, and project scope on site, then give you a firm, itemized quote before any work is booked.",
    icon: SearchCheck,
  },
  {
    id: "preparation",
    step: "02",
    title: "Surface Preparation",
    description: "Diamond grinding removes old coatings and contaminants, and any cracks or joints are repaired, to create the bonding surface epoxy actually needs.",
    icon: Hammer,
  },
  {
    id: "application",
    step: "03",
    title: "Application",
    description: "Precision mixed epoxy is applied in controlled, seamless layers, using the flake, quartz, or metallic system matched to your space.",
    icon: PaintBucket,
  },
  {
    id: "quality-check",
    step: "04",
    title: "Quality Check",
    description: "Every inch is inspected for finish, texture, and durability before we consider the job done.",
    icon: ShieldCheck,
  },
  {
    id: "delivery",
    step: "05",
    title: "Walkthrough and Handoff",
    description: "We walk the finished floor with you, confirm cure times for foot and vehicle traffic, and hand off your warranty paperwork.",
    icon: Truck,
  },
];
