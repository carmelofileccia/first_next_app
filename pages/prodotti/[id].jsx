import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Product from "../../components/Product";

export default function Id() {
  const router = useRouter();
  // const [productData, setProductData] = useState({});

  // C'e un errore qui... attenzione a decommentare, rompe tutto! :D
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${router.query.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setProductData(data));
  // }, []);

  // return <Product productData={productData} />;
  return <h1>{router.query.id}</h1>;
}
