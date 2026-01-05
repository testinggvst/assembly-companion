import { Wrench, Hammer, Scissors, CircleDot } from "lucide-react";

interface ToolBadgeProps {
  tool: string;
  icon?: "wrench" | "hammer" | "screwdriver" | "part";
}

const iconMap = {
  wrench: Wrench,
  hammer: Hammer,
  screwdriver: Scissors,
  part: CircleDot,
};

export function ToolBadge({ tool, icon = "wrench" }: ToolBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 bg-warning-muted border border-warning/30 rounded-lg">
      <Icon className="w-4 h-4 text-warning" />
      <span className="text-sm font-medium text-warning-foreground">{tool}</span>
    </div>
  );
}
