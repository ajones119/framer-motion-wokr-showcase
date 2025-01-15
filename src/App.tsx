
import './App.css'
import Routes from './routes'
import {ThemeProvider} from "./providers/darkMode"
import ReactLenis from 'lenis/react'


function App() {

  return (
    <ReactLenis root>
      <ThemeProvider defaultTheme="dark" storageKey="motion-showcase">
        <Routes />
      </ThemeProvider>
    </ReactLenis>
  )
}

export default App
