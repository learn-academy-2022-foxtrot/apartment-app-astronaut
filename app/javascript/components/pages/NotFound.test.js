import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "./NotFound"

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const notFoundImage = screen.getByRole("img")
    // screen.debug(notFoundImage)
    expect(notFoundImage).toHaveAttribute("src", "https://images.unsplash.com/photo-1625241310933-640978bb5176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bm8lMjB2YWNhbmN5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60")
    expect(notFoundImage).toHaveAttribute("alt", "no vacancy neon sign")
  })
})
