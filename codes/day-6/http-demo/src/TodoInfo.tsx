import { useEffect, useState } from "react"
import { getTodo } from "./services/todoservice"
import { type Todo } from "./models/todo"

type TodoInfoPropType = {
    taskId: number
}
const TodoInfo = (props: Readonly<TodoInfoPropType>) => {

    const [todo, setTodo] = useState<Todo | undefined>(undefined)
    const [error, setError] = useState('')
    const [isOver, setIsOver] = useState(false)

    const fetchTodo = async () => {
        try {
            const todoObj = await getTodo(props.taskId)
            setError('')
            setIsOver(true)
            setTodo(todoObj)
        } catch (error) {
            setError('something went wrong')
            console.log(error);
            setIsOver(true)
            setTodo(undefined)
        }
    }
    useEffect(
        () => {
            const invoke = async () => await fetchTodo()
            invoke()
        },
        [props.taskId]
    )
    
    if (!isOver)
        return <span>Loading...</span>
    else if (error !== '')
        return <span>{error}</span>
    else if (todo === undefined)
        return <span>No record</span>
    else
        return (
            <table>
                <tr>
                    <td>Id:{todo.id}</td>
                </tr>
                <tr>
                    <td>Assigned To:{todo.userId}</td>
                </tr>
                <tr>
                    <td>Title:{todo.title}</td>
                </tr>
                <tr>
                    <td>Completed:{todo.completed ? 'Yes' : 'No'}</td>
                </tr>
            </table>
        )
}

export default TodoInfo