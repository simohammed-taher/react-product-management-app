import React, { useState } from 'react';
import ProductItem from './ProductItem';

function ProductsList(props) {
    const [checkStatus, setCheckStatus] = useState(false);
    const products = props.products;

    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>
                            <button
                                onClick={() => {
                                    props.onCheckAll(!checkStatus);
                                    setCheckStatus(!checkStatus);
                                }}
                                className='btn btn-outline-danger'>
                                <i className={checkStatus ? 'bi bi-check2-circle' : 'bi bi-app'}></i>
                                <span className='m-1'>{products.filter((p) => p.checked).length}</span>
                            </button>
                        </th>
                        <th>
                            <button
                                onClick={() => {
                                    props.onDeleteChecked();
                                }}
                                className='btn btn-outline-danger'>
                                <i className={'bi bi-trash'}> </i>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <ProductItem key={p.id} product={p} onCheck={props.onCheck} onDelete={props.onDelete} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsList;
