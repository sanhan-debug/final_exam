import { ProductModel } from "../Model/productModel.js";


let addProduct = async (req, res) => {
    try {
        let newProduct = await ProductModel.create(req.body)
        res.send(newProduct).status(200)
    } catch (err) {
        console.error("addProduct Error")
        res.send("add prodcut error").status(500)
    }
}


let getAllProduct = async (req, res) => {
    try {
        let product = await ProductModel.find()
        res.send(product).status(200)
    } catch (err) {
        console.error("all product Error")
        res.send("all prodcut error").status(500)
    }
}


let deleteProduct = async (req, res) => {
    try {
     await ProductModel.findByIdAndDelete(req.params.id)
        res.send("deleted element").status(200)
    } catch (err) {
        console.error("delete Error")
        res.send("delete prodcut error").status(500)
    }
}


let getByIdPro = async (req, res) => {
    try {
        let product = await ProductModel.findById(req.params.id)
        res.send(product).status(200)
    } catch (err) {
        console.error("getbyid Error")
        res.send("getbyid prodcut error").status(500)
    }
}


export {addProduct,deleteProduct,getAllProduct,getByIdPro}