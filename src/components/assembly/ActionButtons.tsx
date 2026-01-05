import { ChevronRight, RotateCcw, HelpCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
  onRepeat: () => void;
  onHelp: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function ActionButtons({ 
  onNext, 
  onPrevious, 
  onRepeat, 
  onHelp, 
  isFirstStep, 
  isLastStep 
}: ActionButtonsProps) {
  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <Button
          variant="industrial"
          size="lg"
          className="flex-1"
          onClick={onPrevious}
          disabled={isFirstStep}
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </Button>
        <Button
          variant="default"
          size="lg"
          className="flex-1"
          onClick={onNext}
        >
          {isLastStep ? "Finish" : "Next"}
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex gap-3">
        <Button
          variant="outline"
          size="default"
          className="flex-1"
          onClick={onRepeat}
        >
          <RotateCcw className="w-4 h-4" />
          Repeat
        </Button>
        <Button
          variant="outline"
          size="default"
          className="flex-1"
          onClick={onHelp}
        >
          <HelpCircle className="w-4 h-4" />
          Help
        </Button>
      </div>
    </div>
  );
}
