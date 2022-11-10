import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const ApartmentNew = ({ createApartment }) => {
  const navigate = useNavigate()
  const [newApartment, setNewApartment] = useState({
    street: "",
    city: "",
    state: "",
    manager: "",
    email: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    createApartment(newApartment)
    navigate("/apartmentindex")
  }

  return (
    <>
      <h3>ApartmentNew</h3>
      <Form>
        <FormGroup>
          <Label for="street">Street</Label>
          <Input
            type="text"
            name="street"
            onChange={handleChange}
            value={newApartment.street} />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="text"
            name="city"
            onChange={handleChange}
            value={newApartment.city} />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            type="text"
            name="state"
            onChange={handleChange}
            value={newApartment.state} />
        </FormGroup>
        <FormGroup>
          <Label for="manager">Manager</Label>
          <Input
            type="text"
            name="manager"
            onChange={handleChange}
            value={newApartment.manager} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="text"
            name="email"
            onChange={handleChange}
            value={newApartment.email} />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            onChange={handleChange}
            value={newApartment.price} />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input
            type="number"
            name="bedrooms"
            onChange={handleChange}
            value={newApartment.bedrooms} />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            type="number"
            name="bathrooms"
            onChange={handleChange}
            value={newApartment.bathrooms} />
        </FormGroup>
        <FormGroup>
          <Label for="pets">Pets</Label>
          <Input
            type="text"
            name="pets"
            onChange={handleChange}
            value={newApartment.pets} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            type="text"
            name="image"
            onChange={handleChange}
            value={newApartment.image} />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit Apartment
        </Button>
      </Form>
    </>
  )
}

export default ApartmentNew
