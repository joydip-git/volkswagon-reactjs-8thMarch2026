import { useState } from 'react'
import './App.css'
import ChildofApp from './ChildofApp'
import CountContext from './CountContext'

function App() {
  const [count, setCount] = useState(1)
  const countHandler = () => setCount(count + 1)

  return (
    <CountContext.Provider value={
      { count: count, handler: countHandler }
    }>
      <div>
        <span>Count in App: &nbsp; {count}</span>
        <br />
        <ChildofApp />
      </div>
    </CountContext.Provider>
  )
}

export default App
