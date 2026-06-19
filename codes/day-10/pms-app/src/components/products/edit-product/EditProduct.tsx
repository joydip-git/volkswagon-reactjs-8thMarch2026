import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks"
import type { Product } from "../../../models/product"
import { updateProduct } from "../../../services/productservice"
import { fetchProductSuccessActionCreator } from "../../../redux/productslice"
import { useNavigate } from "react-router-dom"

const EditProduct = () => {
  const { product } = useTypedSelector(state => state.productState)
  const navigate = useNavigate()

  const dispatch = useTypedDispatch()

  const updateProductHandler = (p: Product) => {
    dispatch(fetchProductSuccessActionCreator(p))
  }

  const updateProductData = async () => {
    if (product) {
      if (window.confirm('update product?')) {
        try {

          const axiosReponse = await updateProduct(product.productId, product)
          const apiResponse = axiosReponse.data
          if (apiResponse.data !== null) {
            window.alert('product updated successfully')
            navigate('/products')
          } else {
            window.alert('product could not be updated: ' + apiResponse.message)
          }
        } catch (error) {
          window.alert('product could not be updated: ' + error.message)
        }
      }
    }
  }

  if (product === undefined)
    return <div>No record</div>
  else
    return (
      <form>
        <span>Details of: &nbsp;{product.productName}</span>
        <br />
        <table>
          <tr>
            <td>Id:&nbsp;</td>
            <td>
              <input type="text" value={product.productId} readOnly />
            </td>
          </tr>
          <tr>
            <td>Name:&nbsp;</td>
            <td>
              <input type="text" value={product.productName}
                onChange={
                  (e) => {
                    updateProductHandler({
                      ...product,
                      productName: (e.target as HTMLInputElement).value
                    })
                  }
                } />
            </td>
          </tr>
          <tr>
            <td>Desc:&nbsp;</td>
            <td>
              <textarea value={product.description}
                onChange={
                  (e) => {
                    updateProductHandler({
                      ...product,
                      description: (e.target as HTMLTextAreaElement).value
                    })
                  }
                }
              >

              </textarea>
            </td>
          </tr>
          <tr>
            <td>Code:&nbsp;</td>
            <td>
              <input type="text" value={product.productCode}
                onChange={
                  (e) => {
                    updateProductHandler({
                      ...product,
                      productCode: (e.target as HTMLInputElement).value
                    })
                  }
                } />
            </td>
          </tr>
          <tr>
            <td>Released On:&nbsp;</td>
            <td>
              <input type="date" value={product.releaseDate}
                onChange={
                  (e) => {
                    updateProductHandler({
                      ...product,
                      releaseDate: (e.target as HTMLInputElement).value
                    })
                  }
                } />
            </td>
          </tr>
          <tr>
            <td>Price:&nbsp;</td>
            <td>
              <input type="text" value={product.price}
                onChange={
                  (e) => {
                    updateProductHandler({
                      ...product,
                      price: parseFloat((e.target as HTMLInputElement).value)
                    })
                  }
                } />
            </td>
          </tr>
          <tr>
            <td>Rating:&nbsp;</td>
            <td>
              <input type="text" value={product.starRating}
                onChange={
                  (e) => {
                    updateProductHandler({
                      ...product,
                      starRating: Number((e.target as HTMLInputElement).value)
                    })
                  }
                }
              />
            </td>
          </tr>
          <tr>
            <td>Id:&nbsp;</td>
            <td>
              <input type="text" value={product.imageUrl}
                onChange={
                  (e) => {
                    updateProductHandler({
                      ...product,
                      imageUrl: (e.target as HTMLInputElement).value
                    })
                  }
                } />
            </td>
          </tr>
        </table>
        <br />
        <button type="button" className="btn btn-primary" onClick={updateProductData}>
          Edit
        </button>
      </form>
    )
}

export default EditProduct