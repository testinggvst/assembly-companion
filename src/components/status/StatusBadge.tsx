import { Wifi, WifiOff, Bluetooth, BluetoothOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  connected: boolean;
  type: "wifi" | "bluetooth";
  label?: string;
}

export function StatusBadge({ connected, type, label }: StatusBadgeProps) {
  const icons = {
    wifi: connected ? Wifi : WifiOff,
    bluetooth: connected ? Bluetooth : BluetoothOff,
  };

  const Icon = icons[type];

  return (
    <div
      className={cn(
        "status-badge",
        connected 
          ? "bg-success-muted text-success border border-success/20" 
          : "bg-destructive-muted text-destructive border border-destructive/20"
      )}
    >
      <Icon className="w-3.5 h-3.5" />
      <span>{label || (connected ? "Connected" : "Disconnected")}</span>
    </div>
  );
}
