// import { useNavigate, useParams } from "react-router-dom"
// import { getProduct } from "../../../services/productservice"
// import { useEffect } from "react"
// import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks"
// import { fetchProductFailureActionCreator, fetchProductInitiateActionCreator, fetchProductSuccessActionCreator } from "../../../redux/productslice"

import { useNavigate } from "react-router-dom"
import { useTypedSelector } from "../../../redux/typedhooks"

const ProductDetail = () => {
    //const params = useParams()
    //const id = Number(params['id'])

    //useNavigate() hook -> Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.
    const navigate = useNavigate()

    const { product } = useTypedSelector(state => state.productState)
    //const { product, isRequestOver, error } = useTypedSelector(state => state.productState)
    //const dispatch = useTypedDispatch()

    // const fetchProduct = async () => {
    //     const initiateAction = fetchProductInitiateActionCreator()
    //     dispatch(initiateAction)

    //     try {
    //         const axiosResponse = await getProduct(id)
    //         const apiResponse = axiosResponse.data
    //         if (apiResponse.data !== null) {
    //             const successAction = fetchProductSuccessActionCreator(apiResponse.data)
    //             dispatch(successAction)
    //         } else {
    //             const errorAction = fetchProductFailureActionCreator(apiResponse.message)
    //             dispatch(errorAction)
    //         }
    //     } catch (error) {
    //         const errorAction = fetchProductFailureActionCreator(error.message)
    //         dispatch(errorAction)
    //     }
    // }

    // useEffect(
    //     () => {
    //         const invoke = async () => await fetchProduct()
    //         invoke()
    //     },
    //     [id]
    // )
    // if (!isRequestOver)
    //     return <span>Loading...</span>
    // else if (error !== '')
    //     return <span>{error}</span>
    // else if (product === undefined)
    //     return <span>no record</span>
    // else
    //     return (
    //         <div>
    //             <span>Details of: &nbsp;{product.productName}</span>
    //             <br />
    //             <br />
    //             <button type="button" className="btn btn-primary" onClick={() => navigate(`/products/edit/${product.productId}`)}>
    //                 Edit
    //             </button>
    //         </div>
    //     )
    if (product === undefined)
        return <span>no record</span>
    else
        return (
            <div>
                <span>Details of: &nbsp;{product.productName}</span>
                <br />
                <table>
                    <tr>
                        <td>Id:&nbsp;</td>
                        <td>{product.productId}</td>
                    </tr>
                    <tr>
                        <td>Name:&nbsp;</td>
                        <td>{product.productName}</td>
                    </tr>
                    <tr>
                        <td>Desc:&nbsp;</td>
                        <td>{product.description}</td>
                    </tr>
                    <tr>
                        <td>Code:&nbsp;</td>
                        <td>{product.productCode}</td>
                    </tr>
                    <tr>
                        <td>Released On:&nbsp;</td>
                        <td>{product.releaseDate}</td>
                    </tr>
                    <tr>
                        <td>Price:&nbsp;</td>
                        <td>{product.price}</td>
                    </tr>
                    <tr>
                        <td>Rating:&nbsp;</td>
                        <td>{product.starRating}</td>
                    </tr>
                    <tr>
                        <td>Id:&nbsp;</td>
                        <td>
                            <img src={product.imageUrl} className="img img-responsive img-style" alt="NA" />
                        </td>
                    </tr>
                </table>
                <br />
                <button type="button" className="btn btn-primary" onClick={() => navigate(`/products`)}>
                    Done
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-primary" onClick={() => navigate(`/products/edit/${product.productId}`)}>
                    Edit
                </button>
            </div>
        )
}

export default ProductDetail