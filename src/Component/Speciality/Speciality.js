import React from "react";
import "./Speciality.css";

const Speciality = ({ speciality }) => {
  const { description, img, icons, title } = speciality;
  console.log(speciality);
  return (
    <div className="col-md-6 col-lg-4 col-sm-6 ">
      <div className="shadow border border-dark our-speciality overflow-hidden position-relative">
        <img
          src={img}
          alt=""
          className="img-fluid rounded speciality-img w-100 h-100"
        />
        <div className="content p-4 text-center">
          <img src={icons} alt="" />
          <h3 className="pt-3">{title}</h3>
          <p className="text-muted pt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
