
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
				gaming: ['"Press Start 2P"', 'cursive'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow': {
					'0%, 100%': { opacity: '1', textShadow: '0 0 10px hsl(var(--primary))' },
					'50%': { opacity: '0.8', textShadow: '0 0 5px hsl(var(--primary))' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'button-pulse': {
					'0%': { boxShadow: '0 0 0 0 rgba(59, 195, 243, 0.7)' },
					'70%': { boxShadow: '0 0 0 10px rgba(59, 195, 243, 0)' },
					'100%': { boxShadow: '0 0 0 0 rgba(59, 195, 243, 0)' },
				},
				'text-flicker': {
					'0%, 100%': { opacity: '1' },
					'33%': { opacity: '0.9' },
					'66%': { opacity: '0.95' },
				},
				'pixel-border': {
					'0%, 100%': { boxShadow: '0 0 0 3px hsl(var(--primary))' },
					'50%': { boxShadow: '0 0 0 5px hsl(var(--accent))' },
				},
				'click-pulse': {
					'0%': { boxShadow: '0 0 0 0 rgba(59, 195, 243, 0.7)' },
					'70%': { boxShadow: '0 0 0 10px rgba(59, 195, 243, 0)' },
					'100%': { boxShadow: '0 0 0 0 rgba(59, 195, 243, 0)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.8s ease-out',
				'spin-slow': 'spin-slow 15s linear infinite',
				'button-pulse': 'button-pulse 1.5s ease-in-out infinite',
				'text-flicker': 'text-flicker 4s infinite',
				'pixel-border': 'pixel-border 2s infinite',
				'click-pulse': 'click-pulse 0.8s ease-out',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
