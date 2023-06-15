import cart from './components/cart.js';
import loader from './components/loader.js';
import products from './components/products.js';
import showCart from './components/showCart.js';
import showMenu from './components/showMenu.js';
import getProducts from './helpers/getProducts.js';

/* UI Elements */

/* Hidden loader */
loader()

/* Show Menu */
showMenu()

/* Show Cart */
showCart()

/* End UI Elements */

/* Products */
const { db, printProducts } = products(await getProducts())

/* Cart */
cart(db, printProducts)

/* Dark mode */

const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

    bdark.addEventListener('click', e => {
      body.classList.toggle('darkmode');
    });



/*  BOTON DESCUENTO */    

const openBoton = document.querySelector('.boton-descuento');
const modalDescuento = document.querySelector('.modal-cupon');
const modalClose = document.querySelector('.modal-close');

openBoton.addEventListener('click', (e) => {
    e.preventDefault();
    modalDescuento.classList.add('modal-descuento--show');

});

modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modalDescuento.classList.remove('modal-descuento--show');
});