import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GameForms from "@/components/GameForms";

const Index = () => {
  const [showBriefing, setShowBriefing] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen matrix-bg flex items-center justify-center bg-background relative">
      <div className="container max-w-4xl px-6">
        <div className="text-center space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold glow-text">
              LE' RED MASK
            </h1>
            <h2 className="text-2xl text-secondary matrix-text">
              The Digital Rupee Operation
            </h2>
            <div className="phase-indicator">
              MISSION BRIEFING
            </div>
          </div>

          {/* Registration Form */}
          {showForm ? (
            <div className="space-y-6">
              <GameForms formType="start" />
              <div className="flex justify-center">
                <Button 
                  variant="cyber" 
                  size="lg"
                  onClick={() => setShowForm(false)}
                >
                  Continue to Mission Briefing
                </Button>
              </div>
            </div>
          ) : !showBriefing ? (
            <div className="terminal space-y-6 text-left max-w-2xl mx-auto">
              <div className="text-lg">
                <span className="text-primary">CLASSIFIED TRANSMISSION</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Welcome, operative. You've been selected for an elite team to execute the most 
                ambitious digital operation in history. Your target: the Central Bank's quantum-encrypted 
                digital rupee vault.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This isn't just about the money. It's about proving that no system is truly secure. 
                Are you ready to make history?
              </p>
              <div className="flex justify-center pt-4">
                <Button 
                  variant="cyber" 
                  size="lg"
                  onClick={() => setShowBriefing(true)}
                >
                  Accept Mission
                </Button>
              </div>
            </div>
          ) : (
            <div className="terminal space-y-6 text-left max-w-3xl mx-auto">
              <div className="text-lg border-b border-primary/30 pb-2">
                <span className="text-primary">THE PROFESSOR</span> - Mission Commander
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Excellent. I am The Professor, and I'll be your guide through this operation. 
                  We have exactly <span className="text-secondary">2 hours</span> to breach the bank's 
                  quantum firewall and extract the digital currency before their security protocols 
                  detect our presence.
                </p>
                
                <p>
                  Your mission consists of <span className="text-primary">5 critical phases</span>:
                </p>
                
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><span className="text-primary">Infiltration</span> - Breach the bank's perimeter security</li>
                  <li><span className="text-secondary">Bypass Communications</span> - Disable internal monitoring</li>
                  <li><span className="text-accent">Navigate the Maze</span> - Find your path through the digital labyrinth</li>
                  <li><span className="text-primary">Crack the Vault</span> - Solve the quantum encryption</li>
                  <li><span className="text-secondary">Extraction</span> - Escape with the digital fortune</li>
                </ol>
                
                <p>
                  Remember: <span className="text-destructive">teamwork is essential</span>. 
                  Each phase will test different skills. Stay sharp, think like a hacker, 
                  and trust your instincts.
                </p>
                
                <p className="text-primary font-semibold">
                  The operation begins now. Good luck, team.
                </p>
              </div>
              
              <div className="flex justify-center pt-6">
                <Button 
                  variant="cyber" 
                  size="lg"
                  onClick={() => navigate("/phase1")}
                >
                  Begin Phase 1: Infiltration
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;