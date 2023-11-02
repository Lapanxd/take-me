import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { v4 as uuidv4 } from 'uuid';
import { ViewStyle, Text, Image, ImageStyle, TextStyle, PermissionsAndroid } from 'react-native';
import { colors } from '../theme';
import * as ImagePicker from 'react-native-image-picker';
import IconCamera from '../icons/IconCamera';
import IconFolderOpen from '../icons/IconFolderOpen';

export const AdvertForm = (props) => {
  const [Advert, setAdvert] = useState({
    adname: props.Advert ? props.Advert.adname : '',
    description: props.Advert ? props.Advert.description : '',
    quantity: props.Advert ? props.Advert.quantity : '',
    latitude: props.Advert ? props.Advert.latitude : '',
    longitude: props.Advert ? props.Advert.longitude : '',
    date: props.Advert ? props.Advert.date : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { adname, description, quantity, latitude, longitude, date } = Advert;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [adname, description, quantity, latitude, longitude, date];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const Advert = {
        id: uuidv4(),
        adname,
        description,
        quantity,
        latitude,
        longitude,
        date: new Date(),
      };
      props.handleOnSubmit(Advert);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setAdvert((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case 'latitude':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setAdvert((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case 'longitude':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setAdvert((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setAdvert((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  const [responseCamera, setResponseCamera] = React.useState(null);
  const [responseGallery, setResponseGallery] = React.useState(null);

  const openCameraWithPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: 'App Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.launchCamera(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          (response) => {
            console.log(response);
            setResponseCamera(response);
            setResponseGallery(null);
          },
        );
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      {/* <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Titre</Form.Label>
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
          <Form.Label>Description</Form.Label>
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
          <Form.Label>Quantité</Form.Label>
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
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="latitude"
            value={latitude}
            placeholder="latitude"
            onChange={handleInputChange}
          />
        </Form.Group>

        <TouchableOpacity onPress={() => openCameraWithPermission()}>
          {responseCamera === null ? (
            <Text style={$text}>
              <IconCamera size={20} color={'black'} /> Prendre une photo
            </Text>
          ) : (
            <Image style={$image} source={{ uri: responseCamera.uri }} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            ImagePicker.launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 900,
                maxWidth: 900,
              },
              (response) => {
                setResponseGallery(response);
                setResponseCamera(null);
              },
            )
          }
        >
          {responseGallery === null ? (
            <Text style={$text}>
              {' '}
              <IconFolderOpen size={20} color={'black'} /> Choisir une photo
            </Text>
          ) : (
            <Image style={$image} source={{ uri: responseGallery.uri }} />
          )}
        </TouchableOpacity>

        <Button variant="dark" type="submit" className="submit-btn py-2 px-4 mt-4">
          Submit
        </Button>
      </Form> */}
    </div>
  );
};

export default AdvertForm;

const $btnImg: ViewStyle = {
  backgroundColor: colors.cardbg,
  marginTop: '4px',
  padding: '4px',
  justifyContent: 'center',
};
const $image: ImageStyle = {
  width: 100,
  height: 100,
  borderRadius: 8,
};

const $text: TextStyle = {
  marginTop: 10,
};
