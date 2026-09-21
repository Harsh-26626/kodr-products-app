import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import ViewProducts from './ViewProducts';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(null);
  const prods = localStorage.getItem('products');

  let prodss = prods != null && prods.length != 0 ? JSON.parse(prods) : null;
  const [products, setProducts] = useState(prodss != null ? prodss : []);

  const handleProductDelete = (i) => {
    const deleteConfiration = confirm("Are you sure you want to delete " + products[i]['name'] + " ??");

    if(deleteConfiration) {
      const newProducts = products.filter((_, prodI) => {
        return prodI !== i;
      });
  
      setProducts(newProducts);
  
      localStorage.setItem('products', JSON.stringify(newProducts));

      alert('product deleted!');
    } else {
      alert('deletion cancelled!')
    }
  }

  return (
    <>
      <div className='flex mx-20 flex-col'>
        <Header setCurrentPage={setCurrentPage}/>
        {
          currentPage === 0 ? <ViewProducts setCurrentProduct={setCurrentProduct} setCurrentPage={setCurrentPage} handleProductDelete={handleProductDelete} products={products} /> : 
          currentPage === 1 ? <AddProduct setProducts={setProducts}/> : <EditProduct setCurrentPage={setCurrentPage} prodIndex={currentProduct} product={products[currentProduct]} setProducts={setProducts}/>
        }
      </div>
    </>
  )
}

export default App
