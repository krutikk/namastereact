import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should Load Restaurant Menu Component", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </BrowserRouter>
  );

  const accordionHeader = await screen.findByText("Pot Rice ▼");
  fireEvent.click(accordionHeader);
  const foodItems = await screen.findAllByTestId("foodItems");
  expect(foodItems.length).toBe(3);

  expect(await screen.findByText("Cart (0 items)")).toBeInTheDocument();

  const addBtns = await screen.findAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[0]);

  expect(await screen.findByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(await screen.findByText("Cart (2 items)")).toBeInTheDocument();

  const items = await screen.findAllByTestId("foodItems");
  expect(items.length).toBe(5);

  fireEvent.click(await screen.findByRole("button", { name: "Clear Cart" }));
  const allcartsItems = await screen.findAllByTestId("foodItems");
  expect(allcartsItems.length).toBe(3);

  expect(
    await screen.findByText("Your cart is empty")
  ).toBeInTheDocument();
});
