import { useState, type JSX } from "react"
import { productRecords } from "../../../data/productrecords"
import ProductRow from "../product-row/ProductRow"
import { type Product } from "../../../models/product"

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>(productRecords)
    const deleteProductHandler = (id: number) => {
        const copy = [...products]
        const index = copy.findIndex(
            (p) => p.productId === id
        )
        copy.splice(index, 1)
        setProducts(copy)

        // setProducts(
        //     (previousState) => {
        //         const copy = [...previousState]
        //         const index = copy.findIndex(
        //             (p) => p.productId === id
        //         )
        //         copy.splice(index, 1)
        //         return copy
        //     }
        // )

        // const copy = [...products]
        // const filteredProducts = copy.filter(
        //     (p) => p.productId !== id
        // )
        // setProducts(filteredProducts)
    }

    const productRows: JSX.Element[] = products.map(
        (p) => {
            return <ProductRow product={p} deleteProduct={deleteProductHandler} />
        }
    )

    return (
        <div>
            <h2>List of Products</h2>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productRows
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList