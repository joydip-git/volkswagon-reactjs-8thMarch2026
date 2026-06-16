import { useContext } from "react"
import CountContext from "./CountContext"

const Second = () => {
    const obj = useContext(CountContext)
    return (
        <div>
            Count in Second: {obj.count}
        </div>
    )
}

export default Second