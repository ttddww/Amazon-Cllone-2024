import React, { useEffect, useState } from 'react'
import ProductCard from "./ProductCard";
import axios from 'axios'
import classes from './Product.module.css'
import Loader from '../Loader/Loader';

function Product() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
          console.log(res.data);
            setProducts(res.data);
            setIsLoading(false);
        }).catch((err)=>{
            console.log(err);
            setIsLoading(false);
        });
    }, [])
  console.log(products);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.products_container}>
          {products.map((singleProduct) => (
            <ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true} />
          ))}
        </div>
      )}
    </>
  );
}

export default Product;


// !=====================================


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// // import classes from "./Product.module.css";
// // import Loader from "../Loader/Loader";

// function Product() {
//   const [products, setProducts] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         // isLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         // setIsLoading(false);
//       });
//   }, []);

//   return (
      
//         <section >
//           {products.map((singleProduct) => {
//             return (
//               <ProductCard
//                 product={singleProduct}
//                 key={singleProduct.id}
//               />
//             );
//           })}
//         </section>
    
//   );
// }

// export default Product;