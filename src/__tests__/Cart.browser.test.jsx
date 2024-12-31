import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import  Cart  from "../Cart";

test("renders the cart", () => {
    const { asFragment } = render(<Cart cart={[]}/>);
    expect(asFragment()).toMatchSnapshot();
});