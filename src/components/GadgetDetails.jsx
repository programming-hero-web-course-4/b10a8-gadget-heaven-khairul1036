import React from 'react';
import { useParams } from 'react-router-dom';

const GadgetDetails = () => {
    const param = useParams();
    const {product_id} = param;
    return (
        <div>
            {product_id}
        </div>
    );
};

export default GadgetDetails;