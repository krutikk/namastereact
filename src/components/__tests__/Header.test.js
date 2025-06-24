import { render } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { fireEvent } from "@testing-library/react";

it("Should load with login button", () => {
  const { getByRole } = render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should load with logo", () => {
  const { getByRole } = render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const logo = getByRole("img");
  expect(logo).toBeInTheDocument();
});

it("Should load cart with 0 items", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartButton = getByText("Cart (0 items)");
  expect(cartButton).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
  const { getByRole } = render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


  const loginButton = getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
