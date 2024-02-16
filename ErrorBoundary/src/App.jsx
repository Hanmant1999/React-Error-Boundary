import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ErrorBoundary } from './ErrorBoundary'
import { Count } from './Count'

function App() {
  return (
    <ErrorBoundary >
      <Count />
    </ErrorBoundary>
  )
}

export default App
