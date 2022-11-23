import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import mockApts from "../mockApartments"
import ApartmentEdit from "./ApartmentEdit"

describe("<ApartmentEdit />", () => {
  beforeEach(() => {
    const current_user = {
      email: "test@example.com",
      password: "password",
      id: 1
    }
    const mock = jest.fn()
    render(
      <MemoryRouter initialEntries={["/apartmentedit/1"]}>
        <Routes>
          <Route path="/apartmentedit/:id" element={<ApartmentEdit apartments={ mockApts } current_user={current_user} updateApartment={mock}/>} />
        </Routes>
      </MemoryRouter>
    )
    // screen.debug()
  })
  it("renders without crashing", () => {
    // expect(screen.getByText("ApartmentShow")).toBeInTheDocument()
    // expect(screen.getByText(/vacant apartment/i)).toBeInTheDocument()
    // expect(screen.getByRole("heading", { name: /4 Privet Dr/i })).toBeInTheDocument()
  })
})
