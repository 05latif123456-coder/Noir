import { useLayoutEffect, useState } from 'react'

function initialDarkMode() {
  if (typeof window === 'undefined') return true
  return window.localStorage.getItem('noir-theme') !== 'light'
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(initialDarkMode)

  useLayoutEffect(() => {
    const theme = isDark ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    document.body.dataset.theme = theme
    window.localStorage.setItem('noir-theme', theme)
  }, [isDark])

  return <button className={`theme-toggle ${isDark ? 'is-dark' : ''}`} type="button" aria-pressed={isDark} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setIsDark((current) => !current)}>
    <span className="theme-icon theme-moon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 15.4A8.5 8.5 0 0 1 8.6 4 8.5 8.5 0 1 0 20 15.4Z" /></svg></span>
    <span className="theme-icon theme-sun" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5" /><path d="M12 2.5v2M12 19.5v2M4.8 4.8l1.4 1.4M17.8 17.8l1.4 1.4M2.5 12h2M19.5 12h2M4.8 19.2l1.4-1.4M17.8 6.2l1.4-1.4" /></svg></span>
    <span className="theme-toggle-label">{isDark ? 'Night mode' : 'Day mode'}</span>
  </button>
}
