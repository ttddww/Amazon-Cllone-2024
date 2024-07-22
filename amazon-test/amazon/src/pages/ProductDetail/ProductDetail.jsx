import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../components/API/endPoint";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  console.log(product);
  return (
    <div>
      {isLoading ? (<Loader />) : 
      (<ProductCard product={product} flex={true} renderDesc={true} renderAdd={true}/>)}
      </div>
  );
}

export default ProductDetail;
