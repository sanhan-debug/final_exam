import React, { useContext } from 'react'
import { FavoritesContext } from '../../Context/favoriteContext'
import Container from 'react-bootstrap/esm/Container'
import {Helmet} from "react-helmet";

function Favorites() {

  let { favorites } = useContext(FavoritesContext)

  function Favorites(data) {

    let favorite = favorites.find(item => item._id == data._id)

    if (favorite) {

      alert("mehsul artiq favortidir")
    }

    else {
      setFavorites([...favorites, data])
    }
  }

  return (
    <>

      <Helmet>
        <title>Favorites</title>
        <meta name='description' content='Your favorites.' />
      </Helmet>
      <Container className='cards-container'>
        <div className="cards">

          {
            favorites.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.image} />
                <p>{product.name}</p>
                <h3>{product.price}</h3>
                <div className="icons">
                  <button ><FaBasketShopping /></button>
                  <button><CiHeart /></button>
                  <button><IoIosInformationCircle /></button>
                </div>
              </div>
            ))
          }
        </div>
      </Container>

    </>
  )
}

export default Favorites
