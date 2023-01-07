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
    // document.querySelector('#GPU').addEventListener('click', getGpu)
    // function getGpu()
    // {
    //     array of data that is needed for one product
    //     let arr = ["images/account.png", "Name", "Price", "Description"];
    // }

    $("#productList").ready(async function() {
        var cards = await getAllProducts();
    
        for (const index in cards) {
            var card = cards[index];
            $("#productList").append(card);
        }
    });
    //https://ibb.co/vB83PzT
    //ADD PRODUCT FROM ADDPRODUCT HTML PAGE
    $("#productForm").submit(async function(form) {
        form.preventDefault();

        const name = $("#productNameInput").val();
        const url = $("#productImageURLInput").val();
        const description = $("#productDescriptionInput").val();
        const price = $("#productPriceInput").val();

        const product = {
            "name": name,
            "imageURL": url,
            "description": description,
            "price": price
        };

        var result = await createNewProduct(product);

        if (result) {
            alert("Product has been added!");
            window.location.href = "index.html";
        } else {
            alert("Failed to add product, sorry");
        }
    });
}