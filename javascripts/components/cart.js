import util from '../helpers/util.js'

const cartToDom = () => {
    let domString = ''
    domString += `<h3></h3>`
    util.printToDom('cart-container', domString);
} 

export default { cartToDom }
    