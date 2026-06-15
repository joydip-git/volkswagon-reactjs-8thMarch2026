import type { Todo } from "./models/todo";

type TodoTablePropType = {
    tododata: Todo[]
}
const TodoTable = (props: Readonly<TodoTablePropType>) => {
    const { tododata: todos } = props
    
    return(
        <table>
            <thead>
                <tr>
                    <th>Task Id</th>
                    <th>Assigned To</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(
                        (todo) => {
                            return (
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.userId}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed ? 'done' : 'not done'}</td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    )
}

export default TodoTable