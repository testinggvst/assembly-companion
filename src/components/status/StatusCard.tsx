import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type StatusType = "success" | "error" | "warning" | "info";

interface StatusCardProps {
  type: StatusType;
  title: string;
  message: string;
  timestamp?: string;
}

const statusConfig = {
  success: {
    icon: CheckCircle,
    bgColor: "bg-success-muted",
    borderColor: "border-success/30",
    iconColor: "text-success",
    titleColor: "text-success",
  },
  error: {
    icon: XCircle,
    bgColor: "bg-destructive-muted",
    borderColor: "border-destructive/30",
    iconColor: "text-destructive",
    titleColor: "text-destructive",
  },
  warning: {
    icon: AlertTriangle,
    bgColor: "bg-warning-muted",
    borderColor: "border-warning/30",
    iconColor: "text-warning",
    titleColor: "text-warning-foreground",
  },
  info: {
    icon: Info,
    bgColor: "bg-info-muted",
    borderColor: "border-info/30",
    iconColor: "text-info",
    titleColor: "text-info",
  },
};

export function StatusCard({ type, title, message, timestamp }: StatusCardProps) {
  const config = statusConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "rounded-xl border p-4 fade-in",
        config.bgColor,
        config.borderColor
      )}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-0.5">
          <Icon className={cn("w-5 h-5", config.iconColor)} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={cn("font-semibold", config.titleColor)}>{title}</h4>
          <p className="text-sm text-muted-foreground mt-1">{message}</p>
          {timestamp && (
            <p className="text-xs text-muted-foreground/70 mt-2 font-mono">
              {timestamp}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
