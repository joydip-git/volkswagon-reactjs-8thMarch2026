const Header = () => {
    let message = 'Welcome to React JS'
    const styleObj = {
        backgroundColor: 'burlywood',
        textAlign: 'center',
        borderRadius: '5px',
        borderWidth: '1px',
        borderColor: 'burlywood',
        borderStyle: 'solid'
    }

    return (
        <h2 id="mainHeader" style={styleObj}>
            {message}
        </h2>
    )
}

export default Header