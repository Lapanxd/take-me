import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"

export const AdForm = (props) => {
  const [Ad, setAd] = useState({
    adname: props.Ad ? props.Ad.adname : "",
    description: props.Ad ? props.Ad.description : "",
    quantity: props.Ad ? props.Ad.quantity : "",
    latitude: props.Ad ? props.Ad.latitude : "",
    longitude: props.Ad ? props.Ad.longitude : "",
    date: props.Ad ? props.Ad.date : "",
  })

  const [errorMsg, setErrorMsg] = useState("")
  const { adname, description, quantity, latitude, longitude } = Ad

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const values = [adname, description, quantity, latitude, longitude]
    let errorMsg = ""

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim()
      return value !== "" && value !== "0"
    })

    if (allFieldsFilled) {
      const Ad = {
        id: uuidv4(),
        adname,
        description,
        quantity,
        latitude,
        longitude,
        date: new Date(),
      }
      props.handleOnSubmit(Ad)
    } else {
      errorMsg = "Please fill out all the fields."
    }
    setErrorMsg(errorMsg)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setAd((prevState) => ({
            ...prevState,
            [name]: value,
          }))
        }
        break
      case "latitude":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setAd((prevState) => ({
            ...prevState,
            [name]: value,
          }))
        }
        break
      case "longitude":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setAd((prevState) => ({
            ...prevState,
            [name]: value,
          }))
        }
        break
      default:
        setAd((prevState) => ({
          ...prevState,
          [name]: value,
        }))
    }
  }

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Ad Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="adname"
            value={adname}
            placeholder="Enter name of Ad"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Ad description</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="description"
            value={description}
            placeholder="Enter name of description"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="longitude">
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="longitude"
            value={longitude}
            placeholder="longitude"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="latitude">
          <Form.Label>latitude</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="latitude"
            value={latitude}
            placeholder="latitude"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AdForm
