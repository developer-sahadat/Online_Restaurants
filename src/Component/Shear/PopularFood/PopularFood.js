import React from "react";

const PopularFood = ({ popular }) => {
  const { img, start, name } = popular;
  return (
    <div>
      <div class="shadow p-4 text-center border" style={{ minHeight: "450px" }}>
        <div class="card border-0">
          <div class="position-relative">
            <img src={img} class="card-img-top" alt="..." />
            <span class="bg-danger px-3 py-2 rounded-3 text-white fw-bold position-absolute top-0 start-0">
              $5 - $20
            </span>
          </div>
          <div class="card-body">
            <h4 class="card-title ">{name}</h4>
            <p class="card-text py-2">
              {parseInt(start) === 5 ? (
                <>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </>
              ) : (
                <>
                  {" "}
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </>
              )}
            </p>
            <button class="my-btn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularFood;
