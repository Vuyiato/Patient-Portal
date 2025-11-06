/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-teal": "#4E747B",
        "brand-yellow": "#F4E48E",
        "brand-light": "#F9F7F0",
        "brand-dark": "#3A565B",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-up": "scaleUp 0.3s ease-out",
        "bounce-subtle": "bounceSubtle 1s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "gradient-x": "gradientX 3s ease infinite",
        "gradient-y": "gradientY 3s ease infinite",
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 0.5s ease-in-out",
        flip: "flip 0.6s ease-in-out",
        "flip-horizontal": "flipHorizontal 0.6s ease-in-out",
        ripple: "ripple 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(78, 116, 123, 0.4), 0 0 40px rgba(244, 228, 142, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(78, 116, 123, 0.6), 0 0 60px rgba(244, 228, 142, 0.4)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gradientY: {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        flipHorizontal: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(180deg)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
