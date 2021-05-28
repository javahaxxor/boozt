import {createContext, useState} from 'react';
import productList from '../product_list.json';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [page, setPage] = useState(1);
    const pageSize = 16;

    const getArrPage = (page, pageSize) => {
        return productList.slice((page - 1) * pageSize, page * pageSize);
    }

    const [products, setProducts] = useState(getArrPage(page, pageSize));

    const getNextPage = () => {
        setPage(page+1);
        console.log('+page');
        setProducts(getArrPage(page+1, pageSize));
    }

    const getPreviousPage = () => {
        console.log('page', page-1);
        if (page > 1) {
            setPage(page-1)
            setProducts(getArrPage(page-1, pageSize));
        } else {
            setProducts(getArrPage(page-1, pageSize));
        }
    }

    const getPage = (newPage) => {
        console.log('page', newPage);
        if (newPage > 0) {
            setPage(newPage);
            setProducts(getArrPage(newPage, pageSize));
        }
    }
    
    return(
        <ProductContext.Provider value={{ products, page, pageSize, getNextPage, getPreviousPage, getPage }}>
            {children}
        </ProductContext.Provider>
    );

}

export default ProductProvider;