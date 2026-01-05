import { ChevronRight, Clock, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  icon: string;
  steps: number;
  estimatedTime: string;
  onStart: () => void;
}

export function ProductCard({ name, description, icon, steps, estimatedTime, onStart }: ProductCardProps) {
  return (
    <div className="card-industrial p-4 fade-in">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center text-3xl shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-foreground truncate">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-0.5">{description}</p>
          <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              {steps} steps
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {estimatedTime}
            </span>
          </div>
        </div>
      </div>
      <Button 
        className="w-full mt-4" 
        onClick={onStart}
      >
        Start Assembly
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
