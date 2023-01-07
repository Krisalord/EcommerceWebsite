let arr = [["1", "Artur", "Motin", "24.10.1998", "artur.motin98@gmail.com", "1234"], ["2", "Sanya", "Shelby", "14.4.2013", "sanya.kok@gmail.com", "1234"] ]

// Load users data
document.querySelector('#MyData').addEventListener('click', loadMyData)
function loadMyData()
{
    document.querySelector('#content').innerHTML = ''

    arr.forEach((attrs) => {
        MyDataDiv = document.createElement('div')
        firstName = document.createElement('span')
        familyName = document.createElement('span')
        dateOfBirth = document.createElement('span')
        email = document.createElement('span')
        password = document.createElement('span')

        MyDataDiv.classList.add('MyDataDiv')
        firstName.classList.add('text')
        familyName.classList.add('text')
        dateOfBirth.classList.add('text')
        email.classList.add('text')
        password.classList.add('text')
        
        
        firstName.innerHTML = attrs[0]
        familyName.innerHTML = attrs[1]
        dateOfBirth.innerHTML = attrs[2]
        email.innerHTML = attrs[3]
        password.innerHTML = attrs[4]

        MyDataDiv.appendChild(firstName)
        MyDataDiv.appendChild(familyName)
        MyDataDiv.appendChild(dateOfBirth)
        MyDataDiv.appendChild(email)
        MyDataDiv.appendChild(password)

        document.querySelector('#content').appendChild(MyDataDiv)
    });
}