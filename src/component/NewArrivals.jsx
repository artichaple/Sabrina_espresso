import React, { useEffect, useState } from "react";
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
      <div className="container mx-auto px-4">
        <section>
          <div className="text-center flex justify-center gap-12  p-6 heading-NTB">
            <h2 className="NTB">New Arrivals</h2>
            <h2 className="NTB">Trending</h2>
            <h2 className="NTB">Best Sellers</h2>
          </div>



          <div className="card-item flex center wrap ml-7">
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>Failed to load products.</p>}

            {status === "succeeded" &&
              products.slice(0, 8).map((product) => {
                return (
                  <div
                    className="card"
                    key={product.id}
                  
                  >
                    <div className="card-img">
                      <img src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className="card-content text-center">
                    <div className="rating_price_title">
                      <h3>{product.title}</h3>
                      <span>${product.price}</span>
                      <div>
                        <div
                          className="rating"
                          style={{ "--rating": `${product.rating}` }}
                          aria-label={`Rating: ${product.rating} out of 5`}
                        ></div>
                      </div>
                      </div>

                     
                    
                        <div className="card-btns">
                          <button className="add-to-cart">
                            <i className="bx bxs-cart"></i>
                          </button>
                          <button className="quick-view">
                            <i className="bx bx-search-alt-2"></i>
                          </button>
                        </div>
                    
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="view-all-btn flex center">
            <button
              className="show-all"
              onClick={() => alert("View All Clicked")}
            >
              View All
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewArrivals;
