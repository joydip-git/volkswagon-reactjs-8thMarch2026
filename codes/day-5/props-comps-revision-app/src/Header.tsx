type HeaderPropType = {
    messageValue: string,
    optProp?: number
}

const Header = (props: Readonly<HeaderPropType>) => {
    //props.messageValue = 'joydip'
    const { messageValue, optProp } = props
    return (
        <h2>
            {messageValue}
            <br />
            {
                /* optProp && optProp */
                optProp ? optProp : 'NA'
            }
        </h2>
    )
}

export default Header