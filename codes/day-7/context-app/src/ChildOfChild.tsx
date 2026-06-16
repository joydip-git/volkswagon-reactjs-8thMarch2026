import { useContext } from "react"
import CountContext from "./CountContext"

const ChildOfChild = () => {
    const countObject = useContext(CountContext)
    return (
        <div>
            ChildOfChild
            <br />
            <span>Count: &nbsp;{countObject.count}</span>
            <br />
            <button type="button" onClick={countObject.handler}>Increase</button>
        </div>
    )
}

export default ChildOfChild