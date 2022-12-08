const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");
const Albums = document.querySelector('section')
const cartItems = document.querySelector('aside');
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
image1.addEventListener("mouseout",OpacityHandler1);
image2.addEventListener("mouseout",OpacityHandler2);
image3.addEventListener("mouseout",OpacityHandler3);
image4.addEventListener("mouseout",OpacityHandler4);

let albums = [{ name: "Album 1", price: 12.99, addedToCart: false },
{ name: "Album 2", price: 14.99, addedToCart: false}, { name: "Album 3", price: 9.99, addedToCart: false }, { name: "Album 4", price: 19.99, addedToCart: false }];

function appendListItem() {
    let list = document.createElement('ul');
    cartItems.appendChild(list);
    let listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.textContent = `${targetName}  `;
}

function clickHandler(event){
    // console.log("clicked" , event.target)
    targetName = event.target.alt;
    albumExists = false;
    for (let albumName of albums ){
        if (albumName.name === targetName && albumName.addedToCart === true){
        alert(`This Album Already exists in the Cart!`)
        albumExists = true;
    }
        else if (albumExists === false);{
            albumName.addedToCart = true;
            let list = document.createElement('ul');
            cartItems.appendChild(list);
            let listItem = document.createElement("li");
            list.appendChild(listItem);
            listItem.textContent = `${targetName}  ${albumName.price} `;
            break;
        }    
    }

};

Albums.addEventListener("click",clickHandler,true);