import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const MyApartment = (current_user, { apartments }) => {
  console.log(current_user)
  return (
    <>
      <h3>My Apartment</h3>
      {
        apartments?.map((apartment, index) => {
          return (
            <div key={index}>
              {current_user.id === apartment.id &&
                <Card style={{ width: "14rem" }}>
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
                    <Button>See More Details</Button>
                  </CardBody>
                </Card> 
              }
            </div>
          )
        })
      }
    </>
  )
}

export default MyApartment
