import React from "react";
import order from "../../../Assets/images/order-img.jpg";

const Contact = () => {
  return (
    <div class="order-section my-5">
      <div class="container">
        <h2 class="text-muted text-center fw-bold py-4">
          <span class="text-danger">Order</span> Now
        </h2>
        <div class="row row-cols-lg-2 row-cols-md-2 shadow p-3 d-flex justify-content-center align-items-center">
          <div>
            <div class="pb-lg-0 pb-sm-4 pb-4">
              <img class="img-fluid rounded" src={order} alt="" />
            </div>
          </div>
          <div>
            <div>
              <div class="row g-4">
                <div class="col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="name"
                    aria-label="name"
                  />
                </div>
                <div class="col-6">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="email"
                    aria-label="email"
                  />
                </div>
                <div class="col-6">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="number"
                    aria-label="number"
                  />
                </div>
                <div class="col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="food Name"
                    aria-label="food"
                  />
                </div>

                <div class="col-12">
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "150px" }}
                    ></textarea>
                    <label for="floatingTextarea2">Address</label>
                  </div>
                  <br />
                  <button class="my-btn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
