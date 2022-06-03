import React from "react";
import step1 from "../../../Assets/images/step-1.jpg";
import step2 from "../../../Assets/images/step-2.jpg";
import step3 from "../../../Assets/images/step-3.jpg";
import step4 from "../../../Assets/images/step-4.jpg";

const Work = () => {
  return (
    <div class="wrok-section my-5">
      <div class="container">
        <h2 class="text-muted text-center fw-bold py-4">
          How It <span class="text-danger">Works</span>{" "}
        </h2>

        <div class="row g-4">
          <div class="col-md-4 col-lg-3 col-sm-6">
            <div class="text-center">
              <img src={step1} alt="" class="work-img" />

              <h3 class="pt-3 header-tag-color">
                {" "}
                Choose Your <br /> Favorite Food
              </h3>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 col-sm-6">
            <div class="text-center">
              <img src={step2} alt="" class="work-img" />

              <h3 class="pt-3 header-tag-color">
                {" "}
                Free And Fast <br /> Delivery
              </h3>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 col-sm-6">
            <div class="text-center">
              <img src={step3} alt="" class="work-img" />

              <h3 class="pt-3 header-tag-color">
                Easy Payments <br /> Methods
              </h3>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 col-sm-6 ">
            <div class="text-center">
              <img src={step4} alt="" class="work-img" />

              <h3 class="pt-3 header-tag-color">
                And Finally, Enjoy <br /> Your Food
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
