import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import mockApts from "../mockApartments"
import ApartmentShow from "./ApartmentShow"

describe("<ApartmentShow />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/apartmentshow/1"]}>
        <Routes>
          <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={ mockApts }/>} />
        </Routes>
      </MemoryRouter>
    )
    // screen.debug()
  })
  it("renders without crashing", () => {
    expect(screen.getByText("ApartmentShow")).toBeInTheDocument()
    expect(screen.getByText(/vacant apartment/i)).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /4 Privet Dr/i })).toBeInTheDocument()
  })
})
