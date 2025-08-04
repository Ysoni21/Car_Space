import React, { useState } from "react";
import "../App.css";

function FeaturedCars() {
  const [visibleImage, setVisibleImage] = useState(null);

  const cars = [
    {
      title: "Mustang GT",
      desc: "Powerful American muscle car with a roaring V8 engine.",
      image: "/Mustang.jpg",
      position: "left",
      wiki: "https://en.wikipedia.org/wiki/Ford_Mustang"
    },
    {
      title: "Nissan GTR",
      desc: "Japanese beast known for its speed, control and design.",
      image: "/Nissan.jpg",
      position: "middle",
      wiki: "https://en.wikipedia.org/wiki/Nissan_GT-R"
    },
    {
      title: "Rolls Royce",
      desc: "A symbol of luxury and comfort with world class customization.",
      image: "/Rolls Royce.jpg",
      position: "right",
      wiki: "https://en.wikipedia.org/wiki/Rolls-Royce_Cullinan"
    }
  ];

  const toggleImage = (index) => {
    setVisibleImage(visibleImage === index ? null : index);
  };

  return (
    <div className="card-container">
      {cars.map((car, index) => (
        <div key={index} className="car-card" onClick={() => toggleImage(index)}>
          <h3>{car.title}</h3>
          <p>{car.desc}</p>
          {visibleImage === index && (
            <a
              className={`slide-image ${car.position} show`}
              href={car.wiki}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={car.image} alt={car.title} />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default FeaturedCars;