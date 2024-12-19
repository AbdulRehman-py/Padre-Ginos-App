import React from "react";
import {createRoot} from "react-dom/client";


const pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.title),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "padre gino's"),
    React.createElement(pizza, {
      title: "Pepperoni",
      description: "Pepperoni, cheese, tomato sauce",
    }),
    React.createElement(pizza, {
      title: "Margherita",
      description: "Mozzarella, tomato sauce, basil",
    }),
    React.createElement(pizza, {
      title: "Hawaiian",
      description: "Pineapple, ham, cheese, tomato sauce",
    }),
    React.createElement(pizza, {
      title: "BBQ Chicken",
      description: "BBQ sauce, chicken, cheese, onion",
    }),
    React.createElement(pizza, {
      title: "Vegetarian",
      description: "Mushrooms, bell peppers, olives, cheese, tomato sauce",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
