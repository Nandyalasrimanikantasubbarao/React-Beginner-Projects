import { useEffect, useState } from "react";
import "./meals.css";
import axios from "axios";

function Meals() {
  const [items, setiIems] = useState([]);
  useEffect(() => {
    const data = axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setiIems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="items-container">
      {items.map(({ strMeal, strMealThumb, idMeal }) => (
        <div key={idMeal} className=" card">
          <img src={strMealThumb} alt={strMeal} />
          <section className="content">
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Meals;
