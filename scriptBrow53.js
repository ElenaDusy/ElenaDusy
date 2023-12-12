const nextButton = document.querySelector(".next")

const backButton = document.querySelector(".back")

const images = document.querySelectorAll(".image")

let imageIndex = 0;

nextButton.onclick = function(){
    images[imageIndex].classList.remove("show");

    if(imageIndex >= images.length - 1){   
        imageIndex = 0;
    }else{
        imageIndex = imageIndex + 1;
    }
    images[imageIndex].classList.add("show");
}

backButton.onclick = function(){
    images[imageIndex].classList.remove("show");

    if(imageIndex <= 0){
        imageIndex = 2;
    }else{
        imageIndex = imageIndex - 1;
    }
    images[imageIndex].classList.add("show");
}













