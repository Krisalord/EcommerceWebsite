let arr = [["1", "Artur", "Motin", "24.10.1998", "artur.motin98@gmail.com", "1234"]/*, ["2", "Sanya", "Shelby", "14.4.2013", "sanya.kok@gmail.com", "1234"]*/]

// Load users data
// document.querySelector('#MyData').addEventListener('click', loadMyData)
// function loadMyData()
// {
//     document.querySelector('#content').innerHTML = ''

//     arr.forEach((attrs) => {
//         let myDataDiv = document.createElement('div')
//         myDataDiv.classList.add('myDataDiv')

//         let firstName = document.createElement('span')
//         firstName.classList.add('myDataFirstName')
//         firstName.innerText = attrs[1]
//         myDataDiv.appendChild(firstName)

//         let familyName = document.createElement('span')
//         familyName.classList.add('myDataFamilyName')
//         familyName.innerHTML = attrs[2]
//         myDataDiv.appendChild(familyName)

//         let dateOfBirth = document.createElement('span')
//         dateOfBirth.classList.add('myDataDateOfBirth')
//         dateOfBirth.innerHTML = attrs[3]
//         myDataDiv.appendChild(dateOfBirth)

//         let email = document.createElement('span')
//         email.classList.add('myDataEmail')
//         email.innerHTML = attrs[4]
//         myDataDiv.appendChild(email)

//         let password = document.createElement('span')
//         password.classList.add('text')
//         password.innerHTML = attrs[5]
//         myDataDiv.appendChild(password)

//         document.querySelector('#content').appendChild(myDataDiv)
//     });
// }

document.querySelector('#myInfo').addEventListener('click', openMyInfo)

function openMyInfo(){
    const contentDiv = document.querySelector("#content")

    contentDiv.innerHTML = ''

    const contentDivs = document.createElement("div")
    contentDivs.id = "contentDivs"
    contentDiv.appendChild(contentDivs)

    const contentDivsSizing = document.createElement("div")
    contentDivsSizing.id = "contentDivsSizing"
    contentDivs.appendChild(contentDivsSizing)

    //DIV 1 FOR DATA CELL
    const contentBox1 = document.createElement("div")
    contentBox1.classList.add("contentBox")
    //SPAN WITH TEXT (BOX DESCRIPTION)
    const contentBox1Span = document.createElement("span")
    contentBox1Span.textContent = "Name"
    contentBox1.appendChild(contentBox1Span)
    //ADD SPAN WITH DATA FROM ARRAY
    const contentBox1Span2 = document.createElement("span")
    contentBox1Span2.textContent = "Artur"
    contentBox1.appendChild(contentBox1Span2)
    //APPEND CONTENT BOX TO PARENT
    contentDivsSizing.appendChild(contentBox1)

    //DIV 2 FOR DATA CELL
    const contentBox2 = document.createElement("div")
    contentBox2.classList.add("contentBox")
    //SPAN WITH TEXT (BOX DESCRIPTION)
    const contentBox2Span = document.createElement("span")
    contentBox2Span.textContent = "Email"
    contentBox2.appendChild(contentBox2Span)
    //ADD SPAN WITH DATA FROM ARRAY
    const contentBox2Span2 = document.createElement("span")
    contentBox2Span2.textContent = "artur.motin98@gmail.com"
    contentBox2.appendChild(contentBox2Span2)
    //APPEND CONTENT BOX TO PARENT
    contentDivsSizing.appendChild(contentBox2)

    //DIV 3 FOR DATA CELL
    const contentBox3 = document.createElement("div")
    contentBox3.classList.add("contentBox")
    //SPAN WITH TEXT (BOX DESCRIPTION)
    const contentBox3Span = document.createElement("span")
    contentBox3Span.textContent = "Date Of Birth"
    contentBox3.appendChild(contentBox3Span)
    //ADD SPAN WITH DATA FROM ARRAY
    const contentBox3Span2 = document.createElement("span")
    contentBox3Span2.textContent = "24.10.1998"
    contentBox3.appendChild(contentBox3Span2)
    //APPEND CONTENT BOX TO PARENT
    contentDivsSizing.appendChild(contentBox3)

    //DIV 4 FOR DATA CELL
    const contentBox4 = document.createElement("div")
    contentBox4.classList.add("contentBox")
    //SPAN WITH TEXT (BOX DESCRIPTION)
    const contentBox4Span = document.createElement("span")
    contentBox4Span.textContent = "Phone"
    contentBox4.appendChild(contentBox4Span)
    //ADD SPAN WITH DATA FROM ARRAY
    const contentBox4Span2 = document.createElement("span")
    contentBox4Span2.textContent = "+358449897277"
    contentBox4.appendChild(contentBox4Span2)
    //APPEND CONTENT BOX TO PARENT
    contentDivsSizing.appendChild(contentBox4)

    const contentBtns = document.createElement("div")
    contentBtns.id = "contentBtns"
    contentDiv.appendChild(contentBtns)

    const contentBtn1 = document.createElement("input")
    contentBtn1.type = "button"
    contentBtn1.classList.add("contentBtn")
    contentBtn1.value = "Change Info"
    contentBtns.appendChild(contentBtn1)

    const contentBtn2 = document.createElement("input")
    contentBtn2.type = "button"
    contentBtn2.classList.add("contentBtn")
    contentBtn2.value = "Change Password"
    contentBtns.appendChild(contentBtn2)

    const contentBtn3 = document.createElement("input")
    contentBtn3.type = "button"
    contentBtn3.classList.add("contentBtn")
    contentBtn3.value = "Log Out"
    contentBtns.appendChild(contentBtn3)

    document.querySelector("#mainContent").appendChild(contentDiv)
}

