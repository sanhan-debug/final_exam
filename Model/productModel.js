import {Schema,model} from 'mongoose'

const productSchema = new Schema ({
    name:String,
    price:Number,
    image:String
},{
    versionKey:false
})


export const ProductModel = model("products",productSchema)