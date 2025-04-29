import { useState } from "react";
import "./testimonials.css";

function Testimonials() {
  let [curIndex, setCurIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handlePrevClick = () => {
    setCurIndex((curIndex + testimonials.length - 1) % testimonials.length);
  };
  const handleNextClick = () => {
    setCurIndex((curIndex + testimonials.length + 1) % testimonials.length);
  };
  return (
    <div className="testimonials">
      <div className="testimonials-quote">{testimonials[curIndex].quote}</div>
      <div className="testimonials-author">
        - {testimonials[curIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
