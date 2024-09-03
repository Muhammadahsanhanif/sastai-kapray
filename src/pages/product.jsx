import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../component/heading";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]); // initialize price range
  const [categories, setCategories] = useState([]); // initialize categories
  const [selectedCategory, setSelectedCategory] = useState(""); // initialize selected category

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        const uniqueCategories = [...new Set(products.map((product) => product.category))];
        setCategories(uniqueCategories);
      });
  };

  const filtered = products
    .filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((data) => data.price >= priceRange[0] && data.price <= priceRange[1])
    .filter((data) => {
      if (selectedCategory === "") return true;
      return data.category === selectedCategory;
    });

  const handlePriceChange = (e) => {
    const { value, name } = e.target;
    if (name === "minPrice") {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded w-full mx-auto my-2"
      />
      <div className="flex flex-wrap -m-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <label>Min Price:</label>
          <input
            type="number"
            name="minPrice"
            value={priceRange[0]}
            onChange={handlePriceChange}
            className="p-2 border rounded w-full mx-auto my-2"
          />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <label>Max Price:</label>
          <input
            type="number"
            name="maxPrice"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="p-2 border rounded w-full mx-auto my-2"
          />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <label>Category:</label>
          <select value={selectedCategory} onChange={handleCategoryChange} className="p-2 border rounded w-full mx-auto my-2">
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        {filtered.map((data) => (
          <Link
            to={`/products/${data.title.split(" ").join("-")}/id/${data.id}`}
            className="w-full md:w-1/2 xl:w-1/3 p-4"
          >
            <ProductCard id={data.id} title={data.title} key={data.id} image={data.image} price={data.price} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;