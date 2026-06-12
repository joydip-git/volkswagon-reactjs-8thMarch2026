import { useState } from 'react';
import './App.css'

const App = () => {
  console.log('rendered');
  const [count, updateCount] = useState<number>(0)

  // const count = arr[0]
  // const setCount = arr[1]

  const increaseHandler = () => {
    console.log(count);
    updateCount(count + 1)
    console.log(count);
  }
  return (
    <div>
      Count: &nbsp; {count}
      <br />
      <button type="button" onClick={increaseHandler}> Increase</button>
    </div>
  )
}

export default App