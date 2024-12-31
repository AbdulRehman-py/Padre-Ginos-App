import { render, screen } from "vitest-browser-react";
import { expect, test } from "vitest";
import React from "react";
import { createRootRoute } from "react-dom/client";
import Header from "../Header";
import {
  RouterProvider,
  createRouter,
  createRootRoute,
} from "@tanstack/react-router";
import { CartContext } from "../contexts";

test("correctly renders a header with a zero cart count", async () => {
  const rootRoute = createRootRoute({
    component: () => (
      <CartContext.Provider value={[[]]}>
        <Header />
      </CartContext.Provider>
    ),
  });

  const router = createRouter({ routeTree: rootRoute });
  render(<RouterProvider router={router}></RouterProvider>);

  const itemsInCart = await screen.findByTestId("cart-number");

  expect(itemsInCart).toBeInTheDocument();
  expect(itemsInCart).toHaveTextContent("0");
});

test("correctly renders a header with a three cart count", async () => {
  const rootRoute = createRootRoute({
    component: () => (
      <CartContext.Provider
        value={[[{ pizza: 1 }, { pizza: 2 }, { pizza: 3 }]]}
      >
        <Header />
      </CartContext.Provider>
    ),
  });

  const router = createRouter({ routeTree: rootRoute });
  render(<RouterProvider router={router}></RouterProvider>);

  const itemsInCart = await screen.findByTestId("cart-number");

  expect(itemsInCart).toBeInTheDocument();
  expect(itemsInCart).toHaveTextContent("3");
});