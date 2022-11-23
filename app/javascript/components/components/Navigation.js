import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = ({
  logged_in,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  console.log(sign_out_route)
  console.log(logged_in)
  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/apartmentindex" className="nav-link">
            View Listings
          </NavLink>
        </NavItem>
        {logged_in
          ? (
          <>
            <NavItem>
              <a href={sign_out_route} className="nav-link">
                Sign Out
              </a>
            </NavItem>
            <NavItem>
              <NavLink to="/myapartment" className="nav-link">
                My Listings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentnew" className="nav-link">
                Create a Listing
              </NavLink>
            </NavItem>
          </>
            )
          : (
            <>
              <NavItem>
                <a href={sign_in_route} className="nav-link">
                  Sign In
                </a>
              </NavItem>
              <NavItem>
                <a href={new_user_route} className="nav-link">
                  Sign Up
                </a>
              </NavItem>
            </>
            )}
      </Nav>
    </>
  )
}

export default Navigation
