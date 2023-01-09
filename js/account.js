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