import { changeNameActionCreator } from "./redux/nameslice";
import { useTypedDispatch, useTypedSelector } from "./redux/typedhooks";

const Name = () => {
    const { name } = useTypedSelector(state => state.nameState)
    const dispatch = useTypedDispatch()

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