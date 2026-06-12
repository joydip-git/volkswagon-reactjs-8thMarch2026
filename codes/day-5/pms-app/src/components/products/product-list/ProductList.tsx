import { productRecords } from "../../../data/productrecords"

const ProductList = () => {

    // const productRows = productRecords.map(
    //     (p) => {
    //         return (
    //             <tr>
    //                 <td>
    //                     <img src={p.imageUrl} alt="NA" style={{ margin: '2px', width: '80px' }} />
    //                 </td>
    //                 <td>{p.productName}</td>
    //                 <td>{p.price}</td>
    //                 <td>{p.starRating}</td>
    //             </tr>
    //         )
    //     }
    // )

    const productRows = productRecords.map(
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