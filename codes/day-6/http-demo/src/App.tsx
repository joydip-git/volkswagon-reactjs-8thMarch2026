import { useEffect, useState } from "react"
import { getTodos } from "./services/todoservice"
import type { Todo } from "./models/todo"
import TodoTable from "./TodoTable"
import TodoInfo from "./TodoInfo"

const App = () => {

  const [todos, setTodos] = useState<Todo[]>([])
  const [error, setError] = useState<string>('')
  const [isRequestComplete, setIsRequestComplete] = useState(false)
  const [selectedTodoId, setSelectedTodoId] = useState(0)

  const selectedTodoIdHandler = (id: number) => setSelectedTodoId(id)

  const fetchTodoRecords = async () => {
    try {
      const todorecords = await getTodos()
      setTodos(todorecords.slice(0, 10))
      setError('')
      setIsRequestComplete(true)
    } catch (error) {
      setTodos([])
      console.log(error)
      setError('could not get data')
      setIsRequestComplete(true)
    }
  }
  useEffect(
    () => {
      //fetchTodoRecords()
      async function invoke() {
        await fetchTodoRecords()
      }
      invoke()
    },
    []
  )

  let design
  if (!isRequestComplete) {
    design = <span> Loading...</span>
  } else if (error !== '') {
    design = <span>{error}</span>
  } else if (todos.length === 0) {
    design = <span>No records</span>
  } else {
    design = <TodoTable tododata={todos} selectTodoHandler={selectedTodoIdHandler} />
  }

  return (
    <div>
      {/* <button type="button" onClick={fetchTodoRecords}>Load</button>
      <br /> */}
      {design}
      <br />
      {
        selectedTodoId > 0 && <TodoInfo taskId={selectedTodoId} />
      }
    </div>
  )
}

export default App