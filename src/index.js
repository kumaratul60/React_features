import React from "react";
import ReactDOM from "react-dom";
import FoodPill from "./food-pill";
import calorieData from "./data/calorie-data";

import "./styles.css";

function TotalCalory({ totalCalorie }) {
  return <h2> Your total calorie for today: {totalCalorie}</h2>;
}

function Header({ heading }) {
  return <h1>{heading} </h1>;
}

function FoodTable({ calorieData, foodPillClickHandler }) {
  return calorieData
    .slice(0, 10)
    .map(({ name, measure, calories }) => (
      <FoodPill
        key={name}
        name={name}
        measure={measure}
        calories={calories}
        onFoodPillClick={foodPillClickHandler}
      />
    ));
}

class App extends React.Component {
  state = {
    totalCalorie: 0
  };
  // Put the click handler here.
  foodPillClickHandler = totalCalorie => {
    console.log({ totalCalorie });
    this.setState({ totalCalorie: this.state.totalCalorie + totalCalorie });
  };

  render() {
    return (
      <div className="App">
        <Header heading={"Let's see how many calories"} />
        <FoodTable
          calorieData={calorieData}
          foodPillClickHandler={this.foodPillClickHandler}
        />
        <TotalCalory totalCalorie={this.state.totalCalorie} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
