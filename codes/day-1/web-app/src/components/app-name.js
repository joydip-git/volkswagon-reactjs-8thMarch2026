function appName() {
    var result = appResult()

    var txtbox = document.createElement('input')
    txtbox.setAttribute('id', 'txtName')
    txtbox.placeholder = "enter name here"
    txtbox.addEventListener('input', function (e) {
        //window.alert(e.target.value)
        result.innerText = e.target.value
    })

    var label = document.createElement('label')
    label.innerText = "Enter Name: "
    label.htmlFor = 'txtName'

    var div = document.createElement('div')
    div.append(label, txtbox, document.createElement('br'), result)

    return div
}