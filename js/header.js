//add eventlsitener to "account" button, move to "account.html" page when clicked
document.querySelector('#account').addEventListener('click', moveToAccount)
let userLoggedIn = 0
function moveToAccount()
{
    if(userLoggedIn == 0)
    {

    }
    window.open('account.html', '_self')
}
document.querySelector('#cart').addEventListener('click', moveToCheckOut)
function moveToCheckOut()
{
    window.open('checkOut.html', '_self')
}
document.querySelector('#logoImg').addEventListener('click', mainPage)
function mainPage()
{
    window.open('home.html', '_self')
}