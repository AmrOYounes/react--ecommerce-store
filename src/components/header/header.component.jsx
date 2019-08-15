import React from 'react';
import './header.styles.scss';
import{connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
const Header=({currentUser,hidden})=>{
    console.log(currentUser);
    
    return (
    <div className="header">
    <Link to="/" className="logo-container">
    <Logo className="logo"/>
    </Link>
    <div className="options">
     <Link to="/shop" className="option"> SHOP</Link>
     <Link to="/shop" className="option"> CONTACT</Link>
   {
    currentUser?(
        <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
    )
        :
        (
            <Link className="option" to="/signin">SIGN IN</Link>
        )
     
   }
   <CartIcon/>
    </div>
    {
        hidden? null: <CartDropdown/>
    }
 
    </div>
    );
}

const mapStateToProps= ({user:{currentUser},cart:{hidden}})=>({
    currentUser:currentUser,
    hidden:hidden
})

export default connect(mapStateToProps)(Header);