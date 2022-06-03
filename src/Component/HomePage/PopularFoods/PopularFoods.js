import React, { useEffect, useState } from "react";
import PopularFood from "../../Shear/PopularFood/PopularFood";

const PopularFoods = () => {
  const [popularFoods, setPopularFoods] = useState([]);
  useEffect(() => {
    fetch("PopularFoods.json")
      .then((res) => res.json())
      .then((data) => setPopularFoods(data));
  }, []);
  return (
    <section className="mb-5">
      <div className="container mx-auto">
        <h2 class="text-muted text-center fw-bold py-4">
          Most <span class="text-danger">Popular</span> Foods
        </h2>

        <div className="row row-cols-md-2 g-3 row-cols-lg-3">
          {popularFoods.map((popular) => (
            <PopularFood popular={popular} key={popular._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularFoods;
