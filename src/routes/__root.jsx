import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useState } from "react";
import PizzaOfTheDay from "../PizzaOfTheDay";
import Header from "../Header";
import { CartContext } from "../contexts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // Correct import path

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);
    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});