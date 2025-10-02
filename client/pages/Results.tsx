import { Link } from "react-router-dom";
import { RetroButton } from "@/components/RetroButton";

export default function Results() {
  return (
    <div className="min-h-screen retro-paper text-foreground font-manrope overflow-x-hidden">
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-16">
        <Link to="/" className="mb-8 sm:mb-12 text-3xl sm:text-4xl font-instrument">
          <span>gaus</span>
          <span className="italic">asian</span>
        </Link>

        <div className="w-full max-w-5xl mx-auto text-center">
          <h1 className="font-instrument text-primary text-retro-shadow text-4xl sm:text-6xl leading-tight">
            Your Results
          </h1>
          <p className="mt-3 text-lg sm:text-xl opacity-90">How did you do this round?</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] rounded-xl p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
              <div className="text-sm opacity-80">Score</div>
              <div className="mt-2 font-instrument text-5xl text-primary">820</div>
            </div>
            <div className="bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] rounded-xl p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
              <div className="text-sm opacity-80">Accuracy</div>
              <div className="mt-2 font-instrument text-5xl text-primary">82%</div>
            </div>
            <div className="bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] rounded-xl p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
              <div className="text-sm opacity-80">Time</div>
              <div className="mt-2 font-instrument text-5xl text-primary">01:12</div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link to="/options">
              <RetroButton>Play Again</RetroButton>
            </Link>
            <Link to="/">
              <RetroButton variant="secondary">Home</RetroButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
