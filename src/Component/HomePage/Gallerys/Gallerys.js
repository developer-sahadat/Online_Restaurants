import React, { useEffect, useState } from "react";
import Gallery from "../../Shear/gallery/Gallery";

const Gallerys = () => {
  const [gallerys, setGallerys] = useState([]);
  useEffect(() => {
    fetch("Gallerys.json")
      .then((res) => res.json())
      .then((data) => setGallerys(data));
  }, []);
  return (
    <section className="py-5">
      <h2 class="text-muted text-center fw-bold py-4">
        Our Food <span class="text-danger">Gallery</span>{" "}
      </h2>
      <div className="container">
        <div className="row row-cols-md-2 g-3  row-cols-lg-3">
          {gallerys.map((gallery) => (
            <Gallery gallery={gallery} key={gallery._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallerys;
