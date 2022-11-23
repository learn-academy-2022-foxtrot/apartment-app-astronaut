import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
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
    // console.log(location.pathname)
  })
  it("has clickable links for a registered user", async () => {
    render(
      <BrowserRouter>
        <Navigation logged_in={true}/>
      </BrowserRouter>
    )
    await userEvent.click(screen.getByRole("link", {
      name: /home/i
    }))
    expect(screen.getByText("View Listings")).toBeInTheDocument()
    expect(screen.getByText("Sign Out")).toBeInTheDocument()
    expect(screen.getByText("My Listings")).toBeInTheDocument()
    expect(screen.getByText("Create a Listing")).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument()
    // screen.logTestingPlaygroundURL()
  })

  it("has clickable links for a unregistered user", async () => {
    render(
      <BrowserRouter>
        <Navigation logged_in={false} />
      </BrowserRouter>
    )
    console.log("logged out user")
    screen.debug()

    await userEvent.click(screen.getByRole("link", {
      name: /home/i
    }))
    expect(screen.getByText("View Listings")).toBeInTheDocument()
    expect(screen.getByText("Sign In")).toBeInTheDocument()
    expect(screen.getByText("Sign Up")).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument()
    // screen.logTestingPlaygroundURL()
  })

  it("has links that change the url", async () => {
    render(
      <BrowserRouter>
        <Navigation logged_in={true} sign_out_route="/users/sign_out"/>
      </BrowserRouter>
    )

    screen.logTestingPlaygroundURL()
    // view listings
    const viewLink = screen.getByRole("link", { name: /view list/i })
    // reference: https://javascript.plainenglish.io/testing-flow-creating-react-app-21399ff25c7c
    fireEvent.click(viewLink)
    expect(location.pathname).toBe("/apartmentindex")

    // create a listing
    const createLink = screen.getByRole("link", { name: /create/i })
    fireEvent.click(createLink)
    console.log("create a listing", location.pathname)
    expect(location.pathname).toBe("/apartmentnew")

    // sign out
    const outLink = screen.getByRole("link", { name: /sign out/i })
    // const outLink = screen.queryByText(/sign out/i)
    screen.debug(outLink)
    fireEvent.click(outLink)
    expect(outLink.getAttribute("href")).toBe("/users/sign_out")
  })
})
