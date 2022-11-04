import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import mockApartments from "../mockApartments"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentIndex />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={mockApartments} />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
    const indexHeading = screen.getByText("ApartmentIndex")
    expect(indexHeading).toBeInTheDocument()
  })

  test("renders apartment cards", () => {
    mockApartments.forEach(apartment => {
      // street
      const apartmentStreet = screen.getByText(`Location: ${apartment.street}, ${apartment.city}, ${apartment.state}`)
      expect(apartmentStreet).toBeInTheDocument()
    })

    // image
    const apartmentImage = screen.getAllByRole("img")
    screen.debug(apartmentImage[0])
    expect(apartmentImage[0]).toBeVisible()
  })
})
