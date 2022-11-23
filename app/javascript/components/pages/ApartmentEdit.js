import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useParams, NavLink, useNavigate } from "react-router-dom"

const ApartmentEdit = ({ apartments, updateApt }) => {
  // console.log(apartments);
  const { id } = useParams()
  // console.log(id)
  const currentApt = apartments.find((apt) => apt.id === +id)
  // console.log(currentApt)
  const navigate = useNavigate()
  const [updateApartment, setUpdateApartment] = useState(
    // street: currentApt.street,
    // city: currentApt.city,
    // state: currentApt.street,
    // manager: currentApt.manager,
    // email: currentApt.email,
    // price: currentApt.price,
    // bedrooms: currentApt.bedrooms,
    // bathrooms: currentApt.bathrooms,
    // pets: currentApt.pets,
    // image: currentApt.image,
    // user_id: currentApt.user_id
    currentApt
  )
  // console.log(updateApartment);
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setUpdateApartment({ ...updateApartment, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    updateApt(updateApartment, id)
    navigate("/myapartment")
  }

  return (
    <>
      <h3>ApartmentEdit</h3>
      <Form>
        <FormGroup>
          <Label for="street">Street</Label>
          <Input
            type="text"
            name="street"
            placeholder="Enter Street"
            onChange={handleChange}
            value={updateApartment.street} />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="text"
            name="city"
            placeholder="Enter City"
            onChange={handleChange}
            value={updateApartment.city} />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            type="text"
            name="state"
            placeholder="Enter State"
            onChange={handleChange}
            value={updateApartment.state} />
        </FormGroup>
        <FormGroup>
          <Label for="manager">Manager</Label>
          <Input
            type="text"
            name="manager"
            placeholder="Enter Manager"
            onChange={handleChange}
            value={updateApartment.manager} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="text"
            name="email"
            placeholder="Enter Manager's Email"
            onChange={handleChange}
            value={updateApartment.email} />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            placeholder="Enter Monthly Cost"
            onChange={handleChange}
            value={updateApartment.price} />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input
            type="number"
            name="bedrooms"
            placeholder="Enter Amount of Bedrooms"
            onChange={handleChange}
            value={updateApartment.bedrooms} />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            type="number"
            name="bathrooms"
            placeholder="Enter Amount of Bathrooms"
            onChange={handleChange}
            value={updateApartment.bathrooms} />
        </FormGroup>
        <FormGroup>
          <Label for="pets">Pets</Label>
          <Input
            type="text"
            name="pets"
            placeholder="Pets Allowed? Yes or No"
            onChange={handleChange}
            value={updateApartment.pets} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            type="text"
            name="image"
            placeholder="Enter URL for photo"
            onChange={handleChange}
            value={updateApartment.image} />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit Apartment
        </Button>
      </Form>
    </>
  )
}

export default ApartmentEdit
