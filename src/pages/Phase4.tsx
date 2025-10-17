import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import TimerDisplay from "@/components/TimerDisplay";

const Phase4 = () => {
  const [maxValue, setMaxValue] = useState("");
  const [showHint, setShowHint] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const dataPackets = [
    { id: "PKT-001", size: 5, value: 10, name: "Customer Database" },
    { id: "PKT-002", size: 4, value: 8, name: "Transaction Logs" },
    { id: "PKT-003", size: 6, value: 12, name: "Security Protocols" },
    { id: "PKT-004", size: 3, value: 7, name: "Admin Credentials" },
    { id: "PKT-005", size: 8, value: 15, name: "Crypto Keys" },
    { id: "PKT-006", size: 2, value: 4, name: "User Profiles" },
    { id: "PKT-007", size: 7, value: 13, name: "Audit Trail" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (maxValue.trim() === "41") {
      toast({
        title: "Vault Cracked",
        description: "Maximum value extracted successfully!",
      });
      navigate("/phase5");
    } else {
      toast({
        title: "Optimization Failed",
        description: "Incorrect maximum value. Recalculate your strategy.",
        variant: "destructive",
      });
    }
  };

  // Auto-show hint after 5 minutes
  setTimeout(() => setShowHint(true), 300000);

  return (
    <div className="min-h-screen matrix-bg flex items-center justify-center bg-background">
      <div className="container max-w-5xl px-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="phase-indicator">
              PHASE 4: CRACK THE VAULT
            </div>
            <h1 className="text-4xl font-bold glow-text">
              Quantum Encryption Operation
            </h1>
            <TimerDisplay />
          </div>

          {/* Mission */}
          <div className="terminal space-y-6 text-left max-w-3xl mx-auto">
            <div className="text-lg border-b border-primary/30 pb-2">
              <span className="text-primary">THE PROFESSOR</span> - Secure Channel
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Incredible work! You've successfully navigated their digital labyrinth. 
                Now comes the moment of truth - cracking the quantum-encrypted vault.
              </p>
              
              <p>
                The vault contains multiple data packets, each with different sizes and values. 
                However, your extraction drive has limited capacity: <span className="text-primary">20 TB</span>.
              </p>
              
              <p className="text-secondary font-semibold">
                Your task: Determine the maximum total value you can extract 
                within the capacity constraints.
              </p>
              
              <p className="text-accent">
                💡 This is a classic optimization problem. Choose wisely - 
                some combinations yield higher values than others!
              </p>
            </div>
          </div>

          {/* Vault Contents */}
          <div className="terminal space-y-6 max-w-4xl mx-auto">
            <div className="text-lg border-b border-secondary/30 pb-2">
              <span className="text-secondary">VAULT SCANNER</span> - Data Packet Analysis
            </div>
            
            <div className="space-y-4">
              <div className="grid gap-3">
                {dataPackets.map((packet) => (
                  <div 
                    key={packet.id}
                    className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-primary">{packet.name}</div>
                      <div className="text-xs text-muted-foreground">{packet.id}</div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-secondary">Size: {packet.size} TB</div>
                      <div className="text-accent">Value: {packet.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-muted/10 rounded p-4 space-y-2">
                <h4 className="text-primary font-semibold">Constraints:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-secondary">Max Capacity:</span> 20 TB
                  </div>
                  <div>
                    <span className="text-accent">Goal:</span> Maximize total value
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-xs font-mono text-muted-foreground bg-background/50 p-4 rounded inline-block">
                  <div className="text-primary mb-2">Quick Reference:</div>
                  {dataPackets.map((packet) => (
                    <div key={packet.id}>
                      {packet.name}: {packet.size}TB, Value={packet.value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Input Form */}
          <div className="terminal max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Maximum Extractable Value:
                </label>
                <input
                  type="number"
                  value={maxValue}
                  onChange={(e) => setMaxValue(e.target.value)}
                  className="cyber-input w-full"
                  placeholder="Enter maximum value..."
                  min="1"
                />
              </div>
              
              <Button type="submit" variant="cyber" className="w-full">
                Extract Data Packets
              </Button>
            </form>
          </div>

          {/* Hint System */}
          {showHint && (
            <div className="terminal max-w-2xl mx-auto border-accent/30">
              <div className="text-accent font-semibold mb-2">💡 HINT</div>
              <p className="text-muted-foreground text-sm">
                This is a 0-1 Knapsack problem! You need to find the combination of data packets 
                that maximizes value while staying within the 20TB capacity limit. 
                Try different combinations: Customer Database (5TB, 10 value) + Security Protocols (6TB, 12 value) + 
                Admin Credentials (3TB, 7 value) + User Profiles (2TB, 4 value) + ... 
                What's the best combination you can find?
              </p>
            </div>
          )}

          {/* Progress */}
          <div className="text-center">
            <div className="text-sm text-muted-foreground">
              Phase 4 of 5 • Optimization algorithm required...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase4;