import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import "./addproduct.css"
import {Helmet} from "react-helmet";



function Addproduct() {

    let [datas1, setdatas1] = useState([])

    function GetDatas1() {

        axios.get("http://localhost:3000/products")
            .then(res => setdatas1(res.data))
    }

    function deletedata1(id) {
        axios.delete(`http://localhost:3000/products/${id}`)
    }

    useEffect(() => {

        GetDatas1()
    }, [datas1])


    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'min')
            .max(50, 'max!')
            .required('Required'),
        price: Yup.number()
            .integer("integer")
            .required('Required'),
        image: Yup.string().url("URL")
            .required('Required'),
    });
    return (
        <>

            <Helmet>
                <title>addpage</title>
                <meta name='description' content='Your addpage.' />
            </Helmet>

            <div className="addproduct">

                <h1>Add Product</h1>
                <Formik
                    initialValues={{
                        name: '',
                        price: 0,
                        image: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        axios.post("http://localhost:3000/products", values)
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="name">Name</label>
                            <Field name="name" />
                            {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}
                            <label htmlFor="price">Price</label>
                            <Field name="price" type="number" />
                            {errors.price && touched.price ? <div>{errors.price}</div> : null}
                            <label htmlFor="image">Image</label>
                            <Field name="image" />
                            {errors.image && touched.image ? (
                                <div>{errors.image}</div>
                            ) : null}
                            <button className='btn btn-primary' type="submit">Add</button>
                        </Form>
                    )}
                </Formik>
            </div>

            <table class="table table-bordered table-light table-hover">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>

                    </tr>
                </thead>
                {

                    datas1.map((data1) => (
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

export default Addproduct