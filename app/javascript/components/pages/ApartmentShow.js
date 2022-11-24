import React from "react"
import { useParams, useNavigate, NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"

const ApartmentShow = ({ apartments, current_user, deleteApt }) => {
  const { id } = useParams()
  // console.log(id)
  const navigate = useNavigate()
  const currentApt = apartments.find((apt) => apt.id === +id)
  // console.log(currentApt)
  const handleDelete = () => {
    deleteApt(currentApt.id)
    navigate("/apartmentindex")
  }
  return (
    <>
      <h3>ApartmentShow</h3>
      <main className="apt-show-cards">
        {currentApt && (
          <Card
            style={{
              width: "18rem"
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
                {`Vacant Apartment for $${currentApt.price}/Month`}
              </CardTitle>
              <img
                alt={`profile of apartment in ${currentApt.state}`}
                src={currentApt.image}
                className="apt-show-img"
                width="100%"
              />
              <CardTitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {`${currentApt.street}, ${currentApt.city}, ${currentApt.state}`}
              </CardTitle>
              <CardText>
                Bedrooms: {currentApt.bedrooms}
              </CardText>
              <CardText>
                Bathrooms: {currentApt.bathrooms}
              </CardText>
              <CardText>
                Pets allowed: {currentApt.pets}
              </CardText>
              <CardText>
                {`Contact ${currentApt.manager} at ${currentApt.email}`}
              </CardText>
            </CardBody>
            {currentApt.user_id === current_user.id &&
              <>
                <Button>
                  <NavLink to={`/apartmentedit/${currentApt.id}`} className="nav-link">
                    Modify Apartment
                  </NavLink>
                </Button>
                <Button onClick={handleDelete} name="submit">
                  Delete Apartment
                </Button>
              </>
            }
          </Card>
        )}
      </main>
    </>
  )
}

export default ApartmentShow
