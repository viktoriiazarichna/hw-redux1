import React, {useMemo} from 'react';
import styles from './Header.css'
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';




export const Header = () => {
    const {products} = useSelector(store => store.products);
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);

    const history = useHistory();

    const calculatedCartSum = useMemo(() => {
        return products.filter(el => productsInCart.includes(el.id)).
        reduce((acc, el) => acc+=el.price, 0)
    }, [products, productsInCart])
    const calculatedWishlistSum = useMemo (() => {
        return products.filter(el => productsInWishlist.includes(el.id)).
        reduce((acc, el) => acc+=el.price, 0)
    }, [products, productsInWishlist])

    return(
        <header className={'header-style'}>

                <h2 onClick={() => history.push('/')}> HEADER </h2>
                <div className={'header-items'}>
                    <div>Wishlist: {productsInWishlist.length} ($ {calculatedWishlistSum}) </div>
                    <div>Cart: {productsInCart.length} ($ {calculatedCartSum})</div>
                </div>


        </header>

    )
}