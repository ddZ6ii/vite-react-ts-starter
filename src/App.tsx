import React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'

function toggleMode(darkMode: boolean) {
  const htmlEl = document.querySelector('html')
  if (!htmlEl) return
  htmlEl.classList.toggle('dark', darkMode)
}

function initDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function App() {
  const [darkMode, setDarkMode] = React.useState(initDarkMode)

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (_e) => {
    const nextDarkMode = !darkMode
    setDarkMode(nextDarkMode)
  }

  React.useEffect(() => {
    toggleMode(darkMode)
  }, [darkMode])

  return (
    <div className="container">
      <h1>Vite + Shadcn Starter</h1>
      <button onClick={handleClick} className="rounded-full">
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  )
}
