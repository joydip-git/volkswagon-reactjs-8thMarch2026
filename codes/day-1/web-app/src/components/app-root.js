//component (component function)
function appRoot() {
    var header = appHeader()
    var button = appButton()
    var nameElement = appName()

    var div = document.createElement('div')
    div.appendChild(header)
    div.append(
        document.createElement('br'),
        button,
        nameElement
    )

    return div
}