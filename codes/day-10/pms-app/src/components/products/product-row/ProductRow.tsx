import { Link } from "react-router-dom"
import type { Product } from "../../../models/product"
import './ProductRow.css'
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks"
import { fetchProductSuccessActionCreator } from "../../../redux/productslice"

type ProductRowPropType = {
    product: Product,
    deleteProduct: (productId: number) => void
}
const ProductRow = (props: Readonly<ProductRowPropType>) => {
    const { product: p, deleteProduct: deleteHandler } = props

    const dispatch = useTypedDispatch()
    
    const saveProduct = () => {
        dispatch(fetchProductSuccessActionCreator(p))
    }
    return (
        <tr>
            <td>
                <Link to={`/products/view/${p.productId}`} onClick={saveProduct}>
                    <img src={p.imageUrl} className="img img-responsive img-style" alt="NA" />
                </Link>
            </td>
            <td>{p.productName}</td>
            <td>{p.price}</td>
            <td>{p.starRating}</td>
            <td>
                <button type="button"
                    className="btn btn-danger delete-btn-border-style"
                    onClick={
                        () => {
                            deleteHandler(p.productId)
                        }
                    }>
                    Delete
                </button>
            </td>
        </tr>
    )

}

export default ProductRow