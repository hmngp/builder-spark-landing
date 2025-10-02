import { Link } from "react-router-dom";
import { RetroButton } from "@/components/RetroButton";

export default function Options() {
  return (
    <div className="h-screen w-screen retro-paper text-foreground font-manrope overflow-hidden">
      <section className="screen-grid relative px-4 py-16">
        {/* Logo */}
        <Link
          to="/"
          className="mb-8 sm:mb-12 text-3xl sm:text-4xl font-instrument"
        >
          <span>gaus</span>
          <span className="italic">asian</span>
        </Link>

        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-instrument text-primary text-retro-shadow text-4xl sm:text-6xl leading-tight">
              Choose Game Options
            </h1>
            <p className="mt-3 text-lg sm:text-xl opacity-90">
              Tailor your challenge before you play.
            </p>
          </div>

          <form className="grid gap-8 sm:gap-10 md:grid-cols-2">
            {/* Mode */}
            <fieldset className="bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] rounded-xl p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
              <legend className="px-2 font-instrument text-2xl text-primary">
                Mode
              </legend>
              <div className="mt-4 grid gap-3">
                {[
                  { id: "quick", label: "Quick Play" },
                  { id: "timed", label: "Timed (60s)" },
                  { id: "endless", label: "Endless" },
                ].map((o) => (
                  <label
                    key={o.id}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="mode"
                      defaultChecked={o.id === "quick"}
                      className="accent-[hsl(var(--primary))] w-4 h-4"
                    />
                    <span className="text-lg">{o.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Difficulty */}
            <fieldset className="bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] rounded-xl p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
              <legend className="px-2 font-instrument text-2xl text-primary">
                Difficulty
              </legend>
              <div className="mt-4 grid gap-3">
                {[
                  { id: "easy", label: "Easy" },
                  { id: "medium", label: "Medium" },
                  { id: "hard", label: "Hard" },
                ].map((o) => (
                  <label
                    key={o.id}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="difficulty"
                      defaultChecked={o.id === "medium"}
                      className="accent-[hsl(var(--primary))] w-4 h-4"
                    />
                    <span className="text-lg">{o.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Hints */}
            <fieldset className="bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] rounded-xl p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)] md:col-span-2">
              <legend className="px-2 font-instrument text-2xl text-primary">
                Extras
              </legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { id: "showRegion", label: "Show region hints" },
                  { id: "streaks", label: "Enable streak bonus" },
                ].map((o) => (
                  <label
                    key={o.id}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={o.id === "streaks"}
                      className="accent-[hsl(var(--primary))] w-4 h-4"
                    />
                    <span className="text-lg">{o.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </form>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link to="/game">
              <RetroButton>Start Game</RetroButton>
            </Link>
            <Link to="/">
              <RetroButton variant="secondary">Back</RetroButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
