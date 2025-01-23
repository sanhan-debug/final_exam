import express from 'express'
import dotenv from 'dotenv'
import { connect } from 'mongoose'
import { productRouter } from './Routes/productRouter.js'
import cors from 'cors'


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/", productRouter)




app.listen(3000, () => {
    console.log("server is active")

    connect("mongodb+srv://sanhan:sanhan2006@exam-cluster.yei8u.mongodb.net/?retryWrites=true&w=majority&appName=exam-cluster").then(() => console.log('cennected db'))
})

