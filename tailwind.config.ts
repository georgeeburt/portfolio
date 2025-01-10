import type { Config } from 'tailwindcss';
import { DEFAULT_CIPHERS } from 'tls';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'green-gradient': 'linear-gradient(#00D146, #7AFFA7)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        navbar: 'hsl(var(--navbar-background))',
        card: {
          DEFAULT: 'hsla(var(--card-background))',
          foreground: 'hsl(var(--card-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        'primary-border': 'hsl(var(--primary-border))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))'
        },
        'muted-active': {
          DEFAULT: 'hsl(var(--muted-active))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.33%)' }
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite'
      },
      screens: {
        xs: '480px'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;
