// src/App.tsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="flex space-x-8 mb-8">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="h-24 w-24 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all duration-300" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 w-24 hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all duration-300" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-6">Vite + React + TypeScript + TailwindCSS</h1>

      <div className="card bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg mb-4 transition-colors duration-300"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-gray-400">
          Edit <code className="bg-gray-700 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-gray-500 mt-8">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App