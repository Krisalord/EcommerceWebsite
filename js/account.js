let loginStatus = 2
const options = document.querySelector('#options')
window.onload = function checkLoginStatus() {
    if(loginStatus == 1){
        // Select div with "options" for user in my account menu
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
        passwordChangeWindow.addEventListener('click', function(){
            document.querySelector("#content").innerHTML = ""
    
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
        })
        //ContactUs, create element, add Event Listener
        const contactUsWindow = document.createElement('span')
        contactUsWindow.setAttribute('id', 'contactUsWindow')
        contactUsWindow.innerText = 'Contact Us'
        options.appendChild(contactUsWindow)
        contactUsWindow.addEventListener('click', function(){
            document.querySelector("#content").innerHTML = ''
    
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
            document.querySelector("#content").appendChild(contactUsDiv)
        })
        //LogOut, create element, add Event Listener
        const logOut = document.createElement('span')
        logOut.setAttribute('id', 'logOut')
        logOut.innerText = 'Log Out'
        options.appendChild(logOut)
        logOut.addEventListener('click', function(){
            loginStatus = 2;
            document.querySelector("#content").innerHTML = ""
            document.querySelector("#options").innerHTML = ""
            checkLoginStatus()
        })
    }
    else if(loginStatus == 2){
        //CreateAccount, create element, add Event Listener
        const createAccount = document.createElement('span')
        createAccount.setAttribute('id', 'createAccount')
        createAccount.innerText = 'Create Account'
        options.appendChild(createAccount)
        createAccount.addEventListener('click', function(){
            document.querySelector('#content').innerHTML = ''
            
            const regForm = document.createElement('div')
            regForm.setAttribute('class', 'createAccountForm')
    
            const div1 = document.createElement('div')
            div1.setAttribute('class', 'sectionOfReg')
            const in1 = document.createElement('input')
            in1.setAttribute('type', 'text')
            in1.setAttribute('placeholder', 'Name')
            in1.setAttribute('id', 'sendName')
            div1.appendChild(in1)
            const in2 = document.createElement('input')
            in2.setAttribute('type', 'text')
            in2.setAttribute('placeholder', 'Email')
            in2.setAttribute('id', 'sendEmail')
            div1.appendChild(in2)
            const in3 = document.createElement('input')
            in3.setAttribute('type', 'tel')
            in3.setAttribute('placeholder', 'Phone Number')
            in3.setAttribute('id', 'sendPhoneNumber')
            div1.appendChild(in3)
    
            const div2 = document.createElement('div')
            div2.setAttribute('class', 'sectionOfReg')
            const in4 = document.createElement('input')
            in4.setAttribute('type', 'text')
            in4.setAttribute('placeholder', 'Date of Birth')
            in4.setAttribute('id', 'sendDateOfBirth')
            div2.appendChild(in4)
            const in5 = document.createElement('input')
            in5.setAttribute('type', 'text')
            in5.setAttribute('placeholder', 'Address')
            in5.setAttribute('id', 'sendAddress')
            div2.appendChild(in5)
            const in6 = document.createElement('input')
            in6.setAttribute('type', 'password')
            in6.setAttribute('placeholder', 'Password')
            in6.setAttribute('id', 'sendPassword')
            div2.appendChild(in6)
    
            regForm.appendChild(div1)
            regForm.appendChild(div2)
    
            const regBtn = document.createElement('input')
            regBtn.setAttribute('type', 'submit')
            regForm.appendChild(regBtn)
            regBtn.addEventListener('click', function(){
                // Get the new user's information from the input fields
                var sendId = 3
                var sendName = document.getElementById("sendName").value
                var sendEmail = document.getElementById("sendEmail").value
                var sendPhoneNumber = document.getElementById("sendPhoneNumber").value
                var sendDateOfBirth = document.getElementById("sendDateOfBirth").value
                var sendAddress = document.getElementById("sendAddress").value
                var sendPassword = document.getElementById("sendPassword").value
                // Create a new user object
                var newUser = {
                    "id": sendId,
                    "name": sendName,
                    "email": sendEmail,
                    "phoneNumber": sendPhoneNumber,
                    "dateOfBirth": sendDateOfBirth,
                    "address": sendAddress,
                    "password": sendPassword
                    }
                    


                    const MongoClient = require('mongodb').MongoClient;

        // Connection URL
        const url = 'mongodb+srv://admin:admin@cluster0.nptsrku.mongodb.net/test'

        // Database Name
        const dbName = '<database>';

        // Use connect method to connect to the server
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
        if(err) throw err;
        console.log("Connected successfully to server");
        
        const db = client.db(dbName);

        // Create an array of documents to insert
        const documents = [
            { name: 'John', age: 30 },
            { name: 'Jane', age: 25 },
            { name: 'Bob', age: 35 }
        ];

        // Insert the array of documents into the collection
        db.collection('<collection>').insertMany(documents, function(err, result) {
            if(err) throw err;
            console.log(`Inserted ${result.insertedCount} documents into the collection`);
            client.close();
        });
        });





            })
            document.querySelector('#content').appendChild(regForm)
        })
        //LogIn
        const logIn = document.createElement('span')
        logIn.setAttribute('id', 'logIn')
        logIn.innerText = 'Log In'
        options.appendChild(logIn)
        logIn.addEventListener('click', function(){
            document.querySelector("#content").innerHTML = ""
    
            const logInDiv = document.createElement('div')
            logInDiv.setAttribute('id', 'logInDiv')
    
            const emailLogIn = document.createElement('input')
            emailLogIn.setAttribute('type', 'text')
            emailLogIn.setAttribute('placeholder', 'Email')
            emailLogIn.setAttribute('id', 'logInEmailCheck')
            logInDiv.appendChild(emailLogIn)
            const passwordLogIn = document.createElement('input')
            passwordLogIn.setAttribute('type', 'password')
            passwordLogIn.setAttribute('placeholder', 'Password')
            passwordLogIn.setAttribute('id', 'passwordCheck')
            logInDiv.appendChild(passwordLogIn)
    
            const logInButton = document.createElement('input')
            logInButton.setAttribute('type', 'submit')
            logInButton.setAttribute('value', 'Log In')
            logInDiv.appendChild(logInButton)
            // add a logIn check
            // logInButton.addEventListener('click', function(){
            //     var users = [
            //         {
            //             email: "artur.motin98@gmail.com",
            //             password: "1234"
            //         },
            //         {
            //             email: "artur.motin21@gmail.com",
            //             password: "1234"
            //         }
            //     ]
            //     let emailCheck = document.querySelector('#logInEmailCheck').value
            //     let passwordCheck = document.querySelector('#passwordCheck').value
    
            //     for(i = 0; i < users.length; i++)
            //     {
            //         if(emailCheck == users[i].email && passwordCheck == users[i].password){
            //             loginStatus = 1
            //             document.querySelector("#content").innerHTML = ""
            //             document.querySelector("#options").innerHTML = ""
            //             checkLoginStatus()
            //         }
            //     }
            //     // Read the JSON file
            //     // var xhr = new XMLHttpRequest();
            //     // xhr.open("GET", "accounts.json", true);
            //     // xhr.onreadystatechange = function(){
            //     //     if (xhr.readyState === 4 && xhr.status === 200){
            //     //     var accounts = JSON.parse(xhr.responseText).accounts;
                    
            //     //     // Check the entered login information against the accounts
            //     //     for (var i = 0; i < accounts.lenght; i++){
            //     //         if (email === accounts[i].email && password === accounts[i].password) {
            //     //         loginStatus = 2
            //     //         console.log(loginStatus)
            //     //         return;
            //     //         }
            //     //     }
                    
            //     //     // If the loop completes and no match is found
            //     //     alert("Incorrect username or password. Please try again.");
            //     //     }
            //     // };
            //     // xhr.send();
            // })
            document.querySelector('#content').appendChild(logInDiv)
        })
    }
}

// {
//     "users":[
//         {
//             "id": 1,
//             "name": "Artur Motin",
//             "email": "artur.motin98@gmail.com",
//             "phoneNumber": "+358449897277",
//             "password": "1234",
//             "dateOfBirth": "23.10.1998",
//             "address": "Myllärintie 32"
//         }
//     ]
// }