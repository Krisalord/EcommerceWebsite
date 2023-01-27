const productListInCart = [
    {
        id: "1", prName: "MSI RTX 3070", description: "This is an RTX 3070 GPU from MSI", price: 750, image: "images/gpuSpecs1.png"
    },
    {
        id: "2", prName: "MSI RTX 3050", description: "This is an RTX 3050 GPU from MSI", price: 410, image: "images/gpuSpecs2.png"
    },
    {
        id: "3", prName: "MSI RTX 1060", description: "This is an RTX 1060 GPU from MSI", price: 299, image: "images/gpuSpecs3.png"
    }
]

let amountOfProducts = productListInCart.length
console.log(amountOfProducts)

window.addEventListener('load', function(){
    let sum = 0
    let delivery = 0
    let itemAmount = 0
    for(let i = 0; i < amountOfProducts; i++){
        itemAmount++

        let mainDiv = document.createElement('div')
        mainDiv.setAttribute('class', 'checkOutItem')
        let inputImage = document.createElement('input')
        inputImage.setAttribute('type', 'image')
        inputImage.setAttribute('src', productListInCart[i].image)
        let divText = document.createElement('div')
        divText.setAttribute('class', 'checkOutItemText')
        let header2 = document.createElement('h2')
        header2.innerText = productListInCart[i].prName
        divText.appendChild(header2)
        let span1 = document.createElement('span')
        span1.innerText = productListInCart[i].description
        divText.appendChild(span1)
        let span2 = document.createElement('span')
        sum += productListInCart[i].price
        span2.innerText = productListInCart[i].price + " €"
        divText.appendChild(span2)
        let Ximg = document.createElement('input')
        Ximg.setAttribute('type', 'image')
        Ximg.setAttribute('src', 'images/X.png')
        Ximg.addEventListener('click', function(){
            this.parentNode.remove()
            itemAmount--
            let priceSpan = this.parentNode.querySelector(".checkOutItemText span:last-of-type")
            let price = priceSpan.textContent
            console.log(price)
            let subtract = parseInt(price.split(" ")[0])
            sum = sum - subtract
            document.querySelector("#summPrice").innerText = sum + " €"
            document.querySelector("#deliveryPrice").innerText = itemAmount * 10 + " €"
            document.querySelector("#taxPrice").innerText = sum * 0.25 + " €"
            document.querySelector("#finalPrice").innerText = sum + (itemAmount * 10) + (sum * 0.25) + " €"
        })
        mainDiv.appendChild(inputImage)
        mainDiv.appendChild(divText)
        mainDiv.appendChild(Ximg)

        document.querySelector('#checkOutItems').appendChild(mainDiv)

        document.querySelector("#summPrice").innerText = sum + " €"
        document.querySelector("#deliveryPrice").innerText = itemAmount * 10 + " €"
        document.querySelector("#taxPrice").innerText = sum * 0.25 + " €"
        document.querySelector("#finalPrice").innerText = sum + (itemAmount * 10) + (sum * 0.25) + " €"
    }


})

document.querySelector("#cancelOrder").addEventListener('click', function(){
    document.querySelector("#checkOutItems").innerHTML = ""
    var priceSpans = document.querySelectorAll(".priceSpan")
    for (var i = 0; i < priceSpans.length; i++) {
        priceSpans[i].innerText = "0€"
    }
})