import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import '../Navbar/navbar.css'

function Navbar() {
    return (
        <>
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png" alt="logo" />
            </div>

            <div className="links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Category</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </div>
            <div className="input">
                <input type="text" placeholder='search products' />
                <button><FaRegHeart /></button>
                <button><FaBasketShopping /></button>
            </div>


        </>
    )
}

export default Navbar
