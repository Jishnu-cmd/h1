import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import TimerDisplay from "@/components/TimerDisplay";

const Phase3 = () => {
  const [solution, setSolution] = useState("");
  const [showHint, setShowHint] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1]
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (solution.trim() === "7") {
      toast({
        title: "Path Found",
        description: "Successfully navigated the digital labyrinth!",
      });
      navigate("/phase4");
    } else {
      toast({
        title: "Path Blocked",
        description: "Incorrect path length. Recalculate your route.",
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
              PHASE 3: NAVIGATE THE MAZE
            </div>
            <h1 className="text-4xl font-bold glow-text">
              Digital Labyrinth
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
                Excellent! Communications are down. Now we face the bank's most sophisticated 
                defense: a quantum-encrypted digital labyrinth that protects their core systems.
              </p>
              
              <p>
                The maze represents their network topology. You need to find the 
                <span className="text-primary"> shortest path</span> from the entrance 
                (top-left corner) to the vault access point (bottom-right corner).
              </p>
              
              <p className="text-secondary font-semibold">
                Your task: Calculate the minimum number of steps needed to reach the vault.
              </p>
              
              <p className="text-accent">
                💡 Remember: You can only move horizontally or vertically, not diagonally. 
                The maze uses 0 for open paths and 1 for walls.
              </p>
            </div>
          </div>

          {/* Maze Display */}
          <div className="terminal space-y-6 max-w-4xl mx-auto">
            <div className="text-lg border-b border-secondary/30 pb-2">
              <span className="text-secondary">NETWORK TOPOLOGY SCANNER</span> - Digital Maze Map
            </div>
            
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <div className="text-primary text-sm">START (Entrance) ⭐</div>
                <div className="grid grid-cols-8 gap-1 justify-center max-w-md mx-auto">
                  {maze.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`w-8 h-8 border flex items-center justify-center text-xs font-mono ${
                          cell === 1
                            ? 'bg-destructive/20 border-destructive text-destructive'
                            : 'bg-primary/10 border-primary/30 text-primary'
                        } ${
                          rowIndex === 0 && colIndex === 1
                            ? 'ring-2 ring-secondary'
                            : ''
                        } ${
                          rowIndex === 5 && colIndex === 6
                            ? 'ring-2 ring-accent'
                            : ''
                        }`}
                      >
                        {rowIndex === 0 && colIndex === 1 ? '⭐' : 
                         rowIndex === 4 && colIndex === 5 ? '🎯' :
                         cell === 1 ? '█' : '·'}
                      </div>
                    ))
                  )}
                </div>
                <div className="text-accent text-sm">🎯 TARGET (Vault Access)</div>
              </div>
              
              <div className="bg-muted/10 rounded p-4">
                <h4 className="text-primary font-semibold mb-2">Maze Legend:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="text-destructive">█ (1)</span> = Wall/Blocked</div>
                  <div><span className="text-primary">· (0)</span> = Open Path</div>
                  <div><span className="text-secondary">⭐</span> = Start Position (0,1)</div>
                  <div><span className="text-accent">🎯</span> = Target Position (5,6)</div>
                </div>
              </div>
              
              <div className="text-center">
                <pre className="text-xs font-mono text-muted-foreground bg-background/50 p-4 rounded inline-block">
{`Maze Array:
[
  [1,1,1,1,1,1,1,1],
  [1,0,0,0,1,0,0,1],
  [1,0,1,0,1,0,1,1],
  [1,0,1,0,0,0,0,1],
  [1,0,1,1,1,0,0,1],
  [1,0,0,0,0,0,1,1],
  [1,1,1,1,1,1,1,1]
]`}
                </pre>
              </div>
            </div>
          </div>

          {/* Input Form */}
          <div className="terminal max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Shortest Path Length (number of steps):
                </label>
                <input
                  type="number"
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                  className="cyber-input w-full"
                  placeholder="Enter step count..."
                  min="1"
                />
              </div>
              
              <Button type="submit" variant="cyber" className="w-full">
                Navigate Maze
              </Button>
            </form>
          </div>

          {/* Hint System */}
          {showHint && (
            <div className="terminal max-w-2xl mx-auto border-accent/30">
              <div className="text-accent font-semibold mb-2">💡 HINT</div>
              <p className="text-muted-foreground text-sm">
                This is a classic shortest path problem. You can solve it using BFS (Breadth-First Search) 
                or by manually tracing the path. Start at (0,1) and find the shortest route to (5,6). 
                Count each move as one step. Remember: you can only move up, down, left, or right - 
                no diagonal movements allowed!
              </p>
            </div>
          )}

          {/* Progress */}
          <div className="text-center">
            <div className="text-sm text-muted-foreground">
              Phase 3 of 5 • Pathfinding algorithm required...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase3;