import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { TouchableOpacity } from "react-native-gesture-handler";
import { v4 as uuidv4 } from "uuid";
import { View, ViewStyle, Text, Image, ImageStyle, TextStyle } from "react-native";
import { colors } from "../theme";
import * as ImagePicker from 'expo-image-picker';

export const AdvertForm = (props) => {


  const [Advert, setAdvert] = useState({
    adname: props.Advert ? props.Advert.adname : "",
    description: props.Advert ? props.Advert.description : "",
    quantity: props.Advert ? props.Advert.quantity : "",
    latitude: props.Advert ? props.Advert.latitude : "",
    longitude: props.Advert ? props.Advert.longitude : "",
    date: props.Advert ? props.Advert.date : "",
  })

  const [errorMsg, setErrorMsg] = useState("")
  const { adname, description, quantity, latitude, longitude, date } = Advert

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const values = [adname, description, quantity, latitude, longitude, date]
    let errorMsg = ""

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim()
      return value !== "" && value !== "0"
    })

    if (allFieldsFilled) {
      const Advert = {
        id: uuidv4(),
        adname,
        description,
        quantity,
        latitude,
        longitude,
        date: new Date(),
      }
      props.handleOnSubmit(Advert)
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
          setAdvert((prevState) => ({
            ...prevState,
            [name]: value,
          }))
        }
        break
      case "latitude":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setAdvert((prevState) => ({
            ...prevState,
            [name]: value,
          }))
        }
        break
      case "longitude":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setAdvert((prevState) => ({
            ...prevState,
            [name]: value,
          }))
        }
        break
      default:
        setAdvert((prevState) => ({
          ...prevState,
          [name]: value,
        }))
    }
  }
  const [image, setImage] = useState('');
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const pickImageCamera = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.status === 'granted') {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } 
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Advert Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="adname"
            value={adname}
            placeholder="Enter name of Advert"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Advert description</Form.Label>
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
        <TouchableOpacity onPress={pickImageCamera}>
          <Text>Prendre photo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={pickImage}>
          <Text>Télécharger</Text>
        </TouchableOpacity>

          <Image source={{ uri: image }} style={{width:200, height: 200, margin: 10}}  />

        <Button variant="dark" type="submit" className="submit-btn py-2 px-4 mt-4">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AdvertForm;

const $btnImg: ViewStyle = {
  backgroundColor: colors.cardbg,
  marginTop: '4px',
  padding: '4px',
  justifyContent: 'center'
}
