import React from "react";
import "./BannerSection.css";
import banner from "../../../Assets/images/home-img.png";

const BannerSection = () => {
  return (
    <section class="mt-5 banner-section" id="home">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center g-4">
          <div class="col-md-6 order-md-1 order-sm-2 order-2">
            <div>
              <h1 class="display-5 fw-bold pb-3">Food Made With Love</h1>
              <p class="text-muted">
                Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
                Voluptas Accusamus Tempore Temporibus Rem Amet Laudantium Animi
                Optio Voluptatum. Natus Obcaecati Unde Porro Nostrum Ipsam
                Itaque Impedit Incidunt Rem Quisquam Eos!
              </p>
              <button class="my-btn">Order Now</button>
            </div>
          </div>
          <div class="col-md-6 order-md-2 order-sm-1 order-1">
            <div>
              <img src={banner} alt="" class="img-fluid banner-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
