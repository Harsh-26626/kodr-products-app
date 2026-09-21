import React, { useState } from 'react'
import FormInput from './components/form-fields/FormInput';

const EditProduct = (props) => {
  const [name, setName] = useState(props.product.name);
  const [price, setPrice] = useState(props.product.price);
  const [discount, setDiscount] = useState(props.product.discount);
  const [stock, setStock] = useState(props.product.stock);
  const index = props.prodIndex;
  const [error, setError] = useState(null);

  const fields = {
    name, price, discount, stock
  };

  const setFields = {
    name: setName,
    price: setPrice,
    discount: setDiscount,
    stock: setStock
  }

  const handleFieldChange = (e) => {
    setError(null);

    setFields[e.target.name](e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    Object.keys(fields).forEach((field) => {
      if(field == '' || field == null) {
        setError('Invalid value for ' + e.target.name + ' kindly fill all values!');
        return;
      }
    });

    setError(null);

    const newProd = {};

    Object.keys(fields).forEach((field) => {
      newProd[field] = fields[field];
    });

    let prods;

    props.setProducts((products) => {
        prods = products;
        return products;
    });

    console.log(prods);

    const newProducts = prods.map(
        (product, idx) => idx === index ? newProd : product
    );

    console.log(newProducts);

    props.setProducts(newProducts);

    localStorage.setItem('products', JSON.stringify(newProducts));

    Object.keys(fields).forEach(field => setFields[field](''));

    props.setCurrentPage(0);
  }

  return (
    <div className='mt-10 flex text-emerald-50 w-full text-center justify-center flex-col'>
      <h2 className='text-4xl'>Edit Your Product:</h2>
      <form className='mt-10 flex flex-col gap-5 justify-center w-full' onSubmit={handleFormSubmit}>
        <FormInput 
          field='name' 
          fieldValue={name} 
          handleFieldChange={handleFieldChange} 
          label='Enter Product Name' 
          type='text' 
          placeholder='iPhone 18 Pro'
        />
        <FormInput 
          field='price' 
          fieldValue={price} 
          handleFieldChange={handleFieldChange} 
          label='Enter Product Price' 
          type='number' 
          placeholder='₹ 99,999'
        />
        <FormInput 
          field='discount' 
          fieldValue={discount} 
          handleFieldChange={handleFieldChange} 
          label='Enter Product Discount' 
          type='number' 
          placeholder='15%'
        />
        <FormInput 
          field='stock' 
          fieldValue={stock} 
          handleFieldChange={handleFieldChange} 
          label='Enter Product Stock' 
          type='number' 
          placeholder='200'
        />
        <button className='cursor-pointer border-2 border-gray-700 w-max m-auto px-5 py-2 rounded-3xl bg-white text-gray-900' type='submit' onClick={handleFormSubmit}>
          Edit
        </button>
      </form>
    </div>
  )
}

export default EditProduct