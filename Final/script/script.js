const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");


function OpacityHandler1(){
    image1.classList.toggle('full-opacity');
};
function OpacityHandler2(){
    image2.classList.toggle('full-opacity');
};
function OpacityHandler3(){
    image3.classList.toggle('full-opacity');
};
function OpacityHandler4(){
    image4.classList.toggle('full-opacity');
};


image1.addEventListener("mouseover",OpacityHandler1);
image2.addEventListener("mouseover",OpacityHandler2);
image3.addEventListener("mouseover",OpacityHandler3);
image4.addEventListener("mouseover",OpacityHandler4);