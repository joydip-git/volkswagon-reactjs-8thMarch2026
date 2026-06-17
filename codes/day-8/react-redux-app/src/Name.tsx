// import { useSelector, useDispatch } from "react-redux";
//import type { AppStateMapType } from "./redux/store";
import { appUseDispatch, appUseSelector } from "./redux/typedhooks";
import { changeNameActionCreator } from "./redux/actioncreators";

const Name = () => {
    //  useSelector((stateMap) => stateMap.nameState)
    // useSelector((stateMap: StateMapType) => stateMap.nameState)
    // const dispatch = useDispatch()
    //const [x,setX] = useState('')
    
    const { name } = appUseSelector(state => state.nameState)
    const dispatch = appUseDispatch()

    const nameHandler = (newName: string) => {
        const changeNameAction = changeNameActionCreator(newName)
        dispatch(changeNameAction)
    }
    return (
        <div>
            <label htmlFor="txtName">Name: &nbsp;</label>
            <input type="text" id="txtName" value={name === '' ? 'enter name' : name} onInput={(e) => nameHandler((e.target as HTMLInputElement).value)} />
            <br />
            <span>Name: &nbsp;{name === '' ? 'NA' : name}</span>
        </div>
    )
}

export default Name