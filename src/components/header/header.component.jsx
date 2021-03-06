import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fsAuth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from 'reselect'

import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contactus'>CONTACT US</Link>
            {currentUser ? <div className="option" onClick={() => fsAuth.signOut()}>SIGN OUT</div> :
                <Link className="option" to='/signin'>SIGN IN</Link>}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
});

export default connect(mapStateToProps)(Header);