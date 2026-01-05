import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/layout/MobileLayout";
import { Header } from "@/components/layout/Header";
import { ProductCard } from "@/components/assembly/ProductCard";
import { StatusBadge } from "@/components/status/StatusBadge";
import { Glasses } from "lucide-react";

const products = [
  {
    id: "engine",
    name: "V8 Engine Block",
    description: "Complete assembly guide for automotive V8 engine with cylinder heads and timing components",
    icon: "⚙️",
    steps: 24,
    estimatedTime: "45 min",
  },
  {
    id: "gearbox",
    name: "6-Speed Gearbox",
    description: "Manual transmission gearbox assembly with synchronizers and shift mechanism",
    icon: "🔧",
    steps: 18,
    estimatedTime: "30 min",
  },
  {
    id: "pump",
    name: "Hydraulic Pump",
    description: "Industrial hydraulic pump assembly with seals and pressure components",
    icon: "💧",
    steps: 12,
    estimatedTime: "20 min",
  },
  {
    id: "motor",
    name: "Electric Motor",
    description: "Three-phase induction motor assembly with rotor and stator alignment",
    icon: "⚡",
    steps: 15,
    estimatedTime: "25 min",
  },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <Header 
        title="MR Assembly" 
        subtitle="Guidance System"
        showMenu
      />
      
      <div className="screen-padding space-y-6">
        {/* MR Connection Status */}
        <div className="card-industrial p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Glasses className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">MR Headset</p>
                <p className="text-xs text-muted-foreground">Unity Engine Ready</p>
              </div>
            </div>
            <StatusBadge connected={true} type="bluetooth" label="Paired" />
          </div>
        </div>

        {/* Section Title */}
        <div>
          <h2 className="text-xl font-bold text-foreground">Select Product</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Choose an assembly to begin guided instructions
          </p>
        </div>

        {/* Product Grid */}
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard
                {...product}
                onStart={() => navigate(`/assembly/${product.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
}
