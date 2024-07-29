import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", async () => {
  render(<Article />);
  screen.debug();

  const textElement = await screen.findByText(/please pass this test/i);

  
   
  
  expect(textElement).toBeInTheDocument();
});
