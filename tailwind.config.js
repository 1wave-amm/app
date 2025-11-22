/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#e6f7ff',
  				'100': '#bae7ff',
  				'200': '#91d5ff',
  				'300': '#69c0ff',
  				'400': '#40a9ff',
  				'500': '#00D9FF', // Aqua primary cyan
  				'600': '#00B8D4', // Aqua darker cyan
  				'700': '#0097A7',
  				'800': '#007B8A',
  				'900': '#005F6B',
  				DEFAULT: '#00D9FF',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			aqua: {
  				'50': '#e0f7fa',
  				'100': '#b2ebf2',
  				'200': '#80deea',
  				'300': '#4dd0e1',
  				'400': '#26c6da',
  				'500': '#00D9FF', // Main Aqua color
  				'600': '#00bcd4',
  				'700': '#00acc1',
  				'800': '#0097a7',
  				'900': '#00838f',
  			},
  			success: '#10b981',
  			warning: '#f59e0b',
  			error: '#ef4444',
  			background: 'hsl(var(--background))',
  			text: {
  				primary: '#f1f5f9',
  				secondary: '#cbd5e1',
  				muted: '#94a3b8'
  			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
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
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backdropBlur: {
  			xs: '2px',
  			glass: '10px',
  			glassStrong: '20px',
  		},
  		backgroundImage: {
  			'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
  			'glass-gradient-dark': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

