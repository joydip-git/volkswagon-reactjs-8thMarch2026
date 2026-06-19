import { useNavigate, useParams } from "react-router-dom"
import { getProduct } from "../../../services/productservice"
import { useEffect } from "react"
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks"
import { fetchProductFailureActionCreator, fetchProductInitiateActionCreator, fetchProductSuccessActionCreator } from "../../../redux/productslice"

const ProductDetail = () => {
    const params = useParams()
    const id = Number(params['id'])

    //useNavigate() hook -> Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.
    const navigate = useNavigate()

    const { product, isRequestOver, error } = useTypedSelector(state => state.productState)
    const dispatch = useTypedDispatch()

    const fetchProduct = async () => {
        const initiateAction = fetchProductInitiateActionCreator()
        dispatch(initiateAction)

        try {
            const axiosResponse = await getProduct(id)
            const apiResponse = axiosResponse.data
            if (apiResponse.data !== null) {
                const successAction = fetchProductSuccessActionCreator(apiResponse.data)
                dispatch(successAction)
            } else {
                const errorAction = fetchProductFailureActionCreator(apiResponse.message)
                dispatch(errorAction)
            }
        } catch (error) {
            const errorAction = fetchProductFailureActionCreator(error.message)
            dispatch(errorAction)
        }
    }

    useEffect(
        () => {
            const invoke = async () => await fetchProduct()
            invoke()
        },
        [id]
    )
    if (!isRequestOver)
        return <span>Loading...</span>
    else if (error !== '')
        return <span>{error}</span>
    else if (product === undefined)
        return <span>no record</span>
    else
        return (
            <div>
                <span>Details of: &nbsp;{product.productName}</span>
                <br />
                <br />
                <button type="button" className="btn btn-primary" onClick={() => navigate(`/products/edit/${product.productId}`)}>
                    Edit
                </button>
            </div>
        )
}

export default ProductDetail