document.querySelector('#contactUs').addEventListener('click', openContactUs)

function openContactUs(){
    document.querySelector('#content').innerHTML = ''
    const contactUsDiv = document.createElement('div')
    contactUsDiv.id = 'contactUsDiv'

    const emailForm = document.createElement('form')
    emailForm.id = 'emailForm'

    const nameSpan = document.createElement('span')
    nameSpan.textContent = 'Name: *'

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameInput.required = true

    const emailSpan = document.createElement('span')
    emailSpan.textContent = 'Email Address: *'

    const emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.name = 'email'
    emailInput.required = true

    const messageSpan = document.createElement('span')
    messageSpan.textContent = 'Message: *'

    const messageTextBox = document.createElement('textarea')
    messageTextBox.id = 'messageTextBox'
    messageTextBox.name = 'message'
    messageTextBox.required = true

    const submitButton = document.createElement('input')
    submitButton.type = 'button'
    submitButton.name = 'submit'
    submitButton.value = 'Send'
    submitButton.id = 'sendEmailBtn'

    emailForm.appendChild(nameSpan)
    emailForm.appendChild(nameInput)
    emailForm.appendChild(emailSpan)
    emailForm.appendChild(emailInput)
    emailForm.appendChild(messageSpan)
    emailForm.appendChild(messageTextBox)
    emailForm.appendChild(submitButton)

    contactUsDiv.appendChild(emailForm)

    document.querySelector('#content').appendChild(contactUsDiv)
}

document.querySelector('#openPasswordChange').addEventListener('click', openPasswordChange)

function openPasswordChange(){
    document.querySelector('#content').innerHTML = ''

    const changePassword = document.createElement('div')
    changePassword.id = 'changePassword'

    const oldPasswordSpan = document.createElement('span')
    oldPasswordSpan.textContent = 'Old password'

    const oldPasswordInput = document.createElement('input')
    oldPasswordInput.type = 'password'

    const newPasswordSpan = document.createElement('span')
    newPasswordSpan.textContent = 'New password'

    const newPasswordInput = document.createElement('input')
    newPasswordInput.type = 'password'

    const confirmPasswordSpan = document.createElement('span')
    confirmPasswordSpan.textContent = 'Confirm password'

    const confirmPasswordInput = document.createElement('input')
    confirmPasswordInput.type = 'password'

    const changeButton = document.createElement('input')
    changeButton.type = 'button'
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