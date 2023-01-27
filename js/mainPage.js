let backgroundCounter = 1
let backgroundDiv = document.querySelector("#gpuBackground")

document.querySelector("#arrowLeft").addEventListener('click', function(){
    if(backgroundCounter == 2 || backgroundCounter == 3){
        backgroundCounter--
    }
    else{
        backgroundCounter = 3
    }
    backgroundDiv.style.backgroundImage = `url('./css/cssImages/GPUbg${backgroundCounter}.png')`
    document.querySelector("#imageCounter").innerHTML = backgroundCounter + "/3"
})

document.querySelector("#arrowRight").addEventListener('click', function(){
    if(backgroundCounter == 1 || backgroundCounter == 2){
        backgroundCounter++
    }
    else{
        backgroundCounter = 1
    }
    backgroundDiv.style.backgroundImage = `url('./css/cssImages/GPUbg${backgroundCounter}.png')`
    document.querySelector("#imageCounter").innerHTML = backgroundCounter + "/3"
})

document.querySelector(".addItemBtn").addEventListener('click', function(){
    console.log("Item added to cart!")
})