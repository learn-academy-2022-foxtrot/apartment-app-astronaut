import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import ApartmentNew from "./ApartmentNew"
import userEvent from "@testing-library/user-event"

describe("<ApartmentNew />", () => {
  beforeEach(() => {
    const current_user = {
      email: "test@example.com",
      password: "password",
      id: 1
    }

    // mock function to represent createApartment()
    const mock = jest.fn()

    render(
      <BrowserRouter>
        <ApartmentNew current_user={current_user} createApartment={mock}/>
      </BrowserRouter>
    )
    // screen.debug()
  })

  it("renders without crashing", () => {
    // screen.debug()
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole("button", {
      name: /submit apartment/i
    })).toBeInTheDocument()
  })

  it("redirects to MyApartment", () => {
    const submitButton = screen.getByRole("button", {
      name: /submit apartment/i
    })
    // screen.debug()
    fireEvent.click(submitButton)
    expect(location.pathname).toBe("/myapartment")
  })

  // userEvent
  test("render street input", () => {
    const newInput = screen.getAllByRole("textbox")
    expect(newInput[0]).toBeInTheDocument()
    expect(newInput[0]).toHaveAttribute("name", "street")
    userEvent.type(newInput[0], "227 Queens Ct")
    expect(newInput[0]).toHaveValue("227 Queens Ct")
  })

  // fireEvent
  test("should change input value", () => {
    const cityInputElement = screen.getByPlaceholderText(/enter city/i)
    fireEvent.change(cityInputElement, {
      target: { value: "Fake City" }
    })
    expect(cityInputElement.value).toBe("Fake City")
  })
})
