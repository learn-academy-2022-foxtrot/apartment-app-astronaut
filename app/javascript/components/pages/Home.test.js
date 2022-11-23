import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"


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

  test("has clickable links for a registered user", async () => {
    screen.debug()
    // shows path url
    console.log(window.location.href);
    expect(location.pathname).toBe("/")
    // await userEvent.click(screen.getByRole('link', {
    //   name: /home/i
    // }))
    // expect(screen.getByText("View Listings")).toBeInTheDocument()
    // expect(screen.getByText("Sign Out")).toBeInTheDocument()
    // expect(screen.getByText("My Listings")).toBeInTheDocument()
    // expect(screen.getByText("Create a Listing")).toBeInTheDocument()
    // expect(screen.getByText("Home")).toBeInTheDocument()
    // screen.logTestingPlaygroundURL()
  })
})
