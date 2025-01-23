import React from 'react'
import { Helmet } from "react-helmet";
function NotFound() {
    return (
        <>
            <Helmet>
                <title>Not Found</title>
                <meta name='description' content='Not Found' />
            </Helmet>

            <h1 style={{ textAlign: 'center' }}>NOT FOUND</h1>

            <p style={{ textAlign: 'center' }}> GO BACK<a href="/" style={{ textDecoration: 'none', color: 'black' }}></a></p>
        </>
    )
}

export default NotFound
