import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = products.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div>
      <h2>Product List</h2>
      <div className="row">
        {currentItems.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "200px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav>
        <ul className="pagination justify-content-center">
          {[...Array(totalPages).keys()].map((num) => (
            <li
              key={num + 1}
              className={`page-item ${currentPage === num + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(num + 1)}
            >
              <button className="page-link">{num + 1}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
