import util from '../helpers/util.js'
import bookData from '../helpers/data/bookdata.js'

const makeStore = () => {
    let domString = ''
    const book = bookData.getBook();
    domString += `<h4>${book.name}</h4>`
    domString += '<button id="add-to-cart-button"class="btn btn-dark">Add to Cart</button>'
    util.printToDom('store-container', domString);
    document.getElementById('add-to-cart-button').addEventListener('click', addToCartEvent);
};

const addToCartEvent = () => {
    console.log('you clicked add to cart')
    //let domString = ''
    //domString += `<h3>${book.name} is in the cart</h3>`
    //util.printToDom('cart-container', domString);
};

export default { makeStore };