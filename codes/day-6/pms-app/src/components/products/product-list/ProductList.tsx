import { type JSX } from "react"
import { productRecords } from "../../../data/productrecords"
import ProductRow from "../product-row/ProductRow"

const ProductList = () => {

    const productRows: JSX.Element[] = productRecords.map(
        (p) => {
            return <ProductRow product={p} />
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