import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"

describe("<Home />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
    // screen.debug()
    const element = screen.getByText("Welcome to Chateau Instructor")
    expect(element).toBeInTheDocument()
    // screen.logTestingPlaygroundURL()
    // displays a url to paste in the browser so you can see the various queries to run on the test file
  })

  test("has an image with src and alt attributes", () => {
    // src using a query on the screen
    const altImage = screen.getByAltText(/image of/i)
    // screen.debug(altImage)
    expect(altImage).toBeInTheDocument()

    const homeImage = screen.getByRole("img")
    // screen.debug(homeImage)
    expect(homeImage).toHaveAttribute("src", "this is mock pic")

    // alt using a query on the document
    const docImage = document.querySelector("img")
    // screen.debug(docImage)
    expect(docImage.alt).toContain("image of apartment")
  })
})
