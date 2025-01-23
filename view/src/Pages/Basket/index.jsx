import React, { useContext } from 'react'
import { BasketContext } from '../../Context/basketContext'
import {Helmet} from "react-helmet";

function Basket() {

  let { basket } = useContext(BasketContext)

  return (

    <>
      <Helmet>
        <title>Basket</title>
        <meta name='description' content='Basket Page' />
      </Helmet>

      <table class="table table-bordered table-light table-hover">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>

          </tr>
        </thead>
        {



          basket.map((data1) => (
            <tbody key={data1.id}>
              <tr>
                <th scope="row"><img src={data1.image} alt="" style={{ width: '100px' }} /></th>
                <td>{data1.name}</td>
                <td>{data1.price}</td>
                <td className=''>
                  <button onClick={() => deletedata1(data1._id)} className='btn btn-danger'><FaTrash /></button>
                </td>
              </tr>
            </tbody>
          ))
        }
      </table>
    </>
  )
}

export default Basket
