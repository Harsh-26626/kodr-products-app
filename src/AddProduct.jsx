import React, { useState } from 'react'
import FormInput from './components/form-fields/FormInput';

const AddProduct = (props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [stock, setStock] = useState('');
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

    console.log(name);
    console.log(name == '');

    if(name == '' || price == '' || discount == '' || stock == '') {
      setError('Kindly fill all fields in order to create a product');
      return;
    }

    setError(null);

    const newProd = {};

    Object.keys(fields).forEach((field) => {
      newProd[field] = fields[field];
    });

    let prods;

    props.setProducts((products) => {
      prods = products;
      return [...products, newProd];
    });

    localStorage.setItem('products', JSON.stringify([...prods, newProd]));

    Object.keys(fields).forEach(field => setFields[field](''));
  }

  return (
    <div className='mt-10 flex text-emerald-50 w-full text-center justify-center flex-col'>
      <h2 className='text-4xl'>Let's add a New Product</h2>
      {
        error != null ? <p className='text-red-500'>{error}</p> : <></>
      }
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
          min='1'
        />
        <FormInput 
          field='discount' 
          fieldValue={discount} 
          handleFieldChange={handleFieldChange} 
          label='Enter Product Discount' 
          type='number' 
          placeholder='15%'
          min='0'
          max='100'
        />
        <FormInput 
          field='stock' 
          fieldValue={stock} 
          handleFieldChange={handleFieldChange} 
          label='Enter Product Stock' 
          type='number' 
          placeholder='200'
          min='0'
        />
        <button className='cursor-pointer border-2 border-gray-700 w-max m-auto px-5 py-2 rounded-3xl bg-white text-gray-900' type='submit' onClick={handleFormSubmit}>
          Create
        </button>
      </form>
    </div>
  )
}

export default AddProduct