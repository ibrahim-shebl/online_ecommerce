import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../pages/Loading";
import Container from "../components/Container";
import CategoryFilters from "../pages/CategoryFilters";
import ProductCard from "../pages/ProductCard";
import { categories } from "../assets/fakeData/products";
import { products } from "../assets/fakeData/products";

const Category = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        const category = categories.find((category) => category._base === id);
        if (category) {
          const productsInCategory = products.filter(
            (product) => product.category === category.name
          );
          setFilteredProducts(productsInCategory);
        } else {
          setFilteredProducts([]);
        }
      }
      catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const formatId = (id) => {
    return id
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <h2 className="text-4xl text-center font-semibold mb-5">
            {formatId(id)}
          </h2>
          <div className="flex items-start gap-10">
            <CategoryFilters id={id} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredProducts.map((item) => (
                <ProductCard item={item} key={item._id} />
              ))}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Category;
