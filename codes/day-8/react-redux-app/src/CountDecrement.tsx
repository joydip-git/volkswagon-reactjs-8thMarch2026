import { decreaseActionCreator } from "./redux/actioncreators"
import { appUseDispatch, appUseSelector } from "./redux/typedhooks"

const CountDecrement = () => {
    const { count } = appUseSelector(state => state.countState)
    const dispatch = appUseDispatch()

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