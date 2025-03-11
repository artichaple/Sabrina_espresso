import React, { useEffect } from "react";

const Category = () => {
  useEffect(() => {
    let elements = document.getElementsByClassName("cat-para");

    for (let i = 0; i < elements.length; i++) {
      let words = elements[i].innerText.split(" ");
      let newHTML = words
        .map(
          (word) =>
            `<span style="color: #ec4899; font-weight: bold;">${word.charAt(
              0
            )}</span>${word.slice(1)}`
        )
        .join(" ");

      elements[i].innerHTML = newHTML;
    }
  }, []);

  return (
    <>
      <h1 className="cat-para text-center p-10  font-[Crimson] text-2xl font-bold ">
        Shop By Category{" "}
      </h1>
      <div className="flex justify-center gap-x-20 font-[Crimson] ">
        <div className="categories">
          <img
            src="src\assets\harypotter.jpeg"
            alt=""
            className="rounded-full w-50 h-50 shadow-2xl shadow-gray-500 "
          />
          <p className="cat-para  p-8 text-center">Photo Frame</p>
        </div>
        <div className="categories">
          <img
            src="src\assets\scrap.jpeg"
            alt=""
            className="rounded-full w-50 h-50 shadow-2xl shadow-gray-500 "
          />
          <p className="cat-para  p-8 text-center">Gift Hamper</p>
        </div>
        <div className="categories">
          <img
            src="src\assets\hero_img.jpeg"
            alt=""
            className="rounded-full w-50 h-50 shadow-2xl shadow-gray-500 "
          />
          <p className="cat-para  p-8 text-center">Scrap Book</p>
        </div>
        <div className="categories">
          <img
            src="src\assets\rings.jpeg"
            alt=""
            className="rounded-full w-50 h-50 shadow-2xl shadow-gray-500 "
          />
          <p className="cat-para  p-8 text-center ">Rings</p>
        </div>
      </div>

      <div className=" bg-cyan-950" >
       <div className="support_div h-25 flex justify-center gap-x-20 p-5   m-8 font-[Crimson] text-amber-50">
        <div className="h-20 w-100  ml-">
          <p className="text-xl"> World Wide Shipping </p>
          <p className="text-[10px] font-extralight ">
            Once we Received Your Order , We Will Dispatch In 5-10 business days
            .{" "}
          </p>
        </div>

        <div className="h-20 w-100  ">
          <p className="text-xl"> Quality Assurance 
           </p>
          <p className="text-[10px] font-extralight ">
          We Accept Return We Product Is damaged , Opening Video Is Necessary 
            .{" "}
          </p>
        </div>

        <div className="h-20 w-100  ">
          <p className="text-xl">Online Support 
        </p>
          <p className="text-[10px] font-extralight ">
          Mon To Fri 24/7 Support 
            .{" "}
          </p>
        </div>


        <div className="h-20 w-100 ">
          <p className="text-xl"> Flexible Payment 
           </p>
          <p className="text-[10px] font-extralight ">
          Multiple Payment Facility Is Available
            .{" "}
          </p>
        </div>
        </div>
        
  






      </div>
    </>
  );
};

export default Category;
