import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Phase1 from "./pages/Phase1";
import Phase2 from "./pages/Phase2";
import Phase3 from "./pages/Phase3";
import Phase4 from "./pages/Phase4";
import Phase5 from "./pages/Phase5";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import { TimerProvider } from "@/components/TimerContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TimerProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/phase1" element={<Phase1 />} />
            <Route path="/phase2" element={<Phase2 />} />
            <Route path="/phase3" element={<Phase3 />} />
            <Route path="/phase4" element={<Phase4 />} />
            <Route path="/phase5" element={<Phase5 />} />
            <Route path="/success" element={<Success />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TimerProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
