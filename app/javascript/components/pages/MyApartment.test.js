import React from "react"
import { render, screen } from "@testing-library/react"
import MyApartment from "./MyApartment"
import mockApartments from "../mockApartments"
import { BrowserRouter, useParams } from "react-router-dom"

describe("<MyApartment />", () => {
  beforeEach(() => {
    const current_user = {
      email: "test@example.com",
      password: "password",
      id: 1
    }
    console.log(current_user)
    const apartments = [
      {
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
        street: "15 Yemen Road",
        city: "Yemen",
        state: "Yemen",
        manager: "Mr. Bing",
        email: "bing@example.com",
        price: 1000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image: "https://i.pinimg.com/736x/4f/c1/ce/4fc1ce196ea1412f670d477a026ba2c6--saudi-arabia-drawing-reference.jpg",
        user_id: 1
      },
      {
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

    const myApartments = apartments.filter(apartment => apartment.user_id === current_user.id)

    render(
      <BrowserRouter>
        <MyApartment current_user={current_user} apartments={myApartments}/>
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
    // screen.logTestingPlaygroundURL()

    const myHeading = screen.getByRole("heading", {
      name: /my apartment/i
    })
    expect(myHeading).toBeInTheDocument()
  })

  test("renders apartment imagess", () => {
    // all images
    const apartmentImage = screen.getAllByRole("img")
    screen.debug(apartmentImage[0])
    expect(apartmentImage[0]).toBeVisible()
    expect(apartmentImage.length).toBe(2)

    // single image
    const firstImage = screen.getByRole("img", {
      name: /image of apartment in surrey/i
    })
    expect(apartmentImage[0]).toBe(firstImage)
  })
})
