import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { TouchableOpacity } from "react-native-gesture-handler";
import { v4 as uuidv4 } from "uuid";
import { View, ViewStyle, Text, Image, ImageStyle, TextStyle } from "react-native";
import { colors, spacing } from "../theme";
import * as ImagePicker from 'expo-image-picker';


// const options = {
//   title: 'Select Image',
//   takePhotoButtonTitle: 'Take photo with your camera',
//   chooseFromLibraryButtonTitle:'Choose photo from librairy',
//   // customButtons: [
//   //   { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
//   // ],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };

export const AdvertForm = (props) => {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     avatarSource:null
  //   };
  // };


  const [Advert, setAdvert] = useState({
    adname: props.Advert ? props.Advert.adname : "",
    description: props.Advert ? props.Advert.description : "",
    quantity: props.Advert ? props.Advert.quantity : "",
    latitude: props.Advert ? props.Advert.latitude : "",
    longitude: props.Advert ? props.Advert.longitude : "",
    date: props.Advert ? props.Advert.date : "",
    image: props.Advert ? props.Advert.avatarSource : "",
  })

  const [errorMsg, setErrorMsg] = useState("")
  const { adname, description, quantity, latitude, longitude, image } = Advert

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const values = [adname, description, quantity, latitude, longitude, image]
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
        image: Image,
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


const chooseFromLibrairy = () => {
  const options = {
    title: 'Select Image',
    customButtons: [
      { 
        name: 'customOptionKey', 
        title: 'Choose file from Custom Option' 
      },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchImageLibrary(options, this.handleImagePickerResponse => {
    console.log('Response = ', res);
    if (res.didCancel) {
      console.log('User cancelled image picker');
    } else if (res.error) {
      console.log('ImagePicker Error: ', res.error);
    } else if (res.customButton) {
      console.log('User tapped custom button: ', res.customButton);
      alert(res.customButton);
    } else {
      const source = { uri: res.uri };
      console.log('response', JSON.stringify(res));
      this.setState({
        filePath: res,
        fileData: res.data,
        fileUri: res.uri
      });
    }
  });
  // ImagePicker.launchCamera(options, (res) => {
  //   console.log('Response = ', res);
  //   if (res.didCancel) {
  //     console.log('User cancelled image picker');
  //   } else if (res.error) {
  //     console.log('ImagePicker Error: ', res.error);
  //   } else if (res.customButton) {
  //     console.log('User tapped custom button: ', res.customButton);
  //     alert(res.customButton);
  //   } else {
  //     const source = { uri: res.uri };
  //     console.log('response', JSON.stringify(res));
  //     this.setState({
  //       filePath: res,
  //       fileData: res.data,
  //       fileUri: res.uri
  //     });
  //   }
  // });
};

// const takePhotoFromCamera = () => {
//   launchCamera = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.launchCamera(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//         alert(response.customButton);
//       } else {
//         const source = { uri: response.uri };
//         console.log('response', JSON.stringify(response));
//         this.setState({
//           filePath: response,
//           fileData: response.data,
//           fileUri: response.uri
//         });
//       }
//     });

//   }
// };


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

        {/* gestion images */}
        {/* <TouchableOpacity style={$btnImg} onPress={this.takePhotoFromCamera}>
          <Text >Take Photo</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={$btnImg} onPress={chooseFromLibrairy}>
          <Text >Choose Photo From Gallery</Text>
        </TouchableOpacity>
          <Image source={image} style={{width:200, height: 200, margin: 10}} />

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
