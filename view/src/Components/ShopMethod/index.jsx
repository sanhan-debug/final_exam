import React from 'react'
import '../ShopMethod/shop.css'
import Container from 'react-bootstrap/Container';
import { FaBox } from "react-icons/fa";

function ShopMethod() {
    return (
        <>
            <Container>

                <div className="methods">
                    <div className="method">
                        <FaBox className='icon' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo enim eveniet at qui temporibus.</p>
                    </div>
                    <div className="method">
                        <FaBox className='icon' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo enim eveniet at qui temporibus.</p>
                    </div>
                    <div className="method">
                        <FaBox className='icon' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo enim eveniet at qui temporibus.</p>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default ShopMethod
