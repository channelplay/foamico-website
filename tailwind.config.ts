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
        // Luxury Color Palette
        ivory: "#FAF9F6",
        champagne: "#F7E7CE",
        gold: "#D4AF37",
        "rose-gold": "#E8B4B8",
        "warm-gray": "#8B8680",
        charcoal: "#2C2825",
        obsidian: "#0A0908",
        pearl: "#FDFCFA",
        bronze: "#B08D57",
        cognac: "#834333",
        sage: "#87936A",
        
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
        serif: ["'Playfair Display'", "'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "'Space Grotesk'", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      fontSize: {
        'display-lg': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.95' }],
        'display-md': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1' }],
        'display-sm': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-in-up": "fadeInUp 1s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.6s ease-out",
        "shimmer": "shimmer 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "reveal-line": "revealLine 0.8s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "rotate-slow": "rotateSlow 30s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { 
            opacity: "0",
            transform: "translateY(30px)" 
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)" 
          },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        revealLine: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        glowPulse: {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)",
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(212, 175, 55, 0.4)",
          },
        },
        rotateSlow: {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(180deg, #FAF9F6 0%, #FDFCFA 50%, #F7F5F2 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37, #B08D57)',
        'metallic-gradient': 'linear-gradient(135deg, #B08D57 0%, #D4AF37 50%, #B08D57 100%)',
        'radial-glow': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(0, 0, 0, 0.05), 0 8px 40px rgba(0, 0, 0, 0.03)',
        'luxury-lg': '0 10px 40px rgba(0, 0, 0, 0.1), 0 20px 60px rgba(212, 175, 55, 0.05)',
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.3)',
        'inner-glow': 'inset 0 0 30px rgba(212, 175, 55, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
        'luxury': '10px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'smooth': 'cubic-bezier(0.43, 0.13, 0.23, 0.96)',
        'elegant': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;