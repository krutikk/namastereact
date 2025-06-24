import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/rescardMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for burger text input ", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  const cardsBeforeSearch = await screen.findAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = await screen.findByRole("button", { name: "Search" });

  const searchInput =await screen.findByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = await screen.findAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter Top Rated Restaurant", async () => {
  
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  

  const cardsBeforeFilter = await screen.findAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedBtn = await screen.findAllByRole("button", {
    name: "Top Rated Restaurant",
  });
fireEvent.click(topRatedBtn[0]);

  const cardsAfterFilter = await screen.findAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(2);
});
