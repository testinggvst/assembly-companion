import { MobileLayout } from "@/components/layout/MobileLayout";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { 
  Volume2, 
  Vibrate, 
  Globe, 
  Moon, 
  Wifi, 
  HelpCircle,
  ChevronRight,
  User,
  Bell,
  Shield
} from "lucide-react";

const settingsGroups = [
  {
    title: "General",
    items: [
      { icon: User, label: "Profile", value: "Technician 1" },
      { icon: Globe, label: "Language", value: "English" },
      { icon: Moon, label: "Dark Mode", value: "Auto" },
    ],
  },
  {
    title: "Assembly Preferences",
    items: [
      { icon: Volume2, label: "Voice Guidance", value: "On" },
      { icon: Vibrate, label: "Haptic Feedback", value: "On" },
      { icon: Bell, label: "Notifications", value: "On" },
    ],
  },
  {
    title: "Connection",
    items: [
      { icon: Wifi, label: "MR Device", value: "Connected" },
      { icon: Shield, label: "Security", value: "High" },
    ],
  },
];

export default function Settings() {
  return (
    <MobileLayout>
      <Header title="Settings" />
      
      <div className="screen-padding space-y-6">
        {settingsGroups.map((group) => (
          <div key={group.title} className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">
              {group.title}
            </h3>
            <div className="card-industrial divide-y divide-border overflow-hidden">
              {group.items.map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-sm">{item.value}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-4">
          <Button variant="outline" className="w-full">
            <HelpCircle className="w-4 h-4 mr-2" />
            About & Help
          </Button>
        </div>

        <p className="text-center text-xs text-muted-foreground pt-4">
          MR Assembly Guidance System v1.0.0
        </p>
      </div>
    </MobileLayout>
  );
}
