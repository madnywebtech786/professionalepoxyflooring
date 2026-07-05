import { BadgeCheck, HardHat, FlaskConical, Users, Wallet, Timer } from "lucide-react";

export const WHY_CHOOSE_US = [
  {
    id: "experienced",
    title: "15+ Years of Experience",
    description: "Over a decade installing epoxy systems in Calgary garages, warehouses, and commercial spaces, so we already know what your slab and our winters will do to a floor.",
    icon: HardHat,
    stat: "15+",
    statLabel: "Years in Business",
    span: "featured",
  },
  {
    id: "licensed",
    title: "Licensed and Insured",
    description: "Fully licensed, bonded, and insured, so you are covered if anything goes wrong on site.",
    icon: BadgeCheck,
    span: "default",
  },
  {
    id: "materials",
    title: "High Quality Materials",
    description: "Industrial grade epoxy and polyaspartic systems rated for Alberta's temperature swings, not thin big box store kits.",
    icon: FlaskConical,
    span: "default",
  },
  {
    id: "team",
    title: "Trained In House Team",
    description: "Trained, uniformed crews on every job, not a rotating cast of subcontractors you have never met.",
    icon: Users,
    span: "default",
  },
  {
    id: "affordable",
    title: "Straight, Itemized Pricing",
    description: "You get a written quote before we start, with no hidden fees or surprise costs added midway through the job.",
    icon: Wallet,
    span: "default",
  },
  {
    id: "fast",
    title: "Fast Turnaround",
    description: "Most garage and residential projects are completed in days, not weeks, without cutting corners on prep or cure time.",
    icon: Timer,
    span: "full",
  },
];
