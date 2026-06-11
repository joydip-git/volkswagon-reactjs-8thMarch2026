import Counter from '../counter/Counter'
import Title from '../title/Header'
import './App.css'

function App() {
  let count = 20
  // const counterComp = Counter({ countValue: count })
  return (
    <div>
      <Title />
      <br />
      <Counter countValue={count} />
      <br />
      <Counter countValue={count} />
      {
        /*counterComp*/
      }
    </div>
  )
}

export default App
