import Container from 'react-bootstrap/Container';
import '../Products/products.css'
import { FaBasketShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci"
import { IoIosInformationCircle } from "react-icons/io";
import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from '../../Context/favoriteContext';
import { BasketContext } from '../../Context/basketContext';
import { Link } from 'react-router';


function Products() {

    let [products, setProducts] = useState([])
    let { favorites } = useContext(FavoritesContext)
    let { basket } = useContext(BasketContext)

    function getData() {
        axios.get('http://localhost:3000/products')
            .then((res) => setProducts(res.data))
    }

    function addFavorites(product) {

        let favorite = localStorage.setItem('favorites', product)

        if (favorite) {

            alert("mehsul artiq favortidir")
        }

        else {

            setFavorites([...favorites, products])
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <Container className='cards-container'>
                <div className="cards">

                    {
                        products.map((product) => (
                            <div className="card" key={product.id}>
                                <img src={product.image} />
                                <p>{product.name}</p>
                                <h3>{product.price}</h3>
                                <div className="icons">
                                    <button ><FaBasketShopping /></button>
                                    <button onClick={() => addFavorites(product._id)}><CiHeart /></button>
                                    <button><Link to={`/details/${product._id}`}><IoIosInformationCircle /></Link></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>

        </>
    )
}

export default Products
