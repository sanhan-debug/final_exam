import {Router} from 'express'
import { addProduct, deleteProduct, getAllProduct, getByIdPro } from '../Controllers/productController.js'


export const productRouter = new Router()

productRouter.get("/products",getAllProduct)
productRouter.get("/products/:id",getByIdPro)
productRouter.post("/products",addProduct)
productRouter.delete("/products/:id",deleteProduct)
