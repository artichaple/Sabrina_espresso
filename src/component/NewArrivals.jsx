import React, { useEffect } from "react";
import { fetchProduct } from "../Slice/productSlice";
import { useDispatch, useSelector } from "react-redux";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProduct());
    }
  }, [dispatch, status]);

  return (
    <>
      <div>
        <section className="cards-container">
          <div className="card-heading">
            <h2>NEW ARRIVALS</h2>
          </div>

          <div className="card-item flex center wrap">
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>Failed to load products.</p>}

            {status === "succeeded" &&
              products.map((product) => {
                return (
                  <div className="card" key={product.id}>
                    <div className="card-img">
                      <img src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className="card-content">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <span>${product.price}</span>
                    </div>
                    <div className="card-btn flex center">
                      <button className="add-to-cart">Add to Cart</button>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="view-all-btn flex center">
            <button className="show-all" onClick={() => alert("View All Clicked")}>
              View All
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewArrivals;
