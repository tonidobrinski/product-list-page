import { useState, useEffect } from "react";
import Navigation from "./Navigation/Nav/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Sort from "./Recommended/Sort/Sort";
import priceCompare from "./utils/helpers/price-check";
import Footer from "./Footer/Footer";
import "./index.css";

//--------Database--------
import products from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [selectedPrice, setSelectedPrice] = useState(undefined);
  const [selectedColor, setSelectedColor] = useState(undefined);
  const [selectedBrand, setSelectedBrand] = useState(undefined);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [displayCount, setDisplayCount] = useState(20);

  const [sortOption, setSortOption] = useState(""); // State for sorting option

  //--------input Filter--------
  const [query, setQuery] = useState("");

  useEffect(
    () =>
      filteredData({
        selectedCategory,
        selectedBrand,
        selectedColor,
        selectedPrice,
        query,
        sortOption,
        displayCount,
      }),
    [
      selectedCategory,
      selectedPrice,
      selectedColor,
      selectedBrand,
      query,
      sortOption,
      displayCount,
    ]
  );

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //--------Radio Filter--------
  const handleChangeCategory = (event) =>
    setSelectedCategory(event.target.value);

  //--------Buttons Filter--------
  const handleChangeBrand = (event) => setSelectedBrand(event.target.value);

  const handleChangePrice = (event) => {
    setSelectedPrice(event.target.value.split(","));
  };

  const handleChangeColor = (event) => setSelectedColor(event.target.value);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleLoadMore = () => {
    const newDisplayCount = displayCount + 20;
    const maxDisplayCount = Math.min(newDisplayCount, filteredProducts.length);
    setDisplayCount(maxDisplayCount);
  };

  const filteredData = ({
    selectedCategory,
    selectedBrand,
    selectedColor,
    selectedPrice,
    query,
    sortOption,
  }) => {
    setFilteredProducts(() =>
      products
        .sort((a, b) => sortData(sortOption, a, b))
        .filter(({ category, color, company, newPrice, title }) => {
          const categoryCheck =
            !selectedCategory || category === selectedCategory;
          const colorCheck = !selectedColor || color === selectedColor;
          const companyCheck = !selectedBrand || company === selectedBrand;
          const newPriceCheck =
            !selectedPrice || priceCompare(selectedPrice, newPrice);
          const titleCheck =
            !query || title.toLowerCase().indexOf(query.toLowerCase()) !== -1;

          return (
            categoryCheck &&
            colorCheck &&
            companyCheck &&
            newPriceCheck &&
            titleCheck
          );
        })
    );
  };

  //Sort Filter

  function sortData(sortOption, a, b) {
    switch (sortOption) {
      case "alphabetical-az":
        return a.title.localeCompare(b.title);

      case "alphabetical-za":
        return b.title.localeCompare(a.title);

      case "price-asc":
        return parseInt(a.newPrice) - parseInt(b.newPrice);
      case "price-desc":
        return parseInt(b.newPrice) - parseInt(a.newPrice);
      default:
        return filteredProducts;
    }
  }

  return (
    <>
      <Sidebar
        onChangePrice={handleChangePrice}
        onChangeColor={handleChangeColor}
      />
      <Navigation
        query={query}
        handleInputChange={handleInputChange}
        onChangeCategory={handleChangeCategory}
      />
      <Recommended onChangeBrand={handleChangeBrand} />
      <Sort onChangeSort={handleSortChange} />
      <Products result={filteredProducts.slice(0, displayCount)} />
      {displayCount < filteredProducts.length && (
        <button className="load-more card-container" onClick={handleLoadMore}>
          Load More
        </button>
      )}
      <div className="product-counter">
        {filteredProducts.length > 0 ? (
          <>
            {displayCount} out of {filteredProducts.length} products
          </>
        ) : (
          <>No products found</>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
