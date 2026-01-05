import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Clock, 
  Layers, 
  AlertCircle, 
  RotateCcw, 
  Home,
  Share2,
  Download
} from "lucide-react";

export default function Completion() {
  const navigate = useNavigate();

  return (
    <MobileLayout showNav={false}>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        {/* Success Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full bg-success/20 flex items-center justify-center scale-in">
            <CheckCircle className="w-12 h-12 text-success" />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-success/30 animate-ping" />
        </div>

        {/* Completion Message */}
        <h1 className="text-2xl font-bold mb-2 fade-in">Assembly Complete!</h1>
        <p className="text-muted-foreground mb-8 fade-in" style={{ animationDelay: "100ms" }}>
          You have successfully completed the V8 Engine Block assembly.
        </p>

        {/* Summary Card */}
        <div className="w-full max-w-sm card-industrial p-6 space-y-4 fade-in" style={{ animationDelay: "200ms" }}>
          <h3 className="font-semibold text-left">Assembly Summary</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div className="flex items-center gap-3 text-left">
                <Layers className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Total Steps</span>
              </div>
              <span className="font-semibold font-mono">24</span>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div className="flex items-center gap-3 text-left">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Time Taken</span>
              </div>
              <span className="font-semibold font-mono">42:18</span>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3 text-left">
                <AlertCircle className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Errors Corrected</span>
              </div>
              <span className="font-semibold font-mono text-success">2</span>
            </div>
          </div>

          {/* Performance Badge */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success-muted rounded-full">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">Excellent Performance</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full max-w-sm space-y-3 mt-8 fade-in" style={{ animationDelay: "300ms" }}>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="shrink-0">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="shrink-0">
              <Download className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate("/assembly/engine")}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Restart
            </Button>
          </div>
          <Button 
            className="w-full" 
            size="lg"
            onClick={() => navigate("/")}
          >
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
