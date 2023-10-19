import React from 'react';
import AdForm from './AdForm';

export const AddAd = () => {
  const handleOnSubmit = (advert) => {
    console.log(advert);
  };

  return (
    <React.Fragment>
      <AdForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddAd;