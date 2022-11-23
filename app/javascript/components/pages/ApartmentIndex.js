import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const ApartmentIndex = ({ apartments }) => {
  return (
    <>
      <h3>ApartmentIndex</h3>
      <main className="apt-index-cards">
        {
          apartments?.map((apartment, index) => {
            return (
              <Card
                style={{
                  width: "14rem"
                }}
                key={index}
              >
                <img alt={`image of apartment in ${apartment.state}`} src={apartment.image} />
                <CardBody>
                  <CardTitle tag="h5">{`$${apartment.price}/month`}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Beds: {apartment.bedrooms}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Baths: {apartment.bathrooms}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Location: {`${apartment.street}, ${apartment.city}, ${apartment.state}`}
                  </CardSubtitle>
                  <Button>
                    <NavLink to={`/apartmentshow/${apartment.id}`} className="nav-link">
                      See More Details
                    </NavLink>
                  </Button>
                </CardBody>
              </Card>
            )
          })
        }
      </main>
    </>
  )
}

export default ApartmentIndex
