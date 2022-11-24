import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"

import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import Home from "./pages/Home"
import MyApartment from "./pages/MyApartment"
import NotFound from "./pages/NotFound"

import mockApartments from "./mockApartments"

const App = (props) => {
  const [apartments, setApartments] = useState(mockApartments)

  useEffect(() => {
    readApartments()
  }, [])

  const readApartments = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => {
        setApartments(payload)
      })
      .catch((error) => console.log(error))
  }

  const createApartment = (apartment) => {
    // console.log(apartment)
    fetch("/apartments", {
      // converts the object to a string that can be passed in the request
      body: JSON.stringify(apartment),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readApartments())
      .catch((errors) => console.log("Apartment create errors:", errors))
  }

  const updateApt = (updatedApt, id) => {
    fetch(`/apartments/${id}`, {
      // converting an object to a string
      body: JSON.stringify(updatedApt),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // and will update our controller method
      method: "PATCH"
    })
      .then(response => response.json())
      .then(payload => readApartments())
      .catch(errors => console.log("Apartment update errors:", errors))
  }

  const deleteApt = (id) => {
    console.log(id)
    fetch(`/apartments/${id}`, {
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // and will update our controller method
      method: "DELETE"
    })
      .then(response => response.json())
      .then(payload => readApartments())
      .catch(errors => console.log("Apartment delete errors:", errors))
  }

  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
        <Route path="/myapartment" element={<MyApartment {...props} apartments={apartments}/>} />
        <Route path="/apartmentshow/:id" element={<ApartmentShow {...props} apartments={apartments} deleteApt={deleteApt}/>} />
        <Route path="/apartmentnew" element={<ApartmentNew {...props} createApartment={createApartment}/>} />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit apartments={apartments} updateApt={updateApt}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
