
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { FavoritesContext } from '../../Context/favoriteContext'
import { BasketContext } from '../../Context/basketContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBasketballBall, FaHeart } from 'react-icons/fa';
import {Helmet} from "react-helmet";
import axios from 'axios';
// import "./details.css"

function Details() {

  let { id } = useParams()

  let navigate = useNavigate()

  let [data, setdata] = useState({})
  let { favorites, setFavorites } = useContext(FavoritesContext)
  let { basket, setBasket } = useContext(BasketContext)

  function GetData(id) {

    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => setdata(res.data))
  }

  function Favorites(data) {

    let favorite = favorites.find(item => item._id == data._id)

    if (favorite) {

      alert("mehsul artiq favortidir")
    }

    else {

      setFavorites([...favorites, data])
    }
  }

  function Basket(data) {

    let newbasket = basket.find(item => item._id == data._id)

    if (newbasket) {

      basket.count++

      setBasket([...basket])
    }

    else {

      setBasket([...basket, { ...data, count: 1 }])
    }
  }

  useEffect(() => {

    GetData(id)
  }, [id])


  return (
    <>

      <Helmet>
        <title>details</title>
        <meta name='description' content='Your details.' />
      </Helmet>

      {
        data.map((data) => (
          <div className="detailspage">
            <h2 >Details Product</h2>
            <div className="detailscard">
              <div className="col">
                <div className="card">
                  <img src={data.image} className="card-img-top" alt="..." />
                  <div >
                    <h3>Name:{data.name}</h3>
                    <h4>Price:{data.price} $</h4>
                  </div>
                  <div className="detailsbtn">
                    <button onClick={() => Favorites(data)} className='btn btn-success' ><FaHeart /></button>
                    <button onClick={() => Basket(data)} className='btn btn-danger'><FaBasketballBall /></button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))
      }


    </>
  )
}

export default Details