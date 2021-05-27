import {createContext, useState} from 'react';

export const ProductContext = createContext();
const productList = [];

const ProductProvider = ({ children }) => {
    const [page, setPage] = useState(0);

    const [products, setProducts] = useState([
        ...productList.slice(0, 5)
    ]);

    const getNextPage = (page) => {
        console.log('page', page);
        setProducts(...productList.slice(page, page+4));
        setPage(page++);
    }

    const getPreviousPage = () => {
        console.log('page', page);
        if (page > 0) {
            setPage(page)
            setProducts(...productList.slice(page, page+4));

        }
        
        setProducts(...productList.slice(page, page+4));
        setPage(page++);
    }
    

}