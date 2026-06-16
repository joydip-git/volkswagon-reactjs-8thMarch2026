import { useState } from "react"
import Counter from "./Counter"
import Name from "./Name"

const App = () => {
  console.log('App rendered');
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState('')
  const [show, setShow] = useState(false)

  const countHandler = () => setCount((prevState) => prevState + 1)
  const personHandler = (name: string) => setPerson(name)
  const showHandler = () => setShow((prevState) => !prevState)

  console.log('App returning VDOM');
  return (
    <div>
      <button type="button" onClick={showHandler}>
        {show ? 'Hide Counter' : 'Show Counter'}
      </button>
      <br />
      {
        show && <Counter countInvoker={countHandler} countValue={count} />
      }
      <br />
      <br />
      <Name nameChanger={personHandler} nameValue={person} />
    </div>
  )
}

export default App