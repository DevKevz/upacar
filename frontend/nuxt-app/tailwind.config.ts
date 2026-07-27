import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 60px rgba(15, 23, 42, 0.12)',
      },
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          700: '#047857',
          900: '#064e3b',
        },
      },
    },
  },
} satisfies Config
