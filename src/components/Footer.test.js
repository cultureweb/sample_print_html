import React from "react";
import { cleanup, render } from "@testing-library/react";
import Footer from "./Footer";

afterEach(cleanup);

describe("<Footer />", () => {
  it("should renders without crashing", () => {
    render(<Footer />);
  });
});
