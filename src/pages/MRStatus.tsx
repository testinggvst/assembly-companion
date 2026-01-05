import { MobileLayout } from "@/components/layout/MobileLayout";
import { Header } from "@/components/layout/Header";
import { StatusCard } from "@/components/status/StatusCard";
import { StatusBadge } from "@/components/status/StatusBadge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Glasses, Cpu, Wifi } from "lucide-react";

const statusMessages = [
  {
    type: "success" as const,
    title: "Part Aligned Correctly",
    message: "The bearing housing is properly positioned. You may proceed to the next step.",
    timestamp: "12:34:56",
  },
  {
    type: "error" as const,
    title: "Misalignment Detected",
    message: "Rotate the shaft assembly 15° clockwise to correct the alignment.",
    timestamp: "12:33:42",
  },
  {
    type: "warning" as const,
    title: "Torque Warning",
    message: "Current torque reading is below specification. Apply additional force.",
    timestamp: "12:32:18",
  },
  {
    type: "info" as const,
    title: "Calibration Complete",
    message: "MR tracking system has been calibrated successfully.",
    timestamp: "12:30:00",
  },
];

export default function MRStatus() {
  return (
    <MobileLayout>
      <Header 
        title="MR Status" 
        subtitle="System Feedback"
        showBack
      />
      
      <div className="screen-padding space-y-6">
        {/* Connection Panel */}
        <div className="card-industrial p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">System Status</h3>
            <Button variant="ghost" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-secondary rounded-xl">
              <Glasses className="w-5 h-5 mx-auto mb-2 text-success" />
              <p className="text-xs font-medium">Headset</p>
              <p className="text-xs text-success">Online</p>
            </div>
            <div className="text-center p-3 bg-secondary rounded-xl">
              <Cpu className="w-5 h-5 mx-auto mb-2 text-success" />
              <p className="text-xs font-medium">Unity</p>
              <p className="text-xs text-success">Running</p>
            </div>
            <div className="text-center p-3 bg-secondary rounded-xl">
              <Wifi className="w-5 h-5 mx-auto mb-2 text-success" />
              <p className="text-xs font-medium">Network</p>
              <p className="text-xs text-success">5G LTE</p>
            </div>
          </div>

          <div className="flex gap-2">
            <StatusBadge connected={true} type="bluetooth" label="MR Paired" />
            <StatusBadge connected={true} type="wifi" label="Cloud Sync" />
          </div>
        </div>

        {/* Status Messages */}
        <div>
          <h3 className="font-semibold mb-3">Recent Messages</h3>
          <div className="space-y-3">
            {statusMessages.map((status, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <StatusCard {...status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
