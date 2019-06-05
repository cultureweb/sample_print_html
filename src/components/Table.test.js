import React from "react";
import { cleanup, render } from "@testing-library/react";
import Table from "./Table";

afterEach(cleanup);

describe("<Table />", () => {
  it("should renders without crashing", () => {
    render(<Table elementCount={3} />);
  });

  it("should renders the given row number", () => {
    const { getAllByTestId } = render(<Table elementCount={50} />);

    const elements = getAllByTestId("table-rows");

    expect(elements).toHaveLength(50);
  });
});
