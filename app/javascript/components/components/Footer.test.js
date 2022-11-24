import React from "react"
import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Footer />, div)
  expect(screen.getByText(/rubber duck/i)).toBeInTheDocument()
  })
})
