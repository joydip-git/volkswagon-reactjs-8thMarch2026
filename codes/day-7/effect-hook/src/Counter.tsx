import { useEffect } from "react"

type CounterPropType = {
    countValue: number,
    countInvoker: () => void
}
const Counter = (props: Readonly<CounterPropType>) => {
    console.log('counter rendered');
    const { countInvoker, countValue } = props

    //no dependency array
    useEffect(
        () => {
            console.log('this code is executed every time the component is re-rendered, but after the rendering');
        }
    )

    //blank dependency array
    useEffect(
        () => {
            console.log('this code is executed ONLY one time when the component is mounted, but after the mounting');
        },
        []
    )

    //dependency array with one dependency
    useEffect(
        () => {
            console.log('this code is executed every time the dependency value changes, but after the rendering');
        },
        [countValue]
    )

    console.log('counter returning VDOM');
    return (
        <div>
            <span>Count: &nbsp; {countValue}</span>
            <br />
            <button type="button" onClick={countInvoker}>Increase</button>
        </div>
    )
}

export default Counter