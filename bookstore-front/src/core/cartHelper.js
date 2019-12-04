import { isAuthenticated } from '../auth/index';
const uniqueCart = () => { return isAuthenticated() && isAuthenticated().user._id };


export const addItem = (item = [], count = 0, next = f => f) => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem(`cart_${uniqueCart()}`)) {
            cart = JSON.parse(localStorage.getItem(`cart_${uniqueCart()}`));
        }
        cart.push({
            ...item,
            count: 1
        });



        cart = Array.from(new Set(cart.map(p => p._id))).map(id => {
            return cart.find(p => p._id === id);
        });

        localStorage.setItem(`cart_${uniqueCart()}`, JSON.stringify(cart));
        next();
    }
};

export const itemTotal = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem(`cart_${uniqueCart()}`)) {
            return JSON.parse(localStorage.getItem(`cart_${uniqueCart()}`)).length;
        }
    }
    return 0;
};

export const getCart = () => {
    if (typeof window !== 'undefined') {

        if (localStorage.getItem(`cart_${uniqueCart()}`)) {
            return JSON.parse(localStorage.getItem(`cart_${uniqueCart()}`));
        }

    }
    return [];
};

export const updateItem = (productId, count) => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem(`cart_${uniqueCart()}`)) {
            cart = JSON.parse(localStorage.getItem(`cart_${uniqueCart()}`));
        }

        cart.map((product, i) => {
            if (product._id === productId) {
                cart[i].count = count;
            }
        });

        localStorage.setItem(`cart_${uniqueCart()}`, JSON.stringify(cart));
    }
};

export const removeItem = productId => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem(`cart_${uniqueCart()}`)) {
            cart = JSON.parse(localStorage.getItem(`cart_${uniqueCart()}`));
        }

        cart.map((product, i) => {
            if (product._id === productId) {
                cart.splice(i, 1);
            }
        });

        localStorage.setItem(`cart_${uniqueCart()}`, JSON.stringify(cart));
    }
    return cart;
};

export const emptyCart = next => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(`cart_${uniqueCart()}`);
        next();
    }
};