import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom"
import mockApts from "../mockApartments"
import ApartmentEdit from "./ApartmentEdit"
import MyApartment from "./MyApartment"

describe("<ApartmentEdit />", () => {
  beforeEach(() => {
    const current_user = {
      email: "test@example.com",
      password: "password",
      id: 1
    }

    const apartments = [
      {
        id: 1,
        street: "423 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image: "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: 1
      },
      {
        id: 2,
        street: "742 Evengreen Terrace",
        city: "Springfield",
        state: "Any State",
        manager: "Mr. Simpson",
        email: "simpson@example.com",
        price: 1000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image: "https://upload.wikimedia.org/wikipedia/en/c/ca/742_Evergreen_Terrace.png",
        user_id: 2
      }
    ]
    const mock = jest.fn()
    render(
      <MemoryRouter initialEntries={["/apartmentedit/1"]}>
        <Routes>
          <Route path="/apartmentedit/:id" element={<ApartmentEdit apartments={ apartments } current_user={current_user} updateApt={mock} logged_in={true}/>} />
        </Routes>
      </MemoryRouter>
    )
    // screen.debug()
  })

  it("renders without crashing", () => {
    expect(screen.getByText("ApartmentEdit")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /submit apartment/i })).toBeInTheDocument()
  })

  test("should change input value", () => {
    const cityInputElement = screen.getByPlaceholderText(/enter city/i)
    // screen.debug(cityInputElement)
    expect(cityInputElement.value).toBe("Little Whinging")
    fireEvent.change(cityInputElement, {
      target: { value: "Fake City" }
    })
    expect(cityInputElement.value).toBe("Fake City")
    // screen.debug(cityInputElement)
  })

})
