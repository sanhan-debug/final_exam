import React, { useContext } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import { IoMenu } from "react-icons/io5";
import '../Navbar/navbar.css'
import { FavoritesContext } from '../../Context/favoriteContext';
import { BasketContext } from '../../Context/basketContext';
import { Link } from 'react-router';

function Navbar() {

    let { favorites } = useContext(FavoritesContext)
    let { basket } = useContext(BasketContext)


    return (
        <>
            <Container>
                <div className="navbar">
                    <div className="logo">
                        <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png" alt="logo" />
                    </div>

                    <div className="links">
                        <IoMenu className='menu-icon' />
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/addpage'}>Add Page</Link></li>
                            <li><Link to={'/'}>Products</Link></li>
                            <li><Link to={'/'}>About</Link></li>
                        </ul>
                    </div>
                    <div className="input">
                        <input type="text" placeholder='search products' />
                        <button className='icon' ><Link to={'/favorites'}> <FaRegHeart /></Link>{favorites.length}</button>
                        <button className='icon'><Link to={'/basket'}><FaBasketShopping /></Link>{basket.length}</button>
                    </div>
                </div>


            </Container>

        </>
    )
}

export default Navbar
