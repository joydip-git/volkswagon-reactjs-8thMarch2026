import { increaseActionCreator } from "./redux/actioncreators"
import { appUseDispatch, appUseSelector } from "./redux/typedhooks"

const CountIncrement = () => {

    const { count } = appUseSelector(state => state.countState)
    const dispatch = appUseDispatch()

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