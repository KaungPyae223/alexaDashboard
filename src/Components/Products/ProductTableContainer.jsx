import React from 'react';
import ProductTableContainerHeader from './ProductTableContainerHeader';
import ProductTables from './ProductTables';
import Pagination from './Pagination';

const ProductTableContainer = () => {
    return (
        <div className='ComponentShadow rounded-lg w-full p-5'>
            <ProductTableContainerHeader/>
            <ProductTables/>
            <Pagination/>
        </div>
    );
};

export default ProductTableContainer;