import { MobileLayout } from "@/components/layout/MobileLayout";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Lightbulb, 
  PlayCircle, 
  ArrowLeft, 
  Video,
  FileText,
  Phone
} from "lucide-react";

export default function Help() {
  return (
    <MobileLayout>
      <Header 
        title="Help Center" 
        subtitle="Step 3: Insert Primary Shaft"
        showBack
      />
      
      <div className="screen-padding space-y-6">
        {/* Current Step Summary */}
        <div className="card-industrial p-4">
          <h3 className="font-semibold mb-2">Current Step</h3>
          <p className="text-muted-foreground text-sm">
            Insert the primary shaft assembly through the main bearing housing, ensuring proper lubrication and alignment.
          </p>
        </div>

        {/* Detailed Explanation */}
        <div className="space-y-4">
          <h3 className="font-semibold">Detailed Instructions</h3>
          
          <div className="card-industrial p-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-info/20 flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4 text-info" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Pro Tip</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Apply a thin layer of assembly lubricant to the shaft before insertion. This prevents galling and ensures smooth operation.
                </p>
              </div>
            </div>
          </div>

          <div className="card-industrial p-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-warning/20 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-4 h-4 text-warning" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Warning</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Do not force the shaft if resistance is felt. Remove and check for debris or misalignment. Forcing may damage the bearing surfaces.
                </p>
              </div>
            </div>
          </div>

          <div className="card-industrial p-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4 text-success" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Quality Check</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Once inserted, rotate the shaft by hand. It should turn smoothly with minimal resistance. Any grinding or catching indicates a problem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h3 className="font-semibold">Resources</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="industrial" className="h-auto py-4 flex-col gap-2">
              <Video className="w-5 h-5" />
              <span className="text-sm">Watch Video</span>
            </Button>
            <Button variant="industrial" className="h-auto py-4 flex-col gap-2">
              <FileText className="w-5 h-5" />
              <span className="text-sm">View Manual</span>
            </Button>
          </div>
          <Button variant="outline" className="w-full">
            <Phone className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Button variant="outline" className="flex-1">
            <PlayCircle className="w-4 h-4 mr-2" />
            Show Again
          </Button>
          <Button className="flex-1">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Step
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
