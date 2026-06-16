import { createContext } from "react";

type ContextType = {
    count: number,
    handler: () => void
}
const CountContext = createContext<ContextType>({
    count: 0,
    handler: () => { }
})
export default CountContext