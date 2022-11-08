import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Home"))
    expect(screen.getByText("Home")).toBeInTheDocument()
  })
  it("has nav links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    // screen.logTestingPlaygroundURL()
    const navRole = screen.getByRole('link', { name: /home/i })
    expect(screen.getByText("View Listings")).toBeInTheDocument()

  })
  
})
