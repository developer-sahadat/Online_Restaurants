import React from "react";

const Gallery = ({ gallery }) => {
  const { title, des, img } = gallery;
  return (
    <div>
      <div class="text-center shadow food-gallary position-relative overflow-hidden p-2">
        <div class="gallery-conten p-5 w-100 h-100">
          <h3>{title}</h3>
          <p class="text-muted">{des}</p>
          <button class="my-btn" type="button">
            Order Now
          </button>
        </div>
        <img src={img} alt="" class="img-fluid w-100 h-100 rounded" />
      </div>
    </div>
  );
};

export default Gallery;
