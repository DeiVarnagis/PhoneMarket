import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function CartICON(props) {
    const { onClick } = props;
    const [mouseOverCart, setMouseOverCart] = useState(false);
    function handleMouseOverCart() {
        setMouseOverCart(true);
    }
    function handleMouseOutCart() {
        setMouseOverCart(false);
    }
    return (
        <ShoppingCartIcon
            style={
                mouseOverCart
                    ? {
                          fontSize: 50,
                          cursor: 'pointer',
                          color: '#d63447'
                      }
                    : { cursor: 'pointer', fontSize: 40 }
            }
            onMouseOver={handleMouseOverCart}
            onMouseOut={handleMouseOutCart}
            onClick={() => onClick()}
        />
    );
}

export default CartICON;
