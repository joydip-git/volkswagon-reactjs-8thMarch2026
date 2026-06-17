import { useEffect, useState, type JSX } from "react"
import ProductRow from "../product-row/ProductRow"
import { type Product } from "../../../models/product"
import type { AxiosResponse } from "axios"
import type { ApiResponse } from "../../../models/apiresponse"
import { deleteProduct, getProducts } from "../../../services/productservice"

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState('')
    const [isRequestOver, setIsRequestOver] = useState(false)


    const fetchProducts = async () => {
        try {
            const axiosResponse: AxiosResponse<ApiResponse<Product[]>> = await getProducts()

            const apiResponse = axiosResponse.data
            if (apiResponse.data !== null) {
                setProducts(apiResponse.data)
                setError('')
                setIsRequestOver(true)
            } else {
                setProducts([])
                setError('something went wrong: ' + apiResponse.message)
                setIsRequestOver(true)
            }
        } catch (error) {
            setProducts([])
            setError('something went wrong: ' + error.message)
            setIsRequestOver(true)
        }
    }

    const deleteProductHandler = (id: number) => {
        setIsRequestOver(false)
        deleteProduct(id)
            .then(
                (axiosResponse) => {
                    const apiResponse = axiosResponse.data
                    if (apiResponse.data !== null) {
                        setProducts(apiResponse.data)
                        setError('')
                        setIsRequestOver(true)
                    } else {
                        setProducts(products)
                        setError(apiResponse.message)
                        setIsRequestOver(true)
                    }
                }
            )
            .catch(
                (error) => {
                    setProducts(products)
                    setError('something went wrong: ' + error.message)
                    setIsRequestOver(true)
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
            return <ProductRow product={p} deleteProduct={deleteProductHandler} />
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
}

export default ProductList