/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        'half-screen': '50vh'
      },
      width: {
        'half-screen': '50vw'
      },
      textColor: {
        'primary': 'var(--primary-color)'
      },
      backgroundColor: {
        'primary': 'var(--primary-background-color)',
      },
    },
  },
  plugins: [],
}
