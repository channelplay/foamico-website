import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Free Guy AR/HUD comfort-tech colors
        hud: {
          cyan: {
            DEFAULT: "#00D4FF",
            light: "#00F0FF",
            dark: "#0099CC",
            glow: "#00FFFF",
          },
          lavender: {
            DEFAULT: "#B8A9E5",
            light: "#D4C5F9",
            dark: "#9D8EC7",
            glow: "#C8B9F5",
          },
          pink: {
            DEFAULT: "#B8A9E5", // Soft lavender for comfort
            light: "#D4C5F9",
            dark: "#9D8EC7",
            glow: "#C8B9F5",
          },
          green: {
            DEFAULT: "#00FF88",
            light: "#00FFA0",
            dark: "#00CC66",
            glow: "#00FF00",
          },
          gold: {
            DEFAULT: "#FFD700",
            light: "#FFED4E",
            dark: "#DAA520",
            glow: "#FFEA00",
          },
          orange: {
            DEFAULT: "#FDB863",
            light: "#FDCE8D",
            dark: "#F4A460",
            glow: "#FDC87C",
          },
          purple: {
            DEFAULT: "#9D8EC7",
            light: "#B8A9E5",
            dark: "#7B6BA3",
          },
          blue: {
            DEFAULT: "#0066FF",
            light: "#3385FF",
            dark: "#0044CC",
          },
        },
        // Dark backgrounds for AR effect
        cyber: {
          black: "#0A0A0F",
          dark: "#0D0D1A",
          darker: "#050510",
          grid: "#1A1A2E",
        },
        // Original Foamico colors (preserved)
        foamico: {
          lime: "#A4C639",
          "lime-light": "#E8F5E9",
          "lime-dark": "#2E7D32",
          black: "#1A1A1A",
          gray: {
            50: "#F9FAFB",
            100: "#F5F5F5",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          },
          beige: "#FFF8E1",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'Roboto Mono'", "monospace"],
        cyber: ["'Orbitron'", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "scan-line": "scanLine 8s linear infinite",
        "glitch": "glitch 2.5s infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "neon-pulse": "neonPulse 1.5s ease-in-out infinite",
        "data-stream": "dataStream 3s linear infinite",
        "hud-fade": "hudFade 0.3s ease-out",
        "matrix-rain": "matrixRain 2s linear infinite",
        "hologram": "hologram 4s ease-in-out infinite",
        "electric": "electric 0.5s ease-in-out",
        "cyber-spin": "cyberSpin 1s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { 
            opacity: "1",
            filter: "brightness(1) drop-shadow(0 0 10px currentColor)",
          },
          "50%": { 
            opacity: "0.8",
            filter: "brightness(1.2) drop-shadow(0 0 20px currentColor)",
          },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glitch: {
          "0%, 100%": { 
            transform: "translate(0)",
            filter: "hue-rotate(0deg)",
          },
          "20%": { 
            transform: "translate(-2px, 2px)",
            filter: "hue-rotate(90deg)",
          },
          "40%": { 
            transform: "translate(-2px, -2px)",
            filter: "hue-rotate(180deg)",
          },
          "60%": { 
            transform: "translate(2px, 2px)",
            filter: "hue-rotate(270deg)",
          },
          "80%": { 
            transform: "translate(2px, -2px)",
            filter: "hue-rotate(360deg)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        neonPulse: {
          "0%, 100%": { 
            textShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
          },
          "50%": { 
            textShadow: "0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor",
          },
        },
        dataStream: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        hudFade: {
          "0%": { 
            opacity: "0",
            transform: "scale(0.95) translateY(-10px)",
          },
          "100%": { 
            opacity: "1",
            transform: "scale(1) translateY(0)",
          },
        },
        matrixRain: {
          "0%": { 
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { 
            transform: "translateY(100vh)",
            opacity: "0",
          },
        },
        hologram: {
          "0%, 100%": { 
            opacity: "0.9",
            transform: "rotateY(0deg) translateZ(0)",
          },
          "50%": { 
            opacity: "1",
            transform: "rotateY(180deg) translateZ(10px)",
          },
        },
        electric: {
          "0%, 100%": { 
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
          "50%": { 
            clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 55%)",
          },
        },
        cyberSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        'hud-gradient': 'linear-gradient(135deg, #00D4FF33 0%, #FF00FF33 50%, #00FF8833 100%)',
        'cyber-grid': `linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)`,
        'scan-lines': `repeating-linear-gradient(
          0deg,
          rgba(0,212,255,0.03) 0px,
          transparent 1px,
          transparent 2px,
          rgba(0,212,255,0.03) 3px
        )`,
        'hologram-lines': `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0,240,255,0.3) 2px,
          rgba(0,240,255,0.3) 4px
        )`,
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.3)',
        'neon-pink': '0 0 20px rgba(255,0,255,0.5), 0 0 40px rgba(255,0,255,0.3)',
        'neon-green': '0 0 20px rgba(0,255,136,0.5), 0 0 40px rgba(0,255,136,0.3)',
        'hud-glow': '0 0 30px rgba(0,212,255,0.4), inset 0 0 20px rgba(0,212,255,0.1)',
        'hologram': '0 0 40px rgba(0,240,255,0.6), inset 0 0 20px rgba(255,0,255,0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} satisfies Config;