import React, { useEffect, useState } from "react";
import Speciality from "../../Speciality/Speciality";

const OurSpeciality = () => {
  const [speciality, setSpeciality] = useState([]);
  useEffect(() => {
    fetch("OurSpeciality.json")
      .then((res) => res.json())
      .then((data) => setSpeciality(data));
  }, []);
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <h2 className="text-muted text-center fw-bold py-4">
          Our <span className="text-danger">Speciality</span>
        </h2>
        <div className="row row-cols-md-2 g-3 row-cols-lg-3">
          {speciality.map((speciality) => (
            <Speciality key={speciality._id} speciality={speciality} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpeciality;
