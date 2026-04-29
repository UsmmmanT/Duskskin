import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getProductPrice, getProductStartingPrice } from "../utils/productPricing";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = 'Rs.';
    const delivery_fee = 100;
    const backend_url = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000').replace(/\/$/, '');
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : {};
    });
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('')

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);

        if (!size) {
            toast.error('Please select a size before adding to cart');
            return;
        }

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;

            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;

        }
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backend_url + '/api/cart/add', { itemId, size }, { headers: { token } })


            } catch (error) {
                console.log(error)
                toast.error(error.message)

            }
        }
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;

        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backend_url + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let count = 0;

        for (let itemId in cartItems) {
            for (let item in cartItems[itemId]) {
                try {
                    if (cartItems[itemId][item] > 0) {
                        count += cartItems[itemId][item];
                    }
                } catch (e) {

                }
            }
        }
        return count;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (let item in cartItems) {
            for (let size in cartItems[item]) {
                {
                    const productData = products.find((product) => product._id === item);
                    if (productData) {
                        totalAmount = totalAmount + (getProductPrice(productData, size) * cartItems[item][size])
                    }
                }
            }

        }
        return totalAmount;
    }

    const getProducts = async () => {
        try {
            const res = await axios.get(backend_url + '/api/product/list')

            if (res.data.success) {
                setProducts(res.data.products);

            }
            else {
                toast.error(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);

        }

    }
    useEffect(() => {
        getProducts();
    }, [])

    const getUserCart = async (token) => {
        try {
            const res = await axios.post(backend_url + '/api/cart/get', {}, { headers: { token } })
            if (res.data.success) {
                setCartItems(res.data.cartData)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            const savedToken = localStorage.getItem('token')
            setToken(savedToken)
            getUserCart(savedToken)
        }

    }, [])

    const value = {
        currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate, backend_url, products, setToken, token, setCartItems, getProductPrice, getProductStartingPrice
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}