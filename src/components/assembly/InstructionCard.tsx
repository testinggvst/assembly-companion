import { Info } from "lucide-react";

interface InstructionCardProps {
  instruction: string;
  details?: string;
  imageUrl?: string;
}

export function InstructionCard({ instruction, details, imageUrl }: InstructionCardProps) {
  return (
    <div className="space-y-4 fade-in">
      {imageUrl && (
        <div className="aspect-video bg-secondary rounded-xl overflow-hidden border border-border">
          <img 
            src={imageUrl} 
            alt="Assembly step illustration" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="card-industrial p-4 bg-info-muted border-info/20">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-info/20 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-4 h-4 text-info" />
          </div>
          <div className="flex-1">
            <p className="text-lg font-semibold text-foreground leading-relaxed">
              {instruction}
            </p>
            {details && (
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {details}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
