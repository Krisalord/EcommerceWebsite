//add eventlistener to "product type" buttons, clear the div in DOM that contais all products, print all chosen products
document.querySelector('#GPU').addEventListener('click', getGpu)
document.querySelector('#CPU').addEventListener('click', getCpu)
document.querySelector('#RAM').addEventListener('click', getRam)
document.querySelector('#MTB').addEventListener('click', getMtb)
document.querySelector('#PSU').addEventListener('click', getPsu)
document.querySelector('#CASE').addEventListener('click', getCase)
//array of data that is needed for one product
let arr = [["1", "images/GPU.png", "Nvidia GTX950", "299€", "This is a Nvidia GPU"], ["2", "images/CPU.png", "Nvidia GTX950", "299€", "This is a Nvidia GPU"], ["3", "images/RAM.png", "Nvidia GTX950", "299€", "This is a Nvidia GPU"]]
//GET GPUS
function getGpu()
{
    document.querySelector('#productList').innerHTML = ''

    arr.forEach((attrs) => {
        card = document.createElement('div')
        img = document.createElement('img')
        pname = document.createElement('span')
        price = document.createElement('span')
        description = document.createElement('p')
        submit = document.createElement('button')

        card.classList.add('productCard')
        img.classList.add('productImage')
        pname.classList.add('productName')
        price.classList.add('productPrice')
        description.classList.add('productDescription')
        submit.classList.add('productToCart')
        submit.innerText = "Add To Cart"
        
        card.id = attrs[0]
        img.src = attrs[1]
        pname.innerText = attrs[2]
        price.innerText = attrs[3]
        description.innerText = attrs[4]

        card.appendChild(img)
        card.appendChild(pname)
        card.appendChild(price)
        card.appendChild(description)
        card.appendChild(submit)

        document.querySelector('#productList').appendChild(card)
    });
}
//GET CPUS
function getCpu()
{
    document.querySelector('#productList').innerHTML = ''

    arr.forEach((attrs) => {
        card = document.createElement('div')
        img = document.createElement('img')
        pname = document.createElement('span')
        price = document.createElement('span')
        description = document.createElement('p')
        submit = document.createElement('button')

        card.classList.add('productCard')
        img.classList.add('productImage')
        pname.classList.add('productName')
        price.classList.add('productPrice')
        description.classList.add('productDescription')
        submit.classList.add('productToCart')
        submit.innerText = "Add To Cart"
        
        card.id = attrs[0]
        img.src = attrs[1]
        pname.innerText = attrs[2]
        price.innerText = attrs[3]
        description.innerText = attrs[4]

        card.appendChild(img)
        card.appendChild(pname)
        card.appendChild(price)
        card.appendChild(description)
        card.appendChild(submit)

        document.querySelector('#productList').appendChild(card)
    });
}
//GET RAM
function getRam()
{
    document.querySelector('#productList').innerHTML = ''

    arr.forEach((attrs) => {
        card = document.createElement('div')
        img = document.createElement('img')
        pname = document.createElement('span')
        price = document.createElement('span')
        description = document.createElement('p')
        submit = document.createElement('button')

        card.classList.add('productCard')
        img.classList.add('productImage')
        pname.classList.add('productName')
        price.classList.add('productPrice')
        description.classList.add('productDescription')
        submit.classList.add('productToCart')
        submit.innerText = "Add To Cart"
        
        card.id = attrs[0]
        img.src = attrs[1]
        pname.innerText = attrs[2]
        price.innerText = attrs[3]
        description.innerText = attrs[4]

        card.appendChild(img)
        card.appendChild(pname)
        card.appendChild(price)
        card.appendChild(description)
        card.appendChild(submit)

        document.querySelector('#productList').appendChild(card)
    });
}
//GET MTB
function getMtb()
{
    document.querySelector('#productList').innerHTML = ''

    arr.forEach((attrs) => {
        card = document.createElement('div')
        img = document.createElement('img')
        pname = document.createElement('span')
        price = document.createElement('span')
        description = document.createElement('p')
        submit = document.createElement('button')

        card.classList.add('productCard')
        img.classList.add('productImage')
        pname.classList.add('productName')
        price.classList.add('productPrice')
        description.classList.add('productDescription')
        submit.classList.add('productToCart')
        submit.innerText = "Add To Cart"
        
        card.id = attrs[0]
        img.src = attrs[1]
        pname.innerText = attrs[2]
        price.innerText = attrs[3]
        description.innerText = attrs[4]

        card.appendChild(img)
        card.appendChild(pname)
        card.appendChild(price)
        card.appendChild(description)
        card.appendChild(submit)

        document.querySelector('#productList').appendChild(card)
    });
}
//GET PCU
function getPsu()
{
    document.querySelector('#productList').innerHTML = ''

    arr.forEach((attrs) => {
        card = document.createElement('div')
        img = document.createElement('img')
        pname = document.createElement('span')
        price = document.createElement('span')
        description = document.createElement('p')
        submit = document.createElement('button')

        card.classList.add('productCard')
        img.classList.add('productImage')
        pname.classList.add('productName')
        price.classList.add('productPrice')
        description.classList.add('productDescription')
        submit.classList.add('productToCart')
        submit.innerText = "Add To Cart"
        
        card.id = attrs[0]
        img.src = attrs[1]
        pname.innerText = attrs[2]
        price.innerText = attrs[3]
        description.innerText = attrs[4]

        card.appendChild(img)
        card.appendChild(pname)
        card.appendChild(price)
        card.appendChild(description)
        card.appendChild(submit)

        document.querySelector('#productList').appendChild(card)
    });
}
//GET CASE
function getCase()
{
    document.querySelector('#productList').innerHTML = ''

    arr.forEach((attrs) => {
        card = document.createElement('div')
        img = document.createElement('img')
        pname = document.createElement('span')
        price = document.createElement('span')
        description = document.createElement('p')
        submit = document.createElement('button')

        card.classList.add('productCard')
        img.classList.add('productImage')
        pname.classList.add('productName')
        price.classList.add('productPrice')
        description.classList.add('productDescription')
        submit.classList.add('productToCart')
        submit.innerText = "Add To Cart"
        
        card.id = attrs[0]
        img.src = attrs[1]
        pname.innerText = attrs[2]
        price.innerText = attrs[3]
        description.innerText = attrs[4]

        card.appendChild(img)
        card.appendChild(pname)
        card.appendChild(price)
        card.appendChild(description)
        card.appendChild(submit)

        document.querySelector('#productList').appendChild(card)
    });
}