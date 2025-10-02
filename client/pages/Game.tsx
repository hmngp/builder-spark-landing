import { Link } from "react-router-dom";
import { useState } from "react";

export default function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(2);
  const [totalQuestions] = useState(10);
  const [timeRemaining, setTimeRemaining] = useState(9);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const options = ["Korean", "Chinese", "Japanese", "Indian"];
  const progress = (currentQuestion / totalQuestions) * 100;

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setTimeRemaining(9);
      } else {
        window.location.href = "/results";
      }
    }, 500);
  };

  return (
    <div className="min-h-screen retro-paper text-foreground font-manrope overflow-x-hidden">
      <div className="relative min-h-screen flex flex-col px-4 py-6 sm:py-10">
        {/* Top Bar */}
        <div className="flex items-start justify-between mb-6 sm:mb-8">
          {/* Home Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-4 rounded-full border-2 border-[hsl(var(--primary))] bg-[hsl(var(--background))] shadow-lg hover:bg-[hsl(var(--card))] transition"
          >
            <svg className="w-2 h-3" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.34152 11.174L0.490234 5.67395L5.34152 0.17395L6.49023 1.46465L2.71587 5.67395L6.49023 9.88325L5.34152 11.174Z"
                fill="hsl(var(--primary))"
              />
            </svg>
            <span className="text-[hsl(var(--primary))] font-medium text-sm sm:text-lg">Home</span>
          </Link>

          {/* Logo */}
          <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 items-center gap-2">
            <svg className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M98.5898 67.3776C105.469 43.422 91.6269 18.4248 67.6712 11.545C43.7157 4.66533 18.7185 18.508 11.8386 42.4635C4.95882 66.4192 18.8016 91.4162 42.7572 98.2962C66.7129 105.176 91.7099 91.3333 98.5898 67.3776ZM107.838 70.0336C99.4914 99.0966 69.1642 115.891 40.1012 107.544C11.0383 99.1977 -5.75525 68.8708 2.59134 39.8078C10.938 10.745 41.2641 -6.04874 70.327 2.2977C99.3899 10.6443 116.184 40.9707 107.838 70.0336Z"
                fill="hsl(var(--primary))"
              />
            </svg>
            <div className="text-2xl sm:text-3xl font-instrument">
              <span className="text-foreground">gaus</span>
              <span className="italic text-foreground">asian</span>
            </div>
          </div>

          {/* Timer */}
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-[hsl(var(--primary))]">
            <span className="text-[hsl(var(--primary))] font-medium text-sm sm:text-lg">{String(timeRemaining).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Progress Section */}
        <div className="w-full max-w-6xl mx-auto mb-8">
          <div className="text-[hsl(var(--primary))] font-medium text-xl sm:text-3xl mb-3">
            {String(currentQuestion).padStart(2, '0')}/{String(totalQuestions).padStart(2, '0')}
          </div>
          <div className="w-full h-4 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-[hsl(var(--primary))] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main Game Area */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl bg-[hsl(var(--card))] rounded-3xl shadow-2xl p-6 sm:p-12 md:p-16">
            {/* Face Image */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl border border-[hsl(var(--primary))] overflow-hidden shadow-lg">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1b48036ef1e26990506d082ab306f2c0e0c090bf?width=766"
                  alt="Guess the origin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Answer Options Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedAnswer !== null}
                  className={`
                    py-6 sm:py-8 px-4 rounded-2xl border border-[hsl(var(--primary))] bg-[hsl(var(--background))]
                    text-[hsl(var(--foreground))] font-medium text-lg sm:text-2xl md:text-3xl
                    transition-all duration-200
                    hover:bg-[hsl(var(--primary))] hover:text-white
                    disabled:opacity-50
                    ${selectedAnswer === option ? 'bg-[hsl(var(--primary))] text-white' : ''}
                    shadow-[0_0_6px_rgba(0,0,0,0.1)]
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
