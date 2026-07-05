import {
  Home,
  Layers,
  Wrench,
  Warehouse,
  Building2,
  Hospital,
  UtensilsCrossed,
  FlaskConical,
  School,
  Waves,
  Factory,
  Store,
  Hotel,
  Scissors,
  Sparkles,
  ShieldCheck,
  Palette,
  Droplets,
  Clock,
  Gem,
} from "lucide-react";

export const ICON_MAP = {
  Home,
  Layers,
  Wrench,
  Warehouse,
  Building2,
  Hospital,
  UtensilsCrossed,
  FlaskConical,
  School,
  Waves,
  Factory,
  Store,
  Hotel,
  Scissors,
  Sparkles,
  ShieldCheck,
  Palette,
  Droplets,
  Clock,
  Gem,
};

export function resolveIcon(name) {
  return ICON_MAP[name] ?? Sparkles;
}
