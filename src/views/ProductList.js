import './product-list.scss';
import {useContext} from 'react'
import {ProductContext} from '../context/productContext';
import Product from '../components/product/Product';
import Paginator from '../components/paginator/Paginator';

function ProductList() {
    const {products} = useContext(ProductContext);

    return (
        <>
            <div className='product-list'>
                <header></header>
                {products.map(product => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        <Paginator></Paginator>
        </>
    )
}

export default ProductList;