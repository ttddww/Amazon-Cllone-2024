import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../components/API/endPoint";
import ProductCard from "../../components/Product/ProductCard";
import './results.css'
import Loader from "../../components/Loader/Loader";

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (categoryName) {
      setIsLoading(true)
      axios
        .get(`${productUrl}/products/category/${categoryName}`)
        .then((res) => {
          setResults(res.data);
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false)
        });
    }
  }, [categoryName]);

  return (
    <section>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}>Category/{categoryName}</p>
      <hr />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="products_container">
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} renderDesc={false} renderAdd={true} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Results;
