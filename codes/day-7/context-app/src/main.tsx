//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Second from './Second.tsx'

createRoot(document.getElementById('root')!).render(
  // <RootComponent />
  <div>
    <App />
    <br />
    <Second />
  </div>
)

// function RootComponent() {
//   return (
//     <div>
//       <App />
//       <br />
//       <Second />
//     </div>
//   )
// }
