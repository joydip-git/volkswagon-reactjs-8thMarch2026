import { useEffect, useState, type JSX } from "react"
import ProductRow from "../product-row/ProductRow"
import { type Product } from "../../../models/product"
import type { AxiosResponse } from "axios"
import type { ApiResponse } from "../../../models/apiresponse"
import { deleteProduct, getProducts } from "../../../services/productservice"
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks"
import { fetchFailureActionCreator, fetchInitiateActionCreator, fetchSuccessActionCreator } from "../../../redux/productsslice"

const ProductList = () => {

    const [choices, setChoices] = useState(['Name', 'Price', 'Id'])

    const { error, isRequestOver, products } = useTypedSelector(state => state.productsState)
    const dispatch = useTypedDispatch()

    const fetchProducts = async () => {
        //dispatch an action to reset the state to its default values and obtain the same from store
        const initiateAction = fetchInitiateActionCreator()
        dispatch(initiateAction)
        //dispatch({type:'productsSlice/fetch_initiate'})

        try {
            const axiosResponse: AxiosResponse<ApiResponse<Product[]>> = await getProducts()

            const apiResponse = axiosResponse.data
            if (apiResponse.data !== null) {
                //dispatch an action with products array to be assigned to "products" property in the state when you have received data successfully
                const successAction = fetchSuccessActionCreator(apiResponse.data)
                dispatch(successAction)
                // dispatch({type:'productsSlice/fetch_success',payload:apiResponse.data})
            } else {
                //dispatch an action with error message (string) to be assigned to "error" property in the state when you have received error
                const failureAction = fetchFailureActionCreator(apiResponse.message)
                dispatch(failureAction)
                // dispatch({type:'productsSlice/fetch_failure',payload:apiResponse.message})
            }
        } catch (error) {
            //dispatch an action with error message (string) to be assigned to "error" property in the state when you have received error
            const failureAction = fetchFailureActionCreator(error.message)
            dispatch(failureAction)
            // dispatch({type:'productsSlice/fetch_failure',payload:error.message})
        }
    }

    const deleteProductHandler = (id: number) => {
        const initiateAction = fetchInitiateActionCreator()
        dispatch(initiateAction)

        deleteProduct(id)
            .then(
                (axiosResponse) => {
                    const apiResponse = axiosResponse.data
                    if (apiResponse.data !== null) {
                        dispatch(fetchSuccessActionCreator(
                            apiResponse.data))
                    } else {
                        dispatch(fetchFailureActionCreator(
                            apiResponse.message))
                    }
                }
            )
            .catch(
                (error) => {
                    dispatch(fetchFailureActionCreator(
                        error.message))
                }
            )
    }
    useEffect(
        () => {
            const invoke = async () => await fetchProducts()
            invoke()
        },
        []
    )


    const productRows: JSX.Element[] = products.map(
        (p) => {
            return <ProductRow product={p} deleteProduct={deleteProductHandler} key={p.productId} />
        }
    )

    if (!isRequestOver) {
        return <span>Loading...</span>
    } else if (error !== '') {
        return <span>{error}</span>
    } else if (products.length === 0) {
        return <span>No records</span>
    } else {
        return (
            <div>
                <br />
                <h2 className="text-dark">List of Products: </h2>
                <br />
                <div>
                    <label htmlFor="ddlChoices">Sort By: &nbsp;</label>
                    <select id="ddlChoices" className="form-select" defaultValue={'--select--'}>
                        <option disabled>
                            --select--
                        </option>
                        {
                            choices.map(
                                (choice) => {
                                    return <option key={choice}>
                                        {choice}
                                    </option>
                                }
                            )
                        }
                    </select>
                </div>
                <br />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="table-dark">
                        {
                            productRows
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductList