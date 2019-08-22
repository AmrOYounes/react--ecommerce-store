import React from 'react';
import  {connect} from 'react-redux';
import { toggleCartHidden} from '../../redux/cart/cart.action';
import {slectCartItemsCount} from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon=({toggleCartHidden, itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count"> {itemCount}</span>
    
    </div>
)

const mapDispatchToProps=dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});
const mapStateToProps=(state)=>({
    itemCount:  slectCartItemsCount(state)
})

export default  connect(mapStateToProps,mapDispatchToProps)(CartIcon);
