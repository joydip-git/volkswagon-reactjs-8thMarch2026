import { Route, Routes, useRoutes, type RouteObject } from "react-router-dom"
import ProductList from "../components/products/product-list/ProductList"
import Home from "../components/common/home/Home"
import PageNotFound from "../components/common/page-not-found/PageNotFound"
import ProductDetail from "../components/products/product-detail/ProductDetail"
import EditProduct from "../components/products/edit-product/EditProduct"
import AddProduct from "../components/products/add-product/AddProduct"

const AppRoutes = () => {
    // const appRoutes = (
    //     <Routes>
    //         <Route path="products">
    //             <Route path="" element={<ProductList />} />
    //             <Route path="view/:id" element={<ProductDetail />} />
    //             <Route path="edit/:id" element={<EditProduct />} />
    //             <Route path="add" element={<AddProduct />} />
    //         </Route>
    //         <Route path="home" element={<Home />} />
    //         <Route path="" element={<Home />} />

    //         <Route path="*" element={<PageNotFound />} />
    //     </Routes>
    // )

    const productRoutes: RouteObject = {
        path: 'products',
        children: [
            {
                path: '', element: <ProductList />
            },
            {
                path: 'view/:id', element: <ProductDetail />
            },
            {
                path: 'edit/:id', element: <EditProduct />
            },
            {
                path: 'add', element: <AddProduct />
            }
        ]
    }

    const commonRoutes: RouteObject =
    {
        path: '',
        children: [
            {
                path: '', element: <Home />
            },
            {
                path: 'home', element: <Home />
            },
            {
                path: '*', element: <PageNotFound />
            }
        ]
    }

    const appRoutes = useRoutes([productRoutes, commonRoutes])
    return appRoutes
}

export default AppRoutes