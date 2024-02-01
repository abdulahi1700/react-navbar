import React from "react";

function Course({ title, price, isnan }) {
  //   const name = "React js course";
  //   console.log(props);
  return (
    <div className="course">
      <h4>{title ?? "unlocated"}</h4>
      <div className="course-info">
        <p style={{ color: "#ff0" }}>{isnan ? "New" : "Used"}</p>
        <p style={{ color: "#ddd" }}>
          {" "}
          price: {price > 0 ? `$ ${price}` : "Free"}
        </p>
      </div>
    </div>
  );
}

export default Course;
