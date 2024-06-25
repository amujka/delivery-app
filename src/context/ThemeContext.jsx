import { createContext, useState } from 'react';
export const ThemeContext = createContext({
	theme: 'light',
	toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState('dark');
	const toggleThemeHandler = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};
	const ctxValues = {
		theme,
		toggleTheme: toggleThemeHandler,
	};
	return <ThemeContext.Provider value={ctxValues}>{children}</ThemeContext.Provider>;
}
