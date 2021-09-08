import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);

    //  Reduce turns an array into a single value. Starts w 0 here bec u typed that, then 
    //  for each item, performs the return on curNumber. This is reg JS, not React.
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
};

export default HeaderCartButton;