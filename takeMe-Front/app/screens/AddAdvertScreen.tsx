import React from 'react';
import AdForm from './AdvertFormScreen';

export const AddAdvertScreen = () => {
  const handleOnSubmit = (advert) => {
    console.log(advert);
  };

  return (
    <React.Fragment>
      <AdForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddAdvertScreen;