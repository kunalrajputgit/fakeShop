import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import ProductCard from "../ProductCard/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [shopData, setShopData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setShopData(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="mainProductsContainer">
      {isLoading ? (
        <h1 style={{ color: "grey" }}>
          Loading <FontAwesomeIcon icon={faSpinner} />
        </h1>
      ) : (
        shopData.map((data) => (
          <Link key={data.id} className="link" to={`products/${data.id}`}>
            <ProductCard data={data} />
          </Link>
        ))
      )}
    </div>
  );
};

export default Home;
