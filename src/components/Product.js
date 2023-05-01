import React, { useState } from 'react';
import NewProduct from './NewProduct';
import ProductsList from './ProductsList';

function Product() {
    const [products, setProducts] = useState([
        { id: 1, name: "Computer", price: 3400, checked: true },
        { id: 2, name: "Printer", price: 500, checked: false },
        { id: 3, name: "Smart Phone", price: 1200, checked: true }
    ]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const handleCheck = (product) => {
        product.checked = !product.checked;
        let productsList = products.map((p) => (p.id === product.id ? product : p));
        setProducts(productsList);
    };

    const handleDelete = (product) => {
        let productsList = products.filter((p) => p.id !== product.id);
        setProducts(productsList);
    };

    const handleDeleteChecked = (product) => {
        let productsList = products.filter((p) => p.checked === false);
        setProducts(productsList);
    };

    const handleCheckAll = (value) => {
        let productsList = products.map((p) => {
            p.checked = value;
            return p;
        });
        setProducts(productsList);
    };

    return (
        <div>
            <NewProduct onAdd={addProduct} />
            <ProductsList
                products={products}
                onCheck={handleCheck}
                onDelete={handleDelete}
                onCheckAll={handleCheckAll}
                onDeleteChecked={handleDeleteChecked}
            />
        </div>
    );
}

export default Product;
