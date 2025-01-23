import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import '../News/news.css'

function News() {
    return (
        <>

            <Container className='news-container'>
                <div className="news">
                    <div className="img">
                        <img src="https://preview.colorlib.com/theme/estore/assets/img/collection/latest-man.png.webp" alt="" />
                    </div>
                    <div className="texts">
                        <h1>Get Our <br />
                            Latest Offers News
                        </h1>
                        <h3> Subscribe news latter</h3>
                        <div className="input1">
                            <input type="text" />
                            <button><a href="#">SHOP NOW</a></button>
                        </div>

                        <div>
                            <h1></h1>
                        </div>
                    </div>
                </div>

            </Container>

        </>
    )
}

export default News
