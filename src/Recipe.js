import React from "react";
import "./App.css";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  healthLabels,
  people,
  dietLabels
}) => {
  return (
    <div className="recipe">
      <h3>{title}</h3>

      <div className="wrapper">
        <div className="card-container">
          <div className="card">
            <figure className="front">
              <p className="paragraph">Take a look!</p>
            </figure>
            <figure className="back">
              <img className="image" src={image} alt="Food" />
            </figure>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <figure className="front">
              <p className="paragraph">Ingredients</p>
            </figure>
            <figure className="back">
              <div>
                <ul>
                  {ingredients.map(ingredient => (
                    <li key={Math.random()} className="bluetext">
                      {ingredient.text}
                    </li>
                  ))}
                </ul>
              </div>
            </figure>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <figure className="front">
              <p className="paragraph">Quantity and Calories</p>
            </figure>
            <figure className="back">
              <div>
                <p className="paragraph-three">Serves {people} people</p>
                <p className="paragraph-three">
                  {Math.round(calories)}
                  {""} calories per person
                </p>
                {dietLabels.map(item => (
                  <p key={Math.random()} className="paragraph-three">
                    {item}
                  </p>
                ))}
              </div>
            </figure>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <figure className="front">
              <p className="paragraph">Health Labels</p>
            </figure>
            <figure className="back">
              <div className="labels">
                {healthLabels.map(item => (
                  <p key={Math.random()} className="paragraph-two">
                    {item}
                  </p>
                ))}
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
