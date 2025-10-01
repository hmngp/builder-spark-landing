export default function Index() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-manrope overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 sm:py-32">
        {/* Decorative gradient circle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div 
            className="w-[1668px] h-[1668px] rounded-full border-[5px]"
            style={{
              borderImage: 'linear-gradient(180deg, rgba(153, 59, 0, 0) 71.63%, #FF6200 100%) 1',
              borderStyle: 'solid'
            }}
          />
        </div>

        {/* Logo */}
        <div className="relative z-10 mb-8 sm:mb-12 flex items-center gap-1 sm:gap-2">
          <div className="relative">
            {/* Question mark circle */}
            <svg 
              className="w-12 h-12 sm:w-16 sm:h-16"
              viewBox="0 0 110 110" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M98.5898 67.3776C105.469 43.422 91.6269 18.4248 67.6712 11.545C43.7157 4.66533 18.7185 18.508 11.8386 42.4635C4.95882 66.4192 18.8016 91.4162 42.7572 98.2962C66.7129 105.176 91.7099 91.3333 98.5898 67.3776ZM107.838 70.0336C99.4914 99.0966 69.1642 115.891 40.1012 107.544C11.0383 99.1977 -5.75525 68.8708 2.59134 39.8078C10.938 10.745 41.2641 -6.04874 70.327 2.2977C99.3899 10.6443 116.184 40.9707 107.838 70.0336Z" fill="#FF6200"/>
            </svg>
            {/* Question mark */}
            <svg 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9"
              viewBox="0 0 39 65" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.42797 44.372L5.59105 43.8041C6.69519 40.1097 7.91064 37.2668 9.2374 35.2754C10.5841 33.2898 12.1095 31.8083 13.8136 30.8312C15.5176 29.854 17.4564 29.0736 19.6297 28.49C21.0426 28.0762 22.3617 27.5384 23.587 26.8766C24.8123 26.2148 25.8784 25.3564 26.7853 24.3012C27.6922 23.2461 28.3574 21.9813 28.7808 20.5069C29.2901 18.7337 29.3123 17.0794 28.8474 15.544C28.3825 14.0086 27.5529 12.6919 26.3584 11.5941C25.1897 10.482 23.7585 9.68276 22.065 9.19639C20.5308 8.75579 18.9748 8.65401 17.397 8.89104C15.8193 9.12807 14.3776 9.7924 13.072 10.884C11.7721 11.9557 10.7491 13.5275 10.0031 15.5994L0.917758 12.9902C2.08719 9.44392 3.86348 6.67581 6.24663 4.68587C8.6355 2.67601 11.3878 1.42832 14.5035 0.942815C17.6392 0.463032 20.8806 0.70379 24.2279 1.66509C27.8939 2.71793 30.9043 4.32656 33.259 6.49096C35.6194 8.63543 37.2048 11.1504 38.0153 14.036C38.8513 16.9073 38.803 19.9668 37.8703 23.2144C37.2295 25.4459 36.3029 27.3581 35.0906 28.951C33.884 30.524 32.4329 31.8218 30.7373 32.8446C29.0616 33.8731 27.1727 34.6678 25.0705 35.2287C23.0737 35.7983 21.3842 36.4993 20.0021 37.3317C18.6399 38.1698 17.4965 39.2973 16.572 40.714C15.6475 42.1308 14.8364 43.9791 14.1385 46.2589L13.9754 46.8267L5.42797 44.372ZM4.72232 63.8388C3.08854 63.3696 1.84983 62.3884 1.00618 60.8952C0.168262 59.3821 -0.013235 57.7986 0.461691 56.1449C0.930895 54.5112 1.91919 53.2853 3.42659 52.4673C4.93971 51.6294 6.51316 51.445 8.14693 51.9142C9.76078 52.3777 10.9867 53.366 11.8246 54.8791C12.6882 56.378 12.8853 57.9444 12.4161 59.5781C12.1014 60.674 11.5335 61.6 10.7124 62.3563C9.917 63.0984 8.99374 63.6097 7.94267 63.8901C6.89159 64.1706 5.81814 64.1535 4.72232 63.8388Z" fill="white"/>
            </svg>
          </div>
          <div className="text-3xl sm:text-5xl font-instrument">
            <span className="text-white">gaus</span>
            <span className="text-white italic">asian</span>
          </div>
        </div>

        {/* Scattered face images - hidden on mobile for cleaner look */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/66466186b80835f194392817aed7c24562df479b?width=394" 
            alt="" 
            className="absolute w-32 xl:w-48 h-32 xl:h-48 top-[15%] left-[15%] rounded-lg opacity-80 blur-[1px]"
            style={{ filter: 'grayscale(0.3)' }}
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/354de9845a7581efe2ae61eb8cf32268704fe087?width=394" 
            alt="" 
            className="absolute w-32 xl:w-48 h-32 xl:h-48 top-[20%] left-[30%] rounded-lg opacity-80 blur-[1px]"
            style={{ filter: 'grayscale(0.3)' }}
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/fc719889012a94a9d2271d590ea00d26057595b8?width=394" 
            alt="" 
            className="absolute w-32 xl:w-48 h-32 xl:h-48 top-[40%] left-[8%] rounded-lg opacity-80 blur-[1px]"
            style={{ filter: 'grayscale(0.3)' }}
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/e09167e095f83959700dbc54a2d53677bc87ef87?width=394" 
            alt="" 
            className="absolute w-32 xl:w-48 h-32 xl:h-48 top-[55%] left-[18%] rounded-lg opacity-80 blur-[1px]"
            style={{ filter: 'grayscale(0.3)' }}
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9d76eef4519e41a80318a19d48e4b9762a606de6?width=394" 
            alt="" 
            className="absolute w-32 xl:w-48 h-32 xl:h-48 top-[18%] right-[15%] rounded-lg opacity-80 blur-[1px]"
            style={{ filter: 'grayscale(0.3)' }}
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/841a05f2eac11b21cfc5d0e7de3b7397f47a73b6?width=394" 
            alt="" 
            className="absolute w-32 xl:w-48 h-32 xl:h-48 top-[28%] right-[8%] rounded-lg opacity-80 blur-[1px]"
            style={{ filter: 'grayscale(0.3)' }}
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/94bdaa8f39cf797245d5f40949978d8a2d3398dc?width=394" 
            alt="" 
            className="absolute w-32 xl:w-48 h-32 xl:h-48 top-[48%] right-[10%] rounded-lg opacity-80 blur-[1px]"
            style={{ filter: 'grayscale(0.3)' }}
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/088b9bb3ca72fca22b30ab2848c7c3b36e7ad35f?width=394" 
            alt="" 
            className="absolute w-32 xl:w-48 h-32 xl:h-48 top-[58%] right-[22%] rounded-lg opacity-80 blur-[1px]"
            style={{ filter: 'grayscale(0.3)' }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="font-instrument text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal text-brand-orange leading-[0.92] tracking-tight mb-6 sm:mb-8">
            Think You Know Asia?
          </h1>
          
          <p className="text-lg sm:text-2xl md:text-3xl font-manrope text-white mb-10 sm:mb-14 tracking-tight max-w-4xl mx-auto">
            Play the ultimate face-guessing game.
          </p>

          {/* CTA Button with glow effect */}
          <div className="relative inline-block">
            <div 
              className="absolute inset-0 bg-brand-orange rounded-full blur-[43px] opacity-60"
              style={{ transform: 'scale(1.2)' }}
            />
            <button className="relative bg-brand-orange text-white font-manrope font-semibold text-xl sm:text-2xl md:text-[27px] px-12 sm:px-14 md:px-16 py-5 sm:py-6 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:bg-[#ff7520] transition-colors">
              Play Now
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 sm:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-brand-orange leading-[1.11] tracking-tight mb-8 sm:mb-10">
            Gausasian Club started off as a random little thought!
          </h2>
          
          <p className="text-lg sm:text-2xl md:text-3xl font-manrope text-white leading-[1.46] tracking-tight max-w-3xl mx-auto">
            "What if we could actually train ourselves to notice the small, unique details in human faces from different parts of the world? This game is just a fun and laid-back way to test your eye and see how good you are at spotting those subtle differences."
          </p>
        </div>

        {/* Question mark icon at bottom */}
        <div className="flex justify-center mt-16 sm:mt-24">
          <div className="relative transform rotate-[16deg]">
            <svg 
              className="w-20 h-20 sm:w-28 sm:h-28"
              viewBox="0 0 110 110" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M98.5898 67.3776C105.469 43.422 91.6269 18.4248 67.6712 11.545C43.7157 4.66533 18.7185 18.508 11.8386 42.4635C4.95882 66.4192 18.8016 91.4162 42.7572 98.2962C66.7129 105.176 91.7099 91.3333 98.5898 67.3776ZM107.838 70.0336C99.4914 99.0966 69.1642 115.891 40.1012 107.544C11.0383 99.1977 -5.75525 68.8708 2.59134 39.8078C10.938 10.745 41.2641 -6.04874 70.327 2.2977C99.3899 10.6443 116.184 40.9707 107.838 70.0336Z" fill="white"/>
            </svg>
            <svg 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-14 sm:w-10 sm:h-16"
              viewBox="0 0 39 65" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.42797 44.372L5.59105 43.8041C6.69519 40.1097 7.91064 37.2668 9.2374 35.2754C10.5841 33.2898 12.1095 31.8083 13.8136 30.8312C15.5176 29.854 17.4564 29.0736 19.6297 28.49C21.0426 28.0762 22.3617 27.5384 23.587 26.8766C24.8123 26.2148 25.8784 25.3564 26.7853 24.3012C27.6922 23.2461 28.3574 21.9813 28.7808 20.5069C29.2901 18.7337 29.3123 17.0794 28.8474 15.544C28.3825 14.0086 27.5529 12.6919 26.3584 11.5941C25.1897 10.482 23.7585 9.68276 22.065 9.19639C20.5308 8.75579 18.9748 8.65401 17.397 8.89104C15.8193 9.12807 14.3776 9.7924 13.072 10.884C11.7721 11.9557 10.7491 13.5275 10.0031 15.5994L0.917758 12.9902C2.08719 9.44392 3.86348 6.67581 6.24663 4.68587C8.6355 2.67601 11.3878 1.42832 14.5035 0.942815C17.6392 0.463032 20.8806 0.70379 24.2279 1.66509C27.8939 2.71793 30.9043 4.32656 33.259 6.49096C35.6194 8.63543 37.2048 11.1504 38.0153 14.036C38.8513 16.9073 38.803 19.9668 37.8703 23.2144C37.2295 25.4459 36.3029 27.3581 35.0906 28.951C33.884 30.524 32.4329 31.8218 30.7373 32.8446C29.0616 33.8731 27.1727 34.6678 25.0705 35.2287C23.0737 35.7983 21.3842 36.4993 20.0021 37.3317C18.6399 38.1698 17.4965 39.2973 16.572 40.714C15.6475 42.1308 14.8364 43.9791 14.1385 46.2589L13.9754 46.8267L5.42797 44.372ZM4.72232 63.8388C3.08854 63.3696 1.84983 62.3884 1.00618 60.8952C0.168262 59.3821 -0.013235 57.7986 0.461691 56.1449C0.930895 54.5112 1.91919 53.2853 3.42659 52.4673C4.93971 51.6294 6.51316 51.445 8.14693 51.9142C9.76078 52.3777 10.9867 53.366 11.8246 54.8791C12.6882 56.378 12.8853 57.9444 12.4161 59.5781C12.1014 60.674 11.5335 61.6 10.7124 62.3563C9.917 63.0984 8.99374 63.6097 7.94267 63.8901C6.89159 64.1706 5.81814 64.1535 4.72232 63.8388Z" fill="white"/>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
