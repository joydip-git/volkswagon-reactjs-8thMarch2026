import { useState } from "react"

const Counter = () => {
    console.log('rendered');
    const [count, setCount] = useState<number>(0)
    const [name, setName] = useState('enter name here')

    const countHandler = () => {
        //setCount(count + 1)
        setCount(
            (currentCount) => {
                return currentCount + 1
            }
        )
    }
    // const nameHandler = (e: any) => {
    //     const input = e.target as HTMLInputElement
    //     console.log(input.value);
    //     setName(input.value)
    // }
    const nameHandler = (newName:string) => {
        setName(newName)
    }
    return (
        <div>
            Count: &nbsp; {count}
            <br />
            <button type="button" onClick={countHandler}>Increase</button>
            <br />
            <br />
            <div>
                <label htmlFor="txtName">Name:&nbsp;</label>
                {/* <input type="text" id="txtName" value={name} onInput={nameHandler} /> */}
                <input type="text" id="txtName" value={name} onInput={
                    (e) => {
                        const input = e.target as HTMLInputElement
                        nameHandler(input.value)
                    }
                } />
            </div>
        </div>
    )
}

export default Counter