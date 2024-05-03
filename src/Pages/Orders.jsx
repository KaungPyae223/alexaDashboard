import React from 'react';
import OrdersHeader from '../Components/Orders/OrdersHeader';
import OrderTable from '../Components/Orders/OrderTable';
import Pagination from '../Components/Products/Pagination';

const Orders = () => {
    return (
        <div>
            <OrdersHeader/>
            <OrderTable/>
            <Pagination/>
        </div>
    );
};

export default Orders;