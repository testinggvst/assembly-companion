import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/layout/MobileLayout";
import { Header } from "@/components/layout/Header";
import { StepProgress } from "@/components/assembly/StepProgress";
import { ToolBadge } from "@/components/assembly/ToolBadge";
import { InstructionCard } from "@/components/assembly/InstructionCard";
import { ActionButtons } from "@/components/assembly/ActionButtons";
import { VoiceButton } from "@/components/voice/VoiceButton";
import { VoiceOverlay } from "@/components/voice/VoiceOverlay";

const assemblySteps = [
  {
    instruction: "Prepare the base mounting plate",
    details: "Ensure the mounting surface is clean and free from debris. Position the base plate with alignment marks facing upward.",
    tool: "Cleaning cloth",
    toolIcon: "part" as const,
    imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=450&fit=crop",
  },
  {
    instruction: "Install the main bearing housing",
    details: "Align the bearing housing with the dowel pins. Press firmly until fully seated. Check for proper alignment before proceeding.",
    tool: "Rubber mallet",
    toolIcon: "hammer" as const,
    imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=450&fit=crop",
  },
  {
    instruction: "Insert the primary shaft assembly",
    details: "Apply lubricant to the shaft surface. Guide the shaft through the bearing carefully, avoiding any side loading.",
    tool: "Torque wrench - 45 Nm",
    toolIcon: "wrench" as const,
    imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=450&fit=crop",
  },
  {
    instruction: "Secure with retaining bolts",
    details: "Install all four M8 bolts hand-tight first. Then torque in a cross pattern to specification.",
    tool: "10mm socket",
    toolIcon: "wrench" as const,
    imageUrl: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=450&fit=crop",
  },
  {
    instruction: "Attach the gear cover plate",
    details: "Apply gasket sealant around the perimeter. Position cover and secure with eight M6 bolts.",
    tool: "Screwdriver set",
    toolIcon: "screwdriver" as const,
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=450&fit=crop",
  },
];

export default function AssemblyStep() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState<"listening" | "processing" | "idle">("idle");
  const [transcript, setTranscript] = useState("");

  const totalSteps = assemblySteps.length;
  const step = assemblySteps[currentStep - 1];

  const productNames: Record<string, string> = {
    engine: "V8 Engine Block",
    gearbox: "6-Speed Gearbox",
    pump: "Hydraulic Pump",
    motor: "Electric Motor",
  };

  const handleNext = () => {
    if (currentStep >= totalSteps) {
      navigate("/completion");
    } else {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleRepeat = () => {
    // In real app, this would replay voice instruction
    console.log("Repeating step", currentStep);
  };

  const handleHelp = () => {
    navigate("/help");
  };

  const handleVoice = () => {
    setVoiceOpen(true);
    setVoiceStatus("listening");
    setTranscript("");

    // Simulate voice recognition
    setTimeout(() => {
      setTranscript("Next step");
      setVoiceStatus("processing");
      setTimeout(() => {
        setVoiceOpen(false);
        handleNext();
      }, 1000);
    }, 2000);
  };

  return (
    <MobileLayout>
      <Header 
        title={productNames[productId || "engine"]} 
        subtitle={`Step ${currentStep} of ${totalSteps}`}
        showBack
      />
      
      <div className="screen-padding space-y-6">
        <StepProgress currentStep={currentStep} totalSteps={totalSteps} />

        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-muted-foreground">Tool required:</span>
            <ToolBadge tool={step.tool} icon={step.toolIcon} />
          </div>

          <InstructionCard
            instruction={step.instruction}
            details={step.details}
            imageUrl={step.imageUrl}
          />
        </div>

        <ActionButtons
          onNext={handleNext}
          onPrevious={handlePrevious}
          onRepeat={handleRepeat}
          onHelp={handleHelp}
          isFirstStep={currentStep === 1}
          isLastStep={currentStep === totalSteps}
        />
      </div>

      <VoiceButton onClick={handleVoice} isListening={voiceOpen && voiceStatus === "listening"} />

      <VoiceOverlay
        isOpen={voiceOpen}
        onClose={() => setVoiceOpen(false)}
        status={voiceStatus}
        transcript={transcript}
      />
    </MobileLayout>
  );
}
