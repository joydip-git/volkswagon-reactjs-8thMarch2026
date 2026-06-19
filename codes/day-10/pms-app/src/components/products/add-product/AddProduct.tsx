import { useState } from "react"
import type { Product } from "../../../models/product"
import { addProduct } from "../../../services/productservice"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {

  const [product, setProduct] = useState<Product>({
    productId: 0,
    productName: '',
    productCode: '',
    description: '',
    price: 0,
    starRating: 0,
    releaseDate: '',
    imageUrl: ''
  })

  const navigate = useNavigate()

  const addProductHandler = async () => {
    if (window.confirm('add product?')) {
      try {
        const axiosReponse = await addProduct(product)
        const apiResponse = axiosReponse.data
        if (apiResponse.data !== null) {
          window.alert('product added successfully')
          navigate('/products')
        } else {
          window.alert('product could not be added: ' + apiResponse.message)
        }
      } catch (error) {
        window.alert('product could not be added: ' + error.message)
      }
    }
  }
  return (
    <div>
      <div>
        <label htmlFor="txtId">Id:&nbsp;</label>
        <input type="text" id='txtId' value={product.productId}
          onChange={
            (e) => {
              setProduct({
                ...product,
                productId: Number((e.target as HTMLInputElement).value)
              })
            }
          } />
      </div>
      <div>
        <label htmlFor="txtName">Name:&nbsp;</label>
        <input type="text" id='txtName' value={product.productName}
          onChange={
            (e) => {
              setProduct({
                ...product,
                productName: (e.target as HTMLInputElement).value
              })
            }
          } />
      </div>
      <div>
        <label htmlFor="txtCode">Code:&nbsp;</label>
        <input type="text" id='txtCode' value={product.productCode}
          onChange={
            (e) => {
              setProduct({
                ...product,
                productCode: (e.target as HTMLInputElement).value
              })
            }
          } />
      </div>
      <div>
        <label htmlFor="txtRelease">Released On:&nbsp;</label>
        <input type="date" id='txtRelease' value={product.releaseDate}
          onChange={
            (e) => {
              setProduct({
                ...product,
                releaseDate: (e.target as HTMLInputElement).value
              })
            }
          }
        />
      </div>
      <div>
        <label htmlFor="txtDesc">Desc:&nbsp;</label>
        <textarea id='txtDesc' value={product.description}
          onChange={
            (e) => {
              setProduct({
                ...product,
                description: (e.target as HTMLTextAreaElement).value
              })
            }
          }>

        </textarea>
      </div>
      <div>
        <label htmlFor="txtPrice">Price:&nbsp;</label>
        <input type="text" id='txtPrice' value={product.price}
          onChange={
            (e) => {
              setProduct({
                ...product,
                price: Number((e.target as HTMLInputElement).value)
              })
            }
          } />
      </div>
      <div>
        <label htmlFor="txtRating">Rating:&nbsp;</label>
        <input type="text" id='txtRating' value={product.starRating}
          onChange={
            (e) => {
              setProduct({
                ...product,
                starRating: Number((e.target as HTMLInputElement).value)
              })
            }
          } />
      </div>
      <div>
        <label htmlFor="txtImage">Image:&nbsp;</label>
        <input type="text" id='txtImage' value={product.imageUrl}
          onChange={
            (e) => {
              setProduct({
                ...product,
                imageUrl: (e.target as HTMLInputElement).value
              })
            }
          } />
      </div>
      <div>
        <button type="button" onClick={addProductHandler}>Add</button>
      </div>
    </div>
  )
}

export default AddProduct