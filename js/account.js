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

document.querySelector('#myInfoWindow').addEventListener('click', openMyInfo)
function openMyInfo()
{
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const myInfoCenter = document.createElement("div");
    myInfoCenter.id = "myInfoCenter";
    contentDiv.appendChild(myInfoCenter);

    const myInfo = [
    { name: "Name", value: "Artur Motin" },
    { name: "Email", value: "artur.motin98@gmail.com" },
    { name: "Date Of Birth", value: "24.10.1998" },
    { name: "Phone", value: "+358449897277" }
    ];

    for (let i = 0; i < myInfo.length; i++) {
        const myInfoSingleBox = document.createElement("div");
        myInfoSingleBox.classList.add("myInfoSingleBox");
        myInfoCenter.appendChild(myInfoSingleBox);

        const myInfoSingleBoxName = document.createElement("span");
        myInfoSingleBoxName.textContent = myInfo[i].name;
        myInfoSingleBox.appendChild(myInfoSingleBoxName);

        const myInfoDivider = document.createElement("div");
        myInfoDivider.classList.add("myInfoDivider");
        myInfoSingleBox.appendChild(myInfoDivider);

        const myInfoSingleBoxValue = document.createElement("span");
        myInfoSingleBoxValue.textContent = myInfo[i].value;
        myInfoSingleBox.appendChild(myInfoSingleBoxValue);
    }
}

// document.querySelector('#contactUsWindow').addEventListener('click', openContactUs)

function openContactUs(){

}

document.querySelector('#passwordChangeWindow').addEventListener('click', openPasswordChange)

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