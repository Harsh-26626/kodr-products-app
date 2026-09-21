import React from 'react'

const ViewProducts = (props) => {

  const handleProductDelete = (index) => {
    props.handleProductDelete(index);
  }

  const handleProductEdit = (index) => {
    props.setCurrentProduct(index);
    props.setCurrentPage(2);
  }

  return (
    <div className='mt-10 flex text-emerald-50 w-full text-center justify-center flex-col'>
      {
        props.products.length === 0 ? <></> : 
        <>
          <h2 className='text-2xl font-semibold mb-5'>Products Added by you</h2>
          <div className='grid grid-cols-3 m-auto'>
            {
              props.products.map((product, i) => (
                <div key={i} className='flex px-9 py-6 gap-2 m-5 text-center flex-col border-2 border-blue-100 text-blue-100 rounded-2xl w-max min-w-72'>
                  <span className='text-lg'><b>Product Name:</b> {product.name}</span>
                  <span className='text-sm'><b>Price:</b> {product.price}</span>
                  <span className='text-sm'><b>Discount:</b> {product.discount}</span>
                  <span className='text-sm'><b>Stock:</b> {product.stock}</span>
                  <div className='flex gap-3'>
                    <button className='cursor-pointer border-2 border-gray-700 w-max m-auto px-5 py-2 rounded-3xl bg-white text-gray-900' type='submit' onClick={() => handleProductEdit(i)}>
                      Edit
                    </button>
                    <button className='cursor-pointer border-2 border-gray-700 w-max m-auto px-5 py-2 rounded-3xl bg-white text-gray-900' type='submit' onClick={() => handleProductDelete(i)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </>
      }
    </div>
  )
}

export default ViewProducts