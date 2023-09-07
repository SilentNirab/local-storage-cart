function addProduct(){
    const addProduct = document.getElementById('product');
    const products = addProduct.value;
    addProduct.value = '' ;

    const addQuntity = document.getElementById('quntity');
    const quntity = addQuntity.value;
    addQuntity.value = '';

    console.log(products , quntity);
    displayProduct(products, quntity);
    saveProductToLocalStorage(products, quntity);
}

const displayProduct = (products , quntity) => {
const ul = document.getElementById('product-container');
const li = document.createElement("li");
li.innerText = `${products}: ${quntity}`
ul.appendChild(li);
}

const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (products, quntity) => {
    const cart = getStoredShoppingCart();
    cart[products] = quntity;
    const cartStringifided = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringifided);
}

const displayProductToLocalStorage = () =>{
const saveCart = getStoredShoppingCart();
for (const products in saveCart) {
    const quntity = saveCart[products];
    displayProduct(products, quntity);
}
}

displayProductToLocalStorage();