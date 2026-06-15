import type { Product } from "../../../models/product"

type ProductRowPropType = {
    product: Product
}
const ProductRow = (props: Readonly<ProductRowPropType>) => {
    const { product: p } = props
    return (
        <tr>
            <td>
                <img src={p.imageUrl} alt="NA" style={{ margin: '2px', width: '80px' }} />
            </td>
            <td>{p.productName}</td>
            <td>{p.price}</td>
            <td>{p.starRating}</td>
            <td>
                <button type="button">Delete</button>
            </td>
        </tr>
    )

}

export default ProductRow