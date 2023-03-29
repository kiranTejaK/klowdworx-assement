import React, {useState,useEffect} from 'react';
import ProductItem from '../ProductItem';

import ReactPaginate from "react-paginate";

import './index.css';

const Products=()=>{
  
  const [productsList, setProductsList]=useState([]);
  const [searchInput,setSearchInput]=useState('');
  const [pageNumber, setPageNumber] = useState(0);
  

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProductsList(data.products.slice(0,30)))
      .catch(error => console.log(error));
  },[])

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

//pagination code starts

  const productsPerPage = 5;
  const pagesVisited = pageNumber * productsPerPage;
  const pageCount = Math.ceil(productsList.length / productsPerPage);

  const displayProducts = productsList.filter(product => product.category.toLowerCase().includes(searchInput.toLowerCase())).slice(pagesVisited, pagesVisited + productsPerPage)
  .map((product) => {
    return (
      <ProductItem
        key={product.id}
        productDetails={product}
    />
    );
  });

  
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

// pagination code ends

  return(
    <>
<div products-container>

    <input type="text" placeholder="Search..." value={searchInput} onChange={handleSearchInputChange} />
      {displayProducts}
</div>
    <div className="pagination-container">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
    </>
  )
}

export default Products;


