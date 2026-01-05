import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

interface MobileLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export function MobileLayout({ children, showNav = true }: MobileLayoutProps) {
  return (
    <div className="mobile-container relative overflow-hidden">
      <div className={`min-h-screen ${showNav ? 'pb-20' : ''}`}>
        {children}
      </div>
      {showNav && <BottomNav />}
    </div>
  );
}
