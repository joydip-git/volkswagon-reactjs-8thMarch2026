import type { Todo } from "./models/todo";

type TodoTablePropType = {
    tododata: Todo[],
    selectTodoHandler: (id: number) => void
}
const TodoTable = (props: Readonly<TodoTablePropType>) => {
    const { tododata: todos, selectTodoHandler } = props

    return (
        <table>
            <thead>
                <tr>
                    <th>Task Id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(
                        (todo) => {
                            return (
                                <tr>
                                    <td>{todo.id}</td>
                                    <td onClick={() => selectTodoHandler(todo.id)}>
                                        <u>{todo.title}</u>
                                    </td>
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