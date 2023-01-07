// document.getElementById('#GPU').addEventListener('click', addGpu)

// addGpu()
// {
//     document.querySelector('#productList').innerHTML = ''
//     let productArray = []
//     productArray.at(0) = 0
// }


window.onload=function()
{
    //add eventlsitener to "account" button, move to "account.html" page when clicked
    document.querySelector('#account').addEventListener('click', moveToAccount)
    function moveToAccount()
    {
        window.open('addProduct.html', '_self')
    }
    //add eventlistener to "gpu" button, clear the div in DOM that contais all products, print all GPU's
    document.querySelector('#GPU').addEventListener('click', getGpu)
    //array of data that is needed for one product
    let arr = [["1", "images/GPU.png", "Nvidia GTX950", "299€", "This is a Nvidia GPU"], ["1", "images/CPU.png", "Nvidia GTX950", "299€", "This is a Nvidia GPU"], ["1", "images/RAM.png", "Nvidia GTX950", "299€", "This is a Nvidia GPU"]]



    //CLEAR PRODUCT LIST PAGE
    function clearList(){
        const list = document.getElementById("productList")
        list.innerHTML = ''
        alert("Hello! I am an alert box!!");
    }
    //GET GPUS
    function getGpu()
    {
        alert("Hello! I am an alert box!!");
        clearList()
        arr.forEach((attrs) => {
            
            card = document.createElement('div')
            img = document.createElement('img')
            pname = document.createElement('span')
            price = document.createElement('span')
            description = document.createElement('p')
    
            card.classList.add('productCard')
            img.classList.add('productImage')
            pname.classList.add('productName')
            price.classList.add('productPrice')
            description.classList.add('productDescription')
            
            card.id = attrs[0]
            img.src = attrs[1]
            pname.innerText = attrs[2]
            price.innerText = attrs[3]
            description.innerText = attrs[4]
    
            card.appendChild(img)
            card.appendChild(pname)
            card.appendChild(price)
            card.appendChild(description)
    
            document.querySelector('#productList').appendChild(card)
        });
    }
    //GET CPUS
    function getGpu()
    {
        arr.forEach((attrs) => {
            
            card = document.createElement('div')
            img = document.createElement('img')
            pname = document.createElement('span')
            price = document.createElement('span')
            description = document.createElement('p')
    
            card.classList.add('productCard')
            img.classList.add('productImage')
            pname.classList.add('productName')
            price.classList.add('productPrice')
            description.classList.add('productDescription')
            
            card.id = attrs[0]
            img.src = attrs[1]
            pname.innerText = attrs[2]
            price.innerText = attrs[3]
            description.innerText = attrs[4]
    
            card.appendChild(img)
            card.appendChild(pname)
            card.appendChild(price)
            card.appendChild(description)
    
            document.querySelector('#productList').appendChild(card)
        });
    }
}