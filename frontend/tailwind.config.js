/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        ink: '#0F0F0F',
        bone: '#F7F5F0',
        parchment: '#EAE7DF',
        vermilion: '#FF4500',
        klein: '#002FA7',
        stone: '#D1CEC7',
        ash: '#595959',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'marquee': { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'pulse-dot': { '0%,100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.6)' }, '50%': { boxShadow: '0 0 0 8px rgba(34,197,94,0)' } },
        'reveal-up': { '0%': { transform: 'translateY(110%)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } },
        'blob': { '0%,100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }, '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'marquee': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 70s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-out infinite',
        'reveal-up': 'reveal-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'blob': 'blob 12s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
