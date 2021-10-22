import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const ResAddress = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyBqHkjwlHsw93Olbgz3rO1sQVDlh-RPh8M',
        language: 'en',
      }}
    />
  );
};

export default ResAddress;