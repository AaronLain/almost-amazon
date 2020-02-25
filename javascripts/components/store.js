import util from '../helpers/util.js'
import bookData from '../helpers/data/bookdata.js'
import cart from '../components/cart.js'

const addToCartEvent = () => {
    const book = bookData.getBook();
    cart.addToCart(book);
};

const makeStore = () => {
    let domString = ''
    const book = bookData.getBook();
    domString += `<h4>${book.name}</h4>`
    domString += '<button id="add-to-cart-button"class="btn btn-dark">Add to Cart</button>'
    util.printToDom('store-container', domString);
    document.getElementById('add-to-cart-button').addEventListener('click', addToCartEvent);
};


export default { makeStore };