function appButton() {
    var button = document.createElement('button')
    button.innerText = 'Call'
    button.addEventListener('click', function () {
        window.alert('button clicked')
    })
    return button
}