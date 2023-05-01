import React, { useState } from 'react';

function NewProduct(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const handleAddProduct = (event) => {
        let product = { id: Date.now(), name: name, price: price };
        setName("");
        setPrice(0);
        props.onAdd(product);
    };

    return (
        <div className='m-2 p-2 border border-info'>
            <input className='m-1' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='Price' className='m-1' size={10} value={price} onChange={(e) => setPrice(e.target.value)} />
            <button onClick={handleAddProduct} className='btn btn-sm ms-2 btn-info'>Add</button>
        </div>
    );
}

export default NewProduct;
