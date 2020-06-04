import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "b3122406";
  const APP_KEY = "6953ae6adffe334a5e0826bbda0ca08b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <nav className="navbar">
        <p>Recipes</p>
      </nav>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="I want to eat..."
          onChange={updateSearch}
        />
        <button className="glow-on-hover search-button" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            healthLabels={recipe.recipe.healthLabels}
            people={recipe.recipe.yield}
            dietLabels={recipe.recipe.dietLabels}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
