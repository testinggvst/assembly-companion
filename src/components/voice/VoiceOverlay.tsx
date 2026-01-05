import { Mic, X, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VoiceOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  status: "listening" | "processing" | "idle";
  transcript: string;
}

export function VoiceOverlay({ isOpen, onClose, status, transcript }: VoiceOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-[100] slide-up flex flex-col items-center justify-center p-6">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </Button>

      <div className="flex flex-col items-center gap-8 max-w-sm text-center">
        {/* Animated Microphone */}
        <div className="relative">
          <div
            className={cn(
              "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300",
              status === "listening" 
                ? "bg-primary listening-pulse" 
                : status === "processing"
                ? "bg-warning pulse-ring"
                : "bg-secondary"
            )}
          >
            {status === "processing" ? (
              <Volume2 className="w-10 h-10 text-warning-foreground" />
            ) : (
              <Mic className={cn(
                "w-10 h-10",
                status === "listening" ? "text-primary-foreground" : "text-muted-foreground"
              )} />
            )}
          </div>
          
          {/* Sound Wave Animation */}
          {status === "listening" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-2 border-primary/30 animate-ping" />
            </div>
          )}
        </div>

        {/* Status Text */}
        <div className="space-y-2">
          <p className="text-xl font-semibold">
            {status === "listening" && "Listening..."}
            {status === "processing" && "Processing..."}
            {status === "idle" && "Tap to speak"}
          </p>
          <p className="text-sm text-muted-foreground">
            {status === "listening" && "Say a command like \"Next step\" or \"Help\""}
            {status === "processing" && "Understanding your request"}
            {status === "idle" && "Voice commands are ready"}
          </p>
        </div>

        {/* Transcript */}
        {transcript && (
          <div className="w-full p-4 bg-card rounded-xl border border-border">
            <p className="text-sm text-muted-foreground mb-1">Recognized:</p>
            <p className="text-lg font-medium">"{transcript}"</p>
          </div>
        )}

        {/* Voice Commands Hint */}
        <div className="w-full space-y-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Available Commands</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Next step", "Previous", "Repeat", "Help"].map((cmd) => (
              <span
                key={cmd}
                className="px-3 py-1.5 bg-secondary rounded-lg text-sm font-medium text-secondary-foreground"
              >
                {cmd}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
