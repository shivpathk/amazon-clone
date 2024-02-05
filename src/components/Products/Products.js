// React
import { useEffect, useState } from "react";
// Components
import Product from "./Product";

function Products() {

  const [products, setProducts] = useState([]);

  // fetching the products from API
  useEffect(() => {
    // Abort controller
    const abortCont = new AbortController();
    const getData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data.slice(0, -1));
    };
    try {
      getData();
    } catch (error) {
      console.log(error)
    }


    // Cleanup func
    return () => {
      abortCont.abort();
    };
  }, []);

  // JSX 
  return (
    <div className={"grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto md:-mt-52"}>
      {(
        products.map(({ id, title, price, category, description, image, rating }, i) => {
          return (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              category={category}
              description={description}
              image={image}
              rating={rating}
              i={i}
            />
          );
        })
      )}
    </div>
  );
}

export default Products;
