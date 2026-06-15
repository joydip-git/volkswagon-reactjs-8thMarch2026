import type { Product } from "../../../models/product"

type ProductRowPropType = {
    product: Product,
    deleteProduct: (productId: number) => void
}
const ProductRow = (props: Readonly<ProductRowPropType>) => {
    const { product: p, deleteProduct: deleteHandler } = props
    return (
        <tr>
            <td>
                <img src={p.imageUrl} alt="NA" style={{ margin: '2px', width: '80px' }} />
            </td>
            <td>{p.productName}</td>
            <td>{p.price}</td>
            <td>{p.starRating}</td>
            <td>
                <button type="button"
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