import { useState } from "react"
import Counter from "./Counter"
import Child from "./Child"

const App = () => {
  const [show, setShow] = useState(false)
  const showHandler = () => {
    setShow(
      (currnetState) => {
        return !currnetState
      }
    )
  }
  return (
    <div>    
      <button type="button" onClick={showHandler}>{show ? 'Hide' : 'Show'}</button>
      <br />
      <p hidden={show}>this is hidden</p>
      <br />
      {
        show && <Counter />
      }
      <br />
      <br />
      <Child />
    </div>
  )
}

export default App