import { render } from "@testing-library/react";
import Field from "./Field";
import React from "react";
import { LanguageStore } from "../contexts/LanguageContext";

describe("testing is nice", () => {
  it("should do things", () => {
    const rendered = render(
      <LanguageStore>
        <Field />
      </LanguageStore>
    );
    expect(rendered.getByText("Name")).toBeInTheDocument();
  });
});
