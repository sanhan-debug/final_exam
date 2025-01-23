import React from 'react'
import Container from 'react-bootstrap/Container';
function Images() {
    return (
        <>
            <Container>
                <h1 style={{ textAlign: 'center', margin: '25px' }}>Shop By  Category</h1>
                <div className="images" style={{ display: 'flex', justifyContent: 'center', margin: '50px', gap: '20px', flexWrap: 'wrap' }}>
                    <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg" alt="" style={{ width: '350px' }} />
                    <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg" alt="" style={{ width: '350px' }} />
                    <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg" alt="" style={{ width: '350px' }} />
                </div>

            </Container>
        </>
    )
}

export default Images
