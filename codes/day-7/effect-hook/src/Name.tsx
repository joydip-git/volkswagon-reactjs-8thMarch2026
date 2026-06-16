type NamePropType = {
    nameValue: string,
    nameChanger: (name: string) => void
}
const Name = (props: Readonly<NamePropType>) => {
    console.log('name rendered');
    const { nameValue, nameChanger } = props


    console.log('name returning VDOM');
    return (
        <div>
            <label htmlFor="txtName">Name: &nbsp;</label>
            <input type="text" id="txtName" value={nameValue} onChange={
                (e) => nameChanger((e.target as HTMLInputElement).value)
            } />
        </div>
    )
}

export default Name