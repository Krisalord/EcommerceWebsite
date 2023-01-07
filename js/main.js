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
    let arr = ["1", "https://ibb.co/vB83PzT", "Nvidia GTX950", "299€", "This is a Nvidia GPU"];

    function getGpu()
    {
        let productId = arr[0]
        // let productImage = arr[1]
        // let productName = arr[2]
        // let productPrice = arr[3]
        // let productDescription = arr[4]
        const card = document.createElement('div');
        card.setAttribute('class', 'productCard')
        card.setAttribute('id', productId)
        document.querySelector('#productList').appendChild(card)

        let imageURL = arr[1]
        let image = document.createElement('img')
        image.setAttribute('class', 'productImage')
        image.setAttribute('src', imageURL)
        documet.querySelector('#' + productId).appendChild(image)
    }

}

// var product = products[index];
        
// var productID = product.id;
// var productName = product.name;
// var productImageURL = product.imageURL;
// var productDescription = product.description;
// var productPrice = product.price;

// var card = `
//     <div class="col-sm" id=${productID}>
//         <div class="card bg-dark" style="width: 18rem;">
//             <img class="card-img-top" src=${productImageURL} alt="Product Image">
//             <div class="card-body text-white">
//                 <h5 class="card-title">${productName}</h5>
//                 <p class="card-text">${productDescription}</p>
//                 <br />
//                 <p><strong>Price: $</strong> ${productPrice}</p>
//             </div>
//             <div class="card-footer bg-transparent text-center row">
//                 <button type="button" class="btn btn-outline-warning btn-sm col" id="buy-btn">Buy Product</button>
//                 <button type="button" class="btn btn-outline-warning btn-sm col offset-md-1" id="edit-btn">Edit Product</button>
//             </div>
//         </div>
//     </div>
// `;