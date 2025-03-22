import React, { useEffect } from "react";
import { fetchProduct } from "../Slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Slice/categorySlice";
import ProductCard from "./ProductCard";
import QuickViewModel from "./QuickViewModel";


const NewArrivals = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  const selectedCategory = useSelector((state) => state.category.selectedCategory);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProduct());
    }
  }, [dispatch, status]);

  const filterProduct = () => {
    if (selectedCategory === "new_arrivals") return products.slice(0, 8);
    if (selectedCategory === "trending") return products.filter((product) => product.rating >= 4);
    if (selectedCategory === "best_sellers") return products.filter((product) => product.sold > 20);
    return [];
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <section>
          <div className="text-center flex justify-center gap-12 p-6 heading-NTB">
            <h2 className={`NTB ${selectedCategory === "new_arrivals" ? "active" : ""}`}
                onClick={() => dispatch(setCategory("new_arrivals"))}>New Arrivals</h2>
            <h2 className={`NTB ${selectedCategory === "trending" ? "active" : ""}`}
                onClick={() => dispatch(setCategory("trending"))}>Trending</h2>
            <h2 className={`NTB ${selectedCategory === "best_sellers" ? "active" : ""}`}
                onClick={() => dispatch(setCategory("best_sellers"))}>Best Sellers</h2>
          </div>

          <div className="card-item flex center wrap ml-7">
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>Failed to load products.</p>}
            {status === "succeeded" &&
              filterProduct().map((product) => <ProductCard key={product.id} product={product} />)}
          </div>

          <div className="view-all-btn flex center">
            <button className="show-all" onClick={() => alert("View All Clicked")}>
              View All
            </button>
          </div>
        </section>
      </div>

     
      <QuickViewModel />
    </>
  );
};

export default NewArrivals;
