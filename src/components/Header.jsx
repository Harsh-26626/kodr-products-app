import React from 'react'

const Header = (props) => {

  const setCurrentPage = (page) => {
    props.setCurrentPage(parseInt(page));
  }

  return (
    <nav className='flex my-6 text-blue-100 font-mono justify-between'>
        <p className='text-xl cursor-pointer' onClick={() => setCurrentPage(0)}>Product Shelf</p>
        <div className='flex flex-row gap-52'>
            <span className='cursor-pointer' onClick={() => setCurrentPage(0)}>View Products</span>
            <span className='cursor-pointer' onClick={() => setCurrentPage(1)}>Add products</span>
        </div>
    </nav>
  )
}

export default Header