function appHeader() {
    //data
    var message = "welcome to web app"

    //UI element
    var header = document.createElement('h2')
    header.id = "mainHeader"

    //binding data with element
    header.innerText = message

    //applying style
    header.style.backgroundColor = "burlywood"
    header.style.borderRadius = "5px"
    header.style.borderColor = "burlywood"
    header.style.borderStyle = "solid"
    header.style.borderWidth = "1px"
    header.style.textAlign = "center"
    header.style.fontFamily="Consolas"

    var newMessage = 'Welcome to DOM manipulation via JS'
    //handling event and updating data
    header.addEventListener(
        'mouseover',
        function () {
            header.innerText = newMessage
        }
    )

    return header
}