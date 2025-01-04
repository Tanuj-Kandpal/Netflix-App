import { render, screen } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import HomePage from "../Pages/HomePage";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom";

test("SignIn Button should be displayed", async () => {
  // Render the component
  render(
    <StaticRouter>
      <HomePage />
    </StaticRouter>
  );

  // Use `findByTestId` (singular) if you expect only one element with the given test ID.
  const signInButton = await screen.findByTestId("signInButton");
  // Optionally, log it to the console
  // console.log();

  // Assert the button is in the document
  expect(signInButton).toBeInTheDocument();
  // expect(signInButton.innerHTML).toBe("SignIn");
});

test("Netflix Logo should be visible", async () => {
  // Render the component
  render(
    <StaticRouter>
      <HomePage />
    </StaticRouter>
  );

  // Use `findByTestId` (singular) if you expect only one element with the given test ID.
  const netflixLogo = await screen.getByTestId("netflix-logo");

  // Assert the button is in the document
  expect(netflixLogo.querySelector("svg").tagName).toBe("svg");
});
