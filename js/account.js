if(1 == 1){
    // Select div with "options" for user in my account menu
    const options = document.querySelector('#options')
    options.innerHTML = ''
    //MyInfoWondow, create element, add Event Listener
    const myInfoWindow = document.createElement('span')
    myInfoWindow.setAttribute('id', 'myInfoWondow')
    myInfoWindow.innerText = 'My Info'
    options.appendChild(myInfoWindow)
    myInfoWindow.addEventListener('click', function(){
            const contentDiv = document.querySelector("#content")
            contentDiv.innerHTML = ""

            const myInfoCenter = document.createElement("div")
            myInfoCenter.id = "myInfoCenter"
            contentDiv.appendChild(myInfoCenter)

            const myInfo = [
            { name: "Name", value: "Artur Motin" },
            { name: "Email", value: "artur.motin98@gmail.com" },
            { name: "Date Of Birth", value: "24.10.1998" },
            { name: "Phone", value: "+358449897277" }
            ];

            for (let i = 0; i < myInfo.length; i++) {
                const myInfoSingleBox = document.createElement("div")
                myInfoSingleBox.classList.add("myInfoSingleBox")
                myInfoCenter.appendChild(myInfoSingleBox)

                const myInfoSingleBoxName = document.createElement("span")
                myInfoSingleBoxName.textContent = myInfo[i].name
                myInfoSingleBox.appendChild(myInfoSingleBoxName)

                const myInfoDivider = document.createElement("div")
                myInfoDivider.classList.add("myInfoDivider")
                myInfoSingleBox.appendChild(myInfoDivider)

                const myInfoSingleBoxValue = document.createElement("span")
                myInfoSingleBoxValue.textContent = myInfo[i].value
                myInfoSingleBox.appendChild(myInfoSingleBoxValue)
            }
    })
    //ChangePassword, create element, add Event Listener
    const passwordChangeWindow = document.createElement('span')
    passwordChangeWindow.setAttribute('id', 'passwordChangeWindow')
    passwordChangeWindow.innerText = 'Change Password'
    options.appendChild(passwordChangeWindow)
    




    
    const contactUsWindow = document.createElement('span')
    contactUsWindow.setAttribute('id', 'contactUsWindow')
    contactUsWindow.innerText = 'Contact Us'
    const logOut = document.createElement('span')
    logOut.setAttribute('id', 'logOut')
    logOut.innerText = 'Log Out'
    //append all of the elements to the dom
    
    options.appendChild(passwordChangeWindow)
    options.appendChild(contactUsWindow)
    options.appendChild(logOut)

    //event listeners for functions
    document.querySelector('#myInfoWindow').addEventListener('click', openMyInfo)

    document.querySelector('#contactUsWindow').addEventListener('click', openContactUs)

    document.querySelector('#passwordChangeWindow').addEventListener('click', openPasswordChange)

    document.querySelector('#logOut').addEventListener('click', logOutFromAccount)
}
//Open MyInfo window
function openMyInfo(){
    const contentDiv = document.querySelector("#content")
    contentDiv.innerHTML = ""

    const myInfoCenter = document.createElement("div")
    myInfoCenter.id = "myInfoCenter"
    contentDiv.appendChild(myInfoCenter)

    const myInfo = [
    { name: "Name", value: "Artur Motin" },
    { name: "Email", value: "artur.motin98@gmail.com" },
    { name: "Date Of Birth", value: "24.10.1998" },
    { name: "Phone", value: "+358449897277" }
    ];

    for (let i = 0; i < myInfo.length; i++) {
        const myInfoSingleBox = document.createElement("div")
        myInfoSingleBox.classList.add("myInfoSingleBox")
        myInfoCenter.appendChild(myInfoSingleBox)

        const myInfoSingleBoxName = document.createElement("span")
        myInfoSingleBoxName.textContent = myInfo[i].name
        myInfoSingleBox.appendChild(myInfoSingleBoxName)

        const myInfoDivider = document.createElement("div")
        myInfoDivider.classList.add("myInfoDivider")
        myInfoSingleBox.appendChild(myInfoDivider)

        const myInfoSingleBoxValue = document.createElement("span")
        myInfoSingleBoxValue.textContent = myInfo[i].value
        myInfoSingleBox.appendChild(myInfoSingleBoxValue)

        
    }
}
//Open ContactUs window
function openContactUs(){
    const contentDiv = document.querySelector("#content")
    contentDiv.innerHTML = ''

    const contactUsDiv = document.createElement("div")
    contactUsDiv.id = "contactUsDiv"

    const emailForm = document.createElement("form")

    //Name field
    const nameMailDiv = document.createElement("div")
    nameMailDiv.classList.add("nameMail")

    const nameLabel = document.createElement("label")
    nameLabel.setAttribute("for", "name")
    nameLabel.innerText = "Name:"

    const nameInput = document.createElement("input")
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("id", "name")
    nameInput.setAttribute("name", "name")
    nameInput.setAttribute("required", "")

    nameMailDiv.appendChild(nameLabel)
    nameMailDiv.appendChild(nameInput)
    emailForm.appendChild(nameMailDiv)

    //Mail field
    const nameMailDiv2 = document.createElement("div")
    nameMailDiv2.classList.add("nameMail")

    const mailLabel = document.createElement("label")
    mailLabel.setAttribute("for", "mail")
    mailLabel.innerText = "Mail:"

    const mailInput = document.createElement("input")
    mailInput.setAttribute("type", "text")
    mailInput.setAttribute("id", "mail")
    mailInput.setAttribute("name", "mail")
    mailInput.setAttribute("required", "")

    nameMailDiv2.appendChild(mailLabel)
    nameMailDiv2.appendChild(mailInput)
    emailForm.appendChild(nameMailDiv2)

    //Message field
    const contactUsElement = document.createElement("div")
    contactUsElement.classList.add("contactUs-element")

    const messageLabel = document.createElement("label")
    messageLabel.setAttribute("for", "message")
    messageLabel.innerText = "Message:"

    const messageInput = document.createElement("textarea")
    messageInput.setAttribute("id", "message")
    messageInput.setAttribute("name", "message")
    messageInput.setAttribute("maxlength", "144")
    messageInput.setAttribute("required", "")

    contactUsElement.appendChild(messageLabel)
    contactUsElement.appendChild(messageInput)
    emailForm.appendChild(contactUsElement)

    //Submit button
    const contactUsBtn = document.createElement("input")
    contactUsBtn.setAttribute("type", "submit")
    contactUsBtn.setAttribute("value", "Submit")
    emailForm.appendChild(contactUsBtn)

    contactUsDiv.appendChild(emailForm)
    contentDiv.appendChild(contactUsDiv)
}
//Open ChangePassword window
function openPasswordChange(){
    document.querySelector('#content').innerHTML = ''

    const changePassword = document.createElement('div')
    changePassword.id = 'changePasswordCenter'

    const oldPasswordSpan = document.createElement('span')
    oldPasswordSpan.textContent = 'Old password'
    oldPasswordSpan.classList.add("changePasswordSingleItem")

    const oldPasswordInput = document.createElement('input')
    oldPasswordInput.type = 'password'
    oldPasswordInput.classList.add("changePasswordSingleItem")

    const newPasswordSpan = document.createElement('span')
    newPasswordSpan.textContent = 'New password'
    newPasswordSpan.classList.add("changePasswordSingleItem")

    const newPasswordInput = document.createElement('input')
    newPasswordInput.type = 'password'
    newPasswordInput.classList.add("changePasswordSingleItem")

    const confirmPasswordSpan = document.createElement('span')
    confirmPasswordSpan.textContent = 'Confirm password'
    confirmPasswordSpan.classList.add("changePasswordSingleItem")

    const confirmPasswordInput = document.createElement('input')
    confirmPasswordInput.type = 'password'
    confirmPasswordInput.classList.add("changePasswordSingleItem")

    const changeButton = document.createElement('input')
    changeButton.type = 'submit'
    changeButton.value = 'Change'

    changePassword.appendChild(oldPasswordSpan)
    changePassword.appendChild(oldPasswordInput)
    changePassword.appendChild(newPasswordSpan)
    changePassword.appendChild(newPasswordInput)
    changePassword.appendChild(confirmPasswordSpan)
    changePassword.appendChild(confirmPasswordInput)
    changePassword.appendChild(changeButton)

    document.querySelector('#content').appendChild(changePassword)
}
//LogOut from the account
function logOutFromAccount(){
    window.open('home.html', '_self')
}