import { Mic } from "lucide-react";
import { cn } from "@/lib/utils";

interface VoiceButtonProps {
  onClick: () => void;
  isListening?: boolean;
}

export function VoiceButton({ onClick, isListening }: VoiceButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "floating-button bg-primary text-primary-foreground",
        isListening && "listening-pulse"
      )}
      aria-label="Voice command"
    >
      <Mic className="w-6 h-6" />
    </button>
  );
}
