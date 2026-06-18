import type { Product } from "../../../models/product"
import './ProductRow.css'

type ProductRowPropType = {
    product: Product,
    deleteProduct: (productId: number) => void
}
const ProductRow = (props: Readonly<ProductRowPropType>) => {
    const { product: p, deleteProduct: deleteHandler } = props
    return (
        <tr>
            <td>
                <img src={p.imageUrl} className="img img-responsive img-style" alt="NA"  />
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