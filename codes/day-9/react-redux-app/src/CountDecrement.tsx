import { decreaseActionCreator } from "./redux/countslice"
import { useTypedDispatch, useTypedSelector } from "./redux/typedhooks"

const CountDecrement = () => {
    const { count } = useTypedSelector(state => state.countState)
    const dispatch = useTypedDispatch()

    const countHandler = () => {
        const decreaseAction = decreaseActionCreator(count - 1)
        dispatch(decreaseAction)
    }
    return (
        <div>
            <span>Count Decrement:&nbsp;{count}</span>
            <br />
            <button type="button" onClick={countHandler}>Decrease</button>
        </div>
    )
}

export default CountDecrement