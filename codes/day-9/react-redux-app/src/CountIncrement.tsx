import { increaseActionCreator } from "./redux/countslice"
import { useTypedDispatch, useTypedSelector } from "./redux/typedhooks"

const CountIncrement = () => {

    const { count } = useTypedSelector(state => state.countState)
    const dispatch = useTypedDispatch()

    const countHandler = () => {
        const increaseAction = increaseActionCreator(count + 1)
        dispatch(increaseAction)
    }

    return (
        <div>
            <span>Count Increment:&nbsp;{count}</span>
            <br />
            <button type="button" onClick={countHandler}>Increase</button>
        </div>
    )
}

export default CountIncrement