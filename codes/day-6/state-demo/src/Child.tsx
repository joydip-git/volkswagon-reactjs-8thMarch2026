import { useState } from "react"

type ChildStateType = {
    count: number,
    person: string
}
const Child = () => {
    console.log('rendered');
    const [state, setState] = useState<ChildStateType>({ count: 0, person: 'enter name here' })

    const { count, person } = state
    const countHandler = () => {
        // const copy = { ...state }
        // copy.count = copy.count + 1
        // setState(copy)
        setState(
            (currentStateCopy) => {
                return {
                    ...currentStateCopy,
                    count: currentStateCopy.count + 1
                }
            }
        )
    }
    const nameHandler = (newName: string) => {
        // const copy = { ...state }
        // copy.person = newName
        // setState(copy)
        setState(
            (currentStateCopy) => {
                return {
                    ...currentStateCopy,
                    person: newName
                }
            }
        )
    }
    return (
        <div>
            <h3>Child Component</h3>
            <br />
            Count: &nbsp; {count}
            <br />
            <button type="button" onClick={countHandler}>Increase</button>
            <br />
            <br />
            <div>
                <label htmlFor="txtName">Name:&nbsp;</label>
                <input type="text" id="txtName" value={person} onInput={
                    (e) => {
                        const input = e.target as HTMLInputElement
                        nameHandler(input.value)
                    }
                } />
            </div>
        </div>
    )
}

export default Child