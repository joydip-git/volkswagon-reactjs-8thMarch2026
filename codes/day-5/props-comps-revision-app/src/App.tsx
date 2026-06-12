import Header from "./Header"

type Person = {
  id: number,
  name: string,
  salary: number
}

const App = () => {
  let message = 'Welcome to React with TS'
  const anilObj: Person = {
    id: 1,
    name: 'anil',
    salary: 1000
  }
  const names: string[] = ['anil', 'sunil', 'joydip', 'mahesh', 'suresh']

  const nameElements = names.map(
    (name) => {
      return <li>{name}</li>
    }
  )

  const nameOptions = names.map(
    (name) => {
      return <option>{name}</option>
    }
  )
  const call = () => window.alert('Hello')

  return (
    <div>
      <Header messageValue={message} optProp={100} />
      <br />
      <Header messageValue={message} />
      <br />
      <button type="button" onClick={call}>Change Message</button>
      <br />
      <div>
        <span>Name: {anilObj.name}</span>
        <br />
        <span>Salary: {anilObj.salary}</span>
      </div>
      <br />
      <ul>
        {
          nameElements
        }
      </ul>
      <br />
      <div>
        <label htmlFor="ddlNames">Select a name: &nbsp;</label>
        <select id="ddlNames">
          <option selected disabled>--select--</option>
          {
            nameOptions
          }
        </select>
      </div>
    </div>
  )
}

export default App