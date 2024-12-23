import Pizza from "./pizza";
import {useEffect, useState } from "react";
import Cart from "./cart";

const intl = new Intl.NumberFormat("en-Us",{
    style: "currency",
    currency: "USD"
  })  


export default function order() {
  
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  async function checkout() {
    // Set loading state to true
    setLoading(true);

    // Send a POST request to the server to create an order
    await fetch("/api/order", {
        method: "POST", // Use POST method
        headers: {
            "content-Type": "application/json" // Set content type to JSON
        },
        body: JSON.stringify({ cart }), // Convert cart object to JSON string and include in request body
    });

    // Clear the cart
    setCart([]);

    // Set loading state to false
    setLoading(false);
}



  let price, selectedPizza;

  if(!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);

    price = intl.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
    
  }

  async function fetchPizzaTypes() {
    
    
    const pizaa_response = await fetch("/api/pizzas");
    const pizza_data = await pizaa_response.json();
    setPizzaTypes(pizza_data);
    setLoading(false)
  }

  
  useEffect (() => {
    fetchPizzaTypes();
  },[]);  


  return (
    <div className="order-page">
    <div className="order">
      <h2>Create Order</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        setCart([...cart,{pizza: selectedPizza, size: pizzaSize ,  price}]);
      }}
        >
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(event) => setPizzaType(event.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Type</label>
            <div>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "S"}
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />

                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  onChange={(e) => setPizzaSize(e.target.value)}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />

                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />

                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        {loading ? (
          <h3>LOADING …</h3>
        ) : (
          <div className="order-pizza">
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
            />
            <p>{price}</p>
          </div>
        )}
      </form>
    </div>
    {
        loading ? <h2>Loading....</h2> : <Cart checkout={checkout} cart={cart} />
      }
    </div>

  );
}
